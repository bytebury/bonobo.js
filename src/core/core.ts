import { isNullOrWhitespace, lower, trim } from "../strings/index.js";
import type { Optional, UnknownList } from "../types/index.js";

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
	thing1 = trim(stringify(thing1));
	thing2 = trim(stringify(thing2));

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
	thing1 = trim(lower(stringify(thing1)));
	thing2 = trim(lower(stringify(thing2)));

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
 * as `false`. Similar to their "non-string" equivalent.
 *
 * It will also trim all whitespace, so strings of just whitespace are
 * treated as false.
 *
 * In all other scenarios this function will use `Boolean(thing)`.
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
	const text = trim(lower(String(thing)));

	if (text === "false" || isNullOrWhitespace(text) || text === "0") {
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
 * reverse(new Set([1, 2, 3])); // Set[3, 2, 1]
 */
export function reverse(thing: string): string;
export function reverse<T>(thing: T[]): T[];
export function reverse(thing: Set<unknown>): Set<unknown>;
export function reverse<T>(
	thing: string | Set<unknown> | T[],
): string | Set<unknown> | T[] {
	if (typeof thing === "string") {
		return thing.split("").reverse().join("");
	}

	if (thing instanceof Set) {
		return new Set([...thing].reverse());
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
 * isEmpty(new Set()); // true
 * isEmpty({}); // true
 * isEmpty(new Map()); // true
 */
export function isEmpty(thing: Optional<string>): boolean;
export function isEmpty(thing: UnknownList): boolean;
export function isEmpty(thing: unknown): boolean;
export function isEmpty(thing: string | UnknownList | unknown): boolean {
	if (thing === null || thing === undefined) return true;

	if (typeof thing === "string" || Array.isArray(thing)) {
		return thing.length === 0;
	}

	if (thing instanceof Map || thing instanceof Set) {
		return thing.size === 0;
	}

	if (typeof thing === "object") {
		return Object.keys(thing).length === 0;
	}

	return false;
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
export function isNull<T>(thing: Optional<T>): boolean {
	const text = trim(lower(thing));
	return text === "null" || text === "undefined";
}
