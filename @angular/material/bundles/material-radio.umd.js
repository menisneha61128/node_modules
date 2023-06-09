(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/core'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/cdk/collections'), require('@angular/forms'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@angular/material/radio', ['exports', '@angular/core', '@angular/material/core', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/cdk/collections', '@angular/forms', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.radio = {}), global.ng.core, global.ng.material.core, global.ng.cdk.a11y, global.ng.cdk.coercion, global.ng.cdk.collections, global.ng.forms, global.ng.platformBrowser.animations));
}(this, (function (exports, core, core$1, a11y, coercion, collections, forms, animations) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MAT_RADIO_DEFAULT_OPTIONS = new core.InjectionToken('mat-radio-default-options', {
        providedIn: 'root',
        factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
    });
    function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
        return {
            color: 'accent'
        };
    }
    // Increasing integer for generating unique ids for radio components.
    var nextUniqueId = 0;
    /**
     * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
     * allows it to support [(ngModel)] and ngControl.
     * @docs-private
     */
    var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MatRadioGroup; }),
        multi: true
    };
    /** Change event object emitted by MatRadio and MatRadioGroup. */
    var MatRadioChange = /** @class */ (function () {
        function MatRadioChange(
        /** The MatRadioButton that emits the change event. */
        source, 
        /** The value of the MatRadioButton. */
        value) {
            this.source = source;
            this.value = value;
        }
        return MatRadioChange;
    }());
    /**
     * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
     */
    var MatRadioGroup = /** @class */ (function () {
        function MatRadioGroup(_changeDetector) {
            this._changeDetector = _changeDetector;
            /** Selected value for the radio group. */
            this._value = null;
            /** The HTML name attribute applied to radio buttons in this group. */
            this._name = "mat-radio-group-" + nextUniqueId++;
            /** The currently selected radio button. Should match value. */
            this._selected = null;
            /** Whether the `value` has been set to its initial value. */
            this._isInitialized = false;
            /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
            this._labelPosition = 'after';
            /** Whether the radio group is disabled. */
            this._disabled = false;
            /** Whether the radio group is required. */
            this._required = false;
            /** The method to be called in order to update ngModel */
            this._controlValueAccessorChangeFn = function () { };
            /**
             * onTouch function registered via registerOnTouch (ControlValueAccessor).
             * @docs-private
             */
            this.onTouched = function () { };
            /**
             * Event emitted when the group value changes.
             * Change events are only emitted when the value changes due to user interaction with
             * a radio button (the same behavior as `<input type-"radio">`).
             */
            this.change = new core.EventEmitter();
        }
        Object.defineProperty(MatRadioGroup.prototype, "name", {
            /** Name of the radio button group. All radio buttons inside this group will use this name. */
            get: function () { return this._name; },
            set: function (value) {
                this._name = value;
                this._updateRadioButtonNames();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatRadioGroup.prototype, "labelPosition", {
            /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
            get: function () {
                return this._labelPosition;
            },
            set: function (v) {
                this._labelPosition = v === 'before' ? 'before' : 'after';
                this._markRadiosForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatRadioGroup.prototype, "value", {
            /**
             * Value for the radio-group. Should equal the value of the selected radio button if there is
             * a corresponding radio button with a matching value. If there is not such a corresponding
             * radio button, this value persists to be applied in case a new radio button is added with a
             * matching value.
             */
            get: function () { return this._value; },
            set: function (newValue) {
                if (this._value !== newValue) {
                    // Set this before proceeding to ensure no circular loop occurs with selection.
                    this._value = newValue;
                    this._updateSelectedRadioFromValue();
                    this._checkSelectedRadioButton();
                }
            },
            enumerable: true,
            configurable: true
        });
        MatRadioGroup.prototype._checkSelectedRadioButton = function () {
            if (this._selected && !this._selected.checked) {
                this._selected.checked = true;
            }
        };
        Object.defineProperty(MatRadioGroup.prototype, "selected", {
            /**
             * The currently selected radio button. If set to a new radio button, the radio group value
             * will be updated to match the new selected button.
             */
            get: function () { return this._selected; },
            set: function (selected) {
                this._selected = selected;
                this.value = selected ? selected.value : null;
                this._checkSelectedRadioButton();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatRadioGroup.prototype, "disabled", {
            /** Whether the radio group is disabled */
            get: function () { return this._disabled; },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
                this._markRadiosForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatRadioGroup.prototype, "required", {
            /** Whether the radio group is required */
            get: function () { return this._required; },
            set: function (value) {
                this._required = coercion.coerceBooleanProperty(value);
                this._markRadiosForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize properties once content children are available.
         * This allows us to propagate relevant attributes to associated buttons.
         */
        MatRadioGroup.prototype.ngAfterContentInit = function () {
            // Mark this component as initialized in AfterContentInit because the initial value can
            // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
            // NgModel occurs *after* the OnInit of the MatRadioGroup.
            this._isInitialized = true;
        };
        /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         */
        MatRadioGroup.prototype._touch = function () {
            if (this.onTouched) {
                this.onTouched();
            }
        };
        MatRadioGroup.prototype._updateRadioButtonNames = function () {
            var _this = this;
            if (this._radios) {
                this._radios.forEach(function (radio) {
                    radio.name = _this.name;
                    radio._markForCheck();
                });
            }
        };
        /** Updates the `selected` radio button from the internal _value state. */
        MatRadioGroup.prototype._updateSelectedRadioFromValue = function () {
            var _this = this;
            // If the value already matches the selected radio, do nothing.
            var isAlreadySelected = this._selected !== null && this._selected.value === this._value;
            if (this._radios && !isAlreadySelected) {
                this._selected = null;
                this._radios.forEach(function (radio) {
                    radio.checked = _this.value === radio.value;
                    if (radio.checked) {
                        _this._selected = radio;
                    }
                });
            }
        };
        /** Dispatch change event with current selection and group value. */
        MatRadioGroup.prototype._emitChangeEvent = function () {
            if (this._isInitialized) {
                this.change.emit(new MatRadioChange(this._selected, this._value));
            }
        };
        MatRadioGroup.prototype._markRadiosForCheck = function () {
            if (this._radios) {
                this._radios.forEach(function (radio) { return radio._markForCheck(); });
            }
        };
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param value
         */
        MatRadioGroup.prototype.writeValue = function (value) {
            this.value = value;
            this._changeDetector.markForCheck();
        };
        /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         */
        MatRadioGroup.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         */
        MatRadioGroup.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param isDisabled Whether the control should be disabled.
         */
        MatRadioGroup.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this._changeDetector.markForCheck();
        };
        MatRadioGroup.decorators = [
            { type: core.Directive, args: [{
                        selector: 'mat-radio-group',
                        exportAs: 'matRadioGroup',
                        providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                        host: {
                            'role': 'radiogroup',
                            'class': 'mat-radio-group',
                        },
                    },] }
        ];
        /** @nocollapse */
        MatRadioGroup.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        MatRadioGroup.propDecorators = {
            change: [{ type: core.Output }],
            _radios: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return MatRadioButton; }), { descendants: true },] }],
            color: [{ type: core.Input }],
            name: [{ type: core.Input }],
            labelPosition: [{ type: core.Input }],
            value: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            required: [{ type: core.Input }]
        };
        return MatRadioGroup;
    }());
    // Boilerplate for applying mixins to MatRadioButton.
    /** @docs-private */
    var MatRadioButtonBase = /** @class */ (function () {
        function MatRadioButtonBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatRadioButtonBase;
    }());
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    var _MatRadioButtonMixinBase = core$1.mixinDisableRipple(core$1.mixinTabIndex(MatRadioButtonBase));
    /**
     * Base class with all of the `MatRadioButton` functionality.
     * @docs-private
     */
    var _MatRadioButtonBase = /** @class */ (function (_super) {
        __extends(_MatRadioButtonBase, _super);
        function _MatRadioButtonBase(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride) {
            var _this = _super.call(this, elementRef) || this;
            _this._changeDetector = _changeDetector;
            _this._focusMonitor = _focusMonitor;
            _this._radioDispatcher = _radioDispatcher;
            _this._animationMode = _animationMode;
            _this._providerOverride = _providerOverride;
            _this._uniqueId = "mat-radio-" + ++nextUniqueId;
            /** The unique ID for the radio button. */
            _this.id = _this._uniqueId;
            /**
             * Event emitted when the checked state of this radio button changes.
             * Change events are only emitted when the value changes due to user interaction with
             * the radio button (the same behavior as `<input type-"radio">`).
             */
            _this.change = new core.EventEmitter();
            /** Whether this radio is checked. */
            _this._checked = false;
            /** Value assigned to this radio. */
            _this._value = null;
            /** Unregister function for _radioDispatcher */
            _this._removeUniqueSelectionListener = function () { };
            // Assertions. Ideally these should be stripped out by the compiler.
            // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
            _this.radioGroup = radioGroup;
            _this._removeUniqueSelectionListener =
                _radioDispatcher.listen(function (id, name) {
                    if (id !== _this.id && name === _this.name) {
                        _this.checked = false;
                    }
                });
            return _this;
        }
        Object.defineProperty(_MatRadioButtonBase.prototype, "checked", {
            /** Whether this radio button is checked. */
            get: function () { return this._checked; },
            set: function (value) {
                var newCheckedState = coercion.coerceBooleanProperty(value);
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "value", {
            /** The value of this radio button. */
            get: function () { return this._value; },
            set: function (value) {
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "labelPosition", {
            /** Whether the label should appear after or before the radio button. Defaults to 'after' */
            get: function () {
                return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
            },
            set: function (value) {
                this._labelPosition = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "disabled", {
            /** Whether the radio button is disabled. */
            get: function () {
                return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
            },
            set: function (value) {
                this._setDisabled(coercion.coerceBooleanProperty(value));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "required", {
            /** Whether the radio button is required. */
            get: function () {
                return this._required || (this.radioGroup && this.radioGroup.required);
            },
            set: function (value) {
                this._required = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "color", {
            /** Theme color of the radio button. */
            get: function () {
                return this._color ||
                    (this.radioGroup && this.radioGroup.color) ||
                    this._providerOverride && this._providerOverride.color || 'accent';
            },
            set: function (newValue) { this._color = newValue; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatRadioButtonBase.prototype, "inputId", {
            /** ID of the native input element inside `<mat-radio-button>` */
            get: function () { return (this.id || this._uniqueId) + "-input"; },
            enumerable: true,
            configurable: true
        });
        /** Focuses the radio button. */
        _MatRadioButtonBase.prototype.focus = function (options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        };
        /**
         * Marks the radio button as needing checking for change detection.
         * This method is exposed because the parent radio group will directly
         * update bound properties of the radio button.
         */
        _MatRadioButtonBase.prototype._markForCheck = function () {
            // When group value changes, the button will not be notified. Use `markForCheck` to explicit
            // update radio button's status
            this._changeDetector.markForCheck();
        };
        _MatRadioButtonBase.prototype.ngOnInit = function () {
            if (this.radioGroup) {
                // If the radio is inside a radio group, determine if it should be checked
                this.checked = this.radioGroup.value === this._value;
                // Copy name from parent radio group
                this.name = this.radioGroup.name;
            }
        };
        _MatRadioButtonBase.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._focusMonitor
                .monitor(this._elementRef, true)
                .subscribe(function (focusOrigin) {
                if (!focusOrigin && _this.radioGroup) {
                    _this.radioGroup._touch();
                }
            });
        };
        _MatRadioButtonBase.prototype.ngOnDestroy = function () {
            this._focusMonitor.stopMonitoring(this._elementRef);
            this._removeUniqueSelectionListener();
        };
        /** Dispatch change event with current value. */
        _MatRadioButtonBase.prototype._emitChangeEvent = function () {
            this.change.emit(new MatRadioChange(this, this._value));
        };
        _MatRadioButtonBase.prototype._isRippleDisabled = function () {
            return this.disableRipple || this.disabled;
        };
        _MatRadioButtonBase.prototype._onInputClick = function (event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `radio-button` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
        };
        /**
         * Triggered when the radio button received a click or the input recognized any change.
         * Clicking on a label element, will trigger a change event on the associated input.
         */
        _MatRadioButtonBase.prototype._onInputChange = function (event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
            var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
            this.checked = true;
            this._emitChangeEvent();
            if (this.radioGroup) {
                this.radioGroup._controlValueAccessorChangeFn(this.value);
                if (groupValueChanged) {
                    this.radioGroup._emitChangeEvent();
                }
            }
        };
        /** Sets the disabled state and marks for check if a change occurred. */
        _MatRadioButtonBase.prototype._setDisabled = function (value) {
            if (this._disabled !== value) {
                this._disabled = value;
                this._changeDetector.markForCheck();
            }
        };
        _MatRadioButtonBase.decorators = [
            { type: core.Directive }
        ];
        /** @nocollapse */
        _MatRadioButtonBase.ctorParameters = function () { return [
            { type: MatRadioGroup, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor },
            { type: collections.UniqueSelectionDispatcher },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_RADIO_DEFAULT_OPTIONS,] }] }
        ]; };
        _MatRadioButtonBase.propDecorators = {
            id: [{ type: core.Input }],
            name: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
            ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }],
            ariaDescribedby: [{ type: core.Input, args: ['aria-describedby',] }],
            checked: [{ type: core.Input }],
            value: [{ type: core.Input }],
            labelPosition: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            required: [{ type: core.Input }],
            color: [{ type: core.Input }],
            change: [{ type: core.Output }],
            _inputElement: [{ type: core.ViewChild, args: ['input',] }]
        };
        return _MatRadioButtonBase;
    }(_MatRadioButtonMixinBase));
    /**
     * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
     */
    var MatRadioButton = /** @class */ (function (_super) {
        __extends(MatRadioButton, _super);
        function MatRadioButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatRadioButton.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-radio-button',
                        template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <div class=\"mat-radio-container\">\n    <div class=\"mat-radio-outer-circle\"></div>\n    <div class=\"mat-radio-inner-circle\"></div>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <div mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n\n  <!-- The label content for radio control. -->\n  <div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                        inputs: ['disableRipple', 'tabIndex'],
                        encapsulation: core.ViewEncapsulation.None,
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
                            '(focus)': '_inputElement.nativeElement.focus()',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
                    }] }
        ];
        return MatRadioButton;
    }(_MatRadioButtonBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatRadioModule = /** @class */ (function () {
        function MatRadioModule() {
        }
        MatRadioModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [core$1.MatRippleModule, core$1.MatCommonModule],
                        exports: [MatRadioGroup, MatRadioButton, core$1.MatCommonModule],
                        declarations: [MatRadioGroup, MatRadioButton],
                    },] }
        ];
        return MatRadioModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MAT_RADIO_DEFAULT_OPTIONS = MAT_RADIO_DEFAULT_OPTIONS;
    exports.MAT_RADIO_DEFAULT_OPTIONS_FACTORY = MAT_RADIO_DEFAULT_OPTIONS_FACTORY;
    exports.MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR;
    exports.MatRadioButton = MatRadioButton;
    exports.MatRadioChange = MatRadioChange;
    exports.MatRadioGroup = MatRadioGroup;
    exports.MatRadioModule = MatRadioModule;
    exports._MatRadioButtonBase = _MatRadioButtonBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-radio.umd.js.map
