import { describe, expect, test } from "vitest";
import {
	bool,
	clone,
	isEmpty,
	isEqual,
	isEqualIgnoreCase,
	isNull,
	reverse,
	stringify,
} from "./core";

describe("#isEqual", () => {
	test('"1" and 1 should be equal', () => {
		expect(isEqual("1", 1)).toBe(true);
	});

	test('{ foo: "bar" } and { foo: "bar" } should be equal', () => {
		expect(isEqual({ foo: "bar" }, { foo: "bar" })).toBe(true);
	});

	test("[] and [] should be equal", () => {
		expect(isEqual([], [])).toBe(true);
	});

	test("[0] and [1] should not be equal", () => {
		expect(isEqual([0], [1])).toBe(false);
	});

	test('false and "  false  " should be equal', () => {
		expect(isEqual(false, "   false  ")).toBe(true);
	});

	test('false and "FALSE" should not be equal', () => {
		expect(isEqual(false, "FALSE")).toBe(false);
	});
});

describe("#isEqualIgnoreCase", () => {
	test('"1" and 1 should be equal', () => {
		expect(isEqualIgnoreCase("1", 1)).toBe(true);
	});

	test('{ FOO: "BAR" } and { foo: "bar" } should be equal', () => {
		expect(isEqualIgnoreCase({ FOO: "BAR" }, { foo: "bar" })).toBe(true);
	});

	test("[] and [] should be equal", () => {
		expect(isEqualIgnoreCase([], [])).toBe(true);
	});

	test("[0] and [1] should not be equal", () => {
		expect(isEqualIgnoreCase([0], [1])).toBe(false);
	});

	test('false and "  false  " should be equal', () => {
		expect(isEqualIgnoreCase(false, "   false  ")).toBe(true);
	});

	test('false and "FALSE" should not be equal', () => {
		expect(isEqualIgnoreCase(false, "FALSE")).toBe(true);
	});
});

describe("#stringify", () => {
	test("should stringify a primitive to a string", () => {
		expect(stringify(123)).toBe("123");
		expect(stringify(true)).toBe("true");
		expect(stringify(null)).toBe("null");
	});

	test("it should stringify objects and strings as JSON strings", () => {
		expect(stringify([])).toBe("[]");
		expect(stringify({ foo: "bar", baz: 1 })).toBe(
			JSON.stringify({ foo: "bar", baz: 1 }),
		);
	});
});

describe("#bool", () => {
	test('should return false when the string is "false", case insensitive', () => {
		expect(bool("false")).toBe(false);
		expect(bool("FALSE")).toBe(false);
		expect(bool(" FALSE ")).toBe(false);
	});

	test('should return false when the string is "0"', () => {
		expect(bool("0")).toBe(false);
	});

	test("should return false when the string is null or whitespace", () => {
		expect(bool("null")).toBe(false);
		expect(bool("undefined")).toBe(false);
		expect(bool("   ")).toBe(false);
	});

	test("should return false for empty lists", () => {
		expect(bool([])).toBe(false);
	});

	test("should return true for anything else", () => {
		expect(bool("1")).toBe(true);
		expect(bool("mike")).toBe(true);
		expect(bool("true")).toBe(true);
		expect(bool(["123"])).toBe(true);
	});
});

describe("#reverse", () => {
	test('should return "elppa" for "apple"', () => {
		expect(reverse("apple")).toBe("elppa");
	});

	test("should maintain whitespace and capitalization", () => {
		expect(reverse("Hello World!")).toBe("!dlroW olleH");
	});

	test("should reverse the list", () => {
		expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
	});
});

describe("#clone", () => {
	test("should clone the given object into an exact replica", () => {
		const firstObject = { foo: "bar", baz: "foo" };
		const cloned = clone(firstObject);

		expect(firstObject).toStrictEqual(cloned);

		cloned.baz = "bar";

		expect(firstObject).not.toStrictEqual(cloned);
	});
});

describe("#isEmpty", () => {
	test('should return true when the string is ""', () => {
		expect(isEmpty("")).toBe(true);
	});

	test('should return false when the string is whitespace " "', () => {
		expect(isEmpty(" ")).toBe(false);
	});

	test("should return true when the list is empty", () => {
		expect(isEmpty([])).toBe(true);
	});

	test("should return false when the list is not empty", () => {
		expect(isEmpty([0])).toBe(false);
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

	test("should return false when the thing is not null or undefined", () => {
		expect(isNull([])).toBe(false);
		expect(isNull({})).toBe(false);
		expect(isNull("something else")).toBe(false);
	});
});
