(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/select'), require('@angular/material/form-field'), require('@angular/cdk/keycodes'), require('@angular/cdk/scrolling'), require('@angular/cdk/a11y'), require('rxjs'), require('rxjs/operators'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-spinner'), require('@angular/material/tooltip'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-mat-select-search', ['exports', '@angular/core', '@angular/forms', '@angular/material/core', '@angular/material/select', '@angular/material/form-field', '@angular/cdk/keycodes', '@angular/cdk/scrolling', '@angular/cdk/a11y', 'rxjs', 'rxjs/operators', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-spinner', '@angular/material/tooltip', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-mat-select-search'] = {}, global.ng.core, global.ng.forms, global.ng.material.core, global.ng.material.select, global.ng.material['form-field'], global.ng.cdk.keycodes, global.ng.cdk.scrolling, global.ng.cdk.a11y, global.rxjs, global.rxjs.operators, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material['progress-spinner'], global.ng.material.tooltip, global.ng.common));
}(this, function (exports, core, forms, core$1, select, formField, keycodes, scrolling, a11y, rxjs, operators, button, checkbox, icon, input, progressSpinner, tooltip, common) { 'use strict';

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
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
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
     * Directive for providing a custom clear-icon.
     * e.g.
     * <ngx-mat-select-search [formControl]="bankFilterCtrl">
     *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
     * </ngx-mat-select-search>
     */
    var MatSelectSearchClearDirective = /** @class */ (function () {
        function MatSelectSearchClearDirective() {
        }
        MatSelectSearchClearDirective = __decorate([
            core.Directive({
                selector: '[ngxMatSelectSearchClear]'
            })
        ], MatSelectSearchClearDirective);
        return MatSelectSearchClearDirective;
    }());

    /**
     * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /* tslint:disable:member-ordering component-selector */
    /**
     * Component providing an input field for searching MatSelect options.
     *
     * Example usage:
     *
     * interface Bank {
     *  id: string;
     *  name: string;
     * }
     *
     * @Component({
     *   selector: 'my-app-data-selection',
     *   template: `
     *     <mat-form-field>
     *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
     *         <mat-option>
     *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
     *         </mat-option>
     *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
     *           {{bank.name}}
     *         </mat-option>
     *       </mat-select>
     *     </mat-form-field>
     *   `
     * })
     * export class DataSelectionComponent implements OnInit, OnDestroy {
     *
     *   // control for the selected bank
     *   public bankCtrl: FormControl = new FormControl();
     *   // control for the MatSelect filter keyword
     *   public bankFilterCtrl: FormControl = new FormControl();
     *
     *   // list of banks
     *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
     *   // list of banks filtered by search keyword
     *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
     *
     *   // Subject that emits when the component has been destroyed.
     *   private _onDestroy = new Subject<void>();
     *
     *
     *   ngOnInit() {
     *     // load the initial bank list
     *     this.filteredBanks.next(this.banks.slice());
     *     // listen for search field value changes
     *     this.bankFilterCtrl.valueChanges
     *       .pipe(takeUntil(this._onDestroy))
     *       .subscribe(() => {
     *         this.filterBanks();
     *       });
     *   }
     *
     *   ngOnDestroy() {
     *     this._onDestroy.next();
     *     this._onDestroy.complete();
     *   }
     *
     *   private filterBanks() {
     *     if (!this.banks) {
     *       return;
     *     }
     *
     *     // get the search keyword
     *     let search = this.bankFilterCtrl.value;
     *     if (!search) {
     *       this.filteredBanks.next(this.banks.slice());
     *       return;
     *     } else {
     *       search = search.toLowerCase();
     *     }
     *
     *     // filter the banks
     *     this.filteredBanks.next(
     *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
     *     );
     *   }
     * }
     */
    var MatSelectSearchComponent = /** @class */ (function () {
        function MatSelectSearchComponent(matSelect, changeDetectorRef, _viewportRuler, matOption, liveAnnouncer, matFormField) {
            if (matOption === void 0) { matOption = null; }
            if (matFormField === void 0) { matFormField = null; }
            this.matSelect = matSelect;
            this.changeDetectorRef = changeDetectorRef;
            this._viewportRuler = _viewportRuler;
            this.matOption = matOption;
            this.liveAnnouncer = liveAnnouncer;
            this.matFormField = matFormField;
            /** Label of the search placeholder */
            this.placeholderLabel = 'Suche';
            /** Type of the search input field */
            this.type = 'text';
            /** Label to be shown when no entries are found. Set to null if no message should be shown. */
            this.noEntriesFoundLabel = 'Keine Optionen gefunden';
            /**
             *  Text that is appended to the currently active item label announced by screen readers,
             *  informing the user of the current index, value and total options.
             *  eg: Bank R (Germany) 1 of 6
            */
            this.indexAndLengthScreenReaderText = ' of ';
            /**
              * Whether or not the search field should be cleared after the dropdown menu is closed.
              * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
              */
            this.clearSearchInput = true;
            /** Whether to show the search-in-progress indicator */
            this.searching = false;
            /** Disables initial focusing of the input field */
            this.disableInitialFocus = false;
            /** Enable clear input on escape pressed */
            this.enableClearOnEscapePressed = false;
            /**
             * Prevents home / end key being propagated to mat-select,
             * allowing to move the cursor within the search input instead of navigating the options
             */
            this.preventHomeEndKeyPropagation = false;
            /** Disables scrolling to active options when option list changes. Useful for server-side search */
            this.disableScrollToActiveOnOptionsChanged = false;
            /** Adds 508 screen reader support for search box */
            this.ariaLabel = 'dropdown search';
            /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
            this.showToggleAllCheckbox = false;
            /** select all checkbox checked state */
            this.toggleAllCheckboxChecked = false;
            /** select all checkbox indeterminate state */
            this.toggleAllCheckboxIndeterminate = false;
            /** Display a message in a tooltip on the toggle-all checkbox */
            this.toggleAllCheckboxTooltipMessage = '';
            /** Define the position of the tooltip on the toggle-all checkbox. */
            this.toogleAllCheckboxTooltipPosition = 'below';
            /** Output emitter to send to parent component with the toggle all boolean */
            this.toggleAll = new core.EventEmitter();
            this.onChange = function (_) { };
            this.onTouched = function (_) { };
            /** Event that emits when the current value changes */
            this.change = new core.EventEmitter();
            /** Subject that emits when the component has been destroyed. */
            this._onDestroy = new rxjs.Subject();
        }
        MatSelectSearchComponent_1 = MatSelectSearchComponent;
        Object.defineProperty(MatSelectSearchComponent.prototype, "isInsideMatOption", {
            get: function () {
                return !!this.matOption;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
            /** Current search value */
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        MatSelectSearchComponent.prototype.ngOnInit = function () {
            var _this = this;
            // set custom panel class
            var panelClass = 'mat-select-search-panel';
            if (this.matSelect.panelClass) {
                if (Array.isArray(this.matSelect.panelClass)) {
                    this.matSelect.panelClass.push(panelClass);
                }
                else if (typeof this.matSelect.panelClass === 'string') {
                    this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
                }
                else if (typeof this.matSelect.panelClass === 'object') {
                    this.matSelect.panelClass[panelClass] = true;
                }
            }
            else {
                this.matSelect.panelClass = panelClass;
            }
            // set custom mat-option class if the component was placed inside a mat-option
            if (this.matOption) {
                this.matOption.disabled = true;
                this.matOption._getHostElement().classList.add('contains-mat-select-search');
            }
            else {
                console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
            }
            // when the select dropdown panel is opened or closed
            this.matSelect.openedChange
                .pipe(operators.delay(1), operators.takeUntil(this._onDestroy))
                .subscribe(function (opened) {
                if (opened) {
                    _this.updateInputWidth();
                    // focus the search field when opening
                    if (!_this.disableInitialFocus) {
                        _this._focus();
                    }
                }
                else {
                    // clear it when closing
                    if (_this.clearSearchInput) {
                        _this._reset();
                    }
                }
            });
            // set the first item active after the options changed
            this.matSelect.openedChange
                .pipe(operators.take(1))
                .pipe(operators.takeUntil(this._onDestroy))
                .subscribe(function () {
                if (_this.matSelect._keyManager) {
                    _this.matSelect._keyManager.change.pipe(operators.takeUntil(_this._onDestroy))
                        .subscribe(function () { return _this.adjustScrollTopToFitActiveOptionIntoView(); });
                }
                else {
                    console.log('_keyManager was not initialized.');
                }
                _this._options = _this.matSelect.options;
                // Closure variable for tracking the most recent first option.
                // In order to avoid avoid causing the list to
                // scroll to the top when options are added to the bottom of
                // the list (eg: infinite scroll), we compare only
                // the changes to the first options to determine if we
                // should set the first item as active.
                // This prevents unncessary scrolling to the top of the list
                // when options are appended, but allows the first item
                // in the list to be set as active by default when there
                // is no active selection
                var previousFirstOption = _this._options.toArray()[_this.getOptionsLengthOffset()];
                _this._options.changes
                    .pipe(operators.takeUntil(_this._onDestroy))
                    .subscribe(function (optionChanges) {
                    // Convert the QueryList to an array
                    var options = optionChanges.toArray();
                    var keyManager = _this.matSelect._keyManager;
                    if (keyManager && _this.matSelect.panelOpen) {
                        // avoid "expression has been changed" error
                        setTimeout(function () {
                            // set first item active and input width
                            // The true first item is offset by 1
                            var currentFirstOption = options[_this.getOptionsLengthOffset()];
                            // Check to see if the first option in these changes is different from the previous.
                            var firstOptionIsChanged = !_this.matSelect.compareWith(previousFirstOption, currentFirstOption);
                            // CASE: The first option is different now.
                            // Indiciates we should set it as active and scroll to the top.
                            if (firstOptionIsChanged) {
                                keyManager.setFirstItemActive();
                            }
                            // Update our reference
                            previousFirstOption = currentFirstOption;
                            // wait for panel width changes
                            setTimeout(function () {
                                _this.updateInputWidth();
                            });
                            // set no entries found class on mat option
                            if (_this.matOption) {
                                if (_this._noEntriesFound()) {
                                    _this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                                }
                                else {
                                    _this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                                }
                            }
                            if (!_this.disableScrollToActiveOnOptionsChanged) {
                                _this.adjustScrollTopToFitActiveOptionIntoView();
                            }
                        }, 1);
                    }
                });
            });
            // detect changes when the input changes
            this.change
                .pipe(operators.takeUntil(this._onDestroy))
                .subscribe(function () {
                _this.changeDetectorRef.detectChanges();
            });
            // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
            this._viewportRuler.change()
                .pipe(operators.takeUntil(this._onDestroy))
                .subscribe(function () {
                if (_this.matSelect.panelOpen) {
                    _this.updateInputWidth();
                }
            });
            this.initMultipleHandling();
        };
        MatSelectSearchComponent.prototype._emitSelectAllBooleanToParent = function (state) {
            this.toggleAll.emit(state);
        };
        MatSelectSearchComponent.prototype.ngOnDestroy = function () {
            this._onDestroy.next();
            this._onDestroy.complete();
        };
        MatSelectSearchComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // update view when available options change
            this.matSelect.openedChange
                .pipe(operators.take(1), operators.takeUntil(this._onDestroy)).subscribe(function () {
                _this.matSelect.options.changes
                    .pipe(operators.takeUntil(_this._onDestroy))
                    .subscribe(function () {
                    _this.changeDetectorRef.markForCheck();
                });
            });
        };
        MatSelectSearchComponent.prototype._isToggleAllCheckboxVisible = function () {
            return this.matSelect.multiple && this.showToggleAllCheckbox;
        };
        /**
         * Handles the key down event with MatSelect.
         * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
         * @param event
         */
        MatSelectSearchComponent.prototype._handleKeydown = function (event) {
            // Prevent propagation for all alphanumeric characters in order to avoid selection issues
            if ((event.key && event.key.length === 1) ||
                (event.keyCode >= keycodes.A && event.keyCode <= keycodes.Z) ||
                (event.keyCode >= keycodes.ZERO && event.keyCode <= keycodes.NINE) ||
                (event.keyCode === keycodes.SPACE)
                || (this.preventHomeEndKeyPropagation && (event.keyCode === keycodes.HOME || event.keyCode === keycodes.END))) {
                event.stopPropagation();
            }
            // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
            if (this.enableClearOnEscapePressed === true && event.keyCode === keycodes.ESCAPE && this.value) {
                this._reset(true);
                event.stopPropagation();
            }
        };
        /**
         * Handles the key up event with MatSelect.
         * Allows e.g. the announcing of the currently activeDescendant by screen readers.
         */
        MatSelectSearchComponent.prototype._handleKeyup = function (event) {
            if (event.keyCode === keycodes.UP_ARROW || event.keyCode === keycodes.DOWN_ARROW) {
                var ariaActiveDescendantId_1 = this.matSelect._getAriaActiveDescendant();
                var index = this._options.toArray().findIndex(function (item) { return item.id === ariaActiveDescendantId_1; });
                if (index !== -1) {
                    var activeDescendant = this._options.toArray()[index];
                    this.liveAnnouncer.announce(activeDescendant.viewValue + ' '
                        + this.getAriaIndex(index)
                        + this.indexAndLengthScreenReaderText
                        + this.getAriaLength());
                }
            }
        };
        /**
         * Calculate the index of the current option, taking the offset to length into account.
         * examples:
         *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
         *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
         */
        MatSelectSearchComponent.prototype.getAriaIndex = function (optionIndex) {
            if (this.getOptionsLengthOffset() === 0) {
                return optionIndex + 1;
            }
            return optionIndex;
        };
        /**
         * Calculate the length of the options, taking the offset to length into account.
         * examples:
         *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
         *    Case 2 [1, 2, 3] will have length of options.length.
         */
        MatSelectSearchComponent.prototype.getAriaLength = function () {
            return this._options.toArray().length - this.getOptionsLengthOffset();
        };
        MatSelectSearchComponent.prototype.writeValue = function (value) {
            var valueChanged = value !== this._value;
            if (valueChanged) {
                this._value = value;
                this.change.emit(value);
            }
        };
        MatSelectSearchComponent.prototype.onInputChange = function (value) {
            var valueChanged = value !== this._value;
            if (valueChanged) {
                this.initMultiSelectedValues();
                this._value = value;
                this.onChange(value);
                this.change.emit(value);
            }
        };
        MatSelectSearchComponent.prototype.onBlur = function (value) {
            this.writeValue(value);
            this.onTouched();
        };
        MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * Focuses the search input field
         */
        MatSelectSearchComponent.prototype._focus = function () {
            if (!this.searchSelectInput || !this.matSelect.panel) {
                return;
            }
            // save and restore scrollTop of panel, since it will be reset by focus()
            // note: this is hacky
            var panel = this.matSelect.panel.nativeElement;
            var scrollTop = panel.scrollTop;
            // focus
            this.searchSelectInput.nativeElement.focus();
            panel.scrollTop = scrollTop;
        };
        /**
         * Resets the current search value
         * @param focus whether to focus after resetting
         */
        MatSelectSearchComponent.prototype._reset = function (focus) {
            if (!this.searchSelectInput) {
                return;
            }
            this.searchSelectInput.nativeElement.value = '';
            this.onInputChange('');
            if (this.matOption && !focus) {
                // remove no entries found class on mat option
                this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
            }
            if (focus) {
                this._focus();
            }
        };
        /**
         * Initializes handling <mat-select [multiple]="true">
         * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
         */
        MatSelectSearchComponent.prototype.initMultipleHandling = function () {
            var _this = this;
            // if <mat-select [multiple]="true">
            // store previously selected values and restore them when they are deselected
            // because the option is not available while we are currently filtering
            this.matSelect.valueChange
                .pipe(operators.takeUntil(this._onDestroy))
                .subscribe(function (values) {
                if (_this.matSelect.multiple) {
                    var restoreSelectedValues_1 = false;
                    if (_this._value && _this._value.length
                        && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                        if (!values || !Array.isArray(values)) {
                            values = [];
                        }
                        var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                        _this.previousSelectedValues.forEach(function (previousValue) {
                            if (!values.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })
                                && !optionValues_1.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })) {
                                // if a value that was selected before is deselected and not found in the options, it was deselected
                                // due to the filtering, so we restore it.
                                values.push(previousValue);
                                restoreSelectedValues_1 = true;
                            }
                        });
                    }
                    if (restoreSelectedValues_1) {
                        _this.matSelect._onChange(values);
                    }
                    _this.previousSelectedValues = values;
                }
            });
        };
        /**
         * Scrolls the currently active option into the view if it is not yet visible.
         */
        MatSelectSearchComponent.prototype.adjustScrollTopToFitActiveOptionIntoView = function () {
            if (this.matSelect.panel && this.matSelect.options.length > 0) {
                var matOptionHeight = this.getMatOptionHeight();
                var activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
                var labelCount = core$1._countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
                // If the component is in a MatOption, the activeItemIndex will be offset by one.
                var indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
                var currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
                var searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
                var amountOfVisibleOptions = Math.floor((select.SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
                var indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
                if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                    this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
                }
                else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                    this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight
                        - (select.SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
                }
            }
        };
        /**
         *  Set the width of the innerSelectSearch to fit even custom scrollbars
         *  And support all Operation Systems
         */
        MatSelectSearchComponent.prototype.updateInputWidth = function () {
            if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
                return;
            }
            var element = this.innerSelectSearch.nativeElement;
            var panelElement;
            while (element = element.parentElement) {
                if (element.classList.contains('mat-select-panel')) {
                    panelElement = element;
                    break;
                }
            }
            if (panelElement) {
                this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
            }
        };
        MatSelectSearchComponent.prototype.getMatOptionHeight = function () {
            if (this.matSelect.options.length > 0) {
                return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
            }
            return 0;
        };
        /**
         *  Initialize this.previousSelectedValues once the first filtering occurs.
         */
        MatSelectSearchComponent.prototype.initMultiSelectedValues = function () {
            if (this.matSelect.multiple && !this._value) {
                this.previousSelectedValues = this.matSelect.options
                    .filter(function (option) { return option.selected; })
                    .map(function (option) { return option.value; });
            }
        };
        /**
         * Returns whether the "no entries found" message should be displayed
         */
        MatSelectSearchComponent.prototype._noEntriesFound = function () {
            if (!this._options) {
                return;
            }
            return this.noEntriesFoundLabel && this.value && this._options.length === this.getOptionsLengthOffset();
        };
        /**
         * Determine the offset to length that can be caused by the optional matOption used as a search input.
         */
        MatSelectSearchComponent.prototype.getOptionsLengthOffset = function () {
            if (this.matOption) {
                return 1;
            }
            else {
                return 0;
            }
        };
        var MatSelectSearchComponent_1;
        MatSelectSearchComponent.ctorParameters = function () { return [
            { type: select.MatSelect, decorators: [{ type: core.Inject, args: [select.MatSelect,] }] },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: core$1.MatOption, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MatOption,] }] },
            { type: a11y.LiveAnnouncer },
            { type: formField.MatFormField, decorators: [{ type: core.Optional }, { type: core.Inject, args: [formField.MatFormField,] }] }
        ]; };
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "searching", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
        __decorate([
            core.Input()
        ], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
        __decorate([
            core.Output()
        ], MatSelectSearchComponent.prototype, "toggleAll", void 0);
        __decorate([
            core.ViewChild('searchSelectInput', { read: core.ElementRef, static: true })
        ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
        __decorate([
            core.ViewChild('innerSelectSearch', { read: core.ElementRef, static: true })
        ], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
        __decorate([
            core.ContentChild(MatSelectSearchClearDirective, { static: false })
        ], MatSelectSearchComponent.prototype, "clearIcon", void 0);
        __decorate([
            core.HostBinding('class.mat-select-search-inside-mat-option')
        ], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
        MatSelectSearchComponent = MatSelectSearchComponent_1 = __decorate([
            core.Component({
                selector: 'ngx-mat-select-search',
                template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\n\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\n                [color]=\"matFormField?.color\"\n                class=\"mat-select-search-toggle-all-checkbox\"\n                [checked]=\"toggleAllCheckboxChecked\"\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\n  ></mat-checkbox>\n\n  <input matInput\n         class=\"mat-select-search-input\"\n         autocomplete=\"off\"\n         [type]=\"type\"\n         [value]=\"value\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (keyup)=\"_handleKeyup($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n         [attr.aria-label]=\"ariaLabel\"\n  />\n  <mat-spinner *ngIf=\"searching\"\n          class=\"mat-select-search-spinner\"\n          diameter=\"16\"></mat-spinner>\n\n  <button mat-button\n          *ngIf=\"value && !searching\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\n\n</div>\n\n<div *ngIf=\"_noEntriesFound()\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return MatSelectSearchComponent_1; }),
                        multi: true
                    }
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}"]
            }),
            __param(0, core.Inject(select.MatSelect)),
            __param(3, core.Optional()), __param(3, core.Inject(core$1.MatOption)),
            __param(5, core.Optional()), __param(5, core.Inject(formField.MatFormField))
        ], MatSelectSearchComponent);
        return MatSelectSearchComponent;
    }());

    /**
     * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatSelectSearchVersion = '3.0.0';
    var NgxMatSelectSearchModule = /** @class */ (function () {
        function NgxMatSelectSearchModule() {
        }
        NgxMatSelectSearchModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    button.MatButtonModule,
                    checkbox.MatCheckboxModule,
                    icon.MatIconModule,
                    input.MatInputModule,
                    progressSpinner.MatProgressSpinnerModule,
                    tooltip.MatTooltipModule
                ],
                declarations: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ],
                exports: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ]
            })
        ], NgxMatSelectSearchModule);
        return NgxMatSelectSearchModule;
    }());

    exports.MatSelectSearchComponent = MatSelectSearchComponent;
    exports.MatSelectSearchVersion = MatSelectSearchVersion;
    exports.NgxMatSelectSearchModule = NgxMatSelectSearchModule;
    exports.ɵa = MatSelectSearchClearDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-mat-select-search.umd.js.map
