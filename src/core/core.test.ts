import { describe, expect, test } from "vitest";
import {
	bool,
	clone,
	isEmpty,
	isEqual,
	isEqualIgnoreCase,
	isNotEmpty,
	isNotEqual,
	isNotEqualIgnoreCase,
	isNotNull,
	isNull,
	reverse,
	stringify,
	unique,
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

describe("#isNotEqual", () => {
	test('"1" and 2 should not be equal', () => {
		expect(isNotEqual("1", 2)).toBe(true);
	});

	test('"1" and 1 should be equal', () => {
		expect(isNotEqual("1", 1)).toBe(false);
	});

	test('{ foo: "bar" } and { foo: "bar" } should be equal', () => {
		expect(isNotEqual({ foo: "bar" }, { foo: "bar" })).toBe(false);
	});

	test("[] and [] should be equal", () => {
		expect(isNotEqual([], [])).toBe(false);
	});

	test("[0] and [1] should not be equal", () => {
		expect(isNotEqual([0], [1])).toBe(true);
	});

	test('false and "  false  " should be equal', () => {
		expect(isNotEqual(false, "   false  ")).toBe(false);
	});

	test('false and "FALSE" should not be equal', () => {
		expect(isNotEqual(false, "FALSE")).toBe(true);
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

describe("#isNotEqualIgnoreCase", () => {
	test('"1" and 1 should be equal', () => {
		expect(isNotEqualIgnoreCase("1", 1)).toBe(false);
	});

	test('{ FOO: "BAR" } and { foo: "bar" } should be equal', () => {
		expect(isNotEqualIgnoreCase({ FOO: "BAR" }, { foo: "bar" })).toBe(false);
	});

	test("[] and [] should be equal", () => {
		expect(isNotEqualIgnoreCase([], [])).toBe(false);
	});

	test("[0] and [1] should not be equal", () => {
		expect(isNotEqualIgnoreCase([0], [1])).toBe(true);
	});

	test('false and "  false  " should be equal', () => {
		expect(isNotEqualIgnoreCase(false, "   false  ")).toBe(false);
	});

	test('false and "FALSE" should not be equal', () => {
		expect(isNotEqualIgnoreCase(false, "FALSE")).toBe(false);
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

	test("should return false when there are things in the set", () => {
		expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
	});

	test("should return true when the set is empty", () => {
		expect(isEmpty(new Set())).toBe(true);
	});

	test("should return false when a map has items", () => {
		expect(isEmpty(new Map([["hello", "world"]]))).toBe(false);
	});

	test("should return true when a map is empty", () => {
		expect(isEmpty(new Map())).toBe(true);
	});

	test("should return true when an object is empty", () => {
		expect(isEmpty({})).toBe(true);
	});

	test("should return false when an object is empty", () => {
		expect(isEmpty({ foo: "bar " })).toBe(false);
	});
});

describe("#isNotEmpty", () => {
	test('should return true when the string is ""', () => {
		expect(isNotEmpty("")).toBe(false);
	});

	test('should return false when the string is whitespace " "', () => {
		expect(isNotEmpty(" ")).toBe(true);
	});

	test("should return true when the list is empty", () => {
		expect(isNotEmpty([])).toBe(false);
	});

	test("should return false when the list is not empty", () => {
		expect(isNotEmpty([0])).toBe(true);
	});

	test("should return false when there are things in the set", () => {
		expect(isNotEmpty(new Set([1, 2, 3]))).toBe(true);
	});

	test("should return true when the set is empty", () => {
		expect(isNotEmpty(new Set())).toBe(false);
	});

	test("should return false when a map has items", () => {
		expect(isNotEmpty(new Map([["hello", "world"]]))).toBe(true);
	});

	test("should return true when a map is empty", () => {
		expect(isNotEmpty(new Map())).toBe(false);
	});

	test("should return true when an object is empty", () => {
		expect(isNotEmpty({})).toBe(false);
	});

	test("should return false when an object is empty", () => {
		expect(isNotEmpty({ foo: "bar " })).toBe(true);
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

describe("isNotNull", () => {
	test('should return false when the string is "null"', () => {
		expect(isNotNull("null")).toBe(false);
	});

	test("should return false when the string is `null`", () => {
		expect(isNotNull(null)).toBe(false);
	});

	test("should return false when the string is `undefined`", () => {
		expect(isNotNull(undefined)).toBe(false);
	});

	test('should return false when the string is "undefined"', () => {
		expect(isNotNull("undefined")).toBe(false);
	});

	test("should return true when the thing is not null or undefined", () => {
		expect(isNotNull([])).toBe(true);
		expect(isNotNull({})).toBe(true);
		expect(isNotNull("something else")).toBe(true);
	});
});

describe("#unique", () => {
	test("should return only unique values from the list", () => {
		expect(unique([1, 2, 3, "3"])).toEqual([1, 2, 3, "3"]);
		expect(unique([1, 2, 3, 3])).toEqual([1, 2, 3]);
	});
});
