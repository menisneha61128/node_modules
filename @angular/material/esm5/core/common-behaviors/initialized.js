/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { Observable } from 'rxjs';
/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */
export function mixinInitialized(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            /** Whether this directive has been marked as initialized. */
            _this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            _this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            _this.initialized = new Observable(function (subscriber) {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (_this._isInitialized) {
                    _this._notifySubscriber(subscriber);
                }
                else {
                    _this._pendingSubscribers.push(subscriber);
                }
            });
            return _this;
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * @docs-private
         */
        class_1.prototype._markInitialized = function () {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            this._pendingSubscribers.forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        };
        /** Emits and completes the subscriber stream (should only emit once). */
        class_1.prototype._notifySubscriber = function (subscriber) {
            subscriber.next();
            subscriber.complete();
        };
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9jb21tb24tYmVoYXZpb3JzL2luaXRpYWxpemVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBMEI1QyxvR0FBb0c7QUFDcEcsTUFBTSxVQUFVLGdCQUFnQixDQUE0QixJQUFPO0lBRWpFO1FBQXFCLDJCQUFJO1FBeUJ2QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsd0NBQXVDLElBQUksV0FBSTtZQXhCL0MsNkRBQTZEO1lBQzdELG9CQUFjLEdBQUcsS0FBSyxDQUFDO1lBRXZCOzs7O2VBSUc7WUFDSCx5QkFBbUIsR0FBOEIsRUFBRSxDQUFDO1lBRXBEOzs7ZUFHRztZQUNILGlCQUFXLEdBQUcsSUFBSSxVQUFVLENBQU8sVUFBQSxVQUFVO2dCQUMzQyw4RkFBOEY7Z0JBQzlGLG1DQUFtQztnQkFDbkMsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzVDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7O1FBRTJDLENBQUM7UUFFL0M7Ozs7V0FJRztRQUNILGtDQUFnQixHQUFoQjtZQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsTUFBTSxLQUFLLENBQUMsNERBQTREO29CQUNwRSw2QkFBNkIsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFM0IsSUFBSSxDQUFDLG1CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7UUFFRCx5RUFBeUU7UUFDekUsbUNBQWlCLEdBQWpCLFVBQWtCLFVBQTRCO1lBQzVDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUFDLEFBakRNLENBQWMsSUFBSSxHQWlEdkI7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NvbnN0cnVjdG9yfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuXG4vKipcbiAqIE1peGluIHRoYXQgYWRkcyBhbiBpbml0aWFsaXplZCBwcm9wZXJ0eSB0byBhIGRpcmVjdGl2ZSB3aGljaCwgd2hlbiBzdWJzY3JpYmVkIHRvLCB3aWxsIGVtaXQgYVxuICogdmFsdWUgb25jZSBtYXJrSW5pdGlhbGl6ZWQgaGFzIGJlZW4gY2FsbGVkLCB3aGljaCBzaG91bGQgYmUgZG9uZSBkdXJpbmcgdGhlIG5nT25Jbml0IGZ1bmN0aW9uLlxuICogSWYgdGhlIHN1YnNjcmlwdGlvbiBpcyBtYWRlIGFmdGVyIGl0IGhhcyBhbHJlYWR5IGJlZW4gbWFya2VkIGFzIGluaXRpYWxpemVkLCB0aGVuIGl0IHdpbGwgdHJpZ2dlclxuICogYW4gZW1pdCBpbW1lZGlhdGVseS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIYXNJbml0aWFsaXplZCB7XG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBvbmNlIGR1cmluZyB0aGUgZGlyZWN0aXZlL2NvbXBvbmVudCdzIG5nT25Jbml0LiAqL1xuICBpbml0aWFsaXplZDogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgc3RhdGUgYXMgaW5pdGlhbGl6ZWQgYW5kIG11c3QgYmUgY2FsbGVkIGR1cmluZyBuZ09uSW5pdCB0byBub3RpZnkgc3Vic2NyaWJlcnMgdGhhdFxuICAgKiB0aGUgZGlyZWN0aXZlIGhhcyBiZWVuIGluaXRpYWxpemVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfbWFya0luaXRpYWxpemVkOiAoKSA9PiB2b2lkO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IHR5cGUgSGFzSW5pdGlhbGl6ZWRDdG9yID0gQ29uc3RydWN0b3I8SGFzSW5pdGlhbGl6ZWQ+O1xuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGRpcmVjdGl2ZSB3aXRoIGFuIGluaXRpYWxpemVkIHByb3BlcnR5IHRoYXQgd2lsbCBlbWl0cyB3aGVuIG5nT25Jbml0IGVuZHMuICovXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Jbml0aWFsaXplZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8e30+PihiYXNlOiBUKTpcbiAgICBIYXNJbml0aWFsaXplZEN0b3IgJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgLyoqIFdoZXRoZXIgdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gbWFya2VkIGFzIGluaXRpYWxpemVkLiAqL1xuICAgIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHN1YnNjcmliZXJzIHRoYXQgc3Vic2NyaWJlZCBiZWZvcmUgdGhlIGRpcmVjdGl2ZSB3YXMgaW5pdGlhbGl6ZWQuIFNob3VsZCBiZSBub3RpZmllZFxuICAgICAqIGR1cmluZyBfbWFya0luaXRpYWxpemVkLiBTZXQgdG8gbnVsbCBhZnRlciBwZW5kaW5nIHN1YnNjcmliZXJzIGFyZSBub3RpZmllZCwgYW5kIHNob3VsZFxuICAgICAqIG5vdCBleHBlY3QgdG8gYmUgcG9wdWxhdGVkIGFmdGVyLlxuICAgICAqL1xuICAgIF9wZW5kaW5nU3Vic2NyaWJlcnM6IFN1YnNjcmliZXI8dm9pZD5bXSB8IG51bGwgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmFibGUgc3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgZGlyZWN0aXZlIGluaXRpYWxpemVzLiBJZiBhbHJlYWR5IGluaXRpYWxpemVkLCB0aGVcbiAgICAgKiBzdWJzY3JpYmVyIGlzIHN0b3JlZCB0byBiZSBub3RpZmllZCBvbmNlIF9tYXJrSW5pdGlhbGl6ZWQgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIGluaXRpYWxpemVkID0gbmV3IE9ic2VydmFibGU8dm9pZD4oc3Vic2NyaWJlciA9PiB7XG4gICAgICAvLyBJZiBpbml0aWFsaXplZCwgaW1tZWRpYXRlbHkgbm90aWZ5IHRoZSBzdWJzY3JpYmVyLiBPdGhlcndpc2Ugc3RvcmUgdGhlIHN1YnNjcmliZXIgdG8gbm90aWZ5XG4gICAgICAvLyB3aGVuIF9tYXJrSW5pdGlhbGl6ZWQgaXMgY2FsbGVkLlxuICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5U3Vic2NyaWJlcihzdWJzY3JpYmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdWJzY3JpYmVycyEucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgc3RhdGUgYXMgaW5pdGlhbGl6ZWQgYW5kIG5vdGlmaWVzIHBlbmRpbmcgc3Vic2NyaWJlcnMuIFNob3VsZCBiZSBjYWxsZWQgYXQgdGhlIGVuZFxuICAgICAqIG9mIG5nT25Jbml0LlxuICAgICAqIEBkb2NzLXByaXZhdGVcbiAgICAgKi9cbiAgICBfbWFya0luaXRpYWxpemVkKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1RoaXMgZGlyZWN0aXZlIGhhcyBhbHJlYWR5IGJlZW4gbWFya2VkIGFzIGluaXRpYWxpemVkIGFuZCAnICtcbiAgICAgICAgICAgICdzaG91bGQgbm90IGJlIGNhbGxlZCB0d2ljZS4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuX3BlbmRpbmdTdWJzY3JpYmVycyEuZm9yRWFjaCh0aGlzLl9ub3RpZnlTdWJzY3JpYmVyKTtcbiAgICAgIHRoaXMuX3BlbmRpbmdTdWJzY3JpYmVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEVtaXRzIGFuZCBjb21wbGV0ZXMgdGhlIHN1YnNjcmliZXIgc3RyZWFtIChzaG91bGQgb25seSBlbWl0IG9uY2UpLiAqL1xuICAgIF9ub3RpZnlTdWJzY3JpYmVyKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8dm9pZD4pOiB2b2lkIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dCgpO1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==