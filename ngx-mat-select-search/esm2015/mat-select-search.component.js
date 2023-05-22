/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MatSelectSearchComponent_1;
import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, OnDestroy, OnInit, QueryList, ViewChild, ContentChild, Optional, HostBinding, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption, _countGroupLabelsBeforeOption } from '@angular/material/core';
import { MatSelect, SELECT_PANEL_MAX_HEIGHT } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { A, Z, ZERO, NINE, SPACE, END, HOME, UP_ARROW, DOWN_ARROW, ESCAPE, } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
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
MatSelectSearchComponent.ctorParameters = () => [
    { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
    { type: ChangeDetectorRef },
    { type: ViewportRuler },
    { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] },
    { type: LiveAnnouncer },
    { type: MatFormField, decorators: [{ type: Optional }, { type: Inject, args: [MatFormField,] }] }
];
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "searching", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
tslib_1.__decorate([
    Output()
], MatSelectSearchComponent.prototype, "toggleAll", void 0);
tslib_1.__decorate([
    ViewChild('searchSelectInput', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
tslib_1.__decorate([
    ViewChild('innerSelectSearch', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
tslib_1.__decorate([
    ContentChild(MatSelectSearchClearDirective, { static: false })
], MatSelectSearchComponent.prototype, "clearIcon", void 0);
tslib_1.__decorate([
    HostBinding('class.mat-select-search-inside-mat-option')
], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
MatSelectSearchComponent = MatSelectSearchComponent_1 = tslib_1.__decorate([
    Component({
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
    }),
    tslib_1.__param(0, Inject(MatSelect)),
    tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(MatOption)),
    tslib_1.__param(5, Optional()), tslib_1.__param(5, Inject(MatFormField))
], MatSelectSearchComponent);
export { MatSelectSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1zZWxlY3Qtc2VhcmNoLyIsInNvdXJjZXMiOlsibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOzs7QUFFSCxPQUFPLEVBQ0wsYUFBYSxFQUNiLHVCQUF1QixFQUFFLGlCQUFpQixFQUMxQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFDNUYsU0FBUyxFQUNULFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFDNUMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFDTCxDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEdBQy9DLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBVSxNQUFNLGdC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U0FqaUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IEJpdGhvc3QgR21iSCBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsIE9wdGlvbmFsLCBIb3N0QmluZGluZywgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0T3B0aW9uLCBfY291bnRHcm91cExhYmVsc0JlZm9yZU9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2VsZWN0LCBTRUxFQ1RfUEFORUxfTUFYX0hFSUdIVCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7XG4gIEEsXG4gIFosXG4gIFpFUk8sXG4gIE5JTkUsXG4gIFNQQUNFLCBFTkQsIEhPTUUsIFVQX0FSUk9XLCBET1dOX0FSUk9XLCBFU0NBUEUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBWaWV3cG9ydFJ1bGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBMaXZlQW5ub3VuY2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHRha2UsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LXNlbGVjdC1zZWFyY2gtY2xlYXIuZGlyZWN0aXZlJztcblxuLyogdHNsaW50OmRpc2FibGU6bWVtYmVyLW9yZGVyaW5nIGNvbXBvbmVudC1zZWxlY3RvciAqL1xuLyoqXG4gKiBDb21wb25lbnQgcHJvdmlkaW5nIGFuIGlucHV0IGZpZWxkIGZvciBzZWFyY2hpbmcgTWF0U2VsZWN0IG9wdGlvbnMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBpbnRlcmZhY2UgQmFuayB7XG4gKiAgaWQ6IHN0cmluZztcbiAqICBuYW1lOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktYXBwLWRhdGEtc2VsZWN0aW9uJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gKiAgICAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYmFua0N0cmxcIiBwbGFjZWhvbGRlcj1cIkJhbmtcIj5cbiAqICAgICAgICAgPG1hdC1vcHRpb24+XG4gKiAgICAgICAgICAgPG5neC1tYXQtc2VsZWN0LXNlYXJjaCBbZm9ybUNvbnRyb2xdPVwiYmFua0ZpbHRlckN0cmxcIj48L25neC1tYXQtc2VsZWN0LXNlYXJjaD5cbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICogICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYmFuayBvZiBmaWx0ZXJlZEJhbmtzIHwgYXN5bmNcIiBbdmFsdWVdPVwiYmFuay5pZFwiPlxuICogICAgICAgICAgIHt7YmFuay5uYW1lfX1cbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICogICAgICAgPC9tYXQtc2VsZWN0PlxuICogICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gKiAgIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgRGF0YVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAqXG4gKiAgIC8vIGNvbnRyb2wgZm9yIHRoZSBzZWxlY3RlZCBiYW5rXG4gKiAgIHB1YmxpYyBiYW5rQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAqICAgLy8gY29udHJvbCBmb3IgdGhlIE1hdFNlbGVjdCBmaWx0ZXIga2V5d29yZFxuICogICBwdWJsaWMgYmFua0ZpbHRlckN0cmw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gKlxuICogICAvLyBsaXN0IG9mIGJhbmtzXG4gKiAgIHByaXZhdGUgYmFua3M6IEJhbmtbXSA9IFt7bmFtZTogJ0JhbmsgQScsIGlkOiAnQSd9LCB7bmFtZTogJ0JhbmsgQicsIGlkOiAnQid9LCB7bmFtZTogJ0JhbmsgQycsIGlkOiAnQyd9XTtcbiAqICAgLy8gbGlzdCBvZiBiYW5rcyBmaWx0ZXJlZCBieSBzZWFyY2gga2V5d29yZFxuICogICBwdWJsaWMgZmlsdGVyZWRCYW5rczogUmVwbGF5U3ViamVjdDxCYW5rW10+ID0gbmV3IFJlcGxheVN1YmplY3Q8QmFua1tdPigxKTtcbiAqXG4gKiAgIC8vIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLlxuICogICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICpcbiAqXG4gKiAgIG5nT25Jbml0KCkge1xuICogICAgIC8vIGxvYWQgdGhlIGluaXRpYWwgYmFuayBsaXN0XG4gKiAgICAgdGhpcy5maWx0ZXJlZEJhbmtzLm5leHQodGhpcy5iYW5rcy5zbGljZSgpKTtcbiAqICAgICAvLyBsaXN0ZW4gZm9yIHNlYXJjaCBmaWVsZCB2YWx1ZSBjaGFuZ2VzXG4gKiAgICAgdGhpcy5iYW5rRmlsdGVyQ3RybC52YWx1ZUNoYW5nZXNcbiAqICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIHRoaXMuZmlsdGVyQmFua3MoKTtcbiAqICAgICAgIH0pO1xuICogICB9XG4gKlxuICogICBuZ09uRGVzdHJveSgpIHtcbiAqICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICogICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGZpbHRlckJhbmtzKCkge1xuICogICAgIGlmICghdGhpcy5iYW5rcykge1xuICogICAgICAgcmV0dXJuO1xuICogICAgIH1cbiAqXG4gKiAgICAgLy8gZ2V0IHRoZSBzZWFyY2gga2V5d29yZFxuICogICAgIGxldCBzZWFyY2ggPSB0aGlzLmJhbmtGaWx0ZXJDdHJsLnZhbHVlO1xuICogICAgIGlmICghc2VhcmNoKSB7XG4gKiAgICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dCh0aGlzLmJhbmtzLnNsaWNlKCkpO1xuICogICAgICAgcmV0dXJuO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICBzZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAqICAgICB9XG4gKlxuICogICAgIC8vIGZpbHRlciB0aGUgYmFua3NcbiAqICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dChcbiAqICAgICAgIHRoaXMuYmFua3MuZmlsdGVyKGJhbmsgPT4gYmFuay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTEpXG4gKiAgICAgKTtcbiAqICAgfVxuICogfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LXNlbGVjdC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdFNlbGVjdFNlYXJjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAvKiogTGFiZWwgb2YgdGhlIHNlYXJjaCBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckxhYmVsID0gJ1N1Y2hlJztcblxuICAvKiogVHlwZSBvZiB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG5cbiAgLyoqIExhYmVsIHRvIGJlIHNob3duIHdoZW4gbm8gZW50cmllcyBhcmUgZm91bmQuIFNldCB0byBudWxsIGlmIG5vIG1lc3NhZ2Ugc2hvdWxkIGJlIHNob3duLiAqL1xuICBASW5wdXQoKSBub0VudHJpZXNGb3VuZExhYmVsID0gJ0tlaW5lIE9wdGlvbmVuIGdlZnVuZGVuJztcblxuICAvKipcbiAgICogIFRleHQgdGhhdCBpcyBhcHBlbmRlZCB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBpdGVtIGxhYmVsIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycyxcbiAgICogIGluZm9ybWluZyB0aGUgdXNlciBvZiB0aGUgY3VycmVudCBpbmRleCwgdmFsdWUgYW5kIHRvdGFsIG9wdGlvbnMuXG4gICAqICBlZzogQmFuayBSIChHZXJtYW55KSAxIG9mIDZcbiAgKi9cbiAgQElucHV0KCkgaW5kZXhBbmRMZW5ndGhTY3JlZW5SZWFkZXJUZXh0ID0gJyBvZiAnO1xuXG4gIC8qKlxuICAgICogV2hldGhlciBvciBub3QgdGhlIHNlYXJjaCBmaWVsZCBzaG91bGQgYmUgY2xlYXJlZCBhZnRlciB0aGUgZHJvcGRvd24gbWVudSBpcyBjbG9zZWQuXG4gICAgKiBVc2VmdWwgZm9yIHNlcnZlci1zaWRlIGZpbHRlcmluZy4gU2VlIFsjM10oaHR0cHM6Ly9naXRodWIuY29tL2JpdGhvc3QtZ21iaC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2gvaXNzdWVzLzMpXG4gICAgKi9cbiAgQElucHV0KCkgY2xlYXJTZWFyY2hJbnB1dCA9IHRydWU7XG5cbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoLWluLXByb2dyZXNzIGluZGljYXRvciAqL1xuICBASW5wdXQoKSBzZWFyY2hpbmcgPSBmYWxzZTtcblxuICAvKiogRGlzYWJsZXMgaW5pdGlhbCBmb2N1c2luZyBvZiB0aGUgaW5wdXQgZmllbGQgKi9cbiAgQElucHV0KCkgZGlzYWJsZUluaXRpYWxGb2N1cyA9IGZhbHNlO1xuXG4gIC8qKiBFbmFibGUgY2xlYXIgaW5wdXQgb24gZXNjYXBlIHByZXNzZWQgKi9cbiAgQElucHV0KCkgZW5hYmxlQ2xlYXJPbkVzY2FwZVByZXNzZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogUHJldmVudHMgaG9tZSAvIGVuZCBrZXkgYmVpbmcgcHJvcGFnYXRlZCB0byBtYXQtc2VsZWN0LFxuICAgKiBhbGxvd2luZyB0byBtb3ZlIHRoZSBjdXJzb3Igd2l0aGluIHRoZSBzZWFyY2ggaW5wdXQgaW5zdGVhZCBvZiBuYXZpZ2F0aW5nIHRoZSBvcHRpb25zXG4gICAqL1xuICBASW5wdXQoKSBwcmV2ZW50SG9tZUVuZEtleVByb3BhZ2F0aW9uID0gZmFsc2U7XG5cbiAgLyoqIERpc2FibGVzIHNjcm9sbGluZyB0byBhY3RpdmUgb3B0aW9ucyB3aGVuIG9wdGlvbiBsaXN0IGNoYW5nZXMuIFVzZWZ1bCBmb3Igc2VydmVyLXNpZGUgc2VhcmNoICovXG4gIEBJbnB1dCgpIGRpc2FibGVTY3JvbGxUb0FjdGl2ZU9uT3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcblxuICAvKiogQWRkcyA1MDggc2NyZWVuIHJlYWRlciBzdXBwb3J0IGZvciBzZWFyY2ggYm94ICovXG4gIEBJbnB1dCgpIGFyaWFMYWJlbCA9ICdkcm9wZG93biBzZWFyY2gnO1xuXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgU2VsZWN0IEFsbCBDaGVja2JveCAoZm9yIG1hdC1zZWxlY3RbbXVsdGk9dHJ1ZV0pICovXG4gIEBJbnB1dCgpIHNob3dUb2dnbGVBbGxDaGVja2JveCA9IGZhbHNlO1xuXG4gIC8qKiBzZWxlY3QgYWxsIGNoZWNrYm94IGNoZWNrZWQgc3RhdGUgKi9cbiAgQElucHV0KCkgdG9nZ2xlQWxsQ2hlY2tib3hDaGVja2VkID0gZmFsc2U7XG5cbiAgLyoqIHNlbGVjdCBhbGwgY2hlY2tib3ggaW5kZXRlcm1pbmF0ZSBzdGF0ZSAqL1xuICBASW5wdXQoKSB0b2dnbGVBbGxDaGVja2JveEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAvKiogRGlzcGxheSBhIG1lc3NhZ2UgaW4gYSB0b29sdGlwIG9uIHRoZSB0b2dnbGUtYWxsIGNoZWNrYm94ICovXG4gIEBJbnB1dCgpIHRvZ2dsZUFsbENoZWNrYm94VG9vbHRpcE1lc3NhZ2UgPSAnJztcblxuICAvKiogRGVmaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9vbHRpcCBvbiB0aGUgdG9nZ2xlLWFsbCBjaGVja2JveC4gKi9cbiAgQElucHV0KCkgdG9vZ2xlQWxsQ2hlY2tib3hUb29sdGlwUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnYWJvdmUnIHwgJ2JlbG93JyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdiZWxvdyc7XG5cbiAgLyoqIE91dHB1dCBlbWl0dGVyIHRvIHNlbmQgdG8gcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSB0b2dnbGUgYWxsIGJvb2xlYW4gKi9cbiAgQE91dHB1dCgpIHRvZ2dsZUFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cbiAgQFZpZXdDaGlsZCgnc2VhcmNoU2VsZWN0SW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hTZWxlY3RJbnB1dDogRWxlbWVudFJlZjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cbiAgQFZpZXdDaGlsZCgnaW5uZXJTZWxlY3RTZWFyY2gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbm5lclNlbGVjdFNlYXJjaDogRWxlbWVudFJlZjtcblxuICAvKiogUmVmZXJlbmNlIHRvIGN1c3RvbSBzZWFyY2ggaW5wdXQgY2xlYXIgaWNvbiAqL1xuICBAQ29udGVudENoaWxkKE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgY2xlYXJJY29uOiBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zZWxlY3Qtc2VhcmNoLWluc2lkZS1tYXQtb3B0aW9uJylcbiAgZ2V0IGlzSW5zaWRlTWF0T3B0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubWF0T3B0aW9uO1xuICB9XG5cbiAgLyoqIEN1cnJlbnQgc2VhcmNoIHZhbHVlICovXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbiA9IChfOiBhbnkpID0+IHsgfTtcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbiA9IChfOiBhbnkpID0+IHsgfTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBNYXRTZWxlY3Qgb3B0aW9ucyAqL1xuICBwdWJsaWMgX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+O1xuXG4gIC8qKiBQcmV2aW91c2x5IHNlbGVjdGVkIHZhbHVlcyB3aGVuIHVzaW5nIDxtYXQtc2VsZWN0IFttdWx0aXBsZV09XCJ0cnVlXCI+Ki9cbiAgcHJpdmF0ZSBwcmV2aW91c1NlbGVjdGVkVmFsdWVzOiBhbnlbXTtcblxuICAvKiogRXZlbnQgdGhhdCBlbWl0cyB3aGVuIHRoZSBjdXJyZW50IHZhbHVlIGNoYW5nZXMgKi9cbiAgcHJpdmF0ZSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1hdFNlbGVjdCkgcHVibGljIG1hdFNlbGVjdDogTWF0U2VsZWN0LFxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1hdE9wdGlvbikgcHVibGljIG1hdE9wdGlvbjogTWF0T3B0aW9uID0gbnVsbCxcbiAgICBwcml2YXRlIGxpdmVBbm5vdW5jZXI6IExpdmVBbm5vdW5jZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNYXRGb3JtRmllbGQpIHB1YmxpYyBtYXRGb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCA9IG51bGxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBzZXQgY3VzdG9tIHBhbmVsIGNsYXNzXG4gICAgY29uc3QgcGFuZWxDbGFzcyA9ICdtYXQtc2VsZWN0LXNlYXJjaC1wYW5lbCc7XG4gICAgaWYgKHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MpKSB7XG4gICAgICAgICg8c3RyaW5nW10+dGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcykucHVzaChwYW5lbENsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPSBbdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcywgcGFuZWxDbGFzc107XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzW3BhbmVsQ2xhc3NdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcyA9IHBhbmVsQ2xhc3M7XG4gICAgfVxuXG4gICAgLy8gc2V0IGN1c3RvbSBtYXQtb3B0aW9uIGNsYXNzIGlmIHRoZSBjb21wb25lbnQgd2FzIHBsYWNlZCBpbnNpZGUgYSBtYXQtb3B0aW9uXG4gICAgaWYgKHRoaXMubWF0T3B0aW9uKSB7XG4gICAgICB0aGlzLm1hdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLm1hdE9wdGlvbi5fZ2V0SG9zdEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKCdjb250YWlucy1tYXQtc2VsZWN0LXNlYXJjaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCc8bmd4LW1hdC1zZWxlY3Qtc2VhcmNoPiBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSA8bWF0LW9wdGlvbj4gZWxlbWVudCcpO1xuICAgIH1cblxuICAgIC8vIHdoZW4gdGhlIHNlbGVjdCBkcm9wZG93biBwYW5lbCBpcyBvcGVuZWQgb3IgY2xvc2VkXG4gICAgdGhpcy5tYXRTZWxlY3Qub3BlbmVkQ2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZGVsYXkoMSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChvcGVuZWQpID0+IHtcbiAgICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuICAgICAgICAgIC8vIGZvY3VzIHRoZSBzZWFyY2ggZmllbGQgd2hlbiBvcGVuaW5nXG4gICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVJbml0aWFsRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFyIGl0IHdoZW4gY2xvc2luZ1xuICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IGl0ZW0gYWN0aXZlIGFmdGVyIHRoZSBvcHRpb25zIGNoYW5nZWRcbiAgICB0aGlzLm1hdFNlbGVjdC5vcGVuZWRDaGFuZ2VcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXIpIHtcbiAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fa2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdfa2V5TWFuYWdlciB3YXMgbm90IGluaXRpYWxpemVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubWF0U2VsZWN0Lm9wdGlvbnM7XG5cblxuICAgICAgICAvLyBDbG9zdXJlIHZhcmlhYmxlIGZvciB0cmFja2luZyB0aGUgbW9zdCByZWNlbnQgZmlyc3Qgb3B0aW9uLlxuICAgICAgICAvLyBJbiBvcmRlciB0byBhdm9pZCBhdm9pZCBjYXVzaW5nIHRoZSBsaXN0IHRvXG4gICAgICAgIC8vIHNjcm9sbCB0byB0aGUgdG9wIHdoZW4gb3B0aW9ucyBhcmUgYWRkZWQgdG8gdGhlIGJvdHRvbSBvZlxuICAgICAgICAvLyB0aGUgbGlzdCAoZWc6IGluZmluaXRlIHNjcm9sbCksIHdlIGNvbXBhcmUgb25seVxuICAgICAgICAvLyB0aGUgY2hhbmdlcyB0byB0aGUgZmlyc3Qgb3B0aW9ucyB0byBkZXRlcm1pbmUgaWYgd2VcbiAgICAgICAgLy8gc2hvdWxkIHNldCB0aGUgZmlyc3QgaXRlbSBhcyBhY3RpdmUuXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgdW5uY2Vzc2FyeSBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbGlzdFxuICAgICAgICAvLyB3aGVuIG9wdGlvbnMgYXJlIGFwcGVuZGVkLCBidXQgYWxsb3dzIHRoZSBmaXJzdCBpdGVtXG4gICAgICAgIC8vIGluIHRoZSBsaXN0IHRvIGJlIHNldCBhcyBhY3RpdmUgYnkgZGVmYXVsdCB3aGVuIHRoZXJlXG4gICAgICAgIC8vIGlzIG5vIGFjdGl2ZSBzZWxlY3Rpb25cbiAgICAgICAgbGV0IHByZXZpb3VzRmlyc3RPcHRpb24gPSB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVt0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKV07XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jaGFuZ2VzXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKChvcHRpb25DaGFuZ2VzOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPikgPT4ge1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBRdWVyeUxpc3QgdG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHRpb25DaGFuZ2VzLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgY29uc3Qga2V5TWFuYWdlciA9IHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyO1xuICAgICAgICAgICAgaWYgKGtleU1hbmFnZXIgJiYgdGhpcy5tYXRTZWxlY3QucGFuZWxPcGVuKSB7XG5cbiAgICAgICAgICAgICAgLy8gYXZvaWQgXCJleHByZXNzaW9uIGhhcyBiZWVuIGNoYW5nZWRcIiBlcnJvclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgZmlyc3QgaXRlbSBhY3RpdmUgYW5kIGlucHV0IHdpZHRoXG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgdHJ1ZSBmaXJzdCBpdGVtIGlzIG9mZnNldCBieSAxXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEZpcnN0T3B0aW9uID0gb3B0aW9uc1t0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKV07XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGVzZSBjaGFuZ2VzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBwcmV2aW91cy5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE9wdGlvbklzQ2hhbmdlZCA9ICF0aGlzLm1hdFNlbGVjdC5jb21wYXJlV2l0aChwcmV2aW91c0ZpcnN0T3B0aW9uLCBjdXJyZW50Rmlyc3RPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ0FTRTogVGhlIGZpcnN0IG9wdGlvbiBpcyBkaWZmZXJlbnQgbm93LlxuICAgICAgICAgICAgICAgIC8vIEluZGljaWF0ZXMgd2Ugc2hvdWxkIHNldCBpdCBhcyBhY3RpdmUgYW5kIHNjcm9sbCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgICAgIGlmIChmaXJzdE9wdGlvbklzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAga2V5TWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgb3VyIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIHByZXZpb3VzRmlyc3RPcHRpb24gPSBjdXJyZW50Rmlyc3RPcHRpb247XG5cbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBwYW5lbCB3aWR0aCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBubyBlbnRyaWVzIGZvdW5kIGNsYXNzIG9uIG1hdCBvcHRpb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub0VudHJpZXNGb3VuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0T3B0aW9uLl9nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoJ21hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0T3B0aW9uLl9nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoJ21hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVNjcm9sbFRvQWN0aXZlT25PcHRpb25zQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIGRldGVjdCBjaGFuZ2VzIHdoZW4gdGhlIGlucHV0IGNoYW5nZXNcbiAgICB0aGlzLmNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIC8vIHJlc2l6ZSB0aGUgaW5wdXQgd2lkdGggd2hlbiB0aGUgdmlld3BvcnQgaXMgcmVzaXplZCwgaS5lLiB0aGUgdHJpZ2dlciB3aWR0aCBjb3VsZCBwb3RlbnRpYWxseSBiZSByZXNpemVkXG4gICAgdGhpcy5fdmlld3BvcnRSdWxlci5jaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubWF0U2VsZWN0LnBhbmVsT3Blbikge1xuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuaW5pdE11bHRpcGxlSGFuZGxpbmcoKTtcbiAgfVxuXG4gIF9lbWl0U2VsZWN0QWxsQm9vbGVhblRvUGFyZW50KHN0YXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy50b2dnbGVBbGwuZW1pdChzdGF0ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIHVwZGF0ZSB2aWV3IHdoZW4gYXZhaWxhYmxlIG9wdGlvbnMgY2hhbmdlXG4gICAgdGhpcy5tYXRTZWxlY3Qub3BlbmVkQ2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5jaGFuZ2VzXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBfaXNUb2dnbGVBbGxDaGVja2JveFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF0U2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuc2hvd1RvZ2dsZUFsbENoZWNrYm94O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleSBkb3duIGV2ZW50IHdpdGggTWF0U2VsZWN0LlxuICAgKiBBbGxvd3MgZS5nLiBzZWxlY3Rpbmcgd2l0aCBlbnRlciBrZXksIG5hdmlnYXRpb24gd2l0aCBhcnJvdyBrZXlzLCBldGMuXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBQcmV2ZW50IHByb3BhZ2F0aW9uIGZvciBhbGwgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgaW4gb3JkZXIgdG8gYXZvaWQgc2VsZWN0aW9uIGlzc3Vlc1xuICAgIGlmICgoZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSBBICYmIGV2ZW50LmtleUNvZGUgPD0gWikgfHxcbiAgICAgIChldmVudC5rZXlDb2RlID49IFpFUk8gJiYgZXZlbnQua2V5Q29kZSA8PSBOSU5FKSB8fFxuICAgICAgKGV2ZW50LmtleUNvZGUgPT09IFNQQUNFKVxuICAgICAgfHwgKHRoaXMucHJldmVudEhvbWVFbmRLZXlQcm9wYWdhdGlvbiAmJiAoZXZlbnQua2V5Q29kZSA9PT0gSE9NRSB8fCBldmVudC5rZXlDb2RlID09PSBFTkQpKVxuICAgICkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGlmIGNsaWNrIEVzY2FwZSwgaWYgaW5wdXQgaXMgZW1wdHksIGNsb3NlIHRoZSBkcm9wZG93biwgaWYgbm90LCBlbXB0eSBvdXQgdGhlIHNlYXJjaCBmaWVsZFxuICAgIGlmICh0aGlzLmVuYWJsZUNsZWFyT25Fc2NhcGVQcmVzc2VkID09PSB0cnVlICYmIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9yZXNldCh0cnVlKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBrZXkgdXAgZXZlbnQgd2l0aCBNYXRTZWxlY3QuXG4gICAqIEFsbG93cyBlLmcuIHRoZSBhbm5vdW5jaW5nIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlRGVzY2VuZGFudCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIF9oYW5kbGVLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBVUF9BUlJPVyB8fCBldmVudC5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICBjb25zdCBhcmlhQWN0aXZlRGVzY2VuZGFudElkID0gdGhpcy5tYXRTZWxlY3QuX2dldEFyaWFBY3RpdmVEZXNjZW5kYW50KCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGFyaWFBY3RpdmVEZXNjZW5kYW50SWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBhY3RpdmVEZXNjZW5kYW50ID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KClbaW5kZXhdO1xuICAgICAgICB0aGlzLmxpdmVBbm5vdW5jZXIuYW5ub3VuY2UoXG4gICAgICAgICAgYWN0aXZlRGVzY2VuZGFudC52aWV3VmFsdWUgKyAnICdcbiAgICAgICAgICArIHRoaXMuZ2V0QXJpYUluZGV4KGluZGV4KVxuICAgICAgICAgICsgdGhpcy5pbmRleEFuZExlbmd0aFNjcmVlblJlYWRlclRleHRcbiAgICAgICAgICArIHRoaXMuZ2V0QXJpYUxlbmd0aCgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgb3B0aW9uLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxuICAgKiBleGFtcGxlczpcbiAgICogICAgQ2FzZSAxIFtTZWFyY2gsIDEsIDIsIDNdIHdpbGwgaGF2ZSBvZmZzZXQgb2YgMSwgZHVlIHRvIHNlYXJjaCBhbmQgd2lsbCByZWFkIGluZGV4IG9mIHRvdGFsLlxuICAgKiAgICBDYXNlIDIgWzEsIDIsIDNdIHdpbGwgaGF2ZSBvZmZzZXQgb2YgMCBhbmQgd2lsbCByZWFkIGluZGV4ICsxIG9mIHRvdGFsLlxuICAgKi9cbiAgZ2V0QXJpYUluZGV4KG9wdGlvbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbkluZGV4ICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbkluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBvcHRpb25zLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxuICAgKiBleGFtcGxlczpcbiAgICogICAgQ2FzZSAxIFtTZWFyY2gsIDEsIDIsIDNdIHdpbGwgaGF2ZSBsZW5ndGggb2Ygb3B0aW9ucy5sZW5ndGggLTEsIGR1ZSB0byBzZWFyY2guXG4gICAqICAgIENhc2UgMiBbMSwgMiwgM10gd2lsbCBoYXZlIGxlbmd0aCBvZiBvcHRpb25zLmxlbmd0aC5cbiAgICovXG4gIGdldEFyaWFMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkubGVuZ3RoIC0gdGhpcy5nZXRPcHRpb25zTGVuZ3RoT2Zmc2V0KCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZUNoYW5nZWQgPSB2YWx1ZSAhPT0gdGhpcy5fdmFsdWU7XG4gICAgaWYgKHZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UodmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZUNoYW5nZWQgPSB2YWx1ZSAhPT0gdGhpcy5fdmFsdWU7XG4gICAgaWYgKHZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbml0TXVsdGlTZWxlY3RlZFZhbHVlcygpO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgc2VhcmNoIGlucHV0IGZpZWxkXG4gICAqL1xuICBwdWJsaWMgX2ZvY3VzKCkge1xuICAgIGlmICghdGhpcy5zZWFyY2hTZWxlY3RJbnB1dCB8fCAhdGhpcy5tYXRTZWxlY3QucGFuZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc2F2ZSBhbmQgcmVzdG9yZSBzY3JvbGxUb3Agb2YgcGFuZWwsIHNpbmNlIGl0IHdpbGwgYmUgcmVzZXQgYnkgZm9jdXMoKVxuICAgIC8vIG5vdGU6IHRoaXMgaXMgaGFja3lcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gcGFuZWwuc2Nyb2xsVG9wO1xuXG4gICAgLy8gZm9jdXNcbiAgICB0aGlzLnNlYXJjaFNlbGVjdElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIHBhbmVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGN1cnJlbnQgc2VhcmNoIHZhbHVlXG4gICAqIEBwYXJhbSBmb2N1cyB3aGV0aGVyIHRvIGZvY3VzIGFmdGVyIHJlc2V0dGluZ1xuICAgKi9cbiAgcHVibGljIF9yZXNldChmb2N1cz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoU2VsZWN0SW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hTZWxlY3RJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKCcnKTtcbiAgICBpZiAodGhpcy5tYXRPcHRpb24gJiYgIWZvY3VzKSB7XG4gICAgICAvLyByZW1vdmUgbm8gZW50cmllcyBmb3VuZCBjbGFzcyBvbiBtYXQgb3B0aW9uXG4gICAgICB0aGlzLm1hdE9wdGlvbi5fZ2V0SG9zdEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdtYXQtc2VsZWN0LXNlYXJjaC1uby1lbnRyaWVzLWZvdW5kJyk7XG4gICAgfVxuICAgIGlmIChmb2N1cykge1xuICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBoYW5kbGluZyA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxuICAgKiBOb3RlOiB0byBpbXByb3ZlIHRoaXMgY29kZSwgbWF0LXNlbGVjdCBzaG91bGQgYmUgZXh0ZW5kZWQgdG8gYWxsb3cgZGlzYWJsaW5nIHJlc2V0dGluZyB0aGUgc2VsZWN0aW9uIHdoaWxlIGZpbHRlcmluZy5cbiAgICovXG4gIHByaXZhdGUgaW5pdE11bHRpcGxlSGFuZGxpbmcoKSB7XG4gICAgLy8gaWYgPG1hdC1zZWxlY3QgW211bHRpcGxlXT1cInRydWVcIj5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IHNlbGVjdGVkIHZhbHVlcyBhbmQgcmVzdG9yZSB0aGVtIHdoZW4gdGhleSBhcmUgZGVzZWxlY3RlZFxuICAgIC8vIGJlY2F1c2UgdGhlIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIHdoaWxlIHdlIGFyZSBjdXJyZW50bHkgZmlsdGVyaW5nXG4gICAgdGhpcy5tYXRTZWxlY3QudmFsdWVDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWVzKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hdFNlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgICAgIGxldCByZXN0b3JlU2VsZWN0ZWRWYWx1ZXMgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5fdmFsdWUgJiYgdGhpcy5fdmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAmJiB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlcyB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMuZm9yRWFjaChwcmV2aW91c1ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMuc29tZSh2ID0+IHRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKHYsIHByZXZpb3VzVmFsdWUpKVxuICAgICAgICAgICAgICAgICYmICFvcHRpb25WYWx1ZXMuc29tZSh2ID0+IHRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKHYsIHByZXZpb3VzVmFsdWUpKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGEgdmFsdWUgdGhhdCB3YXMgc2VsZWN0ZWQgYmVmb3JlIGlzIGRlc2VsZWN0ZWQgYW5kIG5vdCBmb3VuZCBpbiB0aGUgb3B0aW9ucywgaXQgd2FzIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGZpbHRlcmluZywgc28gd2UgcmVzdG9yZSBpdC5cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXN0b3JlU2VsZWN0ZWRWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzdG9yZVNlbGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fb25DaGFuZ2UodmFsdWVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGN1cnJlbnRseSBhY3RpdmUgb3B0aW9uIGludG8gdGhlIHZpZXcgaWYgaXQgaXMgbm90IHlldCB2aXNpYmxlLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hdFNlbGVjdC5wYW5lbCAmJiB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG1hdE9wdGlvbkhlaWdodCA9IHRoaXMuZ2V0TWF0T3B0aW9uSGVpZ2h0KCk7XG4gICAgICBjb25zdCBhY3RpdmVPcHRpb25JbmRleCA9IHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCB8fCAwO1xuICAgICAgY29uc3QgbGFiZWxDb3VudCA9IF9jb3VudEdyb3VwTGFiZWxzQmVmb3JlT3B0aW9uKGFjdGl2ZU9wdGlvbkluZGV4LCB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLCB0aGlzLm1hdFNlbGVjdC5vcHRpb25Hcm91cHMpO1xuICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyBpbiBhIE1hdE9wdGlvbiwgdGhlIGFjdGl2ZUl0ZW1JbmRleCB3aWxsIGJlIG9mZnNldCBieSBvbmUuXG4gICAgICBjb25zdCBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyA9ICh0aGlzLm1hdE9wdGlvbiA/IC0xIDogMCkgKyBsYWJlbENvdW50ICsgYWN0aXZlT3B0aW9uSW5kZXg7XG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgIGNvbnN0IHNlYXJjaElucHV0SGVpZ2h0ID0gdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGFtb3VudE9mVmlzaWJsZU9wdGlvbnMgPSBNYXRoLmZsb29yKChTRUxFQ1RfUEFORUxfTUFYX0hFSUdIVCAtIHNlYXJjaElucHV0SGVpZ2h0KSAvIG1hdE9wdGlvbkhlaWdodCk7XG5cbiAgICAgIGNvbnN0IGluZGV4T2ZGaXJzdFZpc2libGVPcHRpb24gPSBNYXRoLnJvdW5kKChjdXJyZW50U2Nyb2xsVG9wICsgc2VhcmNoSW5wdXRIZWlnaHQpIC8gbWF0T3B0aW9uSGVpZ2h0KSAtIDE7XG5cbiAgICAgIGlmIChpbmRleE9mRmlyc3RWaXNpYmxlT3B0aW9uID49IGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3KSB7XG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcgKiBtYXRPcHRpb25IZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4T2ZGaXJzdFZpc2libGVPcHRpb24gKyBhbW91bnRPZlZpc2libGVPcHRpb25zIDw9IGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3KSB7XG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gKGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3ICsgMSkgKiBtYXRPcHRpb25IZWlnaHRcbiAgICAgICAgICAtIChTRUxFQ1RfUEFORUxfTUFYX0hFSUdIVCAtIHNlYXJjaElucHV0SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogIFNldCB0aGUgd2lkdGggb2YgdGhlIGlubmVyU2VsZWN0U2VhcmNoIHRvIGZpdCBldmVuIGN1c3RvbSBzY3JvbGxiYXJzXG4gICAqICBBbmQgc3VwcG9ydCBhbGwgT3BlcmF0aW9uIFN5c3RlbXNcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVJbnB1dFdpZHRoKCkge1xuICAgIGlmICghdGhpcy5pbm5lclNlbGVjdFNlYXJjaCB8fCAhdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuaW5uZXJTZWxlY3RTZWFyY2gubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgcGFuZWxFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXQtc2VsZWN0LXBhbmVsJykpIHtcbiAgICAgICAgcGFuZWxFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYW5lbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5uZXJTZWxlY3RTZWFyY2gubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhbmVsRWxlbWVudC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRPcHRpb25IZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5maXJzdC5fZ2V0SG9zdEVsZW1lbnQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogIEluaXRpYWxpemUgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzIG9uY2UgdGhlIGZpcnN0IGZpbHRlcmluZyBvY2N1cnMuXG4gICAqL1xuICBpbml0TXVsdGlTZWxlY3RlZFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5tYXRTZWxlY3QubXVsdGlwbGUgJiYgIXRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm1hdFNlbGVjdC5vcHRpb25zXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZClcbiAgICAgICAgLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBcIm5vIGVudHJpZXMgZm91bmRcIiBtZXNzYWdlIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBfbm9FbnRyaWVzRm91bmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9vcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubm9FbnRyaWVzRm91bmRMYWJlbCAmJiB0aGlzLnZhbHVlICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID09PSB0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIG9mZnNldCB0byBsZW5ndGggdGhhdCBjYW4gYmUgY2F1c2VkIGJ5IHRoZSBvcHRpb25hbCBtYXRPcHRpb24gdXNlZCBhcyBhIHNlYXJjaCBpbnB1dC5cbiAgICovXG4gIHByaXZhdGUgZ2V0T3B0aW9uc0xlbmd0aE9mZnNldCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=