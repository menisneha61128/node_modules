/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined, assertEqual, throwError } from '../util/assert';
import { getComponentDef, getNgModuleDef } from './definition';
import { isLContainer, isLView } from './interfaces/type_checks';
import { TVIEW } from './interfaces/view';
// [Assert functions do not constraint type when they are guarded by a truthy
// expression.](https://github.com/microsoft/TypeScript/issues/37295)
export function assertTNodeForLView(tNode, lView) {
    tNode.hasOwnProperty('tView_') &&
        assertEqual(tNode.tView_, lView[TVIEW], 'This TNode does not belong to this LView.');
}
export function assertComponentType(actual, msg) {
    if (msg === void 0) { msg = 'Type passed in is not ComponentType, it does not have \'ɵcmp\' property.'; }
    if (!getComponentDef(actual)) {
        throwError(msg);
    }
}
export function assertNgModuleType(actual, msg) {
    if (msg === void 0) { msg = 'Type passed in is not NgModuleType, it does not have \'ɵmod\' property.'; }
    if (!getNgModuleDef(actual)) {
        throwError(msg);
    }
}
export function assertPreviousIsParent(isParent) {
    assertEqual(isParent, true, 'previousOrParentTNode should be a parent');
}
export function assertHasParent(tNode) {
    assertDefined(tNode, 'previousOrParentTNode should exist!');
    assertDefined(tNode.parent, 'previousOrParentTNode should have a parent');
}
export function assertDataNext(lView, index, arr) {
    if (arr == null)
        arr = lView;
    assertEqual(arr.length, index, "index " + index + " expected to be at the end of arr (length " + arr.length + ")");
}
export function assertLContainer(value) {
    assertDefined(value, 'LContainer must be defined');
    assertEqual(isLContainer(value), true, 'Expecting LContainer');
}
export function assertLViewOrUndefined(value) {
    value && assertEqual(isLView(value), true, 'Expecting LView or undefined or null');
}
export function assertLView(value) {
    assertDefined(value, 'LView must be defined');
    assertEqual(isLView(value), true, 'Expecting LView');
}
export function assertFirstCreatePass(tView, errMessage) {
    assertEqual(tView.firstCreatePass, true, errMessage || 'Should only be called in first create pass.');
}
export function assertFirstUpdatePass(tView, errMessage) {
    assertEqual(tView.firstUpdatePass, true, errMessage || 'Should only be called in first update pass.');
}
/**
 * This is a basic sanity check that an object is probably a directive def. DirectiveDef is
 * an interface, so we can't do a direct instanceof check.
 */
export function assertDirectiveDef(obj) {
    if (obj.type === undefined || obj.selectors == undefined || obj.inputs === undefined) {
        throwError("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJN0QsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQVEsS0FBSyxFQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsNkVBQTZFO0FBQzdFLHFFQUFxRTtBQUdyRSxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBWSxFQUFFLEtBQVk7SUFDNUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDMUIsV0FBVyxDQUNOLEtBQWdDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDdEQsMkNBQTJDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUMvQixNQUFXLEVBQ1gsR0FBd0Y7SUFBeEYsb0JBQUEsRUFBQSxnRkFBd0Y7SUFDMUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUM1QixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUM5QixNQUFXLEVBQ1gsR0FBdUY7SUFBdkYsb0JBQUEsRUFBQSwrRUFBdUY7SUFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQWlCO0lBQ3RELFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBaUI7SUFDL0MsYUFBYSxDQUFDLEtBQUssRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0lBQzVELGFBQWEsQ0FBQyxLQUFNLENBQUMsTUFBTSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3JFLElBQUksR0FBRyxJQUFJLElBQUk7UUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFdBQVcsQ0FDUCxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFTLEtBQUssa0RBQTZDLEdBQUcsQ0FBQyxNQUFNLE1BQUcsQ0FBQyxDQUFDO0FBQ25HLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBVTtJQUN6QyxhQUFhLENBQUMsS0FBSyxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEtBQVU7SUFDL0MsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7QUFDckYsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVTtJQUNwQyxhQUFhLENBQUMsS0FBSyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQVksRUFBRSxVQUFtQjtJQUNyRSxXQUFXLENBQ1AsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsVUFBVSxJQUFJLDZDQUE2QyxDQUFDLENBQUM7QUFDaEcsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUFZLEVBQUUsVUFBbUI7SUFDckUsV0FBVyxDQUNQLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLFVBQVUsSUFBSSw2Q0FBNkMsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUksR0FBUTtJQUM1QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3BGLFVBQVUsQ0FDTixnR0FBZ0csQ0FBQyxDQUFDO0tBQ3ZHO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnREZWZpbmVkLCBhc3NlcnRFcXVhbCwgdGhyb3dFcnJvcn0gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuXG5pbXBvcnQge2dldENvbXBvbmVudERlZiwgZ2V0TmdNb2R1bGVEZWZ9IGZyb20gJy4vZGVmaW5pdGlvbic7XG5pbXBvcnQge0xDb250YWluZXJ9IGZyb20gJy4vaW50ZXJmYWNlcy9jb250YWluZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVEZWZ9IGZyb20gJy4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7VE5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7aXNMQ29udGFpbmVyLCBpc0xWaWV3fSBmcm9tICcuL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuaW1wb3J0IHtMVmlldywgVFZJRVcsIFRWaWV3fSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5cbi8vIFtBc3NlcnQgZnVuY3Rpb25zIGRvIG5vdCBjb25zdHJhaW50IHR5cGUgd2hlbiB0aGV5IGFyZSBndWFyZGVkIGJ5IGEgdHJ1dGh5XG4vLyBleHByZXNzaW9uLl0oaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zNzI5NSlcblxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0VE5vZGVGb3JMVmlldyh0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldykge1xuICB0Tm9kZS5oYXNPd25Qcm9wZXJ0eSgndFZpZXdfJykgJiZcbiAgICAgIGFzc2VydEVxdWFsKFxuICAgICAgICAgICh0Tm9kZSBhcyBhbnkgYXMge3RWaWV3XzogVFZpZXd9KS50Vmlld18sIGxWaWV3W1RWSUVXXSxcbiAgICAgICAgICAnVGhpcyBUTm9kZSBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBMVmlldy4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENvbXBvbmVudFR5cGUoXG4gICAgYWN0dWFsOiBhbnksXG4gICAgbXNnOiBzdHJpbmcgPSAnVHlwZSBwYXNzZWQgaW4gaXMgbm90IENvbXBvbmVudFR5cGUsIGl0IGRvZXMgbm90IGhhdmUgXFwnybVjbXBcXCcgcHJvcGVydHkuJykge1xuICBpZiAoIWdldENvbXBvbmVudERlZihhY3R1YWwpKSB7XG4gICAgdGhyb3dFcnJvcihtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROZ01vZHVsZVR5cGUoXG4gICAgYWN0dWFsOiBhbnksXG4gICAgbXNnOiBzdHJpbmcgPSAnVHlwZSBwYXNzZWQgaW4gaXMgbm90IE5nTW9kdWxlVHlwZSwgaXQgZG9lcyBub3QgaGF2ZSBcXCfJtW1vZFxcJyBwcm9wZXJ0eS4nKSB7XG4gIGlmICghZ2V0TmdNb2R1bGVEZWYoYWN0dWFsKSkge1xuICAgIHRocm93RXJyb3IobXNnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UHJldmlvdXNJc1BhcmVudChpc1BhcmVudDogYm9vbGVhbikge1xuICBhc3NlcnRFcXVhbChpc1BhcmVudCwgdHJ1ZSwgJ3ByZXZpb3VzT3JQYXJlbnRUTm9kZSBzaG91bGQgYmUgYSBwYXJlbnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEhhc1BhcmVudCh0Tm9kZTogVE5vZGV8bnVsbCkge1xuICBhc3NlcnREZWZpbmVkKHROb2RlLCAncHJldmlvdXNPclBhcmVudFROb2RlIHNob3VsZCBleGlzdCEnKTtcbiAgYXNzZXJ0RGVmaW5lZCh0Tm9kZSEucGFyZW50LCAncHJldmlvdXNPclBhcmVudFROb2RlIHNob3VsZCBoYXZlIGEgcGFyZW50Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREYXRhTmV4dChsVmlldzogTFZpZXcsIGluZGV4OiBudW1iZXIsIGFycj86IGFueVtdKSB7XG4gIGlmIChhcnIgPT0gbnVsbCkgYXJyID0gbFZpZXc7XG4gIGFzc2VydEVxdWFsKFxuICAgICAgYXJyLmxlbmd0aCwgaW5kZXgsIGBpbmRleCAke2luZGV4fSBleHBlY3RlZCB0byBiZSBhdCB0aGUgZW5kIG9mIGFyciAobGVuZ3RoICR7YXJyLmxlbmd0aH0pYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRMQ29udGFpbmVyKHZhbHVlOiBhbnkpOiBhc3NlcnRzIHZhbHVlIGlzIExDb250YWluZXIge1xuICBhc3NlcnREZWZpbmVkKHZhbHVlLCAnTENvbnRhaW5lciBtdXN0IGJlIGRlZmluZWQnKTtcbiAgYXNzZXJ0RXF1YWwoaXNMQ29udGFpbmVyKHZhbHVlKSwgdHJ1ZSwgJ0V4cGVjdGluZyBMQ29udGFpbmVyJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRMVmlld09yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBhc3NlcnRzIHZhbHVlIGlzIExWaWV3fG51bGx8dW5kZWZpbmVkIHtcbiAgdmFsdWUgJiYgYXNzZXJ0RXF1YWwoaXNMVmlldyh2YWx1ZSksIHRydWUsICdFeHBlY3RpbmcgTFZpZXcgb3IgdW5kZWZpbmVkIG9yIG51bGwnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydExWaWV3KHZhbHVlOiBhbnkpOiBhc3NlcnRzIHZhbHVlIGlzIExWaWV3IHtcbiAgYXNzZXJ0RGVmaW5lZCh2YWx1ZSwgJ0xWaWV3IG11c3QgYmUgZGVmaW5lZCcpO1xuICBhc3NlcnRFcXVhbChpc0xWaWV3KHZhbHVlKSwgdHJ1ZSwgJ0V4cGVjdGluZyBMVmlldycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Rmlyc3RDcmVhdGVQYXNzKHRWaWV3OiBUVmlldywgZXJyTWVzc2FnZT86IHN0cmluZykge1xuICBhc3NlcnRFcXVhbChcbiAgICAgIHRWaWV3LmZpcnN0Q3JlYXRlUGFzcywgdHJ1ZSwgZXJyTWVzc2FnZSB8fCAnU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGluIGZpcnN0IGNyZWF0ZSBwYXNzLicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Rmlyc3RVcGRhdGVQYXNzKHRWaWV3OiBUVmlldywgZXJyTWVzc2FnZT86IHN0cmluZykge1xuICBhc3NlcnRFcXVhbChcbiAgICAgIHRWaWV3LmZpcnN0VXBkYXRlUGFzcywgdHJ1ZSwgZXJyTWVzc2FnZSB8fCAnU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGluIGZpcnN0IHVwZGF0ZSBwYXNzLicpO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYSBiYXNpYyBzYW5pdHkgY2hlY2sgdGhhdCBhbiBvYmplY3QgaXMgcHJvYmFibHkgYSBkaXJlY3RpdmUgZGVmLiBEaXJlY3RpdmVEZWYgaXNcbiAqIGFuIGludGVyZmFjZSwgc28gd2UgY2FuJ3QgZG8gYSBkaXJlY3QgaW5zdGFuY2VvZiBjaGVjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERpcmVjdGl2ZURlZjxUPihvYmo6IGFueSk6IGFzc2VydHMgb2JqIGlzIERpcmVjdGl2ZURlZjxUPiB7XG4gIGlmIChvYmoudHlwZSA9PT0gdW5kZWZpbmVkIHx8IG9iai5zZWxlY3RvcnMgPT0gdW5kZWZpbmVkIHx8IG9iai5pbnB1dHMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93RXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCBhIERpcmVjdGl2ZURlZi9Db21wb25lbnREZWYgYW5kIHRoaXMgb2JqZWN0IGRvZXMgbm90IHNlZW0gdG8gaGF2ZSB0aGUgZXhwZWN0ZWQgc2hhcGUuYCk7XG4gIH1cbn1cbiJdfQ==