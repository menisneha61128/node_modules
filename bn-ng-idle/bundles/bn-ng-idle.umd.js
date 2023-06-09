(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('bn-ng-idle', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['bn-ng-idle'] = {}, global.ng.core, global.rxjs));
}(this, function (exports, core, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BnNgIdleService = /** @class */ (function () {
        function BnNgIdleService() {
            this.expired$ = new rxjs.Subject();
        }
        /**
         * @param {?} timeOutSeconds
         * @return {?}
         */
        BnNgIdleService.prototype.startWatching = /**
         * @param {?} timeOutSeconds
         * @return {?}
         */
        function (timeOutSeconds) {
            var _this = this;
            this.idle$ = rxjs.merge(rxjs.fromEvent(document, 'mousemove'), rxjs.fromEvent(document, 'click'), rxjs.fromEvent(document, 'mousedown'), rxjs.fromEvent(document, 'keypress'), rxjs.fromEvent(document, 'DOMMouseScroll'), rxjs.fromEvent(document, 'mousewheel'), rxjs.fromEvent(document, 'touchmove'), rxjs.fromEvent(document, 'MSPointerMove'), rxjs.fromEvent(window, 'mousemove'), rxjs.fromEvent(window, 'resize'));
            this.timeOutMilliSeconds = timeOutSeconds * 1000;
            this.idleSubscription = this.idle$.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.resetTimer();
            }));
            this.startTimer();
            return this.expired$;
        };
        /**
         * @private
         * @return {?}
         */
        BnNgIdleService.prototype.startTimer = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.timer$ = rxjs.timer(this.timeOutMilliSeconds, this.timeOutMilliSeconds).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.expired$.next(true);
            }));
        };
        /**
         * @return {?}
         */
        BnNgIdleService.prototype.resetTimer = /**
         * @return {?}
         */
        function () {
            this.timer$.unsubscribe();
            this.startTimer();
        };
        /**
         * @return {?}
         */
        BnNgIdleService.prototype.stopTimer = /**
         * @return {?}
         */
        function () {
            this.timer$.unsubscribe();
            this.idleSubscription.unsubscribe();
        };
        BnNgIdleService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BnNgIdleService.ctorParameters = function () { return []; };
        /** @nocollapse */ BnNgIdleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BnNgIdleService_Factory() { return new BnNgIdleService(); }, token: BnNgIdleService, providedIn: "root" });
        return BnNgIdleService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BnNgIdleService.prototype.idle$;
        /**
         * @type {?}
         * @private
         */
        BnNgIdleService.prototype.timer$;
        /**
         * @type {?}
         * @private
         */
        BnNgIdleService.prototype.timeOutMilliSeconds;
        /**
         * @type {?}
         * @private
         */
        BnNgIdleService.prototype.idleSubscription;
        /** @type {?} */
        BnNgIdleService.prototype.expired$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BnNgIdleModule = /** @class */ (function () {
        function BnNgIdleModule() {
        }
        BnNgIdleModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        providers: [BnNgIdleService],
                        exports: []
                    },] }
        ];
        return BnNgIdleModule;
    }());

    exports.BnNgIdleModule = BnNgIdleModule;
    exports.BnNgIdleService = BnNgIdleService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bn-ng-idle.umd.js.map
