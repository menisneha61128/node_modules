/**
 * @license Angular v9.1.11
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { CompileMetadataResolver } from '@angular/compiler';
import { Compiler } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
import { CompileReflector } from '@angular/compiler';
import { CompilerFactory } from '@angular/core';
import { CompilerOptions } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { Injector } from '@angular/core';
import { JitEvaluator } from '@angular/compiler';
import { ModuleWithComponentFactories } from '@angular/core';
import { NgModuleCompiler } from '@angular/compiler';
import { NgModuleFactory } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { Provider } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';
import { StaticProvider } from '@angular/core';
import { StyleCompiler } from '@angular/compiler';
import { SummaryResolver } from '@angular/compiler';
import { TemplateParser } from '@angular/compiler';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewCompiler } from '@angular/compiler';
import { ɵConsole } from '@angular/core';

/**
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class JitCompilerFactory implements CompilerFactory {
    private _defaultOptions;
    createCompiler(options?: CompilerOptions[]): Compiler;
}

/**
 * @publicApi
 */
export declare const platformBrowserDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * @publicApi
 */
export declare const RESOURCE_CACHE_PROVIDER: Provider[];

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 *
 * @publicApi
 */
export declare class ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a extends ResourceLoader {
    private _cache;
    constructor();
    get(url: string): Promise<string>;
}

export declare const ɵCOMPILER_PROVIDERS__POST_R3__: StaticProvider[];

export declare class ɵCompilerImpl implements Compiler {
    private _metadataResolver;
    private _delegate;
    readonly injector: Injector;
    constructor(injector: Injector, _metadataResolver: CompileMetadataResolver, templateParser: TemplateParser, styleCompiler: StyleCompiler, viewCompiler: ViewCompiler, ngModuleCompiler: NgModuleCompiler, summaryResolver: SummaryResolver<Type<any>>, compileReflector: CompileReflector, jitEvaluator: JitEvaluator, compilerConfig: CompilerConfig, console: ɵConsole);
    private getExtraNgModuleProviders;
    compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
    compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
    compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T>;
    compileModuleAndAllComponentsAsync<T>(moduleType: Type<T>): Promise<ModuleWithComponentFactories<T>>;
    loadAotSummaries(summaries: () => any[]): void;
    hasAotSummary(ref: Type<any>): boolean;
    getComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
    clearCache(): void;
    clearCacheFor(type: Type<any>): void;
    getModuleId(moduleType: Type<any>): string | undefined;
}

/**
 * @publicApi
 */
export declare const ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[];

/**
 * A platform that included corePlatform and the compiler.
 *
 * @publicApi
 */
export declare const ɵplatformCoreDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

export declare class ɵResourceLoaderImpl extends ResourceLoader {
    get(url: string): Promise<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵResourceLoaderImpl, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵResourceLoaderImpl>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmQudHMiLCJzb3VyY2VzIjpbInBsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjExXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21waWxlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29tcGlsZVJlZmxlY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29tcGlsZXJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBpbGVyT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEppdEV2YWx1YXRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUNvbXBpbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1SZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzb3VyY2VMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IFN1bW1hcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgVGVtcGxhdGVQYXJzZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3Q29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IMm1Q29uc29sZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEppdENvbXBpbGVyRmFjdG9yeSBpbXBsZW1lbnRzIENvbXBpbGVyRmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0T3B0aW9ucztcclxuICAgIGNyZWF0ZUNvbXBpbGVyKG9wdGlvbnM/OiBDb21waWxlck9wdGlvbnNbXSk6IENvbXBpbGVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgcGxhdGZvcm1Ccm93c2VyRHluYW1pYzogKGV4dHJhUHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXSB8IHVuZGVmaW5lZCkgPT4gUGxhdGZvcm1SZWY7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUkVTT1VSQ0VfQ0FDSEVfUFJPVklERVI6IFByb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVkVSU0lPTjogVmVyc2lvbjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBSZXNvdXJjZUxvYWRlciB0aGF0IHVzZXMgYSB0ZW1wbGF0ZSBjYWNoZSB0byBhdm9pZCBkb2luZyBhbiBhY3R1YWxcclxuICogUmVzb3VyY2VMb2FkZXIuXHJcbiAqXHJcbiAqIFRoZSB0ZW1wbGF0ZSBjYWNoZSBuZWVkcyB0byBiZSBidWlsdCBhbmQgbG9hZGVkIGludG8gd2luZG93LiR0ZW1wbGF0ZUNhY2hlXHJcbiAqIHZpYSBhIHNlcGFyYXRlIG1lY2hhbmlzbS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY19wbGF0Zm9ybV9icm93c2VyX2R5bmFtaWNfYSBleHRlbmRzIFJlc291cmNlTG9hZGVyIHtcclxuICAgIHByaXZhdGUgX2NhY2hlO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVDT01QSUxFUl9QUk9WSURFUlNfX1BPU1RfUjNfXzogU3RhdGljUHJvdmlkZXJbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1Q29tcGlsZXJJbXBsIGltcGxlbWVudHMgQ29tcGlsZXIge1xyXG4gICAgcHJpdmF0ZSBfbWV0YWRhdGFSZXNvbHZlcjtcclxuICAgIHByaXZhdGUgX2RlbGVnYXRlO1xyXG4gICAgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yO1xyXG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCBfbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIHRlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsIG5nTW9kdWxlQ29tcGlsZXI6IE5nTW9kdWxlQ29tcGlsZXIsIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFR5cGU8YW55Pj4sIGNvbXBpbGVSZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsIGppdEV2YWx1YXRvcjogSml0RXZhbHVhdG9yLCBjb21waWxlckNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IMm1Q29uc29sZSk7XHJcbiAgICBwcml2YXRlIGdldEV4dHJhTmdNb2R1bGVQcm92aWRlcnM7XHJcbiAgICBjb21waWxlTW9kdWxlU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTmdNb2R1bGVGYWN0b3J5PFQ+O1xyXG4gICAgY29tcGlsZU1vZHVsZUFzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj47XHJcbiAgICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD47XHJcbiAgICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4+O1xyXG4gICAgbG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXM6ICgpID0+IGFueVtdKTogdm9pZDtcclxuICAgIGhhc0FvdFN1bW1hcnkocmVmOiBUeXBlPGFueT4pOiBib29sZWFuO1xyXG4gICAgZ2V0Q29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IFR5cGU8VD4pOiBDb21wb25lbnRGYWN0b3J5PFQ+O1xyXG4gICAgY2xlYXJDYWNoZSgpOiB2b2lkO1xyXG4gICAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pOiB2b2lkO1xyXG4gICAgZ2V0TW9kdWxlSWQobW9kdWxlVHlwZTogVHlwZTxhbnk+KTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuLyoqXHJcbiAqIEEgcGxhdGZvcm0gdGhhdCBpbmNsdWRlZCBjb3JlUGxhdGZvcm0gYW5kIHRoZSBjb21waWxlci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVwbGF0Zm9ybUNvcmVEeW5hbWljOiAoZXh0cmFQcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdIHwgdW5kZWZpbmVkKSA9PiBQbGF0Zm9ybVJlZjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1UmVzb3VyY2VMb2FkZXJJbXBsIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xyXG4gICAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==