/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
export function getTransformTransitionDurationInMs(element) {
    var computedStyle = getComputedStyle(element);
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    var propertyIndex = transitionedProperties.indexOf(property);
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi1kdXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL3RyYW5zaXRpb24tZHVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsK0NBQStDO0FBQy9DLFNBQVMscUJBQXFCLENBQUMsS0FBYTtJQUMxQyxvRkFBb0Y7SUFDcEYsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckUsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3hDLENBQUM7QUFFRCxrR0FBa0c7QUFDbEcsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLE9BQW9CO0lBQ3JFLElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELElBQU0sc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDM0YsSUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFFN0YsK0VBQStFO0lBQy9FLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsbUVBQW1FO0lBQ25FLDJFQUEyRTtJQUMzRSxJQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsSUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDakYsSUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFM0UsT0FBTyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQscUJBQXFCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELHNFQUFzRTtBQUN0RSxTQUFTLHFCQUFxQixDQUFDLGFBQWtDLEVBQUUsSUFBWTtJQUM3RSxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBQYXJzZXMgYSBDU1MgdGltZSB2YWx1ZSB0byBtaWxsaXNlY29uZHMuICovXG5mdW5jdGlvbiBwYXJzZUNzc1RpbWVVbml0c1RvTXModmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gIC8vIFNvbWUgYnJvd3NlcnMgd2lsbCByZXR1cm4gaXQgaW4gc2Vjb25kcywgd2hlcmVhcyBvdGhlcnMgd2lsbCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICBjb25zdCBtdWx0aXBsaWVyID0gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtcycpID4gLTEgPyAxIDogMTAwMDtcbiAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpICogbXVsdGlwbGllcjtcbn1cblxuLyoqIEdldHMgdGhlIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLCBpbmNsdWRpbmcgdGhlIGRlbGF5LCBvZiBhbiBlbGVtZW50IGluIG1pbGxpc2Vjb25kcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1UcmFuc2l0aW9uRHVyYXRpb25Jbk1zKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGNvbnN0IHRyYW5zaXRpb25lZFByb3BlcnRpZXMgPSBwYXJzZUNzc1Byb3BlcnR5VmFsdWUoY29tcHV0ZWRTdHlsZSwgJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgY29uc3QgcHJvcGVydHkgPSB0cmFuc2l0aW9uZWRQcm9wZXJ0aWVzLmZpbmQocHJvcCA9PiBwcm9wID09PSAndHJhbnNmb3JtJyB8fCBwcm9wID09PSAnYWxsJyk7XG5cbiAgLy8gSWYgdGhlcmUncyBubyB0cmFuc2l0aW9uIGZvciBgYWxsYCBvciBgdHJhbnNmb3JtYCwgd2Ugc2hvdWxkbid0IGRvIGFueXRoaW5nLlxuICBpZiAoIXByb3BlcnR5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBwcm9wZXJ0eSB0aGF0IHdlJ3JlIGludGVyZXN0ZWQgaW4gYW5kIG1hdGNoXG4gIC8vIGl0IHVwIHRvIHRoZSBzYW1lIGluZGV4IGluIGB0cmFuc2l0aW9uLWRlbGF5YCBhbmQgYHRyYW5zaXRpb24tZHVyYXRpb25gLlxuICBjb25zdCBwcm9wZXJ0eUluZGV4ID0gdHJhbnNpdGlvbmVkUHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KTtcbiAgY29uc3QgcmF3RHVyYXRpb25zID0gcGFyc2VDc3NQcm9wZXJ0eVZhbHVlKGNvbXB1dGVkU3R5bGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gIGNvbnN0IHJhd0RlbGF5cyA9IHBhcnNlQ3NzUHJvcGVydHlWYWx1ZShjb21wdXRlZFN0eWxlLCAndHJhbnNpdGlvbi1kZWxheScpO1xuXG4gIHJldHVybiBwYXJzZUNzc1RpbWVVbml0c1RvTXMocmF3RHVyYXRpb25zW3Byb3BlcnR5SW5kZXhdKSArXG4gICAgICAgICBwYXJzZUNzc1RpbWVVbml0c1RvTXMocmF3RGVsYXlzW3Byb3BlcnR5SW5kZXhdKTtcbn1cblxuLyoqIFBhcnNlcyBvdXQgbXVsdGlwbGUgdmFsdWVzIGZyb20gYSBjb21wdXRlZCBzdHlsZSBpbnRvIGFuIGFycmF5LiAqL1xuZnVuY3Rpb24gcGFyc2VDc3NQcm9wZXJ0eVZhbHVlKGNvbXB1dGVkU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24sIG5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgnLCcpLm1hcChwYXJ0ID0+IHBhcnQudHJpbSgpKTtcbn1cbiJdfQ==