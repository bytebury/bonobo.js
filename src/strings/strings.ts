import { isNull } from "../core";

export function isNullOrWhitespace(text: string | null | undefined): boolean {
	return isNull(text) || String(text).trim().length === 0;
}

export function titleCase(text: string): string {
	return lowerCase(text)
		.split(" ")
		.map((word) => {
			return upperCase(word.charAt(0)) + word.slice(1);
		})
		.join(" ");
}

export function lowerCase(text: string): string {
	return String(text).toLowerCase();
}

export function upperCase(text: string): string {
	return String(text).toUpperCase();
}

export function kebabCase(text: string): string {
	return removePunctuation(lowerCase(text)).trim().replace(/\s+/g, "-");
}

export function snakeCase(text: string): string {
	return kebabCase(text).replace(/-/g, "_");
}

function removePunctuation(text: string): string {
	return text.replace(/[^a-zA-Z0-9\s]/g, "");
}
