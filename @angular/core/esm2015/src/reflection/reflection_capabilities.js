/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isType, Type } from '../interface/type';
import { newArray } from '../util/array_utils';
import { ANNOTATIONS, PARAMETERS, PROP_METADATA } from '../util/decorators';
import { global } from '../util/global';
import { stringify } from '../util/stringify';
/**
 * Attention: These regex has to hold even if the code is minified!
 */
export const DELEGATE_CTOR = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/;
export const INHERITED_CLASS = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/;
export const INHERITED_CLASS_WITH_CTOR = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/;
export const INHERITED_CLASS_WITH_DELEGATE_CTOR = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;
/**
 * Determine whether a stringified type is a class which delegates its constructor
 * to its parent.
 *
 * This is not trivial since compiled code can actually contain a constructor function
 * even if the original source code did not. For instance, when the child class contains
 * an initialized instance property.
 */
export function isDelegateCtor(typeStr) {
    return DELEGATE_CTOR.test(typeStr) || INHERITED_CLASS_WITH_DELEGATE_CTOR.test(typeStr) ||
        (INHERITED_CLASS.test(typeStr) && !INHERITED_CLASS_WITH_CTOR.test(typeStr));
}
export class ReflectionCapabilities {
    constructor(reflect) {
        this._reflect = reflect || global['Reflect'];
    }
    isReflectionEnabled() {
        return true;
    }
    factory(t) {
        return (...args) => new t(...args);
    }
    /** @internal */
    _zipTypesAndAnnotations(paramTypes, paramAnnotations) {
        let result;
        if (typeof paramTypes === 'undefined') {
            result = newArray(paramAnnotations.length);
        }
        else {
            result = newArray(paramTypes.length);
        }
        for (let i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] && paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (paramAnnotations && paramAnnotations[i] != null) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    }
    _ownParameters(type, parentCtor) {
        const typeStr = type.toString();
        // If we have no decorators, we only have function.length as metadata.
        // In that case, to detect whether a child class declared an own constructor or not,
        // we need to look inside of that constructor to check whether it is
        // just calling the parent.
        // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
        // that sets 'design:paramtypes' to []
        // if a class inherits from another class but has no ctor declared itself.
        if (isDelegateCtor(typeStr)) {
            return null;
        }
        // Prefer the direct API.
        if (type.parameters && type.parameters !== parentCtor.parameters) {
            return type.parameters;
        }
        // API of tsickle for lowering decorators to properties on the class.
        const tsickleCtorParams = type.ctorParameters;
        if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
            // Newer tsickle uses a function closure
            // Retain the non-function case for compatibility with older tsickle
            const ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
            const paramTypes = ctorParameters.map((ctorParam) => ctorParam && ctorParam.type);
            const paramAnnotations = ctorParameters.map((ctorParam) => ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators));
            return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
        // API for metadata created by invoking the decorators.
        const paramAnnotations = type.hasOwnProperty(PARAMETERS) && type[PARAMETERS];
        const paramTypes = this._reflect && this._reflect.getOwnMetadata &&
            this._reflect.getOwnMetadata('design:paramtypes', type);
        if (paramTypes || paramAnnotations) {
            return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
        // If a class has no decorators, at least create metadata
        // based on function.length.
        // Note: We know that this is a real constructor as we checked
        // the content of the constructor above.
        return newArray(type.length);
    }
    parameters(type) {
        // Note: only report metadata if we have at least one class decorator
        // to stay in sync with the static reflector.
        if (!isType(type)) {
            return [];
        }
        const parentCtor = getParentCtor(type);
        let parameters = this._ownParameters(type, parentCtor);
        if (!parameters && parentCtor !== Object) {
            parameters = this.parameters(parentCtor);
        }
        return parameters || [];
    }
    _ownAnnotations(typeOrFunc, parentCtor) {
        // Prefer the direct API.
        if (typeOrFunc.annotations && typeOrFunc.annotations !== parentCtor.annotations) {
            let annotations = typeOrFunc.annotations;
            if (typeof annotations === 'function' && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (typeOrFunc.decorators && typeOrFunc.decorators !== parentCtor.decorators) {
            return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
        }
        // API for metadata created by invoking the decorators.
        if (typeOrFunc.hasOwnProperty(ANNOTATIONS)) {
            return typeOrFunc[ANNOTATIONS];
        }
        return null;
    }
    annotations(typeOrFunc) {
        if (!isType(typeOrFunc)) {
            return [];
        }
        const parentCtor = getParentCtor(typeOrFunc);
        const ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
        const parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
        return parentAnnotations.concat(ownAnnotations);
    }
    _ownPropMetadata(typeOrFunc, parentCtor) {
        // Prefer the direct API.
        if (typeOrFunc.propMetadata &&
            typeOrFunc.propMetadata !== parentCtor.propMetadata) {
            let propMetadata = typeOrFunc.propMetadata;
            if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (typeOrFunc.propDecorators &&
            typeOrFunc.propDecorators !== parentCtor.propDecorators) {
            const propDecorators = typeOrFunc.propDecorators;
            const propMetadata = {};
            Object.keys(propDecorators).forEach(prop => {
                propMetadata[prop] = convertTsickleDecoratorIntoMetadata(propDecorators[prop]);
            });
            return propMetadata;
        }
        // API for metadata created by invoking the decorators.
        if (typeOrFunc.hasOwnProperty(PROP_METADATA)) {
            return typeOrFunc[PROP_METADATA];
        }
        return null;
    }
    propMetadata(typeOrFunc) {
        if (!isType(typeOrFunc)) {
            return {};
        }
        const parentCtor = getParentCtor(typeOrFunc);
        const propMetadata = {};
        if (parentCtor !== Object) {
            const parentPropMetadata = this.propMetadata(parentCtor);
            Object.keys(parentPropMetadata).forEach((propName) => {
                propMetadata[propName] = parentPropMetadata[propName];
            });
        }
        const ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
        if (ownPropMetadata) {
            Object.keys(ownPropMetadata).forEach((propName) => {
                const decorators = [];
                if (propMetadata.hasOwnProperty(propName)) {
                    decorators.push(...propMetadata[propName]);
                }
                decorators.push(...ownPropMetadata[propName]);
                propMetadata[propName] = decorators;
            });
        }
        return propMetadata;
    }
    ownPropMetadata(typeOrFunc) {
        if (!isType(typeOrFunc)) {
            return {};
        }
        return this._ownPropMetadata(typeOrFunc, getParentCtor(typeOrFunc)) || {};
    }
    hasLifecycleHook(type, lcProperty) {
        return type instanceof Type && lcProperty in type.prototype;
    }
    guards(type) {
        return {};
    }
    getter(name) {
        return new Function('o', 'return o.' + name + ';');
    }
    setter(name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    }
    method(name) {
        const functionBody = `if (!o.${name}) throw new Error('"${name}" is undefined');
        return o.${name}.apply(o, args);`;
        return new Function('o', 'args', functionBody);
    }
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    importUri(type) {
        // StaticSymbol
        if (typeof type === 'object' && type['filePath']) {
            return type['filePath'];
        }
        // Runtime type
        return `./${stringify(type)}`;
    }
    resourceUri(type) {
        return `./${stringify(type)}`;
    }
    resolveIdentifier(name, moduleUrl, members, runtime) {
        return runtime;
    }
    resolveEnum(enumIdentifier, name) {
        return enumIdentifier[name];
    }
}
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
        return [];
    }
    return decoratorInvocations.map(decoratorInvocation => {
        const decoratorType = decoratorInvocation.type;
        const annotationCls = decoratorType.annotationCls;
        const annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
        return new annotationCls(...annotationArgs);
    });
}
function getParentCtor(ctor) {
    const parentProto = ctor.prototype ? Object.getPrototypeOf(ctor.prototype) : null;
    const parentCtor = parentProto ? parentProto.constructor : null;
    // Note: We always use `Object` as the null value
    // to simplify checking later on.
    return parentCtor || Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFPNUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsNERBQTRELENBQUM7QUFDMUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLDJDQUEyQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUNsQyxrRUFBa0UsQ0FBQztBQUN2RSxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FDM0MsbUdBQW1HLENBQUM7QUFFeEc7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBZTtJQUM1QyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsRixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUFZLE9BQWE7UUFDdkIs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QUFpQixFQUFFLE9BQWlCLEVBQUUsT0FBWTtRQUNoRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0QsV0FBVyxDQUFDLGNBQW1CLEVBQUUsSUFBWTtRQUMzQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxTQUFTLG1DQUFtQyxDQUFDLG9CQUEyQjtJQUN0RSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7UUFDekIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7UUFDcEQsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDbEQsTUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRixPQUFPLElBQUksYUFBYSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBYztJQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xGLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hFLGlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsT0FBTyxVQUFVLElBQUksTUFBTSxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7aXNUeXBlLCBUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge25ld0FycmF5fSBmcm9tICcuLi91dGlsL2FycmF5X3V0aWxzJztcbmltcG9ydCB7QU5OT1RBVElPTlMsIFBBUkFNRVRFUlMsIFBST1BfTUVUQURBVEF9IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9ycyc7XG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnLi4vdXRpbC9nbG9iYWwnO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwvc3RyaW5naWZ5JztcblxuaW1wb3J0IHtQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcGxhdGZvcm1fcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtHZXR0ZXJGbiwgTWV0aG9kRm4sIFNldHRlckZufSBmcm9tICcuL3R5cGVzJztcblxuXG5cbi8qKlxuICogQXR0ZW50aW9uOiBUaGVzZSByZWdleCBoYXMgdG8gaG9sZCBldmVuIGlmIHRoZSBjb2RlIGlzIG1pbmlmaWVkIVxuICovXG5leHBvcnQgY29uc3QgREVMRUdBVEVfQ1RPUiA9IC9eZnVuY3Rpb25cXHMrXFxTK1xcKFxcKVxccyp7W1xcc1xcU10rXFwuYXBwbHlcXCh0aGlzLFxccyphcmd1bWVudHNcXCkvO1xuZXhwb3J0IGNvbnN0IElOSEVSSVRFRF9DTEFTUyA9IC9eY2xhc3NcXHMrW0EtWmEtelxcZCRfXSpcXHMqZXh0ZW5kc1xccytbXntdK3svO1xuZXhwb3J0IGNvbnN0IElOSEVSSVRFRF9DTEFTU19XSVRIX0NUT1IgPVxuICAgIC9eY2xhc3NcXHMrW0EtWmEtelxcZCRfXSpcXHMqZXh0ZW5kc1xccytbXntdK3tbXFxzXFxTXSpjb25zdHJ1Y3RvclxccypcXCgvO1xuZXhwb3J0IGNvbnN0IElOSEVSSVRFRF9DTEFTU19XSVRIX0RFTEVHQVRFX0NUT1IgPVxuICAgIC9eY2xhc3NcXHMrW0EtWmEtelxcZCRfXSpcXHMqZXh0ZW5kc1xccytbXntdK3tbXFxzXFxTXSpjb25zdHJ1Y3RvclxccypcXChcXClcXHMqe1xccypzdXBlclxcKFxcLlxcLlxcLmFyZ3VtZW50c1xcKS87XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBzdHJpbmdpZmllZCB0eXBlIGlzIGEgY2xhc3Mgd2hpY2ggZGVsZWdhdGVzIGl0cyBjb25zdHJ1Y3RvclxuICogdG8gaXRzIHBhcmVudC5cbiAqXG4gKiBUaGlzIGlzIG5vdCB0cml2aWFsIHNpbmNlIGNvbXBpbGVkIGNvZGUgY2FuIGFjdHVhbGx5IGNvbnRhaW4gYSBjb25zdHJ1Y3RvciBmdW5jdGlvblxuICogZXZlbiBpZiB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUgZGlkIG5vdC4gRm9yIGluc3RhbmNlLCB3aGVuIHRoZSBjaGlsZCBjbGFzcyBjb250YWluc1xuICogYW4gaW5pdGlhbGl6ZWQgaW5zdGFuY2UgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlbGVnYXRlQ3Rvcih0eXBlU3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIERFTEVHQVRFX0NUT1IudGVzdCh0eXBlU3RyKSB8fCBJTkhFUklURURfQ0xBU1NfV0lUSF9ERUxFR0FURV9DVE9SLnRlc3QodHlwZVN0cikgfHxcbiAgICAgIChJTkhFUklURURfQ0xBU1MudGVzdCh0eXBlU3RyKSAmJiAhSU5IRVJJVEVEX0NMQVNTX1dJVEhfQ1RPUi50ZXN0KHR5cGVTdHIpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgaW1wbGVtZW50cyBQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMge1xuICBwcml2YXRlIF9yZWZsZWN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVmbGVjdD86IGFueSkge1xuICAgIHRoaXMuX3JlZmxlY3QgPSByZWZsZWN0IHx8IGdsb2JhbFsnUmVmbGVjdCddO1xuICB9XG5cbiAgaXNSZWZsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZhY3Rvcnk8VD4odDogVHlwZTxUPik6IChhcmdzOiBhbnlbXSkgPT4gVCB7XG4gICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gbmV3IHQoLi4uYXJncyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF96aXBUeXBlc0FuZEFubm90YXRpb25zKHBhcmFtVHlwZXM6IGFueVtdLCBwYXJhbUFubm90YXRpb25zOiBhbnlbXSk6IGFueVtdW10ge1xuICAgIGxldCByZXN1bHQ6IGFueVtdW107XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtVHlwZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgPSBuZXdBcnJheShwYXJhbUFubm90YXRpb25zLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ld0FycmF5KHBhcmFtVHlwZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVFMgb3V0cHV0cyBPYmplY3QgZm9yIHBhcmFtZXRlcnMgd2l0aG91dCB0eXBlcywgd2hpbGUgVHJhY2V1ciBvbWl0c1xuICAgICAgLy8gdGhlIGFubm90YXRpb25zLiBGb3Igbm93IHdlIHByZXNlcnZlIHRoZSBUcmFjZXVyIGJlaGF2aW9yIHRvIGFpZFxuICAgICAgLy8gbWlncmF0aW9uLCBidXQgdGhpcyBjYW4gYmUgcmV2aXNpdGVkLlxuICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1UeXBlc1tpXSAmJiBwYXJhbVR5cGVzW2ldICE9IE9iamVjdCkge1xuICAgICAgICByZXN1bHRbaV0gPSBbcGFyYW1UeXBlc1tpXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbUFubm90YXRpb25zICYmIHBhcmFtQW5ub3RhdGlvbnNbaV0gIT0gbnVsbCkge1xuICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0uY29uY2F0KHBhcmFtQW5ub3RhdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfb3duUGFyYW1ldGVycyh0eXBlOiBUeXBlPGFueT4sIHBhcmVudEN0b3I6IGFueSk6IGFueVtdW118bnVsbCB7XG4gICAgY29uc3QgdHlwZVN0ciA9IHR5cGUudG9TdHJpbmcoKTtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vIGRlY29yYXRvcnMsIHdlIG9ubHkgaGF2ZSBmdW5jdGlvbi5sZW5ndGggYXMgbWV0YWRhdGEuXG4gICAgLy8gSW4gdGhhdCBjYXNlLCB0byBkZXRlY3Qgd2hldGhlciBhIGNoaWxkIGNsYXNzIGRlY2xhcmVkIGFuIG93biBjb25zdHJ1Y3RvciBvciBub3QsXG4gICAgLy8gd2UgbmVlZCB0byBsb29rIGluc2lkZSBvZiB0aGF0IGNvbnN0cnVjdG9yIHRvIGNoZWNrIHdoZXRoZXIgaXQgaXNcbiAgICAvLyBqdXN0IGNhbGxpbmcgdGhlIHBhcmVudC5cbiAgICAvLyBUaGlzIGFsc28gaGVscHMgdG8gd29yayBhcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTI0MzlcbiAgICAvLyB0aGF0IHNldHMgJ2Rlc2lnbjpwYXJhbXR5cGVzJyB0byBbXVxuICAgIC8vIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIGNsYXNzIGJ1dCBoYXMgbm8gY3RvciBkZWNsYXJlZCBpdHNlbGYuXG4gICAgaWYgKGlzRGVsZWdhdGVDdG9yKHR5cGVTdHIpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKCg8YW55PnR5cGUpLnBhcmFtZXRlcnMgJiYgKDxhbnk+dHlwZSkucGFyYW1ldGVycyAhPT0gcGFyZW50Q3Rvci5wYXJhbWV0ZXJzKSB7XG4gICAgICByZXR1cm4gKDxhbnk+dHlwZSkucGFyYW1ldGVycztcbiAgICB9XG5cbiAgICAvLyBBUEkgb2YgdHNpY2tsZSBmb3IgbG93ZXJpbmcgZGVjb3JhdG9ycyB0byBwcm9wZXJ0aWVzIG9uIHRoZSBjbGFzcy5cbiAgICBjb25zdCB0c2lja2xlQ3RvclBhcmFtcyA9ICg8YW55PnR5cGUpLmN0b3JQYXJhbWV0ZXJzO1xuICAgIGlmICh0c2lja2xlQ3RvclBhcmFtcyAmJiB0c2lja2xlQ3RvclBhcmFtcyAhPT0gcGFyZW50Q3Rvci5jdG9yUGFyYW1ldGVycykge1xuICAgICAgLy8gTmV3ZXIgdHNpY2tsZSB1c2VzIGEgZnVuY3Rpb24gY2xvc3VyZVxuICAgICAgLy8gUmV0YWluIHRoZSBub24tZnVuY3Rpb24gY2FzZSBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIHRzaWNrbGVcbiAgICAgIGNvbnN0IGN0b3JQYXJhbWV0ZXJzID1cbiAgICAgICAgICB0eXBlb2YgdHNpY2tsZUN0b3JQYXJhbXMgPT09ICdmdW5jdGlvbicgPyB0c2lja2xlQ3RvclBhcmFtcygpIDogdHNpY2tsZUN0b3JQYXJhbXM7XG4gICAgICBjb25zdCBwYXJhbVR5cGVzID0gY3RvclBhcmFtZXRlcnMubWFwKChjdG9yUGFyYW06IGFueSkgPT4gY3RvclBhcmFtICYmIGN0b3JQYXJhbS50eXBlKTtcbiAgICAgIGNvbnN0IHBhcmFtQW5ub3RhdGlvbnMgPSBjdG9yUGFyYW1ldGVycy5tYXAoXG4gICAgICAgICAgKGN0b3JQYXJhbTogYW55KSA9PlxuICAgICAgICAgICAgICBjdG9yUGFyYW0gJiYgY29udmVydFRzaWNrbGVEZWNvcmF0b3JJbnRvTWV0YWRhdGEoY3RvclBhcmFtLmRlY29yYXRvcnMpKTtcbiAgICAgIHJldHVybiB0aGlzLl96aXBUeXBlc0FuZEFubm90YXRpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEFQSSBmb3IgbWV0YWRhdGEgY3JlYXRlZCBieSBpbnZva2luZyB0aGUgZGVjb3JhdG9ycy5cbiAgICBjb25zdCBwYXJhbUFubm90YXRpb25zID0gdHlwZS5oYXNPd25Qcm9wZXJ0eShQQVJBTUVURVJTKSAmJiAodHlwZSBhcyBhbnkpW1BBUkFNRVRFUlNdO1xuICAgIGNvbnN0IHBhcmFtVHlwZXMgPSB0aGlzLl9yZWZsZWN0ICYmIHRoaXMuX3JlZmxlY3QuZ2V0T3duTWV0YWRhdGEgJiZcbiAgICAgICAgdGhpcy5fcmVmbGVjdC5nZXRPd25NZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCB0eXBlKTtcbiAgICBpZiAocGFyYW1UeXBlcyB8fCBwYXJhbUFubm90YXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5femlwVHlwZXNBbmRBbm5vdGF0aW9ucyhwYXJhbVR5cGVzLCBwYXJhbUFubm90YXRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIGNsYXNzIGhhcyBubyBkZWNvcmF0b3JzLCBhdCBsZWFzdCBjcmVhdGUgbWV0YWRhdGFcbiAgICAvLyBiYXNlZCBvbiBmdW5jdGlvbi5sZW5ndGguXG4gICAgLy8gTm90ZTogV2Uga25vdyB0aGF0IHRoaXMgaXMgYSByZWFsIGNvbnN0cnVjdG9yIGFzIHdlIGNoZWNrZWRcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgY29uc3RydWN0b3IgYWJvdmUuXG4gICAgcmV0dXJuIG5ld0FycmF5PGFueVtdPih0eXBlLmxlbmd0aCk7XG4gIH1cblxuICBwYXJhbWV0ZXJzKHR5cGU6IFR5cGU8YW55Pik6IGFueVtdW10ge1xuICAgIC8vIE5vdGU6IG9ubHkgcmVwb3J0IG1ldGFkYXRhIGlmIHdlIGhhdmUgYXQgbGVhc3Qgb25lIGNsYXNzIGRlY29yYXRvclxuICAgIC8vIHRvIHN0YXkgaW4gc3luYyB3aXRoIHRoZSBzdGF0aWMgcmVmbGVjdG9yLlxuICAgIGlmICghaXNUeXBlKHR5cGUpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEN0b3IgPSBnZXRQYXJlbnRDdG9yKHR5cGUpO1xuICAgIGxldCBwYXJhbWV0ZXJzID0gdGhpcy5fb3duUGFyYW1ldGVycyh0eXBlLCBwYXJlbnRDdG9yKTtcbiAgICBpZiAoIXBhcmFtZXRlcnMgJiYgcGFyZW50Q3RvciAhPT0gT2JqZWN0KSB7XG4gICAgICBwYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzKHBhcmVudEN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1ldGVycyB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX293bkFubm90YXRpb25zKHR5cGVPckZ1bmM6IFR5cGU8YW55PiwgcGFyZW50Q3RvcjogYW55KTogYW55W118bnVsbCB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmICgoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucyAmJiAoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucyAhPT0gcGFyZW50Q3Rvci5hbm5vdGF0aW9ucykge1xuICAgICAgbGV0IGFubm90YXRpb25zID0gKDxhbnk+dHlwZU9yRnVuYykuYW5ub3RhdGlvbnM7XG4gICAgICBpZiAodHlwZW9mIGFubm90YXRpb25zID09PSAnZnVuY3Rpb24nICYmIGFubm90YXRpb25zLmFubm90YXRpb25zKSB7XG4gICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuYW5ub3RhdGlvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxuXG4gICAgLy8gQVBJIG9mIHRzaWNrbGUgZm9yIGxvd2VyaW5nIGRlY29yYXRvcnMgdG8gcHJvcGVydGllcyBvbiB0aGUgY2xhc3MuXG4gICAgaWYgKCg8YW55PnR5cGVPckZ1bmMpLmRlY29yYXRvcnMgJiYgKDxhbnk+dHlwZU9yRnVuYykuZGVjb3JhdG9ycyAhPT0gcGFyZW50Q3Rvci5kZWNvcmF0b3JzKSB7XG4gICAgICByZXR1cm4gY29udmVydFRzaWNrbGVEZWNvcmF0b3JJbnRvTWV0YWRhdGEoKDxhbnk+dHlwZU9yRnVuYykuZGVjb3JhdG9ycyk7XG4gICAgfVxuXG4gICAgLy8gQVBJIGZvciBtZXRhZGF0YSBjcmVhdGVkIGJ5IGludm9raW5nIHRoZSBkZWNvcmF0b3JzLlxuICAgIGlmICh0eXBlT3JGdW5jLmhhc093blByb3BlcnR5KEFOTk9UQVRJT05TKSkge1xuICAgICAgcmV0dXJuICh0eXBlT3JGdW5jIGFzIGFueSlbQU5OT1RBVElPTlNdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFubm90YXRpb25zKHR5cGVPckZ1bmM6IFR5cGU8YW55Pik6IGFueVtdIHtcbiAgICBpZiAoIWlzVHlwZSh0eXBlT3JGdW5jKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRDdG9yID0gZ2V0UGFyZW50Q3Rvcih0eXBlT3JGdW5jKTtcbiAgICBjb25zdCBvd25Bbm5vdGF0aW9ucyA9IHRoaXMuX293bkFubm90YXRpb25zKHR5cGVPckZ1bmMsIHBhcmVudEN0b3IpIHx8IFtdO1xuICAgIGNvbnN0IHBhcmVudEFubm90YXRpb25zID0gcGFyZW50Q3RvciAhPT0gT2JqZWN0ID8gdGhpcy5hbm5vdGF0aW9ucyhwYXJlbnRDdG9yKSA6IFtdO1xuICAgIHJldHVybiBwYXJlbnRBbm5vdGF0aW9ucy5jb25jYXQob3duQW5ub3RhdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3duUHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IGFueSwgcGFyZW50Q3RvcjogYW55KToge1trZXk6IHN0cmluZ106IGFueVtdfXxudWxsIHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKCg8YW55PnR5cGVPckZ1bmMpLnByb3BNZXRhZGF0YSAmJlxuICAgICAgICAoPGFueT50eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGEgIT09IHBhcmVudEN0b3IucHJvcE1ldGFkYXRhKSB7XG4gICAgICBsZXQgcHJvcE1ldGFkYXRhID0gKDxhbnk+dHlwZU9yRnVuYykucHJvcE1ldGFkYXRhO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wTWV0YWRhdGEgPT09ICdmdW5jdGlvbicgJiYgcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YSkge1xuICAgICAgICBwcm9wTWV0YWRhdGEgPSBwcm9wTWV0YWRhdGEucHJvcE1ldGFkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BNZXRhZGF0YTtcbiAgICB9XG5cbiAgICAvLyBBUEkgb2YgdHNpY2tsZSBmb3IgbG93ZXJpbmcgZGVjb3JhdG9ycyB0byBwcm9wZXJ0aWVzIG9uIHRoZSBjbGFzcy5cbiAgICBpZiAoKDxhbnk+dHlwZU9yRnVuYykucHJvcERlY29yYXRvcnMgJiZcbiAgICAgICAgKDxhbnk+dHlwZU9yRnVuYykucHJvcERlY29yYXRvcnMgIT09IHBhcmVudEN0b3IucHJvcERlY29yYXRvcnMpIHtcbiAgICAgIGNvbnN0IHByb3BEZWNvcmF0b3JzID0gKDxhbnk+dHlwZU9yRnVuYykucHJvcERlY29yYXRvcnM7XG4gICAgICBjb25zdCBwcm9wTWV0YWRhdGEgPSA8e1trZXk6IHN0cmluZ106IGFueVtdfT57fTtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BEZWNvcmF0b3JzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBwcm9wTWV0YWRhdGFbcHJvcF0gPSBjb252ZXJ0VHNpY2tsZURlY29yYXRvckludG9NZXRhZGF0YShwcm9wRGVjb3JhdG9yc1twcm9wXSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gICAgfVxuXG4gICAgLy8gQVBJIGZvciBtZXRhZGF0YSBjcmVhdGVkIGJ5IGludm9raW5nIHRoZSBkZWNvcmF0b3JzLlxuICAgIGlmICh0eXBlT3JGdW5jLmhhc093blByb3BlcnR5KFBST1BfTUVUQURBVEEpKSB7XG4gICAgICByZXR1cm4gKHR5cGVPckZ1bmMgYXMgYW55KVtQUk9QX01FVEFEQVRBXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcm9wTWV0YWRhdGEodHlwZU9yRnVuYzogYW55KToge1trZXk6IHN0cmluZ106IGFueVtdfSB7XG4gICAgaWYgKCFpc1R5cGUodHlwZU9yRnVuYykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50Q3RvciA9IGdldFBhcmVudEN0b3IodHlwZU9yRnVuYyk7XG4gICAgY29uc3QgcHJvcE1ldGFkYXRhOiB7W2tleTogc3RyaW5nXTogYW55W119ID0ge307XG4gICAgaWYgKHBhcmVudEN0b3IgIT09IE9iamVjdCkge1xuICAgICAgY29uc3QgcGFyZW50UHJvcE1ldGFkYXRhID0gdGhpcy5wcm9wTWV0YWRhdGEocGFyZW50Q3Rvcik7XG4gICAgICBPYmplY3Qua2V5cyhwYXJlbnRQcm9wTWV0YWRhdGEpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgIHByb3BNZXRhZGF0YVtwcm9wTmFtZV0gPSBwYXJlbnRQcm9wTWV0YWRhdGFbcHJvcE5hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG93blByb3BNZXRhZGF0YSA9IHRoaXMuX293blByb3BNZXRhZGF0YSh0eXBlT3JGdW5jLCBwYXJlbnRDdG9yKTtcbiAgICBpZiAob3duUHJvcE1ldGFkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhvd25Qcm9wTWV0YWRhdGEpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvcnM6IGFueVtdID0gW107XG4gICAgICAgIGlmIChwcm9wTWV0YWRhdGEuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgZGVjb3JhdG9ycy5wdXNoKC4uLnByb3BNZXRhZGF0YVtwcm9wTmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlY29yYXRvcnMucHVzaCguLi5vd25Qcm9wTWV0YWRhdGFbcHJvcE5hbWVdKTtcbiAgICAgICAgcHJvcE1ldGFkYXRhW3Byb3BOYW1lXSA9IGRlY29yYXRvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BNZXRhZGF0YTtcbiAgfVxuXG4gIG93blByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W119IHtcbiAgICBpZiAoIWlzVHlwZSh0eXBlT3JGdW5jKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb3duUHJvcE1ldGFkYXRhKHR5cGVPckZ1bmMsIGdldFBhcmVudEN0b3IodHlwZU9yRnVuYykpIHx8IHt9O1xuICB9XG5cbiAgaGFzTGlmZWN5Y2xlSG9vayh0eXBlOiBhbnksIGxjUHJvcGVydHk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlIGluc3RhbmNlb2YgVHlwZSAmJiBsY1Byb3BlcnR5IGluIHR5cGUucHJvdG90eXBlO1xuICB9XG5cbiAgZ3VhcmRzKHR5cGU6IGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXR0ZXIobmFtZTogc3RyaW5nKTogR2V0dGVyRm4ge1xuICAgIHJldHVybiA8R2V0dGVyRm4+bmV3IEZ1bmN0aW9uKCdvJywgJ3JldHVybiBvLicgKyBuYW1lICsgJzsnKTtcbiAgfVxuXG4gIHNldHRlcihuYW1lOiBzdHJpbmcpOiBTZXR0ZXJGbiB7XG4gICAgcmV0dXJuIDxTZXR0ZXJGbj5uZXcgRnVuY3Rpb24oJ28nLCAndicsICdyZXR1cm4gby4nICsgbmFtZSArICcgPSB2OycpO1xuICB9XG5cbiAgbWV0aG9kKG5hbWU6IHN0cmluZyk6IE1ldGhvZEZuIHtcbiAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSBgaWYgKCFvLiR7bmFtZX0pIHRocm93IG5ldyBFcnJvcignXCIke25hbWV9XCIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIHJldHVybiBvLiR7bmFtZX0uYXBwbHkobywgYXJncyk7YDtcbiAgICByZXR1cm4gPE1ldGhvZEZuPm5ldyBGdW5jdGlvbignbycsICdhcmdzJywgZnVuY3Rpb25Cb2R5KTtcbiAgfVxuXG4gIC8vIFRoZXJlIGlzIG5vdCBhIGNvbmNlcHQgb2YgaW1wb3J0IHVyaSBpbiBKcywgYnV0IHRoaXMgaXMgdXNlZnVsIGluIGRldmVsb3BpbmcgRGFydCBhcHBsaWNhdGlvbnMuXG4gIGltcG9ydFVyaSh0eXBlOiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIFN0YXRpY1N5bWJvbFxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZVsnZmlsZVBhdGgnXSkge1xuICAgICAgcmV0dXJuIHR5cGVbJ2ZpbGVQYXRoJ107XG4gICAgfVxuICAgIC8vIFJ1bnRpbWUgdHlwZVxuICAgIHJldHVybiBgLi8ke3N0cmluZ2lmeSh0eXBlKX1gO1xuICB9XG5cbiAgcmVzb3VyY2VVcmkodHlwZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYC4vJHtzdHJpbmdpZnkodHlwZSl9YDtcbiAgfVxuXG4gIHJlc29sdmVJZGVudGlmaWVyKG5hbWU6IHN0cmluZywgbW9kdWxlVXJsOiBzdHJpbmcsIG1lbWJlcnM6IHN0cmluZ1tdLCBydW50aW1lOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBydW50aW1lO1xuICB9XG4gIHJlc29sdmVFbnVtKGVudW1JZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIGVudW1JZGVudGlmaWVyW25hbWVdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUc2lja2xlRGVjb3JhdG9ySW50b01ldGFkYXRhKGRlY29yYXRvckludm9jYXRpb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgaWYgKCFkZWNvcmF0b3JJbnZvY2F0aW9ucykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gZGVjb3JhdG9ySW52b2NhdGlvbnMubWFwKGRlY29yYXRvckludm9jYXRpb24gPT4ge1xuICAgIGNvbnN0IGRlY29yYXRvclR5cGUgPSBkZWNvcmF0b3JJbnZvY2F0aW9uLnR5cGU7XG4gICAgY29uc3QgYW5ub3RhdGlvbkNscyA9IGRlY29yYXRvclR5cGUuYW5ub3RhdGlvbkNscztcbiAgICBjb25zdCBhbm5vdGF0aW9uQXJncyA9IGRlY29yYXRvckludm9jYXRpb24uYXJncyA/IGRlY29yYXRvckludm9jYXRpb24uYXJncyA6IFtdO1xuICAgIHJldHVybiBuZXcgYW5ub3RhdGlvbkNscyguLi5hbm5vdGF0aW9uQXJncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRDdG9yKGN0b3I6IEZ1bmN0aW9uKTogVHlwZTxhbnk+IHtcbiAgY29uc3QgcGFyZW50UHJvdG8gPSBjdG9yLnByb3RvdHlwZSA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdG9yLnByb3RvdHlwZSkgOiBudWxsO1xuICBjb25zdCBwYXJlbnRDdG9yID0gcGFyZW50UHJvdG8gPyBwYXJlbnRQcm90by5jb25zdHJ1Y3RvciA6IG51bGw7XG4gIC8vIE5vdGU6IFdlIGFsd2F5cyB1c2UgYE9iamVjdGAgYXMgdGhlIG51bGwgdmFsdWVcbiAgLy8gdG8gc2ltcGxpZnkgY2hlY2tpbmcgbGF0ZXIgb24uXG4gIHJldHVybiBwYXJlbnRDdG9yIHx8IE9iamVjdDtcbn1cbiJdfQ==