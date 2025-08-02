export function isNullOrWhitespace(text: string | null | undefined): boolean {
	return isNull(text) || String(text).trim().length === 0;
}

export function titleCase<T>(text: T): string {
	return lowerCase(text)
		.split(" ")
		.map((word) => {
			return upperCase(word.charAt(0)) + word.slice(1);
		})
		.join(" ");
}

export function lowerCase<T>(text: T): string {
	return String(text).toLowerCase();
}

export function upperCase<T>(text: T): string {
	return String(text).toUpperCase();
}

export function kebabCase<T>(text: T): string {
	return removePunctuation(lowerCase(text)).trim().replace(/\s+/g, "-");
}

export function snakeCase<T>(text: T): string {
	return kebabCase(text).replace(/-/g, "_");
}

function removePunctuation<T>(text: T): string {
	return String(text).replace(/[^a-zA-Z0-9\s]/g, "");
}

function isNull<T>(thing: T): boolean {
	const text = lowerCase(thing).trim();
	return text === "null" || text === "undefined";
}
