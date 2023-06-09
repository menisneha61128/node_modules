import { PortalModule } from '@angular/cdk/portal';
import { CdkStepLabel, CdkStepHeader, CdkStep, STEPPER_GLOBAL_OPTIONS, CdkStepper, CdkStepperNext, CdkStepperPrevious, CdkStepperModule } from '@angular/cdk/stepper';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Directive, Injectable, ɵɵdefineInjectable, Optional, SkipSelf, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Input, TemplateRef, Inject, forwardRef, ContentChild, EventEmitter, ViewChildren, ContentChildren, Output, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/step-label.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/icon';
import * as ɵngcc5 from '@angular/cdk/bidi';

function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 10);
    ɵngcc0.ɵɵtemplate(1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r1.state);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "number");
} }
function MatStepHeader_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 13);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c0 = ["*"];
function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} }
function MatHorizontalStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "mat-step-header", 4);
    ɵngcc0.ɵɵlistener("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() { const step_r2 = ctx.$implicit; return step_r2.select(); })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7._onKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const isLast_r4 = ctx.last;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    ɵngcc0.ɵɵattribute("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !isLast_r4);
} }
function MatHorizontalStepper_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11._animationDone.next($event); });
    ɵngcc0.ɵɵelementContainer(1, 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r9.content);
} }
function MatVerticalStepper_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "mat-step-header", 2);
    ɵngcc0.ɵɵlistener("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() { const step_r1 = ctx.$implicit; return step_r1.select(); })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5._onKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵlistener("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7._animationDone.next($event); });
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵelementContainer(5, 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const isLast_r3 = ctx.last;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    ɵngcc0.ɵɵattribute("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("mat-stepper-vertical-line", !isLast_r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r1.content);
} }
class MatStepLabel extends CdkStepLabel {
}
MatStepLabel.ɵfac = function MatStepLabel_Factory(t) { return ɵMatStepLabel_BaseFactory(t || MatStepLabel); };
MatStepLabel.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatStepLabel_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepLabel);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepLabel, [{
        type: Directive,
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-intl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
/** @nocollapse */ MatStepperIntl.ɵprov = ɵɵdefineInjectable({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     * @type {?}
     */
    MatStepperIntl.prototype.changes;
    /**
     * Label that is rendered below optional steps.
     * @type {?}
     */
    MatStepperIntl.prototype.optionalLabel;
}
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/step-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStepHeader extends CdkStepHeader {
    /**
     * @param {?} _intl
     * @param {?} _focusMonitor
     * @param {?} _elementRef
     * @param {?} changeDetectorRef
     */
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        this._intlSubscription = _intl.changes.subscribe((/**
         * @return {?}
         */
        () => changeDetectorRef.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Focuses the step header.
     * @return {?}
     */
    focus() {
        this._focusMonitor.focusVia(this._elementRef, 'program');
    }
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    /**
     * @param {?} state
     * @return {?}
     */
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(ɵngcc0.ɵɵdirectiveInject(MatStepperIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"], inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtemplate(6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, MatStepHeader_div_7_Template, 2, 1, "div", 6);
        ɵngcc0.ɵɵtemplate(8, MatStepHeader_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(9, MatStepHeader_div_9_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        ɵngcc0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._templateLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._stringLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optional && ctx.state != "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == "error");
    } }, directives: [ɵngcc2.MatRipple, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
MatStepHeader.propDecorators = {
    state: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    iconOverrides: [{ type: Input }],
    index: [{ type: Input }],
    selected: [{ type: Input }],
    active: [{ type: Input }],
    optional: [{ type: Input }],
    disableRipple: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepHeader, [{
        type: Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                host: {
                    'class': 'mat-step-header mat-focus-indicator',
                    'role': 'tab'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: Input
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], iconOverrides: [{
            type: Input
        }], index: [{
            type: Input
        }], selected: [{
            type: Input
        }], active: [{
            type: Input
        }], optional: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatStepHeader.prototype._intlSubscription;
    /**
     * State of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.state;
    /**
     * Label of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.label;
    /**
     * Error message to display when there's an error.
     * @type {?}
     */
    MatStepHeader.prototype.errorMessage;
    /**
     * Overrides for the header icons, passed in via the stepper.
     * @type {?}
     */
    MatStepHeader.prototype.iconOverrides;
    /**
     * Index of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.index;
    /**
     * Whether the given step is selected.
     * @type {?}
     */
    MatStepHeader.prototype.selected;
    /**
     * Whether the given step label is active.
     * @type {?}
     */
    MatStepHeader.prototype.active;
    /**
     * Whether the given step is optional.
     * @type {?}
     */
    MatStepHeader.prototype.optional;
    /**
     * Whether the ripple should be disabled.
     * @type {?}
     */
    MatStepHeader.prototype.disableRipple;
    /** @type {?} */
    MatStepHeader.prototype._intl;
    /**
     * @type {?}
     * @private
     */
    MatStepHeader.prototype._focusMonitor;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 * \@docs-private
 * @type {?}
 */
const matStepperAnimations = {
    /**
     * Animation that transitions the step along the X axis in a horizontal stepper.
     */
    horizontalStepTransition: trigger('stepTransition', [
        state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        state('current', style({ transform: 'none', visibility: 'visible' })),
        state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /**
     * Animation that transitions the step along the Y axis in a vertical stepper.
     */
    verticalStepTransition: trigger('stepTransition', [
        state('previous', style({ height: '0px', visibility: 'hidden' })),
        state('next', style({ height: '0px', visibility: 'hidden' })),
        state('current', style({ height: '*', visibility: 'visible' })),
        transition('* <=> current', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-icon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Template context available to an attached `matStepperIcon`.
 * @record
 */
function MatStepperIconContext() { }
if (false) {
    /**
     * Index of the step.
     * @type {?}
     */
    MatStepperIconContext.prototype.index;
    /**
     * Whether the step is currently active.
     * @type {?}
     */
    MatStepperIconContext.prototype.active;
    /**
     * Whether the step is optional.
     * @type {?}
     */
    MatStepperIconContext.prototype.optional;
}
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
MatStepperIcon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
/** @nocollapse */
MatStepperIcon.ctorParameters = () => [
    { type: TemplateRef }
];
MatStepperIcon.propDecorators = {
    name: [{ type: Input, args: ['matStepperIcon',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperIcon, [{
        type: Directive,
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { name: [{
            type: Input,
            args: ['matStepperIcon']
        }] }); })();
if (false) {
    /**
     * Name of the icon to be overridden.
     * @type {?}
     */
    MatStepperIcon.prototype.name;
    /** @type {?} */
    MatStepperIcon.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStep extends CdkStep {
    /**
     * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
     * @param {?} stepper
     * @param {?} _errorStateMatcher
     * @param {?=} stepperOptions
     */
    constructor(stepper, _errorStateMatcher, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
    }
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        /** @type {?} */
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(ɵngcc0.ɵɵdirectiveInject(forwardRef(( /**
                 * @return {?}
                 */() => MatStepper))), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ErrorStateMatcher, 4), ɵngcc0.ɵɵdirectiveInject(STEPPER_GLOBAL_OPTIONS, 8)); };
MatStep.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepLabel, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
    } }, exportAs: ["matStep"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: ErrorStateMatcher, useExisting: MatStep },
            { provide: CdkStep, useExisting: MatStep },
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => MatStepper)),] }] },
    { type: ErrorStateMatcher, decorators: [{ type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: ContentChild, args: [MatStepLabel,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStep, [{
        type: Component,
        args: [{
                selector: 'mat-step',
                template: "<ng-template><ng-content></ng-content></ng-template>\n",
                providers: [
                    { provide: ErrorStateMatcher, useExisting: MatStep },
                    { provide: CdkStep, useExisting: MatStep },
                ],
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matStep',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: Inject,
                args: [forwardRef(( /**
                                     * @return {?}
                                     */() => MatStepper))]
            }] }, { type: ɵngcc2.ErrorStateMatcher, decorators: [{
                type: SkipSelf
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { stepLabel: [{
            type: ContentChild,
            args: [MatStepLabel]
        }] }); })();
if (false) {
    /**
     * Content for step label given by `<ng-template matStepLabel>`.
     * @type {?}
     */
    MatStep.prototype.stepLabel;
    /**
     * @type {?}
     * @private
     */
    MatStep.prototype._errorStateMatcher;
}
class MatStepper extends CdkStepper {
    constructor() {
        super(...arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */
        this.animationDone = new EventEmitter();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        this._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */
        this._animationDone = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._icons.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, templateRef }) => this._iconOverrides[name] = templateRef));
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            this._stateChanged();
        }));
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        distinctUntilChanged((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => x.fromState === y.fromState && x.toState === y.toState)), takeUntil(this._destroyed)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (((/** @type {?} */ (event.toState))) === 'current') {
                this.animationDone.emit();
            }
        }));
    }
}
MatStepper.ɵfac = function MatStepper_Factory(t) { return ɵMatStepper_BaseFactory(t || MatStepper); };
MatStepper.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepper, selectors: [["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStep, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepperIcon, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._steps = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatStepHeader, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
    } }, inputs: { disableRipple: "disableRipple" }, outputs: { animationDone: "animationDone" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: MatStepper }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatStepper.propDecorators = {
    _stepHeader: [{ type: ViewChildren, args: [MatStepHeader,] }],
    _steps: [{ type: ContentChildren, args: [MatStep, { descendants: true },] }],
    _icons: [{ type: ContentChildren, args: [MatStepperIcon, { descendants: true },] }],
    animationDone: [{ type: Output }],
    disableRipple: [{ type: Input }]
};
const ɵMatStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepper);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepper, [{
        type: Directive,
        args: [{ selector: '[matStepper]', providers: [{ provide: CdkStepper, useExisting: MatStepper }] }]
    }], null, { animationDone: [{
            type: Output
        }], _stepHeader: [{
            type: ViewChildren,
            args: [MatStepHeader]
        }], _steps: [{
            type: ContentChildren,
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: ContentChildren,
            args: [MatStepperIcon, { descendants: true }]
        }], disableRipple: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatStepper.ngAcceptInputType_editable;
    /** @type {?} */
    MatStepper.ngAcceptInputType_optional;
    /** @type {?} */
    MatStepper.ngAcceptInputType_completed;
    /** @type {?} */
    MatStepper.ngAcceptInputType_hasError;
    /**
     * The list of step headers of the steps in the stepper.
     * @type {?}
     */
    MatStepper.prototype._stepHeader;
    /**
     * Steps that the stepper holds.
     * @type {?}
     */
    MatStepper.prototype._steps;
    /**
     * Custom icon overrides passed in by the consumer.
     * @type {?}
     */
    MatStepper.prototype._icons;
    /**
     * Event emitted when the current step is done transitioning in.
     * @type {?}
     */
    MatStepper.prototype.animationDone;
    /**
     * Whether ripples should be disabled for the step headers.
     * @type {?}
     */
    MatStepper.prototype.disableRipple;
    /**
     * Consumer-specified template-refs to be used to override the header icons.
     * @type {?}
     */
    MatStepper.prototype._iconOverrides;
    /**
     * Stream of animation `done` events when the body expands/collapses.
     * @type {?}
     */
    MatStepper.prototype._animationDone;
}
class MatHorizontalStepper extends MatStepper {
    constructor() {
        super(...arguments);
        /**
         * Whether the label should display in bottom or end position.
         */
        this.labelPosition = 'end';
    }
}
MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) { return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper); };
MatHorizontalStepper.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"], hostVars: 4, hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition" }, exportAs: ["matHorizontalStepper"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MatStepper, useExisting: MatHorizontalStepper },
            { provide: CdkStepper, useExisting: MatHorizontalStepper }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]], template: function MatHorizontalStepper_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [ɵngcc3.NgForOf, MatStepHeader, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [matStepperAnimations.horizontalStepTransition] }, changeDetection: 0 });
MatHorizontalStepper.propDecorators = {
    labelPosition: [{ type: Input }]
};
const ɵMatHorizontalStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHorizontalStepper);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHorizontalStepper, [{
        type: Component,
        args: [{
                selector: 'mat-horizontal-stepper',
                exportAs: 'matHorizontalStepper',
                template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-horizontal',
                    '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                    'aria-orientation': 'horizontal',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.horizontalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatHorizontalStepper },
                    { provide: CdkStepper, useExisting: MatHorizontalStepper }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], null, { labelPosition: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatHorizontalStepper.ngAcceptInputType_editable;
    /** @type {?} */
    MatHorizontalStepper.ngAcceptInputType_optional;
    /** @type {?} */
    MatHorizontalStepper.ngAcceptInputType_completed;
    /** @type {?} */
    MatHorizontalStepper.ngAcceptInputType_hasError;
    /**
     * Whether the label should display in bottom or end position.
     * @type {?}
     */
    MatHorizontalStepper.prototype.labelPosition;
}
class MatVerticalStepper extends MatStepper {
    /**
     * @param {?} dir
     * @param {?} changeDetectorRef
     * @param {?=} elementRef
     * @param {?=} _document
     */
    constructor(dir, changeDetectorRef, 
    // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
    elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        this._orientation = 'vertical';
    }
}
MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) { return new (t || MatVerticalStepper)(ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
MatVerticalStepper.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"], inputs: { selectedIndex: "selectedIndex" }, exportAs: ["matVerticalStepper"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MatStepper, useExisting: MatVerticalStepper },
            { provide: CdkStepper, useExisting: MatVerticalStepper }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]], template: function MatVerticalStepper_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [ɵngcc3.NgForOf, MatStepHeader, ɵngcc3.NgTemplateOutlet], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [matStepperAnimations.verticalStepTransition] }, changeDetection: 0 });
/** @nocollapse */
MatVerticalStepper.ctorParameters = () => [
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatVerticalStepper, [{
        type: Component,
        args: [{
                selector: 'mat-vertical-stepper',
                exportAs: 'matVerticalStepper',
                template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-vertical',
                    'aria-orientation': 'vertical',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.verticalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatVerticalStepper },
                    { provide: CdkStepper, useExisting: MatVerticalStepper }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc5.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    MatVerticalStepper.ngAcceptInputType_editable;
    /** @type {?} */
    MatVerticalStepper.ngAcceptInputType_optional;
    /** @type {?} */
    MatVerticalStepper.ngAcceptInputType_completed;
    /** @type {?} */
    MatVerticalStepper.ngAcceptInputType_hasError;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
class MatStepperNext extends CdkStepperNext {
}
MatStepperNext.ɵfac = function MatStepperNext_Factory(t) { return ɵMatStepperNext_BaseFactory(t || MatStepperNext); };
MatStepperNext.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatStepperNext_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperNext);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperNext, [{
        type: Directive,
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
/**
 * Button that moves to the previous step in a stepper workflow.
 */
class MatStepperPrevious extends CdkStepperPrevious {
}
MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) { return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious); };
MatStepperPrevious.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatStepperPrevious_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperPrevious);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperPrevious, [{
        type: Directive,
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatStepperModule {
}
MatStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatStepperModule });
MatStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); }, providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [[
            MatCommonModule,
            CommonModule,
            PortalModule,
            MatButtonModule,
            CdkStepperModule,
            MatIconModule,
            MatRippleModule,
        ],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatStepperModule, { declarations: function () { return [MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; }, imports: function () { return [MatCommonModule,
        CommonModule,
        PortalModule,
        MatButtonModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule]; }, exports: function () { return [MatCommonModule,
        MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCommonModule,
                    CommonModule,
                    PortalModule,
                    MatButtonModule,
                    CdkStepperModule,
                    MatIconModule,
                    MatRippleModule,
                ],
                exports: [
                    MatCommonModule,
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations };

//# sourceMappingURL=stepper.js.map