import { Injectable, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/icon/testing/fake-icon-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:enable:no-any
/**
 * A null icon registry that must be imported to allow disabling of custom
 * icons.
 */
import * as ɵngcc0 from '@angular/core';
class FakeMatIconRegistry {
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIcon() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconLiteral() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconInNamespace() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconLiteralInNamespace() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconSet() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconSetLiteral() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconSetInNamespace() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    addSvgIconSetLiteralInNamespace() {
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    registerFontClassAlias() {
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} alias
     * @return {?}
     */
    classNameForFontAlias(alias) {
        return alias;
    }
    /**
     * @return {?}
     */
    getDefaultFontSetClass() {
        return 'material-icons';
    }
    /**
     * @return {?}
     */
    getSvgIconFromUrl() {
        return of(this._generateEmptySvg());
    }
    /**
     * @return {?}
     */
    getNamedSvgIcon() {
        return of(this._generateEmptySvg());
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setDefaultFontSetClass() {
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @private
     * @return {?}
     */
    _generateEmptySvg() {
        /** @type {?} */
        const emptySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        emptySvg.classList.add('fake-testing-svg');
        // Emulate real icon characteristics from `MatIconRegistry` so size remains consistent in tests.
        emptySvg.setAttribute('fit', '');
        emptySvg.setAttribute('height', '100%');
        emptySvg.setAttribute('width', '100%');
        emptySvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        emptySvg.setAttribute('focusable', 'false');
        return emptySvg;
    }
}
FakeMatIconRegistry.ɵfac = function FakeMatIconRegistry_Factory(t) { return new (t || FakeMatIconRegistry)(); };
FakeMatIconRegistry.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FakeMatIconRegistry, factory: FakeMatIconRegistry.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FakeMatIconRegistry, [{
        type: Injectable
    }], null, null); })();
/**
 * Import this module in tests to install the null icon registry.
 */
class MatIconTestingModule {
}
MatIconTestingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatIconTestingModule });
MatIconTestingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatIconTestingModule_Factory(t) { return new (t || MatIconTestingModule)(); }, providers: [{ provide: MatIconRegistry, useClass: FakeMatIconRegistry }] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatIconTestingModule, [{
        type: NgModule,
        args: [{
                providers: [{ provide: MatIconRegistry, useClass: FakeMatIconRegistry }]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/icon/testing/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FakeMatIconRegistry, MatIconTestingModule };

//# sourceMappingURL=testing.js.map