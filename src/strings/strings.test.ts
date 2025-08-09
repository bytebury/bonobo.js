import { describe, expect, test } from "vitest";
import {
	alphanumeric,
	isNotNullOrWhitespace,
	isNullOrWhitespace,
	kebab,
	lower,
	numeric,
	safeString,
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
		expect(trim(null as unknown as string)).toBe("");
	});
});

describe("#titleize", () => {
	test("should return 'Sir Isaac Newton' for 'siR isAAC newTON'", () => {
		expect(titleize("siR isAAC newTON")).toBe("Sir Isaac Newton");
		expect(titleize(kebab("Sir Isaac Newton"))).toBe("Sir-isaac-newton");
		expect(titleize(snake("Sir Isaac Newton"))).toBe("Sir Isaac Newton");
		expect(titleize(null as unknown as string)).toBe("");
	});

	test('should return "Kebab-case" for "kebab-case"', () => {
		expect(titleize("kebab-case")).toBe("Kebab-case");
	});
});

describe("#upper", () => {
	test("should convert the string to all uppercase", () => {
		expect(upper("hello world")).toBe("HELLO WORLD");
		expect(upper(null as unknown as string)).toBe("");
	});
});

describe("#lower", () => {
	test("should convert the string to all lowercase", () => {
		expect(lower("HELLO World")).toBe("hello world");
		expect(lower(null as unknown as string)).toBe("");
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

describe("#snake", () => {
	test("should return the snake_case version of any given string", () => {
		expect(snake("HELLO WORLD!!")).toBe("hello_world");
		expect(snake("kebab-case-to-snake-case")).toBe("kebab_case_to_snake_case");
		expect(snake(" THIS STRING    HAS weird spacing?")).toBe(
			"this_string_has_weird_spacing",
		);
	});
});

describe("#alphanumeric", () => {
	test("should remove all non-alphanumeric except whitespace", () => {
		expect(alphanumeric("Hello World!!")).toBe("Hello World");
		expect(alphanumeric(null as unknown as string)).toBe("");
	});
});

describe("#numeric", () => {
	test("should extract only numbers from any given string", () => {
		expect(numeric("(203) 555-5555")).toBe("2035555555");
		expect(numeric("0.32")).toBe("032");
		expect(numeric(null as unknown as string)).toBe("");
	});
});

describe("#safeString", () => {
	test("should return empty strings when the string is null or undefined", () => {
		expect(safeString(null)).toBe("");
		expect(safeString(undefined)).toBe("");
	});

	test("should return the string given when the string is not null or undefined", () => {
		expect(safeString("null")).toBe("null");
		expect(safeString("hello world")).toBe("hello world");
		expect(safeString("HELLO WORLD!!")).toBe("HELLO WORLD!!");
	});
});
