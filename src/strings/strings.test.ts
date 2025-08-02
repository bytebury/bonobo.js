import { describe, expect, test } from "vitest";
import {
	isNullOrWhitespace,
	kebabCase,
	lowerCase,
	snakeCase,
	titleCase,
	upperCase,
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

describe("#titleCase", () => {
	test("should return 'Sir Isaac Newton' for 'siR isAAC newTON'", () => {
		expect(titleCase("siR isAAC newTON")).toBe("Sir Isaac Newton");
	});

	test('should return "Kebab-case" for "kebab-case"', () => {
		expect(titleCase("kebab-case")).toBe("Kebab-case");
	});
});

describe("#upperCase", () => {
	test("should convert the string to all uppercase", () => {
		expect(upperCase("hello world")).toBe("HELLO WORLD");
	});
});

describe("#lowerCase", () => {
	test("should convert the string to all lowercase", () => {
		expect(lowerCase("HELLO World")).toBe("hello world");
	});
});

describe("#kebabCase", () => {
	test("should return the kebab-case version of any given string", () => {
		expect(kebabCase("HELLO WORLD!")).toBe("hello-world");
		expect(kebabCase(" THIS STRING   HAS WEIRD spacing")).toBe(
			"this-string-has-weird-spacing",
		);
	});
});

describe("#snake_case", () => {
	test("should return the snake_case version of any given string", () => {
		expect(snakeCase("HELLO WORLD!!")).toBe("hello_world");
		expect(snakeCase(" THIS STRING    HAS weird spacing?")).toBe(
			"this_string_has_weird_spacing",
		);
	});
});
