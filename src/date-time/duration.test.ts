import { describe, expect, test } from "vitest";
import { Duration } from "./duration";

describe("#milliseconds", () => {
	test("should return what was given", () => {
		expect(Duration.milliseconds(500));
	});
});

describe("#seconds", () => {
	test("should convert 6 seconds to milliseconds", () => {
		expect(Duration.seconds(6)).toBe(6_000);
	});

	test("should convert 2.5 seconds to 2_500 milliseconds", () => {
		expect(Duration.seconds(2.5)).toBe(2_500);
	});
});

describe("#minutes", () => {
	test("should convert 1 minute to milliseconds", () => {
		expect(Duration.minutes(1)).toBe(60_000);
	});
});

describe("#hours", () => {
	test("should convert 12.5 hours to milliseconds", () => {
		expect(Duration.hours(12.5)).toBe(45_000_000);
	});
});

describe("#days", () => {
	test("should convert 0.5 days to 12 hours in milliseconds", () => {
		expect(Duration.days(0.5)).toBe(Duration.hours(12));
	});

	test("should convert 2 days to milliseconds", () => {
		expect(Duration.days(2)).toBe(172_800_000);
	});
});
