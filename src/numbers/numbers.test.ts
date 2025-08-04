import { describe, expect, test } from "vitest";
import { isEven, isOdd, ordinalize } from "./numbers";

describe("#isEven", () => {
	test("should return true for even numbers", () => {
		expect(isEven(2)).toBe(true);
		expect(isEven(-2)).toBe(true);
		expect(isEven(1924)).toBe(true);
		expect(isEven(0)).toBe(true);
	});
});

describe("#isOdd", () => {
	test("should return true for odd numbers", () => {
		expect(isOdd(3)).toBe(true);
		expect(isOdd(-3)).toBe(true);
		expect(isOdd(1921)).toBe(true);
		expect(isOdd(1)).toBe(true);
	});
});

describe("#ordinalize", () => {
	test("should return the correct ordinalized number", () => {
		expect(ordinalize(1)).toBe("1st");
		expect(ordinalize(2)).toBe("2nd");
		expect(ordinalize(3)).toBe("3rd");
		expect(ordinalize(4)).toBe("4th");
		expect(ordinalize(11)).toBe("11th");
		expect(ordinalize(21)).toBe("21st");
		expect(ordinalize(112)).toBe("112th");
	});
});
