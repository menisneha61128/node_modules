/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createFakeEvent, createKeyboardEvent, createMouseEvent, createPointerEvent, createTouchEvent, } from './event-objects';
/**
 * Utility to dispatch any event on a Node.
 * @docs-private
 */
export function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @docs-private
 */
export function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @docs-private
 */
export function dispatchKeyboardEvent(node, type, keyCode, key, target, modifiers) {
    return dispatchEvent(node, createKeyboardEvent(type, keyCode, key, target, modifiers));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @docs-private
 */
export function dispatchMouseEvent(node, type, clientX = 0, clientY = 0) {
    return dispatchEvent(node, createMouseEvent(type, clientX, clientY));
}
/**
 * Shorthand to dispatch a pointer event on the specified coordinates.
 * @docs-private
 */
export function dispatchPointerEvent(node, type, clientX = 0, clientY = 0, options) {
    return dispatchEvent(node, createPointerEvent(type, clientX, clientY, options));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @docs-private
 */
export function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return dispatchEvent(node, createTouchEvent(type, x, y));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvZmFrZS1ldmVudHMvZGlzcGF0Y2gtZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekI7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBa0IsSUFBbUIsRUFBRSxLQUFRO0lBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLFNBQW1CO0lBQ3RGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWdCLEVBQUUsR0FBWSxFQUN4RCxNQUFnQixFQUFFLFNBQXdCO0lBQzlFLE9BQU8sYUFBYSxDQUFDLElBQUksRUFDckIsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDbkYsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUNsRCxPQUEwQjtJQUM3RCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQWlCLENBQUM7QUFDbEcsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDdkUsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TW9kaWZpZXJLZXlzfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge1xuICBjcmVhdGVGYWtlRXZlbnQsXG4gIGNyZWF0ZUtleWJvYXJkRXZlbnQsXG4gIGNyZWF0ZU1vdXNlRXZlbnQsXG4gIGNyZWF0ZVBvaW50ZXJFdmVudCxcbiAgY3JlYXRlVG91Y2hFdmVudCxcbn0gZnJvbSAnLi9ldmVudC1vYmplY3RzJztcblxuLyoqXG4gKiBVdGlsaXR5IHRvIGRpc3BhdGNoIGFueSBldmVudCBvbiBhIE5vZGUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50PFQgZXh0ZW5kcyBFdmVudD4obm9kZTogTm9kZSB8IFdpbmRvdywgZXZlbnQ6IFQpOiBUIHtcbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGZha2UgZXZlbnQgb24gYSBzcGVjaWZpZWQgbm9kZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRmFrZUV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIHR5cGU6IHN0cmluZywgY2FuQnViYmxlPzogYm9vbGVhbik6IEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlRmFrZUV2ZW50KHR5cGUsIGNhbkJ1YmJsZSkpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGtleWJvYXJkIGV2ZW50IHdpdGggYSBzcGVjaWZpZWQga2V5IGNvZGUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEtleWJvYXJkRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBrZXlDb2RlPzogbnVtYmVyLCBrZXk/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD86IEVsZW1lbnQsIG1vZGlmaWVycz86IE1vZGlmaWVyS2V5cyk6IEtleWJvYXJkRXZlbnQge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLFxuICAgICAgY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlLCBrZXlDb2RlLCBrZXksIHRhcmdldCwgbW9kaWZpZXJzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgbW91c2UgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoTW91c2VFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIGNsaWVudFggPSAwLCBjbGllbnRZID0gMCk6IE1vdXNlRXZlbnQge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBjcmVhdGVNb3VzZUV2ZW50KHR5cGUsIGNsaWVudFgsIGNsaWVudFkpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSBwb2ludGVyIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaFBvaW50ZXJFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIGNsaWVudFggPSAwLCBjbGllbnRZID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogUG9pbnRlckV2ZW50SW5pdCk6IFBvaW50ZXJFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZVBvaW50ZXJFdmVudCh0eXBlLCBjbGllbnRYLCBjbGllbnRZLCBvcHRpb25zKSkgYXMgUG9pbnRlckV2ZW50O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIHRvdWNoIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaFRvdWNoRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCB4ID0gMCwgeSA9IDApIHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlVG91Y2hFdmVudCh0eXBlLCB4LCB5KSk7XG59XG4iXX0=