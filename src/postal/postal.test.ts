import { describe, expect, test } from "vitest";
import type { StateCode, StateName } from "./postal";
import { getStateCode, getStateName } from "./postal";

describe("#getStateName", () => {
	test("should get state code from state name", () => {
		expect(getStateName("CT")).toBe("Connecticut");
		expect(getStateName("MA")).toBe("Massachusetts");
		expect(getStateName("ma" as Lowercase<StateCode>)).toBe("Massachusetts");
	});
});

describe("#getStateCode", () => {
	test("should get state name from state code", () => {
		expect(getStateCode("Connecticut")).toBe("CT");
		expect(getStateCode("New York")).toBe("NY");
		expect(getStateCode("new york" as Lowercase<StateName>)).toBe("NY");
	});
});
