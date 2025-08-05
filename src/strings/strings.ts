import type { Optional } from "../types";

/**
 * Determines if the string is null or empty, or comprised only of
 * whitespace.
 *
 * @remarks
 * Note that the strings `"null"` and `"undefined"` are
 * considered `null` and `undefined` respectively.
 *
 * @see isNotNullOrWhitespace
 *
 * @example
 * isNullOrWhitespace(null); // true
 * isNullOrWhitespace(undefined); // true
 * isNullOrWhitespace("null"); // true
 * isNullOrWhitespace("   "); // true
 * isNullOrWhitespace("Hello World"); // false
 * isNullOrWhitespace("  .  "); // false
 */
export function isNullOrWhitespace(text: Optional<string>): boolean {
	return isNull(text) || trim(text as string).length === 0;
}

/**
 * Determines if the string has some value that is not just whitespace.
 * This is the inverse of `isNullOrWhitespace`.
 *
 * @remarks
 * Note that the strings `"null"` and `"undefined"` are
 * considered `null` and `undefined` respectively.
 *
 * @see isNullOrWhitespace
 */
export function isNotNullOrWhitespace(text: Optional<string>): boolean {
	return !isNullOrWhitespace(text);
}

/**
 * Trims the whitespace from the beginning and the end. This is an
 * alias for `.trim()`. Useful for when you're mapping over lists.
 *
 * @example
 * [' hello ', ' world '].map(trim); // ['hello', 'world'];
 */
export function trim(text: string): string {
	return String(text).trim();
}

/**
 * Converts the string to Title Case. This will capitalize
 * the letter of each word that is separated by a space. Underscores
 * are considered spaces. Hyphens are respected.
 *
 * @example
 * titleize("hello world"); // Hello World
 * titleize("hello-world"); // Hello-world
 * titleize("hello_world"); // Hello World
 * titleize("HELLO wORLD"); // Hello World
 */
export function titleize<T>(text: T): string {
	return lower(text)
		.replace(/_/g, " ")
		.split(" ")
		.map((word) => upper(word.charAt(0)) + word.slice(1))
		.join(" ");
}

/**
 * Convert the string to lowercase. An alias for `toLowerCase()`.
 */
export function lower<T>(text: T): string {
	return String(text).toLowerCase();
}

/**
 * Convert the string to uppercase. An alias for `toUpperCase()`.
 */
export function upper<T>(text: T): string {
	return String(text).toUpperCase();
}

/**
 * Convert the string to kebab-case.
 */
export function kebab<T>(text: T): string {
	return trim(removePunctuation(lower(text))).replace(/\s+/g, "-");
}

/**
 * Convert the string to snake_case.
 */
export function snake<T>(text: T): string {
	return kebab(text).replace(/-/g, "_");
}

function removePunctuation<T>(text: T): string {
	return String(text)
		.normalize("NFKD")
		.replace(/[-_]/g, " ")
		.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z0-9\s]/g, "");
}

function isNull<T>(thing: Optional<T>): boolean {
	const text = trim(lower(thing));
	return text === "null" || text === "undefined";
}
