import { CdkTreeNode, CdkTree, CdkTreeNodeDef, CdkNestedTreeNode, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodePadding, CdkTreeNodeOutlet, CdkTreeNodeToggle, CdkTreeModule } from '@angular/cdk/tree';
import { Directive, ElementRef, Attribute, Input, IterableDiffers, ViewContainerRef, Inject, Optional, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import { mixinTabIndex, mixinDisabled, MatCommonModule } from '@angular/material/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, merge } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/tree';
const _MatTreeNodeMixinBase = mixinTabIndex(mixinDisabled(CdkTreeNode));
/**
 * Wrapper for the CdkTree node with Material design styles.
 * @template T
 */
class MatTreeNode extends _MatTreeNodeMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, tabIndex) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this.role = 'treeitem';
        this.tabIndex = Number(tabIndex) || 0;
    }
}
MatTreeNode.ɵfac = function MatTreeNode_Factory(t) { return new (t || MatTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNode, selectors: [["mat-tree-node"]], hostAttrs: [1, "mat-tree-node"], hostVars: 3, hostBindings: function MatTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", role: "role" }, exportAs: ["matTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNode, useExisting: MatTreeNode }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatTreeNode.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkTree },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
];
MatTreeNode.propDecorators = {
    role: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNode, [{
        type: Directive,
        args: [{
                selector: 'mat-tree-node',
                exportAs: 'matTreeNode',
                inputs: ['disabled', 'tabIndex'],
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'role === "treeitem" ? level : null',
                    '[attr.role]': 'role',
                    'class': 'mat-tree-node'
                },
                providers: [{ provide: CdkTreeNode, useExisting: MatTreeNode }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { role: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatTreeNode.ngAcceptInputType_disabled;
    /** @type {?} */
    MatTreeNode.prototype.role;
    /**
     * @type {?}
     * @protected
     */
    MatTreeNode.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    MatTreeNode.prototype._tree;
}
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * @template T
 */
class MatTreeNodeDef extends CdkTreeNodeDef {
}
MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) { return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef); };
MatTreeNodeDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeDef, selectors: [["", "matTreeNodeDef", ""]], inputs: { when: ["matTreeNodeDefWhen", "when"], data: ["matTreeNode", "data"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatTreeNodeDef.propDecorators = {
    data: [{ type: Input, args: ['matTreeNode',] }]
};
const ɵMatTreeNodeDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeDef, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]
            }]
    }], null, { data: [{
            type: Input,
            args: ['matTreeNode']
        }] }); })();
if (false) {
    /** @type {?} */
    MatTreeNodeDef.prototype.data;
}
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 * @template T
 */
class MatNestedTreeNode extends CdkNestedTreeNode {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} _differs
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, _differs, tabIndex) {
        super(_elementRef, _tree, _differs);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
        this._disabled = false;
        this.tabIndex = Number(tabIndex) || 0;
    }
    /**
     * Whether the node is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    /**
     * Tabindex for the node.
     * @return {?}
     */
    get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
    /**
     * @param {?} value
     * @return {?}
     */
    set tabIndex(value) {
        // If the specified tabIndex value is null or undefined, fall back to the default value.
        this._tabIndex = value != null ? value : 0;
    }
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) { return new (t || MatNestedTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatNestedTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatNestedTreeNode, selectors: [["mat-nested-tree-node"]], hostAttrs: [1, "mat-nested-tree-node"], hostVars: 2, hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", node: ["matNestedTreeNode", "node"] }, exportAs: ["matNestedTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
            { provide: CdkTreeNode, useExisting: MatNestedTreeNode },
            { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatNestedTreeNode.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkTree },
    { type: IterableDiffers },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
];
MatNestedTreeNode.propDecorators = {
    node: [{ type: Input, args: ['matNestedTreeNode',] }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatNestedTreeNode, [{
        type: Directive,
        args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node'
                },
                providers: [
                    { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
                    { provide: CdkTreeNode, useExisting: MatNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: ɵngcc0.IterableDiffers }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], node: [{
            type: Input,
            args: ['matNestedTreeNode']
        }] }); })();
if (false) {
    /** @type {?} */
    MatNestedTreeNode.ngAcceptInputType_disabled;
    /** @type {?} */
    MatNestedTreeNode.prototype.node;
    /**
     * @type {?}
     * @private
     */
    MatNestedTreeNode.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MatNestedTreeNode.prototype._tabIndex;
    /**
     * @type {?}
     * @protected
     */
    MatNestedTreeNode.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    MatNestedTreeNode.prototype._tree;
    /**
     * @type {?}
     * @protected
     */
    MatNestedTreeNode.prototype._differs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/padding.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree padding with Material design styles.
 * @template T
 */
class MatTreeNodePadding extends CdkTreeNodePadding {
}
MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) { return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding); };
MatTreeNodePadding.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodePadding, selectors: [["", "matTreeNodePadding", ""]], inputs: { level: ["matTreeNodePadding", "level"], indent: ["matTreeNodePaddingIndent", "indent"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatTreeNodePadding.propDecorators = {
    level: [{ type: Input, args: ['matTreeNodePadding',] }],
    indent: [{ type: Input, args: ['matTreeNodePaddingIndent',] }]
};
const ɵMatTreeNodePadding_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodePadding);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodePadding, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]
            }]
    }], null, { level: [{
            type: Input,
            args: ['matTreeNodePadding']
        }], indent: [{
            type: Input,
            args: ['matTreeNodePaddingIndent']
        }] }); })();
if (false) {
    /**
     * The level of depth of the tree node. The padding will be `level * indent` pixels.
     * @type {?}
     */
    MatTreeNodePadding.prototype.level;
    /**
     * The indent for each level. Default number 40px from material design menu sub-menu spec.
     * @type {?}
     */
    MatTreeNodePadding.prototype.indent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class MatTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) { return new (t || MatTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
MatTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeOutlet, selectors: [["", "matTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkTreeNodeOutlet,
                useExisting: MatTreeNodeOutlet
            }])] });
/** @nocollapse */
MatTreeNodeOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeOutlet, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: CdkTreeNodeOutlet,
                        useExisting: MatTreeNodeOutlet
                    }]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    MatTreeNodeOutlet.prototype.viewContainer;
    /** @type {?} */
    MatTreeNodeOutlet.prototype._node;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */
class MatTree extends CdkTree {
}
MatTree.ɵfac = function MatTree_Factory(t) { return ɵMatTree_BaseFactory(t || MatTree); };
MatTree.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTree, selectors: [["mat-tree"]], viewQuery: function MatTree_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(MatTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    } }, hostAttrs: ["role", "tree", 1, "mat-tree"], exportAs: ["matTree"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTree, useExisting: MatTree }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["matTreeNodeOutlet", ""]], template: function MatTree_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [MatTreeNodeOutlet], styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"], encapsulation: 2 });
MatTree.propDecorators = {
    _nodeOutlet: [{ type: ViewChild, args: [MatTreeNodeOutlet, { static: true },] }]
};
const ɵMatTree_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTree);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTree, [{
        type: Component,
        args: [{
                selector: 'mat-tree',
                exportAs: 'matTree',
                template: `<ng-container matTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'mat-tree',
                    'role': 'tree'
                },
                encapsulation: ViewEncapsulation.None,
                // See note on CdkTree for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [{ provide: CdkTree, useExisting: MatTree }],
                styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
            }]
    }], null, { _nodeOutlet: [{
            type: ViewChild,
            args: [MatTreeNodeOutlet, { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    MatTree.prototype._nodeOutlet;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/toggle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 * @template T
 */
class MatTreeNodeToggle extends CdkTreeNodeToggle {
    constructor() {
        super(...arguments);
        this.recursive = false;
    }
}
MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) { return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle); };
MatTreeNodeToggle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeToggle, selectors: [["", "matTreeNodeToggle", ""]], inputs: { recursive: ["matTreeNodeToggleRecursive", "recursive"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
MatTreeNodeToggle.propDecorators = {
    recursive: [{ type: Input, args: ['matTreeNodeToggleRecursive',] }]
};
const ɵMatTreeNodeToggle_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeToggle);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeToggle, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeToggle]',
                providers: [{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]
            }]
    }], null, { recursive: [{
            type: Input,
            args: ['matTreeNodeToggleRecursive']
        }] }); })();
if (false) {
    /** @type {?} */
    MatTreeNodeToggle.prototype.recursive;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/tree-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
class MatTreeModule {
}
MatTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTreeModule });
MatTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTreeModule_Factory(t) { return new (t || MatTreeModule)(); }, imports: [[CdkTreeModule, MatCommonModule],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTreeModule, { declarations: function () { return [MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet]; }, imports: function () { return [CdkTreeModule, MatCommonModule]; }, exports: function () { return [MatCommonModule,
        MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CdkTreeModule, MatCommonModule],
                exports: [MatCommonModule, MAT_TREE_DIRECTIVES],
                declarations: MAT_TREE_DIRECTIVES
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/data-source/flat-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 * @template T, F
 */
class MatTreeFlattener {
    /**
     * @param {?} transformFunction
     * @param {?} getLevel
     * @param {?} isExpandable
     * @param {?} getChildren
     */
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    /**
     * @param {?} node
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    _flattenNode(node, level, resultNodes, parentMap) {
        /** @type {?} */
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            /** @type {?} */
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(take(1)).subscribe((/**
                     * @param {?} children
                     * @return {?}
                     */
                    children => {
                        this._flattenChildren(children, level, resultNodes, parentMap);
                    }));
                }
            }
        }
        return resultNodes;
    }
    /**
     * @param {?} children
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    _flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((/**
         * @param {?} child
         * @param {?} index
         * @return {?}
         */
        (child, index) => {
            /** @type {?} */
            let childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);
            this._flattenNode(child, level + 1, resultNodes, childParentMap);
        }));
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     * @param {?} structuredData
     * @return {?}
     */
    flattenNodes(structuredData) {
        /** @type {?} */
        let resultNodes = [];
        structuredData.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => this._flattenNode(node, 0, resultNodes, [])));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     * @param {?} nodes
     * @param {?} treeControl
     * @return {?}
     */
    expandFlattenedNodes(nodes, treeControl) {
        /** @type {?} */
        let results = [];
        /** @type {?} */
        let currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            /** @type {?} */
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        }));
        return results;
    }
}
if (false) {
    /** @type {?} */
    MatTreeFlattener.prototype.transformFunction;
    /** @type {?} */
    MatTreeFlattener.prototype.getLevel;
    /** @type {?} */
    MatTreeFlattener.prototype.isExpandable;
    /** @type {?} */
    MatTreeFlattener.prototype.getChildren;
}
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 * @template T, F
 */
class MatTreeFlatDataSource extends DataSource {
    /**
     * @param {?} _treeControl
     * @param {?} _treeFlattener
     * @param {?=} initialData
     */
    constructor(_treeControl, _treeFlattener, initialData = []) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        this._flattenedData = new BehaviorSubject([]);
        this._expandedData = new BehaviorSubject([]);
        this._data = new BehaviorSubject(initialData);
    }
    /**
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data.next(value);
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        /** @type {?} */
        const changes = [
            collectionViewer.viewChange,
            this._treeControl.expansionModel.changed,
            this._flattenedData
        ];
        return merge(...changes).pipe(map((/**
         * @return {?}
         */
        () => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        })));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}
if (false) {
    /** @type {?} */
    MatTreeFlatDataSource.prototype._flattenedData;
    /** @type {?} */
    MatTreeFlatDataSource.prototype._expandedData;
    /** @type {?} */
    MatTreeFlatDataSource.prototype._data;
    /**
     * @type {?}
     * @private
     */
    MatTreeFlatDataSource.prototype._treeControl;
    /**
     * @type {?}
     * @private
     */
    MatTreeFlatDataSource.prototype._treeFlattener;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/data-source/nested-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 * @template T
 */
class MatTreeNestedDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this._data = new BehaviorSubject([]);
    }
    /**
     * Data for the nested tree
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) { this._data.next(value); }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        return merge(...[collectionViewer.viewChange, this._data])
            .pipe(map((/**
         * @return {?}
         */
        () => {
            return this.data;
        })));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}
if (false) {
    /** @type {?} */
    MatTreeNestedDataSource.prototype._data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle };

//# sourceMappingURL=tree.js.map