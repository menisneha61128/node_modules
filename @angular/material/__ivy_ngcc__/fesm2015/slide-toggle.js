import { ObserversModule } from '@angular/cdk/observers';
import { InjectionToken, forwardRef, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Attribute, NgZone, Inject, Optional, ViewChild, Input, Output, Directive, NgModule } from '@angular/core';
import { mixinTabIndex, mixinColor, mixinDisableRipple, mixinDisabled, MatRippleModule, MatCommonModule } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, CheckboxRequiredValidator } from '@angular/forms';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default `mat-slide-toggle` options that can be overridden.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/material/core';
import * as ɵngcc4 from '@angular/cdk/observers';

const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
function MatSlideToggleDefaultOptions() { }
if (false) {
    /**
     * Whether toggle action triggers value changes in slide toggle.
     * @type {?|undefined}
     */
    MatSlideToggleDefaultOptions.prototype.disableToggleValue;
    /**
     * Whether drag action triggers value changes in slide toggle.
     * @deprecated No longer being used.
     * \@breaking-change 10.0.0
     * @type {?|undefined}
     */
    MatSlideToggleDefaultOptions.prototype.disableDragValue;
}
/**
 * Injection token to be used to override the default options for `mat-slide-toggle`.
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => ({ disableToggleValue: false }))
});

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids for slide-toggle components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * \@docs-private
 * @type {?}
 */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatSlideToggle)),
    multi: true
};
/**
 * Change event object emitted by a MatSlideToggle.
 */
class MatSlideToggleChange {
    /**
     * @param {?} source
     * @param {?} checked
     */
    constructor(source, checked) {
        this.source = source;
        this.checked = checked;
    }
}
if (false) {
    /**
     * The source MatSlideToggle of the event.
     * @type {?}
     */
    MatSlideToggleChange.prototype.source;
    /**
     * The new `checked` value of the MatSlideToggle.
     * @type {?}
     */
    MatSlideToggleChange.prototype.checked;
}
// Boilerplate for applying mixins to MatSlideToggle.
/**
 * \@docs-private
 */
class MatSlideToggleBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatSlideToggleBase.prototype._elementRef;
}
/** @type {?} */
const _MatSlideToggleMixinBase = mixinTabIndex(mixinColor(mixinDisableRipple(mixinDisabled(MatSlideToggleBase)), 'accent'));
/**
 * Represents a slidable "switch" toggle that can be moved between on and off.
 */
class MatSlideToggle extends _MatSlideToggleMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?} tabIndex
     * @param {?} _ngZone
     * @param {?} defaults
     * @param {?=} _animationMode
     * @param {?=} _dir
     */
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, 
    /**
     * @deprecated `_ngZone` and `_dir` parameters to be removed.
     * @breaking-change 10.0.0
     */
    _ngZone, defaults, _animationMode, _dir) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */
        this.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */
        this.id = this._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */
        this.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */
        this.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */
        this.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */
        this.change = new EventEmitter();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new EventEmitter();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */
        this.dragChange = new EventEmitter();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /**
     * Whether the slide-toggle is required.
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = coerceBooleanProperty(value); }
    /**
     * Whether the slide-toggle element is checked or not.
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        this._checked = coerceBooleanProperty(value);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Returns the unique id for the visual hidden input.
     * @return {?}
     */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this._onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Method being called whenever the underlying input emits a change event.
     * @param {?} event
     * @return {?}
     */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /**
     * Method being called whenever the slide-toggle has been clicked.
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Focuses the slide-toggle.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Toggles the checked state of the slide-toggle.
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵinjectAttribute('tabindex'), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
MatSlideToggle.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._thumbEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._thumbBarEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : 0 - 1)("aria-label", null)("aria-labelledby", null);
        ɵngcc0.ɵɵclassProp("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange", dragChange: "dragChange" }, exportAs: ["matSlideToggle"], features: [ɵngcc0.ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4, 5);
        ɵngcc0.ɵɵlistener("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6, 7);
        ɵngcc0.ɵɵelement(8, "div", 8);
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "div", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "span", 11, 12);
        ɵngcc0.ɵɵlistener("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        ɵngcc0.ɵɵelementStart(13, "span", 13);
        ɵngcc0.ɵɵtext(14, "\u00A0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        const _r4 = ɵngcc0.ɵɵreference(12);
        ɵngcc0.ɵɵattribute("for", ctx.inputId);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", ɵngcc0.ɵɵpureFunction0(17, _c3));
    } }, directives: [ɵngcc3.MatRipple, ɵngcc4.CdkObserveContent], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatSlideToggle.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: ViewChild, args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: ViewChild, args: ['toggleBar',] }],
    name: [{ type: Input }],
    id: [{ type: Input }],
    labelPosition: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    required: [{ type: Input }],
    checked: [{ type: Input }],
    change: [{ type: Output }],
    toggleChange: [{ type: Output }],
    dragChange: [{ type: Output }],
    _inputElement: [{ type: ViewChild, args: ['input',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggle, [{
        type: Component,
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ChangeDetectorRef }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { name: [{
            type: Input
        }], id: [{
            type: Input
        }], labelPosition: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], change: [{
            type: Output
        }], toggleChange: [{
            type: Output
        }], dragChange: [{
            type: Output
        }], required: [{
            type: Input
        }], checked: [{
            type: Input
        }], _thumbEl: [{
            type: ViewChild,
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: ViewChild,
            args: ['toggleBar']
        }], _inputElement: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
if (false) {
    /** @type {?} */
    MatSlideToggle.ngAcceptInputType_required;
    /** @type {?} */
    MatSlideToggle.ngAcceptInputType_checked;
    /** @type {?} */
    MatSlideToggle.ngAcceptInputType_disabled;
    /** @type {?} */
    MatSlideToggle.ngAcceptInputType_disableRipple;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._uniqueId;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._checked;
    /**
     * Reference to the thumb HTMLElement.
     * @type {?}
     */
    MatSlideToggle.prototype._thumbEl;
    /**
     * Reference to the thumb bar HTMLElement.
     * @type {?}
     */
    MatSlideToggle.prototype._thumbBarEl;
    /**
     * Name value will be applied to the input element if present.
     * @type {?}
     */
    MatSlideToggle.prototype.name;
    /**
     * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
     * @type {?}
     */
    MatSlideToggle.prototype.id;
    /**
     * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
     * @type {?}
     */
    MatSlideToggle.prototype.labelPosition;
    /**
     * Used to set the aria-label attribute on the underlying input element.
     * @type {?}
     */
    MatSlideToggle.prototype.ariaLabel;
    /**
     * Used to set the aria-labelledby attribute on the underlying input element.
     * @type {?}
     */
    MatSlideToggle.prototype.ariaLabelledby;
    /**
     * An event will be dispatched each time the slide-toggle changes its value.
     * @type {?}
     */
    MatSlideToggle.prototype.change;
    /**
     * An event will be dispatched each time the slide-toggle input is toggled.
     * This event is always emitted when the user toggles the slide toggle, but this does not mean
     * the slide toggle's value has changed.
     * @type {?}
     */
    MatSlideToggle.prototype.toggleChange;
    /**
     * An event will be dispatched each time the slide-toggle is dragged.
     * This event is always emitted when the user drags the slide toggle to make a change greater
     * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
     * the user toggles the slide toggle to change its value.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    MatSlideToggle.prototype.dragChange;
    /**
     * Reference to the underlying input element.
     * @type {?}
     */
    MatSlideToggle.prototype._inputElement;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MatSlideToggle.prototype._changeDetectorRef;
    /** @type {?} */
    MatSlideToggle.prototype.defaults;
    /** @type {?} */
    MatSlideToggle.prototype._animationMode;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatSlideToggleRequiredValidator)),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
}
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatSlideToggleRequiredValidator_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSlideToggleRequiredValidator);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggleRequiredValidator, [{
        type: Directive,
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This module is used by both original and MDC-based slide-toggle implementations.
 */
// tslint:disable-next-line:class-name
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
        type: NgModule,
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
            _MatSlideToggleRequiredValidatorModule,
            MatRippleModule,
            MatCommonModule,
            ObserversModule,
        ],
        _MatSlideToggleRequiredValidatorModule,
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule,
        MatRippleModule,
        MatCommonModule,
        ObserversModule]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule,
        MatSlideToggle,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatRippleModule,
                    MatCommonModule,
                    ObserversModule,
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    MatCommonModule
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule };

//# sourceMappingURL=slide-toggle.js.map