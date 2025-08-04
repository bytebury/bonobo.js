import { isNullOrWhitespace, lower } from "../strings";

/**
 * Compares two things by turning them into strings, trimming them,
 * and comparing them strictly.
 *
 * @example
 * isEqual("1", 1); // true
 * isEqual({foo: "bar"}, {foo: "bar"}); // true
 * isEqual([], []); // true
 * isEqual([0], [1]); // false
 * isEqual(false, " false "); // true
 * isEqual(false, "FALSE"); // false
 */
export function isEqual(thing1: unknown, thing2: unknown): boolean {
	thing1 = stringify(thing1).trim();
	thing2 = stringify(thing2).trim();

	return thing1 === thing2;
}

/**
 * Compares two things by turning them into strings, trimming and lowercasing
 * them, and comparing them strictly. Works exactly like `isEqual` except
 * will lowercase both things before comparing.
 *
 * @example
 * isEqual("1", 1); // true
 * isEqual({foo: "bar"}, {foo: "bar"}); // true
 * isEqual([], []); // true
 * isEqual([0], [1]); // false
 * isEqual(false, " false "); // true
 * isEqual(false, "FALSE"); // true
 */
export function isEqualIgnoreCase(thing1: unknown, thing2: unknown): boolean {
	thing1 = lower(stringify(thing1).trim());
	thing2 = lower(stringify(thing2).trim());

	return thing1 === thing2;
}

/**
 * Converts the given parameter into the string equivalent.
 *
 * If the thing provided has the type of "object", then this function
 * returns `JSON.stringify(thing)`. Otherwise, it will wrap the `thing`
 * in a String and convert it to it's string representation.
 *
 * @example
 * stringify({ foo: "bar" }); // "{ "foo": "bar" }"
 * stringify([1, 2, 3]); // "[1, 2, 3]"
 * stringify(1); // "1"
 */
export function stringify<T>(thing: T): string {
	if (typeof thing === "object") {
		return JSON.stringify(thing);
	}
	return String(thing);
}

/**
 * Converts the given parameter to a boolean.
 *
 * This behaves a little unique and different from `Boolean`.
 * Instead, bonobo treats the strings "false", "null", "undefined", and "0"
 * as `false`. Similar to their "non-string" equivalent. In all other scenarios
 * this function will use `Boolean(thing)`.
 *
 * @example
 * bool("false"); // false
 * bool("true"); // true
 * bool(""); // false
 * bool("   "); // false
 * bool("null"); // false
 * bool({}); // true
 * bool("Hello World"); // true
 */
export function bool<T>(thing: T | T[]): boolean {
	const text = lower(String(thing)).trim();

	if (text === "false" || isNullOrWhitespace(String(text)) || text === "0") {
		return false;
	}
	return Boolean(thing);
}

/**
 * Clones the given thing. This is an alias for `structuredClone`.
 */
export function clone<T>(thing: T): T {
	return structuredClone(thing);
}

/**
 * Reverses the given string or list.
 *
 * If the thing provided is a string, then it will return the string in reverse
 * respecting all characters.
 *
 * If the thing is a list, then it will reverse all items in the list.
 *
 * @example
 * reverse('Apple'); // "elppA"
 * reverse([1, 2, 3]); // [3, 2, 1]
 */
export function reverse(thing: string): string;
export function reverse<T>(thing: T[]): T[];
export function reverse<T>(thing: string | T[]): string | T[] {
	if (typeof thing === "string") {
		return String(thing).split("").reverse().join("");
	}
	return thing.reverse();
}

/**
 * Determines if the given thing is empty.
 *
 * If the thing has no length, then it is considered empty.
 *
 * @example
 * isEmpty([]); // true
 * isEmpty([0]); // false
 * isEmpty(""); // true
 * isEmpty(" "); // false
 */
export function isEmpty<T>(thing: string | T[]): boolean {
	return thing.length === 0;
}

/**
 * Determines if the given thing is null.
 *
 * Something is null if the string representation is `"null"` or `"undefined"`.
 *
 * @example
 * isNull(null); // true
 * isNull("NULL"); // true
 * isNull("undefined"); // true
 * isNull(undefined); // true
 * isNull(0); // false
 * isNull(false); // false
 */
export function isNull<T>(thing: T): boolean {
	const text = lower(thing).trim();
	return text === "null" || text === "undefined";
}
