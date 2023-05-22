/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/identifiers", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CORE = '@angular/core';
    var Identifiers = /** @class */ (function () {
        function Identifiers() {
        }
        Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS = {
            name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
            moduleName: CORE,
        };
        Identifiers.ElementRef = { name: 'ElementRef', moduleName: CORE };
        Identifiers.NgModuleRef = { name: 'NgModuleRef', moduleName: CORE };
        Identifiers.ViewContainerRef = { name: 'ViewContainerRef', moduleName: CORE };
        Identifiers.ChangeDetectorRef = {
            name: 'ChangeDetectorRef',
            moduleName: CORE,
        };
        Identifiers.QueryList = { name: 'QueryList', moduleName: CORE };
        Identifiers.TemplateRef = { name: 'TemplateRef', moduleName: CORE };
        Identifiers.Renderer2 = { name: 'Renderer2', moduleName: CORE };
        Identifiers.CodegenComponentFactoryResolver = {
            name: 'ɵCodegenComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactoryResolver = {
            name: 'ComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactory = { name: 'ComponentFactory', moduleName: CORE };
        Identifiers.ComponentRef = { name: 'ComponentRef', moduleName: CORE };
        Identifiers.NgModuleFactory = { name: 'NgModuleFactory', moduleName: CORE };
        Identifiers.createModuleFactory = {
            name: 'ɵcmf',
            moduleName: CORE,
        };
        Identifiers.moduleDef = {
            name: 'ɵmod',
            moduleName: CORE,
        };
        Identifiers.moduleProviderDef = {
            name: 'ɵmpd',
            moduleName: CORE,
        };
        Identifiers.RegisterModuleFactoryFn = {
            name: 'ɵregisterModuleFactory',
            moduleName: CORE,
        };
        Identifiers.inject = { name: 'ɵɵinject', moduleName: CORE };
        Identifiers.directiveInject = { name: 'ɵɵdirectiveInject', moduleName: CORE };
        Identifiers.INJECTOR = { name: 'INJECTOR', moduleName: CORE };
        Identifiers.Injector = { name: 'Injector', moduleName: CORE };
        Identifiers.ɵɵdefineInjectable = { name: 'ɵɵdefineInjectable', moduleName: CORE };
        Identifiers.InjectableDef = { name: 'ɵɵInjectableDef', moduleName: CORE };
        Identifiers.ViewEncapsulation = {
            name: 'ViewEncapsulation',
            moduleName: CORE,
        };
        Identifiers.ChangeDetectionStrategy = {
            name: 'ChangeDetectionStrategy',
            moduleName: CORE,
        };
        Identifiers.SecurityContext = {
            name: 'SecurityContext',
            moduleName: CORE,
        };
        Identifiers.LOCALE_ID = { name: 'LOCALE_ID', moduleName: CORE };
        Identifiers.TRANSLATIONS_FORMAT = {
            name: 'TRANSLATIONS_FORMAT',
            moduleName: CORE,
        };
        Identifiers.inlineInterpolate = {
            name: 'ɵinlineInterpolate',
            moduleName: CORE,
        };
        Identifiers.interpolate = { name: 'ɵinterpolate', moduleName: CORE };
        Identifiers.EMPTY_ARRAY = { name: 'ɵEMPTY_ARRAY', moduleName: CORE };
        Identifiers.EMPTY_MAP = { name: 'ɵEMPTY_MAP', moduleName: CORE };
        Identifiers.Renderer = { name: 'Renderer', moduleName: CORE };
        Identifiers.viewDef = { name: 'ɵvid', moduleName: CORE };
        Identifiers.elementDef = { name: 'ɵeld', moduleName: CORE };
        Identifiers.anchorDef = { name: 'ɵand', moduleName: CORE };
        Identifiers.textDef = { name: 'ɵted', moduleName: CORE };
        Identifiers.directiveDef = { name: 'ɵdid', moduleName: CORE };
        Identifiers.providerDef = { name: 'ɵprd', moduleName: CORE };
        Identifiers.queryDef = { name: 'ɵqud', moduleName: CORE };
        Identifiers.pureArrayDef = { name: 'ɵpad', moduleName: CORE };
        Identifiers.pureObjectDef = { name: 'ɵpod', moduleName: CORE };
        Identifiers.purePipeDef = { name: 'ɵppd', moduleName: CORE };
        Identifiers.pipeDef = { name: 'ɵpid', moduleName: CORE };
        Identifiers.nodeValue = { name: 'ɵnov', moduleName: CORE };
        Identifiers.ngContentDef = { name: 'ɵncd', moduleName: CORE };
        Identifiers.unwrapValue = { name: 'ɵunv', moduleName: CORE };
        Identifiers.createRendererType2 = { name: 'ɵcrt', moduleName: CORE };
        // type only
        Identifiers.RendererType2 = {
            name: 'RendererType2',
            moduleName: CORE,
        };
        // type only
        Identifiers.ViewDefinition = {
            name: 'ɵViewDefinition',
            moduleName: CORE,
        };
        Identifiers.createComponentFactory = { name: 'ɵccf', moduleName: CORE };
        Identifiers.setClassMetadata = { name: 'ɵsetClassMetadata', moduleName: CORE };
        return Identifiers;
    }());
    exports.Identifiers = Identifiers;
    function createTokenForReference(reference) {
        return { identifier: { reference: reference } };
    }
    exports.createTokenForReference = createTokenForReference;
    function createTokenForExternalReference(reflector, reference) {
        return createTokenForReference(reflector.resolveExternalReference(reference));
    }
    exports.createTokenForExternalReference = createTokenForExternalReference;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFNSCxJQUFNLElBQUksR0FBRyxlQUFlLENBQUM7SUFFN0I7UUFBQTtRQWlIQSxDQUFDO1FBaEhRLHdDQUE0QixHQUF3QjtZQUN6RCxJQUFJLEVBQUUsOEJBQThCO1lBQ3BDLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyxzQkFBVSxHQUF3QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3pFLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0UsNEJBQWdCLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNyRiw2QkFBaUIsR0FBd0I7WUFDOUMsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0sscUJBQVMsR0FBd0IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN2RSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzNFLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdkUsMkNBQStCLEdBQXdCO1lBQzVELElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsVUFBVSxFQUFFLElBQUk7U0FFakIsQ0FBQztRQUNLLG9DQUF3QixHQUF3QjtZQUNyRCxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hD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LGVBQWU7WUFDckIsVUFBVSxFQUFFLElBQUk7U0FFakIsQ0FBQztRQUNGLFlBQVk7UUFDTCwwQkFBYyxHQUF3QjtZQUMzQyxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFDSyxrQ0FBc0IsR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUMvRSw0QkFBZ0IsR0FBd0IsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQy9GLGtCQUFDO0tBQUEsQUFqSEQsSUFpSEM7SUFqSFksa0NBQVc7SUFtSHhCLFNBQWdCLHVCQUF1QixDQUFDLFNBQWM7UUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDO0lBQzlDLENBQUM7SUFGRCwwREFFQztJQUVELFNBQWdCLCtCQUErQixDQUMzQyxTQUEyQixFQUFFLFNBQThCO1FBQzdELE9BQU8sdUJBQXVCLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUhELDBFQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVUb2tlbk1ldGFkYXRhfSBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5cbmNvbnN0IENPUkUgPSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVycyB7XG4gIHN0YXRpYyBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBFbGVtZW50UmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdFbGVtZW50UmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBOZ01vZHVsZVJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnTmdNb2R1bGVSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFZpZXdDb250YWluZXJSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1ZpZXdDb250YWluZXJSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIENoYW5nZURldGVjdG9yUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3RvclJlZicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgUXVlcnlMaXN0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdRdWVyeUxpc3QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFRlbXBsYXRlUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdUZW1wbGF0ZVJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgUmVuZGVyZXIyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdSZW5kZXJlcjInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIENvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Q29kZWdlbkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIENvbXBvbmVudEZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0NvbXBvbmVudEZhY3RvcnknLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIENvbXBvbmVudFJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnQ29tcG9uZW50UmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBOZ01vZHVsZUZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ05nTW9kdWxlRmFjdG9yeScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgY3JlYXRlTW9kdWxlRmFjdG9yeTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVjbWYnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIG1vZHVsZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVtb2QnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIG1vZHVsZVByb3ZpZGVyRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtW1wZCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgUmVnaXN0ZXJNb2R1bGVGYWN0b3J5Rm46IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1cmVnaXN0ZXJNb2R1bGVGYWN0b3J5JyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBpbmplY3Q6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ybVpbmplY3QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRpcmVjdGl2ZUluamVjdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybXJtWRpcmVjdGl2ZUluamVjdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSU5KRUNUT1I6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0lOSkVDVE9SJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBJbmplY3Rvcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnSW5qZWN0b3InLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIMm1ybVkZWZpbmVJbmplY3RhYmxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtcm1ZGVmaW5lSW5qZWN0YWJsZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSW5qZWN0YWJsZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybXJtUluamVjdGFibGVEZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBTZWN1cml0eUNvbnRleHQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1NlY3VyaXR5Q29udGV4dCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgTE9DQUxFX0lEOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdMT0NBTEVfSUQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFRSQU5TTEFUSU9OU19GT1JNQVQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1RSQU5TTEFUSU9OU19GT1JNQVQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGlubGluZUludGVycG9sYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWlubGluZUludGVycG9sYXRlJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIEVNUFRZX0FSUkFZOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVNUFRZX0FSUkFZJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBFTVBUWV9NQVA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1RU1QVFlfTUFQJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUmVuZGVyZXInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHZpZXdEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dmlkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBlbGVtZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgYW5jaG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWFuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdGV4dERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRpcmVjdGl2ZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkaWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb3ZpZGVyRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcXVlcnlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlQXJyYXlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGFkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlT2JqZWN0RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBvZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZVBpcGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHBkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbm9kZVZhbHVlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5vdicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbmdDb250ZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5jZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdW53cmFwVmFsdWU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dW52JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVSZW5kZXJlclR5cGUyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICAvLyB0eXBlIG9ubHlcbiAgc3RhdGljIFJlbmRlcmVyVHlwZTI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1JlbmRlcmVyVHlwZTInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgLy8gdHlwZSBvbmx5XG4gIHN0YXRpYyBWaWV3RGVmaW5pdGlvbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVWaWV3RGVmaW5pdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcbiAgc3RhdGljIGNyZWF0ZUNvbXBvbmVudEZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Y2NmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzZXRDbGFzc01ldGFkYXRhOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXNldENsYXNzTWV0YWRhdGEnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRm9yUmVmZXJlbmNlKHJlZmVyZW5jZTogYW55KTogQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICByZXR1cm4ge2lkZW50aWZpZXI6IHtyZWZlcmVuY2U6IHJlZmVyZW5jZX19O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZShcbiAgICByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSk6IENvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgcmV0dXJuIGNyZWF0ZVRva2VuRm9yUmVmZXJlbmNlKHJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UocmVmZXJlbmNlKSk7XG59XG4iXX0=