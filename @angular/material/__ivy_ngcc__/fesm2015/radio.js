import { InjectionToken, forwardRef, EventEmitter, Directive, ChangeDetectorRef, Output, ContentChildren, Input, Optional, ElementRef, Inject, ViewChild, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { mixinDisableRipple, mixinTabIndex, MatRippleModule, MatCommonModule } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/radio/radio.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/collections';
import * as ɵngcc3 from '@angular/material/core';

const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
function MatRadioDefaultOptions() { }
if (false) {
    /** @type {?} */
    MatRadioDefaultOptions.prototype.color;
}
/** @type {?} */
const MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken('mat-radio-default-options', {
    providedIn: 'root',
    factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
/**
 * @return {?}
 */
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent'
    };
}
// Increasing integer for generating unique ids for radio components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * \@docs-private
 * @type {?}
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatRadioGroup)),
    multi: true
};
/**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
class MatRadioChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
if (false) {
    /**
     * The MatRadioButton that emits the change event.
     * @type {?}
     */
    MatRadioChange.prototype.source;
    /**
     * The value of the MatRadioButton.
     * @type {?}
     */
    MatRadioChange.prototype.value;
}
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup {
    /**
     * @param {?} _changeDetector
     */
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        /**
         * Selected value for the radio group.
         */
        this._value = null;
        /**
         * The HTML name attribute applied to radio buttons in this group.
         */
        this._name = `mat-radio-group-${nextUniqueId++}`;
        /**
         * The currently selected radio button. Should match value.
         */
        this._selected = null;
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         */
        this._labelPosition = 'after';
        /**
         * Whether the radio group is disabled.
         */
        this._disabled = false;
        /**
         * Whether the radio group is required.
         */
        this._required = false;
        /**
         * The method to be called in order to update ngModel
         */
        this._controlValueAccessorChangeFn = (/**
         * @return {?}
         */
        () => { });
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
    }
    /**
     * Name of the radio button group. All radio buttons inside this group will use this name.
     * @return {?}
     */
    get name() { return this._name; }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /**
     * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set labelPosition(v) {
        this._labelPosition = v === 'before' ? 'before' : 'after';
        this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value !== newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    /**
     * @return {?}
     */
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /**
     * Whether the radio group is disabled
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._markRadiosForCheck();
    }
    /**
     * Whether the radio group is required
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this._markRadiosForCheck();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                radio.name = this.name;
                radio._markForCheck();
            }));
        }
    }
    /**
     * Updates the `selected` radio button from the internal _value state.
     * @private
     * @return {?}
     */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        /** @type {?} */
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            }));
        }
    }
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange((/** @type {?} */ (this._selected)), this._value));
        }
    }
    /**
     * @return {?}
     */
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio._markForCheck()));
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    }
}
MatRadioGroup.ɵfac = function MatRadioGroup_Factory(t) { return new (t || MatRadioGroup)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatRadioGroup.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatRadioGroup, selectors: [["mat-radio-group"]], contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatRadioButton, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._radios = _t);
    } }, hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"], inputs: { name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: "disabled", required: "required", color: "color" }, outputs: { change: "change" }, exportAs: ["matRadioGroup"], features: [ɵngcc0.ɵɵProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR])] });
/** @nocollapse */
MatRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MatRadioGroup.propDecorators = {
    change: [{ type: Output }],
    _radios: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => MatRadioButton)), { descendants: true },] }],
    color: [{ type: Input }],
    name: [{ type: Input }],
    labelPosition: [{ type: Input }],
    value: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRadioGroup, [{
        type: Directive,
        args: [{
                selector: 'mat-radio-group',
                exportAs: 'matRadioGroup',
                providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                host: {
                    'role': 'radiogroup',
                    'class': 'mat-radio-group'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { change: [{
            type: Output
        }], name: [{
            type: Input
        }], labelPosition: [{
            type: Input
        }], value: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], _radios: [{
            type: ContentChildren,
            args: [forwardRef(( /**
                             * @return {?}
                             */() => MatRadioButton)), { descendants: true }]
        }], color: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatRadioGroup.ngAcceptInputType_disabled;
    /** @type {?} */
    MatRadioGroup.ngAcceptInputType_required;
    /**
     * Selected value for the radio group.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._value;
    /**
     * The HTML name attribute applied to radio buttons in this group.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._name;
    /**
     * The currently selected radio button. Should match value.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._selected;
    /**
     * Whether the `value` has been set to its initial value.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._isInitialized;
    /**
     * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._labelPosition;
    /**
     * Whether the radio group is disabled.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._disabled;
    /**
     * Whether the radio group is required.
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._required;
    /**
     * The method to be called in order to update ngModel
     * @type {?}
     */
    MatRadioGroup.prototype._controlValueAccessorChangeFn;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * \@docs-private
     * @type {?}
     */
    MatRadioGroup.prototype.onTouched;
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     * @type {?}
     */
    MatRadioGroup.prototype.change;
    /**
     * Child radio buttons.
     * @type {?}
     */
    MatRadioGroup.prototype._radios;
    /**
     * Theme color for all of the radio buttons in the group.
     * @type {?}
     */
    MatRadioGroup.prototype.color;
    /**
     * @type {?}
     * @private
     */
    MatRadioGroup.prototype._changeDetector;
}
// Boilerplate for applying mixins to MatRadioButton.
/**
 * \@docs-private
 */
class MatRadioButtonBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatRadioButtonBase.prototype.disabled;
    /** @type {?} */
    MatRadioButtonBase.prototype._elementRef;
}
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
/** @type {?} */
const _MatRadioButtonMixinBase = mixinDisableRipple(mixinTabIndex(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * \@docs-private
 * @abstract
 */
// tslint:disable-next-line:class-name
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
    /**
     * @param {?} radioGroup
     * @param {?} elementRef
     * @param {?} _changeDetector
     * @param {?} _focusMonitor
     * @param {?} _radioDispatcher
     * @param {?=} _animationMode
     * @param {?=} _providerOverride
     */
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride) {
        super(elementRef);
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._radioDispatcher = _radioDispatcher;
        this._animationMode = _animationMode;
        this._providerOverride = _providerOverride;
        this._uniqueId = `mat-radio-${++nextUniqueId}`;
        /**
         * The unique ID for the radio button.
         */
        this.id = this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
        /**
         * Whether this radio is checked.
         */
        this._checked = false;
        /**
         * Value assigned to this radio.
         */
        this._value = null;
        /**
         * Unregister function for _radioDispatcher
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        () => { });
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this.radioGroup = radioGroup;
        this._removeUniqueSelectionListener =
            _radioDispatcher.listen((/**
             * @param {?} id
             * @param {?} name
             * @return {?}
             */
            (id, name) => {
                if (id !== this.id && name === this.name) {
                    this.checked = false;
                }
            }));
    }
    /**
     * Whether this radio button is checked.
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        /** @type {?} */
        const newCheckedState = coerceBooleanProperty(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /**
     * The value of this radio button.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /**
     * Whether the label should appear after or before the radio button. Defaults to 'after'
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /**
     * Whether the radio button is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._setDisabled(coerceBooleanProperty(value));
    }
    /**
     * Whether the radio button is required.
     * @return {?}
     */
    get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
    }
    /**
     * Theme color of the radio button.
     * @return {?}
     */
    get color() {
        return this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            this._providerOverride && this._providerOverride.color || 'accent';
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set color(newValue) { this._color = newValue; }
    /**
     * ID of the native input element inside `<mat-radio-button>`
     * @return {?}
     */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /**
     * Focuses the radio button.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    _markForCheck() {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin && this.radioGroup) {
                this.radioGroup._touch();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
    }
    /**
     * Dispatch change event with current value.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        this.change.emit(new MatRadioChange(this, this._value));
    }
    /**
     * @return {?}
     */
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    _onInputChange(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        /** @type {?} */
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
    /**
     * Sets the disabled state and marks for check if a change occurred.
     * @protected
     * @param {?} value
     * @return {?}
     */
    _setDisabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            this._changeDetector.markForCheck();
        }
    }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) { return new (t || _MatRadioButtonBase)(ɵngcc0.ɵɵdirectiveInject(MatRadioGroup, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.UniqueSelectionDispatcher), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8)); };
_MatRadioButtonBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: _MatRadioButtonBase, viewQuery: function _MatRadioButtonBase_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._inputElement = _t.first);
    } }, inputs: { id: "id", checked: "checked", value: "value", labelPosition: "labelPosition", disabled: "disabled", required: "required", color: "color", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { change: "change" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
_MatRadioButtonBase.ctorParameters = () => [
    { type: MatRadioGroup, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: UniqueSelectionDispatcher },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_RADIO_DEFAULT_OPTIONS,] }] }
];
_MatRadioButtonBase.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: Input, args: ['aria-describedby',] }],
    checked: [{ type: Input }],
    value: [{ type: Input }],
    labelPosition: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    color: [{ type: Input }],
    change: [{ type: Output }],
    _inputElement: [{ type: ViewChild, args: ['input',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatRadioButtonBase, [{
        type: Directive
    }], function () { return [{ type: MatRadioGroup, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc2.UniqueSelectionDispatcher }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_RADIO_DEFAULT_OPTIONS]
            }] }]; }, { id: [{
            type: Input
        }], change: [{
            type: Output
        }], checked: [{
            type: Input
        }], value: [{
            type: Input
        }], labelPosition: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], color: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: Input,
            args: ['aria-describedby']
        }], _inputElement: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
if (false) {
    /** @type {?} */
    _MatRadioButtonBase.ngAcceptInputType_checked;
    /** @type {?} */
    _MatRadioButtonBase.ngAcceptInputType_disabled;
    /** @type {?} */
    _MatRadioButtonBase.ngAcceptInputType_required;
    /** @type {?} */
    _MatRadioButtonBase.ngAcceptInputType_disableRipple;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._uniqueId;
    /**
     * The unique ID for the radio button.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.id;
    /**
     * Analog to HTML 'name' attribute used to group radios for unique selection.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.name;
    /**
     * Used to set the 'aria-label' attribute on the underlying input element.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.ariaLabel;
    /**
     * The 'aria-labelledby' attribute takes precedence as the element's text alternative.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.ariaLabelledby;
    /**
     * The 'aria-describedby' attribute is read after the element's label and field type.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.ariaDescribedby;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._labelPosition;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._color;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     * @type {?}
     */
    _MatRadioButtonBase.prototype.change;
    /**
     * The parent radio group. May or may not be present.
     * @type {?}
     */
    _MatRadioButtonBase.prototype.radioGroup;
    /**
     * Whether this radio is checked.
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._checked;
    /**
     * Whether this radio is disabled.
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._disabled;
    /**
     * Whether this radio is required.
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._required;
    /**
     * Value assigned to this radio.
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._value;
    /**
     * Unregister function for _radioDispatcher
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._removeUniqueSelectionListener;
    /**
     * The native `<input type=radio>` element
     * @type {?}
     */
    _MatRadioButtonBase.prototype._inputElement;
    /**
     * @type {?}
     * @protected
     */
    _MatRadioButtonBase.prototype._changeDetector;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._radioDispatcher;
    /** @type {?} */
    _MatRadioButtonBase.prototype._animationMode;
    /**
     * @type {?}
     * @private
     */
    _MatRadioButtonBase.prototype._providerOverride;
}
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) { return ɵMatRadioButton_BaseFactory(t || MatRadioButton); };
MatRadioButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatRadioButton, selectors: [["mat-radio-button"]], hostAttrs: [1, "mat-radio-button"], hostVars: 17, hostBindings: function MatRadioButton_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focus", function MatRadioButton_focus_HostBindingHandler() { return ctx._inputElement.nativeElement.focus(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", 0 - 1)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        ɵngcc0.ɵɵclassProp("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matRadioButton"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 13, vars: 19, consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]], template: function MatRadioButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelement(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "input", 5, 6);
        ɵngcc0.ɵɵlistener("change", function MatRadioButton_Template_input_change_5_listener($event) { return ctx._onInputChange($event); })("click", function MatRadioButton_Template_input_click_5_listener($event) { return ctx._onInputClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelement(8, "div", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelementStart(10, "span", 10);
        ɵngcc0.ɵɵtext(11, "\u00A0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵattribute("for", ctx.inputId);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
        ɵngcc0.ɵɵattribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", ɵngcc0.ɵɵpureFunction0(18, _c1));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-radio-label-before", ctx.labelPosition == "before");
    } }, directives: [ɵngcc3.MatRipple], styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"], encapsulation: 2, changeDetection: 0 });
const ɵMatRadioButton_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRadioButton);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRadioButton, [{
        type: Component,
        args: [{
                selector: 'mat-radio-button',
                template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <div class=\"mat-radio-container\">\n    <div class=\"mat-radio-outer-circle\"></div>\n    <div class=\"mat-radio-inner-circle\"></div>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <div mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n\n  <!-- The label content for radio control. -->\n  <div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                inputs: ['disableRipple', 'tabIndex'],
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matRadioButton',
                host: {
                    'class': 'mat-radio-button',
                    '[class.mat-radio-checked]': 'checked',
                    '[class.mat-radio-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-primary]': 'color === "primary"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"',
                    // Needs to be -1 so the `focus` event still fires.
                    '[attr.tabindex]': '-1',
                    '[attr.id]': 'id',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null',
                    // Note: under normal conditions focus shouldn't land on this element, however it may be
                    // programmatically set, for example inside of a focus trap, in this case we want to forward
                    // the focus to the native element.
                    '(focus)': '_inputElement.nativeElement.focus()'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/radio/radio-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatRadioModule {
}
MatRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatRadioModule });
MatRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatRadioModule_Factory(t) { return new (t || MatRadioModule)(); }, imports: [[MatRippleModule, MatCommonModule],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatRadioModule, { declarations: function () { return [MatRadioGroup,
        MatRadioButton]; }, imports: function () { return [MatRippleModule, MatCommonModule]; }, exports: function () { return [MatRadioGroup,
        MatRadioButton,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRadioModule, [{
        type: NgModule,
        args: [{
                imports: [MatRippleModule, MatCommonModule],
                exports: [MatRadioGroup, MatRadioButton, MatCommonModule],
                declarations: [MatRadioGroup, MatRadioButton]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/radio/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioChange, MatRadioGroup, MatRadioModule, _MatRadioButtonBase };

//# sourceMappingURL=radio.js.map