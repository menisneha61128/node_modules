/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/injectable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { makeDecorator } from '../util/decorators';
import { getInjectableDef, ɵɵdefineInjectable } from './interface/defs';
import { compileInjectable as render3CompileInjectable } from './jit/injectable';
import { convertInjectableProviderToFactory } from './util';
/**
 * Type of the Injectable decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function InjectableDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
const ɵ0 = /**
 * @param {?} type
 * @param {?} meta
 * @return {?}
 */
(type, meta) => SWITCH_COMPILE_INJECTABLE((/** @type {?} */ (type)), meta);
/**
 * Injectable decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Injectable = makeDecorator('Injectable', undefined, undefined, undefined, (ɵ0));
/**
 * Supports \@Injectable() in JIT mode for Render2.
 * @param {?} injectableType
 * @param {?=} options
 * @return {?}
 */
function render2CompileInjectable(injectableType, options) {
    if (options && options.providedIn !== undefined && !getInjectableDef(injectableType)) {
        ((/** @type {?} */ (injectableType))).ɵprov = ɵɵdefineInjectable({
            token: injectableType,
            providedIn: options.providedIn,
            factory: convertInjectableProviderToFactory(injectableType, options),
        });
    }
}
/** @type {?} */
export const SWITCH_COMPILE_INJECTABLE__POST_R3__ = render3CompileInjectable;
/** @type {?} */
const SWITCH_COMPILE_INJECTABLE__PRE_R3__ = render2CompileInjectable;
/** @type {?} */
const SWITCH_COMPILE_INJECTABLE = SWITCH_COMPILE_INJECTABLE__PRE_R3__;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLGFBQWEsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQWtCLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFdEYsT0FBTyxFQUFDLGlCQUFpQixJQUFJLHdCQUF3QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBaUIxRCx5Q0EwQkM7Ozs7Ozs7QUE4QkcsQ0FBQyxJQUFlLEVBQUUsSUFBZ0IsRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsbUJBQUEsSUFBSSxFQUFPLEVBQUUsSUFBSSxDQUFDOzs7Ozs7OztBQUZ2RixNQUFNLE9BQU8sVUFBVSxHQUF3QixhQUFhLENBQ3hELFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsT0FDdUM7Ozs7Ozs7QUFNeEYsU0FBUyx3QkFBd0IsQ0FDN0IsY0FBeUIsRUFDekIsT0FBa0Y7SUFDcEYsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwRixDQUFDLG1CQUFBLGNBQWMsRUFBdUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztZQUNqRSxLQUFLLEVBQUUsY0FBYztZQUNyQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsT0FBTyxFQUFFLGtDQUFrQyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7U0FDckUsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDOztBQUVELE1BQU0sT0FBTyxvQ0FBb0MsR0FBRyx3QkFBd0I7O01BQ3RFLG1DQUFtQyxHQUFHLHdCQUF3Qjs7TUFDOUQseUJBQXlCLEdBQzNCLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge21ha2VEZWNvcmF0b3IsIFR5cGVEZWNvcmF0b3J9IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7Z2V0SW5qZWN0YWJsZURlZiwgSW5qZWN0YWJsZVR5cGUsIMm1ybVkZWZpbmVJbmplY3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9kZWZzJztcbmltcG9ydCB7Q2xhc3NTYW5zUHJvdmlkZXIsIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyLCBFeGlzdGluZ1NhbnNQcm92aWRlciwgRmFjdG9yeVNhbnNQcm92aWRlciwgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIsIFZhbHVlU2Fuc1Byb3ZpZGVyfSBmcm9tICcuL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge2NvbXBpbGVJbmplY3RhYmxlIGFzIHJlbmRlcjNDb21waWxlSW5qZWN0YWJsZX0gZnJvbSAnLi9qaXQvaW5qZWN0YWJsZSc7XG5pbXBvcnQge2NvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3Rvcnl9IGZyb20gJy4vdXRpbCc7XG5cblxuXG4vKipcbiAqIEluamVjdGFibGUgcHJvdmlkZXJzIHVzZWQgaW4gYEBJbmplY3RhYmxlYCBkZWNvcmF0b3IuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBJbmplY3RhYmxlUHJvdmlkZXIgPSBWYWx1ZVNhbnNQcm92aWRlcnxFeGlzdGluZ1NhbnNQcm92aWRlcnxTdGF0aWNDbGFzc1NhbnNQcm92aWRlcnxcbiAgICBDb25zdHJ1Y3RvclNhbnNQcm92aWRlcnxGYWN0b3J5U2Fuc1Byb3ZpZGVyfENsYXNzU2Fuc1Byb3ZpZGVyO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogRGVjb3JhdG9yIHRoYXQgbWFya3MgYSBjbGFzcyBhcyBhdmFpbGFibGUgdG8gYmVcbiAgICogcHJvdmlkZWQgYW5kIGluamVjdGVkIGFzIGEgZGVwZW5kZW5jeS5cbiAgICpcbiAgICogQHNlZSBbSW50cm9kdWN0aW9uIHRvIFNlcnZpY2VzIGFuZCBESV0oZ3VpZGUvYXJjaGl0ZWN0dXJlLXNlcnZpY2VzKVxuICAgKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIE1hcmtpbmcgYSBjbGFzcyB3aXRoIGBASW5qZWN0YWJsZWAgZW5zdXJlcyB0aGF0IHRoZSBjb21waWxlclxuICAgKiB3aWxsIGdlbmVyYXRlIHRoZSBuZWNlc3NhcnkgbWV0YWRhdGEgdG8gY3JlYXRlIHRoZSBjbGFzcydzXG4gICAqIGRlcGVuZGVuY2llcyB3aGVuIHRoZSBjbGFzcyBpcyBpbmplY3RlZC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyBhIHNlcnZpY2UgY2xhc3MgaXMgcHJvcGVybHlcbiAgICogIG1hcmtlZCBzbyB0aGF0IGEgc3VwcG9ydGluZyBzZXJ2aWNlIGNhbiBiZSBpbmplY3RlZCB1cG9uIGNyZWF0aW9uLlxuICAgKlxuICAgKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb3JlL2RpL3RzL21ldGFkYXRhX3NwZWMudHNcIiByZWdpb249XCJJbmplY3RhYmxlXCI+PC9jb2RlLWV4YW1wbGU+XG4gICAqXG4gICAqL1xuICAoKTogVHlwZURlY29yYXRvcjtcbiAgKG9wdGlvbnM/OiB7cHJvdmlkZWRJbjogVHlwZTxhbnk+fCdyb290J3wncGxhdGZvcm0nfCdhbnknfG51bGx9JlxuICAgSW5qZWN0YWJsZVByb3ZpZGVyKTogVHlwZURlY29yYXRvcjtcbiAgbmV3KCk6IEluamVjdGFibGU7XG4gIG5ldyhvcHRpb25zPzoge3Byb3ZpZGVkSW46IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsfSZcbiAgICAgIEluamVjdGFibGVQcm92aWRlcik6IEluamVjdGFibGU7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgSW5qZWN0YWJsZSBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZSB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIGluamVjdG9ycyB3aWxsIHByb3ZpZGUgdGhlIGluamVjdGFibGUsXG4gICAqIGJ5IGVpdGhlciBhc3NvY2lhdGluZyBpdCB3aXRoIGFuIGBATmdNb2R1bGVgIG9yIG90aGVyIGBJbmplY3RvclR5cGVgLFxuICAgKiBvciBieSBzcGVjaWZ5aW5nIHRoYXQgdGhpcyBpbmplY3RhYmxlIHNob3VsZCBiZSBwcm92aWRlZCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpbmplY3RvcnM6XG4gICAqIC0gJ3Jvb3QnIDogVGhlIGFwcGxpY2F0aW9uLWxldmVsIGluamVjdG9yIGluIG1vc3QgYXBwcy5cbiAgICogLSAncGxhdGZvcm0nIDogQSBzcGVjaWFsIHNpbmdsZXRvbiBwbGF0Zm9ybSBpbmplY3RvciBzaGFyZWQgYnkgYWxsXG4gICAqIGFwcGxpY2F0aW9ucyBvbiB0aGUgcGFnZS5cbiAgICogLSAnYW55JyA6IFByb3ZpZGVzIGEgdW5pcXVlIGluc3RhbmNlIGluIGV2ZXJ5IG1vZHVsZSAoaW5jbHVkaW5nIGxhenkgbW9kdWxlcykgdGhhdCBpbmplY3RzIHRoZVxuICAgKiB0b2tlbi5cbiAgICpcbiAgICovXG4gIHByb3ZpZGVkSW4/OiBUeXBlPGFueT58J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbDtcbn1cblxuLyoqXG4gKiBJbmplY3RhYmxlIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEluamVjdGFibGU6IEluamVjdGFibGVEZWNvcmF0b3IgPSBtYWtlRGVjb3JhdG9yKFxuICAgICdJbmplY3RhYmxlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCxcbiAgICAodHlwZTogVHlwZTxhbnk+LCBtZXRhOiBJbmplY3RhYmxlKSA9PiBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFKHR5cGUgYXMgYW55LCBtZXRhKSk7XG5cblxuLyoqXG4gKiBTdXBwb3J0cyBASW5qZWN0YWJsZSgpIGluIEpJVCBtb2RlIGZvciBSZW5kZXIyLlxuICovXG5mdW5jdGlvbiByZW5kZXIyQ29tcGlsZUluamVjdGFibGUoXG4gICAgaW5qZWN0YWJsZVR5cGU6IFR5cGU8YW55PixcbiAgICBvcHRpb25zPzoge3Byb3ZpZGVkSW4/OiBUeXBlPGFueT58J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbH0mSW5qZWN0YWJsZVByb3ZpZGVyKTogdm9pZCB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvdmlkZWRJbiAhPT0gdW5kZWZpbmVkICYmICFnZXRJbmplY3RhYmxlRGVmKGluamVjdGFibGVUeXBlKSkge1xuICAgIChpbmplY3RhYmxlVHlwZSBhcyBJbmplY3RhYmxlVHlwZTxhbnk+KS7JtXByb3YgPSDJtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgICB0b2tlbjogaW5qZWN0YWJsZVR5cGUsXG4gICAgICBwcm92aWRlZEluOiBvcHRpb25zLnByb3ZpZGVkSW4sXG4gICAgICBmYWN0b3J5OiBjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5KGluamVjdGFibGVUeXBlLCBvcHRpb25zKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU1dJVENIX0NPTVBJTEVfSU5KRUNUQUJMRV9fUE9TVF9SM19fID0gcmVuZGVyM0NvbXBpbGVJbmplY3RhYmxlO1xuY29uc3QgU1dJVENIX0NPTVBJTEVfSU5KRUNUQUJMRV9fUFJFX1IzX18gPSByZW5kZXIyQ29tcGlsZUluamVjdGFibGU7XG5jb25zdCBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFOiB0eXBlb2YgcmVuZGVyM0NvbXBpbGVJbmplY3RhYmxlID1cbiAgICBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFX19QUkVfUjNfXztcbiJdfQ==