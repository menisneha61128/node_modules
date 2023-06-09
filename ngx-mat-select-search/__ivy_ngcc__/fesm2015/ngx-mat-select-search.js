import { __decorate, __param } from 'tslib';
import { Directive, EventEmitter, Inject, ChangeDetectorRef, Optional, Input, Output, ViewChild, ElementRef, ContentChild, HostBinding, Component, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { _countGroupLabelsBeforeOption, MatOption } from '@angular/material/core';
import { SELECT_PANEL_MAX_HEIGHT, MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { A, Z, ZERO, NINE, SPACE, HOME, END, ESCAPE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { delay, takeUntil, take } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/material/input';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/material/checkbox';
import * as ɵngcc6 from '@angular/material/tooltip';
import * as ɵngcc7 from '@angular/material/progress-spinner';
import * as ɵngcc8 from '@angular/material/button';
import * as ɵngcc9 from '@angular/material/icon';
import * as ɵngcc10 from '@angular/material/select';
import * as ɵngcc11 from '@angular/material/core';
import * as ɵngcc12 from '@angular/material/form-field';

const _c0 = ["searchSelectInput"];
const _c1 = ["innerSelectSearch"];
function MatSelectSearchComponent_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-checkbox", 9);
    ɵngcc0.ɵɵlistener("change", function MatSelectSearchComponent_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6._emitSelectAllBooleanToParent($event.checked); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r1.matFormField == null ? null : ctx_r1.matFormField.color)("checked", ctx_r1.toggleAllCheckboxChecked)("indeterminate", ctx_r1.toggleAllCheckboxIndeterminate)("matTooltip", ctx_r1.toggleAllCheckboxTooltipMessage)("matTooltipPosition", ctx_r1.toogleAllCheckboxTooltipPosition);
} }
function MatSelectSearchComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-spinner", 10);
} }
function MatSelectSearchComponent_button_7_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "clearIcon; else defaultIcon"]);
} }
function MatSelectSearchComponent_button_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "close");
    ɵngcc0.ɵɵelementEnd();
} }
function MatSelectSearchComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function MatSelectSearchComponent_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11._reset(true); });
    ɵngcc0.ɵɵtemplate(1, MatSelectSearchComponent_button_7_1_Template, 1, 0, undefined, 12);
    ɵngcc0.ɵɵtemplate(2, MatSelectSearchComponent_button_7_ng_template_2_Template, 2, 0, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵngcc0.ɵɵreference(3);
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.clearIcon)("ngIfElse", _r9);
} }
function MatSelectSearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.noEntriesFoundLabel, "\n");
} }
const _c2 = [[["", 8, "mat-select-search-custom-header-content"]], [["", "ngxMatSelectSearchClear", ""]]];
const _c3 = function (a0, a1) { return { "mat-select-search-inner-multiple": a0, "mat-select-search-inner-toggle-all": a1 }; };
const _c4 = [".mat-select-search-custom-header-content", "[ngxMatSelectSearchClear]"];
let MatSelectSearchClearDirective = class MatSelectSearchClearDirective {
};
MatSelectSearchClearDirective.ɵfac = function MatSelectSearchClearDirective_Factory(t) { return new (t || MatSelectSearchClearDirective)(); };
MatSelectSearchClearDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSelectSearchClearDirective, selectors: [["", "ngxMatSelectSearchClear", ""]] });

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MatSelectSearchComponent_1;
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
let MatSelectSearchComponent = MatSelectSearchComponent_1 = class MatSelectSearchComponent {
    constructor(matSelect, changeDetectorRef, _viewportRuler, matOption = null, liveAnnouncer, matFormField = null) {
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
        this.toggleAll = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        /** Event that emits when the current value changes */
        this.change = new EventEmitter();
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    get isInsideMatOption() {
        return !!this.matOption;
    }
    /** Current search value */
    get value() {
        return this._value;
    }
    ngOnInit() {
        // set custom panel class
        const panelClass = 'mat-select-search-panel';
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
            .pipe(delay(1), takeUntil(this._onDestroy))
            .subscribe((opened) => {
            if (opened) {
                this.updateInputWidth();
                // focus the search field when opening
                if (!this.disableInitialFocus) {
                    this._focus();
                }
            }
            else {
                // clear it when closing
                if (this.clearSearchInput) {
                    this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1))
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect._keyManager) {
                this.matSelect._keyManager.change.pipe(takeUntil(this._onDestroy))
                    .subscribe(() => this.adjustScrollTopToFitActiveOptionIntoView());
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            this._options = this.matSelect.options;
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
            let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];
            this._options.changes
                .pipe(takeUntil(this._onDestroy))
                .subscribe((optionChanges) => {
                // Convert the QueryList to an array
                const options = optionChanges.toArray();
                const keyManager = this.matSelect._keyManager;
                if (keyManager && this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(() => {
                        // set first item active and input width
                        // The true first item is offset by 1
                        const currentFirstOption = options[this.getOptionsLengthOffset()];
                        // Check to see if the first option in these changes is different from the previous.
                        const firstOptionIsChanged = !this.matSelect.compareWith(previousFirstOption, currentFirstOption);
                        // CASE: The first option is different now.
                        // Indiciates we should set it as active and scroll to the top.
                        if (firstOptionIsChanged) {
                            keyManager.setFirstItemActive();
                        }
                        // Update our reference
                        previousFirstOption = currentFirstOption;
                        // wait for panel width changes
                        setTimeout(() => {
                            this.updateInputWidth();
                        });
                        // set no entries found class on mat option
                        if (this.matOption) {
                            if (this._noEntriesFound()) {
                                this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                            }
                            else {
                                this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                            }
                        }
                        if (!this.disableScrollToActiveOnOptionsChanged) {
                            this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }, 1);
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            this.changeDetectorRef.detectChanges();
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect.panelOpen) {
                this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
    }
    _emitSelectAllBooleanToParent(state) {
        this.toggleAll.emit(state);
    }
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    ngAfterViewInit() {
        // update view when available options change
        this.matSelect.openedChange
            .pipe(take(1), takeUntil(this._onDestroy)).subscribe(() => {
            this.matSelect.options.changes
                .pipe(takeUntil(this._onDestroy))
                .subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        });
    }
    _isToggleAllCheckboxVisible() {
        return this.matSelect.multiple && this.showToggleAllCheckbox;
    }
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    _handleKeydown(event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE) ||
            (event.keyCode === SPACE)
            || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))) {
            event.stopPropagation();
        }
        // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
        if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
            this._reset(true);
            event.stopPropagation();
        }
    }
    /**
     * Handles the key up event with MatSelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    _handleKeyup(event) {
        if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
            const ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();
            const index = this._options.toArray().findIndex(item => item.id === ariaActiveDescendantId);
            if (index !== -1) {
                const activeDescendant = this._options.toArray()[index];
                this.liveAnnouncer.announce(activeDescendant.viewValue + ' '
                    + this.getAriaIndex(index)
                    + this.indexAndLengthScreenReaderText
                    + this.getAriaLength());
            }
        }
    }
    /**
     * Calculate the index of the current option, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
     *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
     */
    getAriaIndex(optionIndex) {
        if (this.getOptionsLengthOffset() === 0) {
            return optionIndex + 1;
        }
        return optionIndex;
    }
    /**
     * Calculate the length of the options, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
     *    Case 2 [1, 2, 3] will have length of options.length.
     */
    getAriaLength() {
        return this._options.toArray().length - this.getOptionsLengthOffset();
    }
    writeValue(value) {
        const valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    }
    onInputChange(value) {
        const valueChanged = value !== this._value;
        if (valueChanged) {
            this.initMultiSelectedValues();
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    }
    onBlur(value) {
        this.writeValue(value);
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Focuses the search input field
     */
    _focus() {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        const panel = this.matSelect.panel.nativeElement;
        const scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    }
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    _reset(focus) {
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
    }
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    initMultipleHandling() {
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(takeUntil(this._onDestroy))
            .subscribe((values) => {
            if (this.matSelect.multiple) {
                let restoreSelectedValues = false;
                if (this._value && this._value.length
                    && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    const optionValues = this.matSelect.options.map(option => option.value);
                    this.previousSelectedValues.forEach(previousValue => {
                        if (!values.some(v => this.matSelect.compareWith(v, previousValue))
                            && !optionValues.some(v => this.matSelect.compareWith(v, previousValue))) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues = true;
                        }
                    });
                }
                if (restoreSelectedValues) {
                    this.matSelect._onChange(values);
                }
                this.previousSelectedValues = values;
            }
        });
    }
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    adjustScrollTopToFitActiveOptionIntoView() {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            const matOptionHeight = this.getMatOptionHeight();
            const activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            const labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            const indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            const currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            const searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            const amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
            const indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight
                    - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
            }
        }
    }
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    updateInputWidth() {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        let element = this.innerSelectSearch.nativeElement;
        let panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    }
    getMatOptionHeight() {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     */
    initMultiSelectedValues() {
        if (this.matSelect.multiple && !this._value) {
            this.previousSelectedValues = this.matSelect.options
                .filter(option => option.selected)
                .map(option => option.value);
        }
    }
    /**
     * Returns whether the "no entries found" message should be displayed
     */
    _noEntriesFound() {
        if (!this._options) {
            return;
        }
        return this.noEntriesFoundLabel && this.value && this._options.length === this.getOptionsLengthOffset();
    }
    /**
     * Determine the offset to length that can be caused by the optional matOption used as a search input.
     */
    getOptionsLengthOffset() {
        if (this.matOption) {
            return 1;
        }
        else {
            return 0;
        }
    }
};
MatSelectSearchComponent.ɵfac = function MatSelectSearchComponent_Factory(t) { return new (t || MatSelectSearchComponent)(ɵngcc0.ɵɵdirectiveInject(MatSelect), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵdirectiveInject(MatOption, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.LiveAnnouncer), ɵngcc0.ɵɵdirectiveInject(MatFormField, 8)); };
MatSelectSearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSelectSearchComponent, selectors: [["ngx-mat-select-search"]], contentQueries: function MatSelectSearchComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatSelectSearchClearDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.clearIcon = _t.first);
    } }, viewQuery: function MatSelectSearchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.searchSelectInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.innerSelectSearch = _t.first);
    } }, hostVars: 2, hostBindings: function MatSelectSearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-select-search-inside-mat-option", ctx.isInsideMatOption);
    } }, inputs: { placeholderLabel: "placeholderLabel", type: "type", noEntriesFoundLabel: "noEntriesFoundLabel", indexAndLengthScreenReaderText: "indexAndLengthScreenReaderText", clearSearchInput: "clearSearchInput", searching: "searching", disableInitialFocus: "disableInitialFocus", enableClearOnEscapePressed: "enableClearOnEscapePressed", preventHomeEndKeyPropagation: "preventHomeEndKeyPropagation", disableScrollToActiveOnOptionsChanged: "disableScrollToActiveOnOptionsChanged", ariaLabel: "ariaLabel", showToggleAllCheckbox: "showToggleAllCheckbox", toggleAllCheckboxChecked: "toggleAllCheckboxChecked", toggleAllCheckboxIndeterminate: "toggleAllCheckboxIndeterminate", toggleAllCheckboxTooltipMessage: "toggleAllCheckboxTooltipMessage", toogleAllCheckboxTooltipPosition: "toogleAllCheckboxTooltipPosition" }, outputs: { toggleAll: "toggleAll" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatSelectSearchComponent_1),
                multi: true
            }
        ])], ngContentSelectors: _c4, decls: 10, vars: 12, consts: [["matInput", "", 1, "mat-select-search-input", "mat-select-search-hidden"], [1, "mat-select-search-inner", "mat-typography", "mat-datepicker-content", "mat-tab-header", 3, "ngClass"], ["innerSelectSearch", ""], ["class", "mat-select-search-toggle-all-checkbox", "matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change", 4, "ngIf"], ["matInput", "", "autocomplete", "off", 1, "mat-select-search-input", 3, "type", "value", "placeholder", "keydown", "keyup", "input", "blur"], ["searchSelectInput", ""], ["class", "mat-select-search-spinner", "diameter", "16", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", "class", "mat-select-search-clear", 3, "click", 4, "ngIf"], ["class", "mat-select-search-no-entries-found", 4, "ngIf"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change"], ["diameter", "16", 1, "mat-select-search-spinner"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultIcon", ""], [1, "mat-select-search-no-entries-found"]], template: function MatSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelement(0, "input", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵtemplate(3, MatSelectSearchComponent_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4, 5);
        ɵngcc0.ɵɵlistener("keydown", function MatSelectSearchComponent_Template_input_keydown_4_listener($event) { return ctx._handleKeydown($event); })("keyup", function MatSelectSearchComponent_Template_input_keyup_4_listener($event) { return ctx._handleKeyup($event); })("input", function MatSelectSearchComponent_Template_input_input_4_listener($event) { return ctx.onInputChange($event.target.value); })("blur", function MatSelectSearchComponent_Template_input_blur_4_listener($event) { return ctx.onBlur($event.target.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, MatSelectSearchComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 6);
        ɵngcc0.ɵɵtemplate(7, MatSelectSearchComponent_button_7_Template, 4, 2, "button", 7);
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, MatSelectSearchComponent_div_9_Template, 2, 1, "div", 8);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c3, ctx.matSelect.multiple, ctx._isToggleAllCheckboxVisible()));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx._isToggleAllCheckboxVisible());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("type", ctx.type)("value", ctx.value)("placeholder", ctx.placeholderLabel);
        ɵngcc0.ɵɵattribute("aria-label", ctx.ariaLabel);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.searching);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && !ctx.searching);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx._noEntriesFound());
    } }, directives: [ɵngcc3.MatInput, ɵngcc4.NgClass, ɵngcc4.NgIf, ɵngcc5.MatCheckbox, ɵngcc6.MatTooltip, ɵngcc7.MatSpinner, ɵngcc8.MatButton, ɵngcc9.MatIcon], styles: [".mat-select-search-hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-select-search-inner[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple[_ngcontent-%COMP%]{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-select-search-inner[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{flex-basis:auto}.mat-select-search-inner[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{-ms-user-select:text}  .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input[_ngcontent-%COMP%]{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found[_ngcontent-%COMP%]{padding:16px}.mat-select-search-clear[_ngcontent-%COMP%]{position:absolute;right:4px;top:5px}.mat-select-search-spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}.mat-select-search-inside-mat-option[_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;height:3em;line-height:3em}.mat-select-search-inside-mat-option[_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%]{top:3px}  .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}  .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}  .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}  .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%]{padding-left:16px;padding-bottom:2px}"], changeDetection: 0 });
MatSelectSearchComponent.ctorParameters = () => [
    { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
    { type: ChangeDetectorRef },
    { type: ViewportRuler },
    { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] },
    { type: LiveAnnouncer },
    { type: MatFormField, decorators: [{ type: Optional }, { type: Inject, args: [MatFormField,] }] }
];
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "type", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "searching", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
__decorate([
    Output()
], MatSelectSearchComponent.prototype, "toggleAll", void 0);
__decorate([
    ViewChild('searchSelectInput', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
__decorate([
    ViewChild('innerSelectSearch', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
__decorate([
    ContentChild(MatSelectSearchClearDirective, { static: false })
], MatSelectSearchComponent.prototype, "clearIcon", void 0);
__decorate([
    HostBinding('class.mat-select-search-inside-mat-option')
], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
MatSelectSearchComponent = MatSelectSearchComponent_1 = __decorate([ __param(0, Inject(MatSelect)),
    __param(3, Optional()), __param(3, Inject(MatOption)),
    __param(5, Optional()), __param(5, Inject(MatFormField))
], MatSelectSearchComponent);

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MatSelectSearchVersion = '3.0.0';
let NgxMatSelectSearchModule = class NgxMatSelectSearchModule {
};
NgxMatSelectSearchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxMatSelectSearchModule });
NgxMatSelectSearchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxMatSelectSearchModule_Factory(t) { return new (t || NgxMatSelectSearchModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatTooltipModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSelectSearchClearDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMatSelectSearchClear]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSelectSearchComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-select-search',
                template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\n\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\n                [color]=\"matFormField?.color\"\n                class=\"mat-select-search-toggle-all-checkbox\"\n                [checked]=\"toggleAllCheckboxChecked\"\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\n  ></mat-checkbox>\n\n  <input matInput\n         class=\"mat-select-search-input\"\n         autocomplete=\"off\"\n         [type]=\"type\"\n         [value]=\"value\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (keyup)=\"_handleKeyup($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n         [attr.aria-label]=\"ariaLabel\"\n  />\n  <mat-spinner *ngIf=\"searching\"\n          class=\"mat-select-search-spinner\"\n          diameter=\"16\"></mat-spinner>\n\n  <button mat-button\n          *ngIf=\"value && !searching\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\n\n</div>\n\n<div *ngIf=\"_noEntriesFound()\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatSelectSearchComponent_1),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}"]
            }]
    }], function () { return [{ type: ɵngcc10.MatSelect, decorators: [{
                type: Inject,
                args: [MatSelect]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.ViewportRuler }, { type: ɵngcc11.MatOption, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MatOption]
            }] }, { type: ɵngcc2.LiveAnnouncer }, { type: ɵngcc12.MatFormField, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MatFormField]
            }] }]; }, { placeholderLabel: [{
            type: Input
        }], type: [{
            type: Input
        }], noEntriesFoundLabel: [{
            type: Input
        }], indexAndLengthScreenReaderText: [{
            type: Input
        }], clearSearchInput: [{
            type: Input
        }], searching: [{
            type: Input
        }], disableInitialFocus: [{
            type: Input
        }], enableClearOnEscapePressed: [{
            type: Input
        }], preventHomeEndKeyPropagation: [{
            type: Input
        }], disableScrollToActiveOnOptionsChanged: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], showToggleAllCheckbox: [{
            type: Input
        }], toggleAllCheckboxChecked: [{
            type: Input
        }], toggleAllCheckboxIndeterminate: [{
            type: Input
        }], toggleAllCheckboxTooltipMessage: [{
            type: Input
        }], toogleAllCheckboxTooltipPosition: [{
            type: Input
        }], toggleAll: [{
            type: Output
        }], isInsideMatOption: [{
            type: HostBinding,
            args: ['class.mat-select-search-inside-mat-option']
        }], searchSelectInput: [{
            type: ViewChild,
            args: ['searchSelectInput', { read: ElementRef, static: true }]
        }], innerSelectSearch: [{
            type: ViewChild,
            args: ['innerSelectSearch', { read: ElementRef, static: true }]
        }], clearIcon: [{
            type: ContentChild,
            args: [MatSelectSearchClearDirective, { static: false }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxMatSelectSearchModule, { declarations: function () { return [MatSelectSearchComponent,
        MatSelectSearchClearDirective]; }, imports: function () { return [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTooltipModule]; }, exports: function () { return [MatSelectSearchComponent,
        MatSelectSearchClearDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxMatSelectSearchModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    MatTooltipModule
                ],
                declarations: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ],
                exports: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, MatSelectSearchClearDirective as ɵa };

//# sourceMappingURL=ngx-mat-select-search.js.map