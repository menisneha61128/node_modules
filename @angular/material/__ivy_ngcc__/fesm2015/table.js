import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive, Input, ElementRef, NgModule } from '@angular/core';
import { CdkTable, CDK_TABLE_TEMPLATE, CDK_TABLE, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkHeaderCell, CdkFooterCell, CdkCell, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkHeaderRow, CDK_ROW_TEMPLATE, CdkFooterRow, CdkRow, CdkTextColumn, CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatCommonModule } from '@angular/material/core';
import { _isNumberValue } from '@angular/cdk/coercion';
import { BehaviorSubject, Subject, Subscription, merge, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/table';

const _c0 = [[["caption"]]];
const _c1 = ["caption"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r1.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
class MatTable extends CdkTable {
    constructor() {
        super(...arguments);
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */
        this.stickyCssClass = 'mat-table-sticky';
    }
}
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkTable, useExisting: MatTable },
            { provide: CDK_TABLE, useExisting: MatTable }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementContainer(1, 0);
        ɵngcc0.ɵɵelementContainer(2, 1);
        ɵngcc0.ɵɵelementContainer(3, 2);
    } }, directives: [ɵngcc1.HeaderRowOutlet, ɵngcc1.DataRowOutlet, ɵngcc1.FooterRowOutlet], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"], encapsulation: 2 });
const ɵMatTable_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTable);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTable, [{
        type: Component,
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'mat-table'
                },
                providers: [
                    { provide: CdkTable, useExisting: MatTable },
                    { provide: CDK_TABLE, useExisting: MatTable }
                ],
                encapsulation: ViewEncapsulation.None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
            }]
    }], null, null); })();
if (false) {
    /**
     * Overrides the sticky CSS class set by the `CdkTable`.
     * @type {?}
     * @protected
     */
    MatTable.prototype.stickyCssClass;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class MatCellDef extends CdkCellDef {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: MatCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCellDef, [{
        type: Directive,
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class MatHeaderCellDef extends CdkHeaderCellDef {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatHeaderCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCellDef, [{
        type: Directive,
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class MatFooterCellDef extends CdkFooterCellDef {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatFooterCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCellDef, [{
        type: Directive,
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
class MatColumnDef extends CdkColumnDef {
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkColumnDef, useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatColumnDef.propDecorators = {
    name: [{ type: Input, args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatColumnDef, [{
        type: Directive,
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: CdkColumnDef, useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: Input,
            args: ['matColumnDef']
        }] }); })();
if (false) {
    /** @type {?} */
    MatColumnDef.ngAcceptInputType_sticky;
    /**
     * Unique name for this column.
     * @type {?}
     */
    MatColumnDef.prototype.name;
}
/**
 * Header cell template container that adds the right classes and role.
 */
class MatHeaderCell extends CdkHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return new (t || MatHeaderCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
class MatFooterCell extends CdkFooterCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return new (t || MatFooterCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCell, [{
        type: Directive,
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
class MatCell extends CdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatCell.ɵfac = function MatCell_Factory(t) { return new (t || MatCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCell, [{
        type: Directive,
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class MatHeaderRowDef extends CdkHeaderRowDef {
}
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderRowDef, useExisting: MatHeaderRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatHeaderRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    MatHeaderRowDef.ngAcceptInputType_sticky;
}
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class MatFooterRowDef extends CdkFooterRowDef {
}
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterRowDef, useExisting: MatFooterRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatFooterRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRowDef, [{
        type: Directive,
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: CdkFooterRowDef, useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    MatFooterRowDef.ngAcceptInputType_sticky;
}
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class MatRowDef extends CdkRowDef {
}
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkRowDef, useExisting: MatRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRowDef, [{
        type: Directive,
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class MatHeaderRow extends CdkHeaderRow {
}
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderRow, useExisting: MatHeaderRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
const ɵMatHeaderRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRow, [{
        type: Component,
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: CdkHeaderRow, useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class MatFooterRow extends CdkFooterRow {
}
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterRow, useExisting: MatFooterRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
const ɵMatFooterRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRow, [{
        type: Component,
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matFooterRow',
                providers: [{ provide: CdkFooterRow, useExisting: MatFooterRow }]
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class MatRow extends CdkRow {
}
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkRow, useExisting: MatRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
const ɵMatRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRow, [{
        type: Component,
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matRow',
                providers: [{ provide: CdkRow, useExisting: MatRow }]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
class MatTextColumn extends CdkTextColumn {
}
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        ɵngcc0.ɵɵtemplate(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        ɵngcc0.ɵɵelementContainerEnd();
    } }, directives: [MatColumnDef,
        MatHeaderCellDef,
        MatCellDef,
        MatHeaderCell,
        MatCell], encapsulation: 2 });
const ɵMatTextColumn_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTextColumn);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTextColumn, [{
        type: Component,
        args: [{
                selector: 'mat-text-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: ViewEncapsulation.None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatTextColumn,
];
class MatTableModule {
}
MatTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTableModule });
MatTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            CdkTableModule,
            MatCommonModule,
        ],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTableModule, { declarations: function () { return [MatTable,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatColumnDef,
        MatCellDef,
        MatRowDef,
        MatFooterCellDef,
        MatFooterRowDef,
        MatHeaderCell,
        MatCell,
        MatFooterCell,
        MatHeaderRow,
        MatRow,
        MatFooterRow,
        MatTextColumn]; }, imports: function () { return [CdkTableModule,
        MatCommonModule]; }, exports: function () { return [MatCommonModule,
        MatTable,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatColumnDef,
        MatCellDef,
        MatRowDef,
        MatFooterCellDef,
        MatFooterRowDef,
        MatHeaderCell,
        MatCell,
        MatFooterCell,
        MatHeaderRow,
        MatRow,
        MatFooterRow,
        MatTextColumn]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTableModule,
                    MatCommonModule,
                ],
                exports: [MatCommonModule, EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 * @type {?}
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 * @template T
 */
class MatTableDataSource extends DataSource {
    /**
     * @param {?=} initialData
     */
    constructor(initialData = []) {
        super();
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        this._renderData = new BehaviorSubject([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */
        this._filter = new BehaviorSubject('');
        /**
         * Used to react to internal changes of the paginator that are made by the data source itself.
         */
        this._internalPageChanges = new Subject();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = Subscription.EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (/**
         * @param {?} data
         * @param {?} sortHeaderId
         * @return {?}
         */
        (data, sortHeaderId) => {
            /** @type {?} */
            const value = ((/** @type {?} */ (data)))[sortHeaderId];
            if (_isNumberValue(value)) {
                /** @type {?} */
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        });
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (/**
         * @param {?} data
         * @param {?} sort
         * @return {?}
         */
        (data, sort) => {
            /** @type {?} */
            const active = sort.active;
            /** @type {?} */
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                let valueA = this.sortingDataAccessor(a, active);
                /** @type {?} */
                let valueB = this.sortingDataAccessor(b, active);
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                /** @type {?} */
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            }));
        });
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */
        this.filterPredicate = (/**
         * @param {?} data
         * @param {?} filter
         * @return {?}
         */
        (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            /** @type {?} */
            const dataStr = Object.keys(data).reduce((/**
             * @param {?} currentTerm
             * @param {?} key
             * @return {?}
             */
            (currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + ((/** @type {?} */ (data)))[key] + '◬';
            }), '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            /** @type {?} */
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        });
        this._data = new BehaviorSubject(initialData);
        this._updateChangeSubscription();
    }
    /**
     * Array of data that should be rendered by the table, where each object represents one row.
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     * @return {?}
     */
    get filter() { return this._filter.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     * @return {?}
     */
    get sort() { return this._sort; }
    /**
     * @param {?} sort
     * @return {?}
     */
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     * @return {?}
     */
    get paginator() { return this._paginator; }
    /**
     * @param {?} paginator
     * @return {?}
     */
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     * @return {?}
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        /** @type {?} */
        const sortChange = this._sort ?
            (/** @type {?} */ (merge(this._sort.sortChange, this._sort.initialized))) :
            of(null);
        /** @type {?} */
        const pageChange = this._paginator ?
            (/** @type {?} */ (merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized))) :
            of(null);
        /** @type {?} */
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        /** @type {?} */
        const filteredData = combineLatest([dataStream, this._filter])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._filterData(data))));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        /** @type {?} */
        const orderedData = combineLatest([filteredData, sortChange])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._orderData(data))));
        // Watch for ordered data or page changes to provide a paged set of data.
        /** @type {?} */
        const paginatedData = combineLatest([orderedData, pageChange])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._pageData(data))));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this._renderData.next(data)));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @param {?} data
     * @return {?}
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter((/**
             * @param {?} obj
             * @return {?}
             */
            obj => this.filterPredicate(obj, this.filter)));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     * @param {?} data
     * @return {?}
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        /** @type {?} */
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @param {?} filteredDataLength
     * @return {?}
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                /** @type {?} */
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                /** @type {?} */
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        }));
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * \@docs-private
     * @return {?}
     */
    connect() { return this._renderData; }
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * \@docs-private
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream that emits when a new data array is set on the data source.
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._data;
    /**
     * Stream emitting render data to the table (depends on ordered data changes).
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._renderData;
    /**
     * Stream that emits when a new filter string is set on the data source.
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._filter;
    /**
     * Used to react to internal changes of the paginator that are made by the data source itself.
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._internalPageChanges;
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     * @type {?}
     */
    MatTableDataSource.prototype._renderChangesSubscription;
    /**
     * The filtered set of data that has been matched by the filter string, or all the data if there
     * is no filter. Useful for knowing the set of data the table represents.
     * For example, a 'selectAll()' function would likely want to select the set of filtered data
     * shown to the user rather than all the data.
     * @type {?}
     */
    MatTableDataSource.prototype.filteredData;
    /**
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._sort;
    /**
     * @type {?}
     * @private
     */
    MatTableDataSource.prototype._paginator;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * \@param data Data object that is being accessed.
     * \@param sortHeaderId The name of the column that represents the data.
     * @type {?}
     */
    MatTableDataSource.prototype.sortingDataAccessor;
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * \@param data The array of data that should be sorted.
     * \@param sort The connected MatSort that holds the current sort state.
     * @type {?}
     */
    MatTableDataSource.prototype.sortData;
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * \@param data Data object used to check against the filter.
     * \@param filter Filter string that has been set on the data source.
     * \@return Whether the filter matches against the data
     * @type {?}
     */
    MatTableDataSource.prototype.filterPredicate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn };

//# sourceMappingURL=table.js.map