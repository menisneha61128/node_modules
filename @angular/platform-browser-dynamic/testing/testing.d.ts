/**
 * @license Angular v9.1.11
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { CompilerFactory } from '@angular/core';
import { CompilerOptions } from '@angular/core';
import { Injector } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵTestingCompiler } from '@angular/core/testing';
import { ɵTestingCompilerFactory } from '@angular/core/testing';

/**
 * NgModule for testing.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser/testing';
export declare class BrowserDynamicTestingModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserDynamicTestingModule, never, never, [typeof ɵngcc1.BrowserTestingModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserDynamicTestingModule>;
}

/**
 * @publicApi
 */
export declare const platformBrowserDynamicTesting: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

export declare const ɵangular_packages_platform_browser_dynamic_testing_testing_a: StaticProvider[];

export declare class ɵangular_packages_platform_browser_dynamic_testing_testing_b implements ɵTestingCompilerFactory {
    private _injector;
    private _compilerFactory;
    constructor(_injector: Injector, _compilerFactory: CompilerFactory);
    createTestingCompiler(options: CompilerOptions[]): ɵTestingCompiler;
}

/**
 * A DOM based implementation of the TestComponentRenderer.
 */
export declare class ɵDOMTestComponentRenderer extends TestComponentRenderer {
    private _doc;
    constructor(_doc: any);
    insertRootElement(rootElId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDOMTestComponentRenderer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDOMTestComponentRenderer>;
}

/**
 * Platform for dynamic tests
 *
 * @publicApi
 */
export declare const ɵplatformCoreDynamicTesting: (extraProviders?: any[]) => PlatformRef;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjEuMTFcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQ29tcGlsZXJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBpbGVyT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGF0aWNQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50UmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyDJtVRlc3RpbmdDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7IMm1VGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcblxyXG4vKipcclxuICogTmdNb2R1bGUgZm9yIHRlc3RpbmcuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZzogKGV4dHJhUHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXSB8IHVuZGVmaW5lZCkgPT4gUGxhdGZvcm1SZWY7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9keW5hbWljX3Rlc3RpbmdfdGVzdGluZ19hOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY190ZXN0aW5nX3Rlc3RpbmdfYiBpbXBsZW1lbnRzIMm1VGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIF9pbmplY3RvcjtcclxuICAgIHByaXZhdGUgX2NvbXBpbGVyRmFjdG9yeTtcclxuICAgIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IsIF9jb21waWxlckZhY3Rvcnk6IENvbXBpbGVyRmFjdG9yeSk7XHJcbiAgICBjcmVhdGVUZXN0aW5nQ29tcGlsZXIob3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10pOiDJtVRlc3RpbmdDb21waWxlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgRE9NIGJhc2VkIGltcGxlbWVudGF0aW9uIG9mIHRoZSBUZXN0Q29tcG9uZW50UmVuZGVyZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtURPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIF9kb2M7XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgaW5zZXJ0Um9vdEVsZW1lbnQocm9vdEVsSWQ6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQbGF0Zm9ybSBmb3IgZHluYW1pYyB0ZXN0c1xyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtXBsYXRmb3JtQ29yZUR5bmFtaWNUZXN0aW5nOiAoZXh0cmFQcm92aWRlcnM/OiBhbnlbXSkgPT4gUGxhdGZvcm1SZWY7XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==