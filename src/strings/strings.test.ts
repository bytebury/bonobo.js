import { describe, expect, test } from "vitest";
import {
	hasValue,
	isNullOrWhitespace,
	kebabCase,
	lowerCase,
	snakeCase,
	titleCase,
	trim,
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

describe("#hasValue", () => {
	test("should have value when the string contains something other than just whitespace", () => {
		expect(hasValue("something")).toBe(true);
		expect(hasValue(".")).toBe(true);
		expect(hasValue(" 0 ")).toBe(true);
	});

	test("should not have a value when the string is empty or whitespace", () => {
		expect(hasValue("\n")).toBe(false);
		expect(hasValue("")).toBe(false);
		expect(hasValue(" ")).toBe(false);
	});

	test('should not have a value when the string is "null" or "undefined"', () => {
		expect(hasValue(null)).toBe(false);
		expect(hasValue("null")).toBe(false);
		expect(hasValue(undefined)).toBe(false);
		expect(hasValue("undefined")).toBe(false);
	});
});

describe("#trim", () => {
	test("should trim the text exactly like trim", () => {
		expect(trim(" hello")).toBe("hello");
		expect(trim(" Hello  World  ")).toBe("Hello  World");
		expect(trim("hello\n")).toBe("hello");
	});
});

describe("#titleCase", () => {
	test("should return 'Sir Isaac Newton' for 'siR isAAC newTON'", () => {
		expect(titleCase("siR isAAC newTON")).toBe("Sir Isaac Newton");
		expect(titleCase(kebabCase("Sir Isaac Newton"))).toBe("Sir-isaac-newton");
		expect(titleCase(snakeCase("Sir Isaac Newton"))).toBe("Sir Isaac Newton");
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
		expect(kebabCase("snake_case_to_kebab-case")).toBe(
			"snake-case-to-kebab-case",
		);
		expect(kebabCase(" THIS STRING   HAS WEIRD spacing")).toBe(
			"this-string-has-weird-spacing",
		);
	});
});

describe("#snake_case", () => {
	test("should return the snake_case version of any given string", () => {
		expect(snakeCase("HELLO WORLD!!")).toBe("hello_world");
		expect(snakeCase("kebab-case-to-snake-case")).toBe(
			"kebab_case_to_snake_case",
		);
		expect(snakeCase(" THIS STRING    HAS weird spacing?")).toBe(
			"this_string_has_weird_spacing",
		);
	});
});
