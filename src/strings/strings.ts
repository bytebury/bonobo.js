import { isNull } from "../core";

export function isNullOrWhitespace(text: string | null | undefined): boolean {
	return isNull(text) || String(text).trim().length === 0;
}

export function titleCase(text: string): string {
	return String(text)
		.toLowerCase()
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}
