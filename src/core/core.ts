import { isNullOrWhitespace } from "../strings";

export function stringify(thing: unknown): string {
	if (typeof thing === "object") {
		return JSON.stringify(thing);
	}
	return String(thing);
}

export function bool(thing: unknown | unknown[]): boolean {
	const text = String(thing).toLowerCase().trim();

	if (text === "false" || isNullOrWhitespace(String(text)) || text === "0") {
		return false;
	}
	return Boolean(thing);
}

export function reverse(thing: string | unknown[]): string | unknown[] {
	if (typeof thing === "string") {
		return String(thing).split("").reverse().join("");
	}
	return thing.reverse();
}

export function isEmpty(thing: string | unknown[]): boolean {
	return thing.length === 0;
}

export function isNull(thing: unknown): boolean {
	const text = String(thing).toLowerCase();
	return text === "null" || text === "undefined";
}
