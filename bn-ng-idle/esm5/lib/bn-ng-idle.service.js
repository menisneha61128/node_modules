/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent, merge, Subject, timer } from 'rxjs';
import * as i0 from "@angular/core";
var BnNgIdleService = /** @class */ (function () {
    function BnNgIdleService() {
        this.expired$ = new Subject();
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
        this.idle$ = merge(fromEvent(document, 'mousemove'), fromEvent(document, 'click'), fromEvent(document, 'mousedown'), fromEvent(document, 'keypress'), fromEvent(document, 'DOMMouseScroll'), fromEvent(document, 'mousewheel'), fromEvent(document, 'touchmove'), fromEvent(document, 'MSPointerMove'), fromEvent(window, 'mousemove'), fromEvent(window, 'resize'));
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
        this.timer$ = timer(this.timeOutMilliSeconds, this.timeOutMilliSeconds).subscribe((/**
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BnNgIdleService.ctorParameters = function () { return []; };
    /** @nocollapse */ BnNgIdleService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BnNgIdleService_Factory() { return new BnNgIdleService(); }, token: BnNgIdleService, providedIn: "root" });
    return BnNgIdleService;
}());
export { BnNgIdleService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm4tbmctaWRsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYm4tbmctaWRsZS8iLCJzb3VyY2VzIjpbImxpYi9ibi1uZy1pZGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHcEU7SUFZRTtRQUZPLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQUkzRCxDQUFDOzs7OztJQUVNLHVDQUFhOzs7O0lBQXBCLFVBQXFCLGNBQWM7UUFBbkMsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUNoQixTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUNoQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUM1QixTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUNoQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUMvQixTQUFTLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEVBQ3JDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQ2hDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLEVBQ3BDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQzVCLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQztRQUVqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFHO1lBQy9DLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxvQ0FBVTs7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDbkYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sb0NBQVU7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFTSxtQ0FBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBdkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQU5EO0NBNERDLEFBeERELElBd0RDO1NBckRZLGVBQWU7Ozs7OztJQUUxQixnQ0FBK0I7Ozs7O0lBQy9CLGlDQUFlOzs7OztJQUNmLDhDQUFvQzs7Ozs7SUFDcEMsMkNBQXlCOztJQUV6QixtQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQm5OZ0lkbGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBpZGxlJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHByaXZhdGUgdGltZXIkO1xyXG4gIHByaXZhdGUgdGltZU91dE1pbGxpU2Vjb25kczogbnVtYmVyO1xyXG4gIHByaXZhdGUgaWRsZVN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHVibGljIGV4cGlyZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0V2F0Y2hpbmcodGltZU91dFNlY29uZHMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5pZGxlJCA9IG1lcmdlKFxyXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKSxcclxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKSxcclxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vkb3duJyksXHJcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXByZXNzJyksXHJcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ0RPTU1vdXNlU2Nyb2xsJyksXHJcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNld2hlZWwnKSxcclxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAndG91Y2htb3ZlJyksXHJcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ01TUG9pbnRlck1vdmUnKSxcclxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScpLFxyXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudGltZU91dE1pbGxpU2Vjb25kcyA9IHRpbWVPdXRTZWNvbmRzICogMTAwMDtcclxuXHJcbiAgICB0aGlzLmlkbGVTdWJzY3JpcHRpb24gPSB0aGlzLmlkbGUkLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZXhwaXJlZCQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgIHRoaXMudGltZXIkID0gdGltZXIodGhpcy50aW1lT3V0TWlsbGlTZWNvbmRzLCB0aGlzLnRpbWVPdXRNaWxsaVNlY29uZHMpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuZXhwaXJlZCQubmV4dCh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0VGltZXIoKSB7XHJcbiAgICB0aGlzLnRpbWVyJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcFRpbWVyKCkge1xyXG4gICAgdGhpcy50aW1lciQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuaWRsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=