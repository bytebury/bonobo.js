export function isNullOrWhitespace(text: string | null | undefined): boolean {
	return isNull(text) || String(text).trim().length === 0;
}

export function isNull(text: string | null | undefined): boolean {
	text = String(text).toLowerCase();
	return text === "null" || text === "undefined";
}

export function isEmpty(text: string): boolean {
	return text === "";
}

export function reverse(text: string): string {
	return String(text).split("").reverse().join("");
}

export function toTitleCase(text: string): string {
	return String(text)
		.toLowerCase()
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

export function toBool(text: string): boolean {
	text = String(text).toLowerCase().trim();

	if (text === "false" || isNullOrWhitespace(text) || text === "0") {
		return false;
	}
	return Boolean(text);
}
