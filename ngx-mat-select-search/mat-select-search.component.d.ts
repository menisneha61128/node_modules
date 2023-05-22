/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
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
import * as ɵngcc0 from '@angular/core';
export declare class MatSelectSearchComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    matSelect: MatSelect;
    changeDetectorRef: ChangeDetectorRef;
    private _viewportRuler;
    matOption: MatOption;
    private liveAnnouncer;
    matFormField: MatFormField;
    /** Label of the search placeholder */
    placeholderLabel: string;
    /** Type of the search input field */
    type: string;
    /** Label to be shown when no entries are found. Set to null if no message should be shown. */
    noEntriesFoundLabel: string;
    /**
     *  Text that is appended to the currently active item label announced by screen readers,
     *  informing the user of the current index, value and total options.
     *  eg: Bank R (Germany) 1 of 6
    */
    indexAndLengthScreenReaderText: string;
    /**
      * Whether or not the search field should be cleared after the dropdown menu is closed.
      * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
      */
    clearSearchInput: boolean;
    /** Whether to show the search-in-progress indicator */
    searching: boolean;
    /** Disables initial focusing of the input field */
    disableInitialFocus: boolean;
    /** Enable clear input on escape pressed */
    enableClearOnEscapePressed: boolean;
    /**
     * Prevents home / end key being propagated to mat-select,
     * allowing to move the cursor within the search input instead of navigating the options
     */
    preventHomeEndKeyPropagation: boolean;
    /** Disables scrolling to active options when option list changes. Useful for server-side search */
    disableScrollToActiveOnOptionsChanged: boolean;
    /** Adds 508 screen reader support for search box */
    ariaLabel: string;
    /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
    showToggleAllCheckbox: boolean;
    /** select all checkbox checked state */
    toggleAllCheckboxChecked: boolean;
    /** select all checkbox indeterminate state */
    toggleAllCheckboxIndeterminate: boolean;
    /** Display a message in a tooltip on the toggle-all checkbox */
    toggleAllCheckboxTooltipMessage: string;
    /** Define the position of the tooltip on the toggle-all checkbox. */
    toogleAllCheckboxTooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
    /** Output emitter to send to parent component with the toggle all boolean */
    toggleAll: EventEmitter<boolean>;
    /** Reference to the search input field */
    searchSelectInput: ElementRef;
    /** Reference to the search input field */
    innerSelectSearch: ElementRef;
    /** Reference to custom search input clear icon */
    clearIcon: MatSelectSearchClearDirective;
    readonly isInsideMatOption: boolean;
    /** Current search value */
    readonly value: string;
    private _value;
    onChange: Function;
    onTouched: Function;
    /** Reference to the MatSelect options */
    _options: QueryList<MatOption>;
    /** Previously selected values when using <mat-select [multiple]="true">*/
    private previousSelectedValues;
    /** Event that emits when the current value changes */
    private change;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    constructor(matSelect: MatSelect, changeDetectorRef: ChangeDetectorRef, _viewportRuler: ViewportRuler, matOption: MatOption, liveAnnouncer: LiveAnnouncer, matFormField?: MatFormField);
    ngOnInit(): void;
    _emitSelectAllBooleanToParent(state: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    _isToggleAllCheckboxVisible(): boolean;
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    _handleKeydown(event: KeyboardEvent): void;
    /**
     * Handles the key up event with MatSelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    _handleKeyup(event: KeyboardEvent): void;
    /**
     * Calculate the index of the current option, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
     *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
     */
    getAriaIndex(optionIndex: number): number;
    /**
     * Calculate the length of the options, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
     *    Case 2 [1, 2, 3] will have length of options.length.
     */
    getAriaLength(): number;
    writeValue(value: string): void;
    onInputChange(value: any): void;
    onBlur(value: string): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    /**
     * Focuses the search input field
     */
    _focus(): void;
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    _reset(focus?: boolean): void;
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    private initMultipleHandling;
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    private adjustScrollTopToFitActiveOptionIntoView;
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    updateInputWidth(): void;
    private getMatOptionHeight;
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     */
    initMultiSelectedValues(): void;
    /**
     * Returns whether the "no entries found" message should be displayed
     */
    _noEntriesFound(): boolean;
    /**
     * Determine the offset to length that can be caused by the optional matOption used as a search input.
     */
    private getOptionsLengthOffset;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatSelectSearchComponent, [null, null, null, { optional: true; }, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatSelectSearchComponent, "ngx-mat-select-search", never, { "placeholderLabel": "placeholderLabel"; "type": "type"; "noEntriesFoundLabel": "noEntriesFoundLabel"; "indexAndLengthScreenReaderText": "indexAndLengthScreenReaderText"; "clearSearchInput": "clearSearchInput"; "searching": "searching"; "disableInitialFocus": "disableInitialFocus"; "enableClearOnEscapePressed": "enableClearOnEscapePressed"; "preventHomeEndKeyPropagation": "preventHomeEndKeyPropagation"; "disableScrollToActiveOnOptionsChanged": "disableScrollToActiveOnOptionsChanged"; "ariaLabel": "ariaLabel"; "showToggleAllCheckbox": "showToggleAllCheckbox"; "toggleAllCheckboxChecked": "toggleAllCheckboxChecked"; "toggleAllCheckboxIndeterminate": "toggleAllCheckboxIndeterminate"; "toggleAllCheckboxTooltipMessage": "toggleAllCheckboxTooltipMessage"; "toogleAllCheckboxTooltipPosition": "toogleAllCheckboxTooltipPosition"; }, { "toggleAll": "toggleAll"; }, ["clearIcon"], ["[ngxMatSelectSearchClear]", ".mat-select-search-custom-header-content"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1hdC1zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBCaXRob3N0IEdtYkggQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2VsZWN0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgTGl2ZUFubm91bmNlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtc2VsZWN0LXNlYXJjaC1jbGVhci5kaXJlY3RpdmUnO1xuLyoqXG4gKiBDb21wb25lbnQgcHJvdmlkaW5nIGFuIGlucHV0IGZpZWxkIGZvciBzZWFyY2hpbmcgTWF0U2VsZWN0IG9wdGlvbnMuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBpbnRlcmZhY2UgQmFuayB7XG4gKiAgaWQ6IHN0cmluZztcbiAqICBuYW1lOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktYXBwLWRhdGEtc2VsZWN0aW9uJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gKiAgICAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYmFua0N0cmxcIiBwbGFjZWhvbGRlcj1cIkJhbmtcIj5cbiAqICAgICAgICAgPG1hdC1vcHRpb24+XG4gKiAgICAgICAgICAgPG5neC1tYXQtc2VsZWN0LXNlYXJjaCBbZm9ybUNvbnRyb2xdPVwiYmFua0ZpbHRlckN0cmxcIj48L25neC1tYXQtc2VsZWN0LXNlYXJjaD5cbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICogICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYmFuayBvZiBmaWx0ZXJlZEJhbmtzIHwgYXN5bmNcIiBbdmFsdWVdPVwiYmFuay5pZFwiPlxuICogICAgICAgICAgIHt7YmFuay5uYW1lfX1cbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICogICAgICAgPC9tYXQtc2VsZWN0PlxuICogICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gKiAgIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgRGF0YVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAqXG4gKiAgIC8vIGNvbnRyb2wgZm9yIHRoZSBzZWxlY3RlZCBiYW5rXG4gKiAgIHB1YmxpYyBiYW5rQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAqICAgLy8gY29udHJvbCBmb3IgdGhlIE1hdFNlbGVjdCBmaWx0ZXIga2V5d29yZFxuICogICBwdWJsaWMgYmFua0ZpbHRlckN0cmw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gKlxuICogICAvLyBsaXN0IG9mIGJhbmtzXG4gKiAgIHByaXZhdGUgYmFua3M6IEJhbmtbXSA9IFt7bmFtZTogJ0JhbmsgQScsIGlkOiAnQSd9LCB7bmFtZTogJ0JhbmsgQicsIGlkOiAnQid9LCB7bmFtZTogJ0JhbmsgQycsIGlkOiAnQyd9XTtcbiAqICAgLy8gbGlzdCBvZiBiYW5rcyBmaWx0ZXJlZCBieSBzZWFyY2gga2V5d29yZFxuICogICBwdWJsaWMgZmlsdGVyZWRCYW5rczogUmVwbGF5U3ViamVjdDxCYW5rW10+ID0gbmV3IFJlcGxheVN1YmplY3Q8QmFua1tdPigxKTtcbiAqXG4gKiAgIC8vIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLlxuICogICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICpcbiAqXG4gKiAgIG5nT25Jbml0KCkge1xuICogICAgIC8vIGxvYWQgdGhlIGluaXRpYWwgYmFuayBsaXN0XG4gKiAgICAgdGhpcy5maWx0ZXJlZEJhbmtzLm5leHQodGhpcy5iYW5rcy5zbGljZSgpKTtcbiAqICAgICAvLyBsaXN0ZW4gZm9yIHNlYXJjaCBmaWVsZCB2YWx1ZSBjaGFuZ2VzXG4gKiAgICAgdGhpcy5iYW5rRmlsdGVyQ3RybC52YWx1ZUNoYW5nZXNcbiAqICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIHRoaXMuZmlsdGVyQmFua3MoKTtcbiAqICAgICAgIH0pO1xuICogICB9XG4gKlxuICogICBuZ09uRGVzdHJveSgpIHtcbiAqICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICogICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGZpbHRlckJhbmtzKCkge1xuICogICAgIGlmICghdGhpcy5iYW5rcykge1xuICogICAgICAgcmV0dXJuO1xuICogICAgIH1cbiAqXG4gKiAgICAgLy8gZ2V0IHRoZSBzZWFyY2gga2V5d29yZFxuICogICAgIGxldCBzZWFyY2ggPSB0aGlzLmJhbmtGaWx0ZXJDdHJsLnZhbHVlO1xuICogICAgIGlmICghc2VhcmNoKSB7XG4gKiAgICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dCh0aGlzLmJhbmtzLnNsaWNlKCkpO1xuICogICAgICAgcmV0dXJuO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICBzZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAqICAgICB9XG4gKlxuICogICAgIC8vIGZpbHRlciB0aGUgYmFua3NcbiAqICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dChcbiAqICAgICAgIHRoaXMuYmFua3MuZmlsdGVyKGJhbmsgPT4gYmFuay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTEpXG4gKiAgICAgKTtcbiAqICAgfVxuICogfVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIG1hdFNlbGVjdDogTWF0U2VsZWN0O1xuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyO1xuICAgIG1hdE9wdGlvbjogTWF0T3B0aW9uO1xuICAgIHByaXZhdGUgbGl2ZUFubm91bmNlcjtcbiAgICBtYXRGb3JtRmllbGQ6IE1hdEZvcm1GaWVsZDtcbiAgICAvKiogTGFiZWwgb2YgdGhlIHNlYXJjaCBwbGFjZWhvbGRlciAqL1xuICAgIHBsYWNlaG9sZGVyTGFiZWw6IHN0cmluZztcbiAgICAvKiogVHlwZSBvZiB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXG4gICAgdHlwZTogc3RyaW5nO1xuICAgIC8qKiBMYWJlbCB0byBiZSBzaG93biB3aGVuIG5vIGVudHJpZXMgYXJlIGZvdW5kLiBTZXQgdG8gbnVsbCBpZiBubyBtZXNzYWdlIHNob3VsZCBiZSBzaG93bi4gKi9cbiAgICBub0VudHJpZXNGb3VuZExhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogIFRleHQgdGhhdCBpcyBhcHBlbmRlZCB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBpdGVtIGxhYmVsIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycyxcbiAgICAgKiAgaW5mb3JtaW5nIHRoZSB1c2VyIG9mIHRoZSBjdXJyZW50IGluZGV4LCB2YWx1ZSBhbmQgdG90YWwgb3B0aW9ucy5cbiAgICAgKiAgZWc6IEJhbmsgUiAoR2VybWFueSkgMSBvZiA2XG4gICAgKi9cbiAgICBpbmRleEFuZExlbmd0aFNjcmVlblJlYWRlclRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlYXJjaCBmaWVsZCBzaG91bGQgYmUgY2xlYXJlZCBhZnRlciB0aGUgZHJvcGRvd24gbWVudSBpcyBjbG9zZWQuXG4gICAgICAqIFVzZWZ1bCBmb3Igc2VydmVyLXNpZGUgZmlsdGVyaW5nLiBTZWUgWyMzXShodHRwczovL2dpdGh1Yi5jb20vYml0aG9zdC1nbWJoL25neC1tYXQtc2VsZWN0LXNlYXJjaC9pc3N1ZXMvMylcbiAgICAgICovXG4gICAgY2xlYXJTZWFyY2hJbnB1dDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0byBzaG93IHRoZSBzZWFyY2gtaW4tcHJvZ3Jlc3MgaW5kaWNhdG9yICovXG4gICAgc2VhcmNoaW5nOiBib29sZWFuO1xuICAgIC8qKiBEaXNhYmxlcyBpbml0aWFsIGZvY3VzaW5nIG9mIHRoZSBpbnB1dCBmaWVsZCAqL1xuICAgIGRpc2FibGVJbml0aWFsRm9jdXM6IGJvb2xlYW47XG4gICAgLyoqIEVuYWJsZSBjbGVhciBpbnB1dCBvbiBlc2NhcGUgcHJlc3NlZCAqL1xuICAgIGVuYWJsZUNsZWFyT25Fc2NhcGVQcmVzc2VkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIGhvbWUgLyBlbmQga2V5IGJlaW5nIHByb3BhZ2F0ZWQgdG8gbWF0LXNlbGVjdCxcbiAgICAgKiBhbGxvd2luZyB0byBtb3ZlIHRoZSBjdXJzb3Igd2l0aGluIHRoZSBzZWFyY2ggaW5wdXQgaW5zdGVhZCBvZiBuYXZpZ2F0aW5nIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgcHJldmVudEhvbWVFbmRLZXlQcm9wYWdhdGlvbjogYm9vbGVhbjtcbiAgICAvKiogRGlzYWJsZXMgc2Nyb2xsaW5nIHRvIGFjdGl2ZSBvcHRpb25zIHdoZW4gb3B0aW9uIGxpc3QgY2hhbmdlcy4gVXNlZnVsIGZvciBzZXJ2ZXItc2lkZSBzZWFyY2ggKi9cbiAgICBkaXNhYmxlU2Nyb2xsVG9BY3RpdmVPbk9wdGlvbnNDaGFuZ2VkOiBib29sZWFuO1xuICAgIC8qKiBBZGRzIDUwOCBzY3JlZW4gcmVhZGVyIHN1cHBvcnQgZm9yIHNlYXJjaCBib3ggKi9cbiAgICBhcmlhTGFiZWw6IHN0cmluZztcbiAgICAvKiogV2hldGhlciB0byBzaG93IFNlbGVjdCBBbGwgQ2hlY2tib3ggKGZvciBtYXQtc2VsZWN0W211bHRpPXRydWVdKSAqL1xuICAgIHNob3dUb2dnbGVBbGxDaGVja2JveDogYm9vbGVhbjtcbiAgICAvKiogc2VsZWN0IGFsbCBjaGVja2JveCBjaGVja2VkIHN0YXRlICovXG4gICAgdG9nZ2xlQWxsQ2hlY2tib3hDaGVja2VkOiBib29sZWFuO1xuICAgIC8qKiBzZWxlY3QgYWxsIGNoZWNrYm94IGluZGV0ZXJtaW5hdGUgc3RhdGUgKi9cbiAgICB0b2dnbGVBbGxDaGVja2JveEluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gICAgLyoqIERpc3BsYXkgYSBtZXNzYWdlIGluIGEgdG9vbHRpcCBvbiB0aGUgdG9nZ2xlLWFsbCBjaGVja2JveCAqL1xuICAgIHRvZ2dsZUFsbENoZWNrYm94VG9vbHRpcE1lc3NhZ2U6IHN0cmluZztcbiAgICAvKiogRGVmaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9vbHRpcCBvbiB0aGUgdG9nZ2xlLWFsbCBjaGVja2JveC4gKi9cbiAgICB0b29nbGVBbGxDaGVja2JveFRvb2x0aXBQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdhYm92ZScgfCAnYmVsb3cnIHwgJ2JlZm9yZScgfCAnYWZ0ZXInO1xuICAgIC8qKiBPdXRwdXQgZW1pdHRlciB0byBzZW5kIHRvIHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgdG9nZ2xlIGFsbCBib29sZWFuICovXG4gICAgdG9nZ2xlQWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXG4gICAgc2VhcmNoU2VsZWN0SW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXG4gICAgaW5uZXJTZWxlY3RTZWFyY2g6IEVsZW1lbnRSZWY7XG4gICAgLyoqIFJlZmVyZW5jZSB0byBjdXN0b20gc2VhcmNoIGlucHV0IGNsZWFyIGljb24gKi9cbiAgICBjbGVhckljb246IE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlO1xuICAgIHJlYWRvbmx5IGlzSW5zaWRlTWF0T3B0aW9uOiBib29sZWFuO1xuICAgIC8qKiBDdXJyZW50IHNlYXJjaCB2YWx1ZSAqL1xuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsdWU7XG4gICAgb25DaGFuZ2U6IEZ1bmN0aW9uO1xuICAgIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgTWF0U2VsZWN0IG9wdGlvbnMgKi9cbiAgICBfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG4gICAgLyoqIFByZXZpb3VzbHkgc2VsZWN0ZWQgdmFsdWVzIHdoZW4gdXNpbmcgPG1hdC1zZWxlY3QgW211bHRpcGxlXT1cInRydWVcIj4qL1xuICAgIHByaXZhdGUgcHJldmlvdXNTZWxlY3RlZFZhbHVlcztcbiAgICAvKiogRXZlbnQgdGhhdCBlbWl0cyB3aGVuIHRoZSBjdXJyZW50IHZhbHVlIGNoYW5nZXMgKi9cbiAgICBwcml2YXRlIGNoYW5nZTtcbiAgICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95O1xuICAgIGNvbnN0cnVjdG9yKG1hdFNlbGVjdDogTWF0U2VsZWN0LCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBtYXRPcHRpb246IE1hdE9wdGlvbiwgbGl2ZUFubm91bmNlcjogTGl2ZUFubm91bmNlciwgbWF0Rm9ybUZpZWxkPzogTWF0Rm9ybUZpZWxkKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIF9lbWl0U2VsZWN0QWxsQm9vbGVhblRvUGFyZW50KHN0YXRlOiBib29sZWFuKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIF9pc1RvZ2dsZUFsbENoZWNrYm94VmlzaWJsZSgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGtleSBkb3duIGV2ZW50IHdpdGggTWF0U2VsZWN0LlxuICAgICAqIEFsbG93cyBlLmcuIHNlbGVjdGluZyB3aXRoIGVudGVyIGtleSwgbmF2aWdhdGlvbiB3aXRoIGFycm93IGtleXMsIGV0Yy5cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUga2V5IHVwIGV2ZW50IHdpdGggTWF0U2VsZWN0LlxuICAgICAqIEFsbG93cyBlLmcuIHRoZSBhbm5vdW5jaW5nIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlRGVzY2VuZGFudCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBfaGFuZGxlS2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgb3B0aW9uLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxuICAgICAqIGV4YW1wbGVzOlxuICAgICAqICAgIENhc2UgMSBbU2VhcmNoLCAxLCAyLCAzXSB3aWxsIGhhdmUgb2Zmc2V0IG9mIDEsIGR1ZSB0byBzZWFyY2ggYW5kIHdpbGwgcmVhZCBpbmRleCBvZiB0b3RhbC5cbiAgICAgKiAgICBDYXNlIDIgWzEsIDIsIDNdIHdpbGwgaGF2ZSBvZmZzZXQgb2YgMCBhbmQgd2lsbCByZWFkIGluZGV4ICsxIG9mIHRvdGFsLlxuICAgICAqL1xuICAgIGdldEFyaWFJbmRleChvcHRpb25JbmRleDogbnVtYmVyKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBvcHRpb25zLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxuICAgICAqIGV4YW1wbGVzOlxuICAgICAqICAgIENhc2UgMSBbU2VhcmNoLCAxLCAyLCAzXSB3aWxsIGhhdmUgbGVuZ3RoIG9mIG9wdGlvbnMubGVuZ3RoIC0xLCBkdWUgdG8gc2VhcmNoLlxuICAgICAqICAgIENhc2UgMiBbMSwgMiwgM10gd2lsbCBoYXZlIGxlbmd0aCBvZiBvcHRpb25zLmxlbmd0aC5cbiAgICAgKi9cbiAgICBnZXRBcmlhTGVuZ3RoKCk6IG51bWJlcjtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICAgIG9uSW5wdXRDaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgb25CbHVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIHNlYXJjaCBpbnB1dCBmaWVsZFxuICAgICAqL1xuICAgIF9mb2N1cygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY3VycmVudCBzZWFyY2ggdmFsdWVcbiAgICAgKiBAcGFyYW0gZm9jdXMgd2hldGhlciB0byBmb2N1cyBhZnRlciByZXNldHRpbmdcbiAgICAgKi9cbiAgICBfcmVzZXQoZm9jdXM/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBoYW5kbGluZyA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxuICAgICAqIE5vdGU6IHRvIGltcHJvdmUgdGhpcyBjb2RlLCBtYXQtc2VsZWN0IHNob3VsZCBiZSBleHRlbmRlZCB0byBhbGxvdyBkaXNhYmxpbmcgcmVzZXR0aW5nIHRoZSBzZWxlY3Rpb24gd2hpbGUgZmlsdGVyaW5nLlxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdE11bHRpcGxlSGFuZGxpbmc7XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0aGUgY3VycmVudGx5IGFjdGl2ZSBvcHRpb24gaW50byB0aGUgdmlldyBpZiBpdCBpcyBub3QgeWV0IHZpc2libGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3O1xuICAgIC8qKlxuICAgICAqICBTZXQgdGhlIHdpZHRoIG9mIHRoZSBpbm5lclNlbGVjdFNlYXJjaCB0byBmaXQgZXZlbiBjdXN0b20gc2Nyb2xsYmFyc1xuICAgICAqICBBbmQgc3VwcG9ydCBhbGwgT3BlcmF0aW9uIFN5c3RlbXNcbiAgICAgKi9cbiAgICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRNYXRPcHRpb25IZWlnaHQ7XG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemUgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzIG9uY2UgdGhlIGZpcnN0IGZpbHRlcmluZyBvY2N1cnMuXG4gICAgICovXG4gICAgaW5pdE11bHRpU2VsZWN0ZWRWYWx1ZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIFwibm8gZW50cmllcyBmb3VuZFwiIG1lc3NhZ2Ugc2hvdWxkIGJlIGRpc3BsYXllZFxuICAgICAqL1xuICAgIF9ub0VudHJpZXNGb3VuZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZSB0aGUgb2Zmc2V0IHRvIGxlbmd0aCB0aGF0IGNhbiBiZSBjYXVzZWQgYnkgdGhlIG9wdGlvbmFsIG1hdE9wdGlvbiB1c2VkIGFzIGEgc2VhcmNoIGlucHV0LlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0T3B0aW9uc0xlbmd0aE9mZnNldDtcbn1cbiJdfQ==