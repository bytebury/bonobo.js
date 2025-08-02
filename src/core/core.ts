import { isNullOrWhitespace } from "../strings";

export function stringify<T>(thing: T): string {
	if (typeof thing === "object") {
		return JSON.stringify(thing);
	}
	return String(thing);
}

export function bool<T>(thing: T | T[]): boolean {
	const text = String(thing).toLowerCase().trim();

	if (text === "false" || isNullOrWhitespace(String(text)) || text === "0") {
		return false;
	}
	return Boolean(thing);
}

export function clone<T>(thing: T): T {
	return structuredClone(thing);
}

export function reverse<T>(thing: string | T[]): string | T[] {
	if (typeof thing === "string") {
		return String(thing).split("").reverse().join("");
	}
	return thing.reverse();
}

export function isEmpty<T>(thing: string | T[]): boolean {
	return thing.length === 0;
}

export function isNull<T>(thing: T): boolean {
	const text = String(thing).toLowerCase();
	return text === "null" || text === "undefined";
}
