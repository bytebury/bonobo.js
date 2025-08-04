/**
 * Determines if the string is null or empty, or comprised only of
 * whitespace. This is the inverse of `hasValue`.
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
export function isNullOrWhitespace(text: string | null | undefined): boolean {
	return isNull(text) || String(text).trim().length === 0;
}

/**
 * Determines if the string has some value that is not just whitespace.
 * This is the inverse of `isNullOrWhitespace`.
 *
 * @see isNullOrWhitespace
 */
export function isNotNullOrWhitespace(
	text: string | null | undefined,
): boolean {
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
	return text.trim();
}

/**
 * Converts the string to Title Case. This will capitalize
 * the letter of each word that is separated by a space. Underscores
 * are considered spaces. Hyphens are respected.
 *
 * @example
 * titleCase("hello world"); // Hello World
 * titleCase("hello-world"); // Hello-world
 * titleCase("hello_world"); // Hello World
 * titleCase("HELLO wORLD"); // Hello World
 */
export function titleCase<T>(text: T): string {
	return lowerCase(text)
		.replace(/_/g, " ")
		.split(" ")
		.map((word) => {
			return upperCase(word.charAt(0)) + word.slice(1);
		})
		.join(" ");
}

/**
 * Convert the string to lowercase. An alias for `toLowerCase()`.
 */
export function lowerCase<T>(text: T): string {
	return String(text).toLowerCase();
}

/**
 * Convert the string to uppercase. An alias for `toUpperCase()`.
 */
export function upperCase<T>(text: T): string {
	return String(text).toUpperCase();
}

/**
 * Convert the string to kebab-case.
 */
export function kebabCase<T>(text: T): string {
	return removePunctuation(lowerCase(text)).trim().replace(/\s+/g, "-");
}

/**
 * Convert the string to snake_case.
 */
export function snakeCase<T>(text: T): string {
	return kebabCase(text).replace(/-/g, "_");
}

function removePunctuation<T>(text: T): string {
	return String(text)
		.normalize("NFKD")
		.replace(/[-_]/g, " ")
		.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z0-9\s]/g, "");
}

function isNull<T>(thing: T): boolean {
	const text = lowerCase(thing).trim();
	return text === "null" || text === "undefined";
}
