import { describe, expect, test } from "vitest";
import { isNullOrWhitespace, titleCase } from "./strings";

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
