import { describe, expect, test } from "vitest";
import {
	isNotNullOrWhitespace,
	isNullOrWhitespace,
	kebab,
	lower,
	snake,
	titleize,
	trim,
	upper,
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

describe("#isNotNullOrWhitespace", () => {
	test("should have value when the string contains something other than just whitespace", () => {
		expect(isNotNullOrWhitespace("something")).toBe(true);
		expect(isNotNullOrWhitespace(".")).toBe(true);
		expect(isNotNullOrWhitespace(" 0 ")).toBe(true);
	});

	test("should not have a value when the string is empty or whitespace", () => {
		expect(isNotNullOrWhitespace("\n")).toBe(false);
		expect(isNotNullOrWhitespace("")).toBe(false);
		expect(isNotNullOrWhitespace(" ")).toBe(false);
	});

	test('should not have a value when the string is "null" or "undefined"', () => {
		expect(isNotNullOrWhitespace(null)).toBe(false);
		expect(isNotNullOrWhitespace("null")).toBe(false);
		expect(isNotNullOrWhitespace(undefined)).toBe(false);
		expect(isNotNullOrWhitespace("undefined")).toBe(false);
	});
});

describe("#trim", () => {
	test("should trim the text exactly like trim", () => {
		expect(trim(" hello")).toBe("hello");
		expect(trim(" Hello  World  ")).toBe("Hello  World");
		expect(trim("hello\n")).toBe("hello");
	});
});

describe("#titleize", () => {
	test("should return 'Sir Isaac Newton' for 'siR isAAC newTON'", () => {
		expect(titleize("siR isAAC newTON")).toBe("Sir Isaac Newton");
		expect(titleize(kebab("Sir Isaac Newton"))).toBe("Sir-isaac-newton");
		expect(titleize(snake("Sir Isaac Newton"))).toBe("Sir Isaac Newton");
	});

	test('should return "Kebab-case" for "kebab-case"', () => {
		expect(titleize("kebab-case")).toBe("Kebab-case");
	});
});

describe("#upper", () => {
	test("should convert the string to all uppercase", () => {
		expect(upper("hello world")).toBe("HELLO WORLD");
	});
});

describe("#lower", () => {
	test("should convert the string to all lowercase", () => {
		expect(lower("HELLO World")).toBe("hello world");
	});
});

describe("#kebab", () => {
	test("should return the kebab-case version of any given string", () => {
		expect(kebab("HELLO WORLD!")).toBe("hello-world");
		expect(kebab("snake_case_to_kebab-case")).toBe("snake-case-to-kebab-case");
		expect(kebab(" THIS STRING   HAS WEIRD spacing")).toBe(
			"this-string-has-weird-spacing",
		);
	});
});

describe("#snake_case", () => {
	test("should return the snake_case version of any given string", () => {
		expect(snake("HELLO WORLD!!")).toBe("hello_world");
		expect(snake("kebab-case-to-snake-case")).toBe("kebab_case_to_snake_case");
		expect(snake(" THIS STRING    HAS weird spacing?")).toBe(
			"this_string_has_weird_spacing",
		);
	});
});
