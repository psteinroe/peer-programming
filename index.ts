/**
 * Checks whether the given object contains a value for all paths.
 *
 * A path is a string that represents a path to a value. Note that we do not use standard object notation. Here is how it deviates:
 * - to access an object with an array, we do not use the index notation `array[0].key`, but just `array.key` as a path. This is because we do not want to extract the specific value, but just validate the existence of the path.
 * - both, `->>` and `->` are valid delimiters next to `.`, so `my_value->>key` and `my_value->key` and `my_value.key` are all the same paths and valid.
 * - a path exists if the value is truthy
 *
 * Examples:
 * ```
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * hasPaths(object, ['a.b.c']); // => true
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * hasPaths(object, ['a->b->>c']); // => true
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, { 'b': { 'd': 3 } }] };
 * hasPaths(object, ['a.b.c']); // => false
 *
 * const object = { 'a': [{ 'b': { 'c': { d: 3 } } }, { 'b': { 'd': 3 } }] };
 * hasPaths(object, ['a.b->>c']); // => true
 * ```
 *
 * @param obj - The object to check for paths
 * @param paths - A list of paths to check for
 * @returns true if all paths exist in the object, false otherwise
 */
export function hasPaths(
	obj: Record<string, unknown>,
	paths: string[],
): boolean {
	return paths.every((path) => hasPathRecursive(obj, path));
}

/** Recursively check if a given object has a path
 *
 * @param obj - The object to check in
 * @param path - The path to check for
 * @returns true if the path exists in the object, false otherwise
 */
function hasPathRecursive(obj: Record<string, unknown>, path: string): boolean {
	return false;
}
