import { describe, expect, test } from "vitest";
import "./strings";
import {
	isEmpty,
	isNull,
	isNullOrWhitespace,
	reverse,
	toBool,
	toTitleCase,
} from "./strings";

describe("#isNullOrWhitespace", () => {
	test('should return true when the string is ""', () => {
		expect(isNullOrWhitespace("")).toBe(true);
	});

	test('should return true when the string is "  "', () => {
		expect(isNullOrWhitespace("  ")).toBe(true);
	});

	test("should return true when the string is null", () => {
		expect(isNullOrWhitespace(null)).toBe(true);
	});

	test("should return true when the string is undefined", () => {
		expect(isNullOrWhitespace(undefined)).toBe(true);
	});

	test("should return false when the string starts with whitespace", () => {
		expect(isNullOrWhitespace(" foo bar")).toBe(false);
	});

	test("should return false when the string ends with whitespace", () => {
		expect(isNullOrWhitespace("foo bar  ")).toBe(false);
	});
});

describe("#isEmpty", () => {
	test('should return true when the string is ""', () => {
		expect(isEmpty("")).toBe(true);
	});

	test('should return false when the string is whitespace " "', () => {
		expect(isEmpty(" ")).toBe(false);
	});
});

describe("#isNull", () => {
	test('should return true when the string is "null"', () => {
		expect(isNull("null")).toBe(true);
	});

	test("should return true when the string is `null`", () => {
		expect(isNull(null)).toBe(true);
	});

	test("should return true when the string is `undefined`", () => {
		expect(isNull(undefined)).toBe(true);
	});

	test('should return true when the string is "undefined"', () => {
		expect(isNull("undefined")).toBe(true);
	});
});

describe("#reverse", () => {
	test('should return "elppa" for "apple"', () => {
		expect(reverse("apple")).toBe("elppa");
	});

	test("should maintain whitespace and capitalization", () => {
		expect(reverse("Hello World!")).toBe("!dlroW olleH");
	});
});

describe("#toTitleCase", () => {
	test("should return 'Sir Isaac Newton' for 'siR isAAC newTON'", () => {
		expect(toTitleCase("siR isAAC newTON")).toBe("Sir Isaac Newton");
	});

	test('should return "Kebab-case" for "kebab-case"', () => {
		expect(toTitleCase("kebab-case")).toBe("Kebab-case");
	});
});

describe("#toBool", () => {
	test('should return false when the string is "false", case insensitive', () => {
		expect(toBool("false")).toBe(false);
		expect(toBool("FALSE")).toBe(false);
		expect(toBool(" FALSE ")).toBe(false);
	});

	test('should return false when the string is "0"', () => {
		expect(toBool("0")).toBe(false);
	});

	test("should return false when the string is null or whitespace", () => {
		expect(toBool("null")).toBe(false);
		expect(toBool("undefined")).toBe(false);
		expect(toBool("   ")).toBe(false);
	});

	test("should return true for anything else", () => {
		expect(toBool("1")).toBe(true);
		expect(toBool("mike"));
		expect(toBool("true"));
	});
});
