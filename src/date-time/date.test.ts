import { describe, expect, test } from "vitest";
import {
	addDays,
	addMonths,
	addYears,
	daysBetween,
	monthsBetween,
	subtractDays,
	subtractMonths,
	subtractYears,
	today,
	tomorrow,
	yearsBetween,
	yesterday,
} from "./date";

describe("#addDays", () => {
	test("should add two days", () => {
		const start = new Date("2025-08-01");
		const expected = new Date("2025-08-03");
		expect(addDays(start, 2)).toEqual(expected);
	});
});

describe("#subtractDays", () => {
	test("should subtract two days", () => {
		const start = new Date("2025-08-03");
		const expected = new Date("2025-08-01");
		expect(subtractDays(start, 2)).toEqual(expected);
	});
});

describe("#addMonths", () => {
	test("should add two months", () => {
		const start = new Date("2025-08-03");
		const expected = new Date("2025-10-03");
		expect(addMonths(start, 2)).toEqual(expected);
	});
});

describe("#subtractMonths", () => {
	test("should subtract two months", () => {
		const start = new Date("2025-10-03");
		const expected = new Date("2025-08-03");
		expect(subtractMonths(start, 2)).toEqual(expected);
	});
});

describe("#addYears", () => {
	test("should add 2 years from the given date", () => {
		const start = new Date("2025-10-03");
		const expected = new Date("2027-10-03");
		expect(addYears(start, 2)).toEqual(expected);
	});
});

describe("subtractYears", () => {
	test("should subtract 2 years from the given date", () => {
		const start = new Date("2025-10-03");
		const expected = new Date("2023-10-03");
		expect(subtractYears(start, 2)).toEqual(expected);
	});
});

describe("#daysBetween", () => {
	test("there are 55 days between these two dates", () => {
		const start = new Date("2025-06-12");
		const end = new Date("2025-08-06");
		expect(daysBetween(start, end)).toBe(55);
	});

	test("there are 2 days between august 4th and august 6th", () => {
		const start = new Date("2025-08-04");
		const end = new Date("2025-08-06");
		expect(daysBetween(start, end)).toBe(2);
	});

	test("there are 2 days between august 6th and august 4th", () => {
		const start = new Date("2025-08-06");
		const end = new Date("2025-08-04");
		expect(daysBetween(start, end)).toBe(2);
	});

	test("there are 0 days between these two dates", () => {
		const start = new Date("2025-08-06");
		const end = new Date("2025-08-06");
		expect(daysBetween(start, end)).toBe(0);
	});

	test("there should be 1 day between today and tomorrow and yesterday", () => {
		expect(daysBetween(today(), tomorrow())).toBe(1);
		expect(daysBetween(today(), yesterday())).toBe(1);
	});
});

describe("#monthsBetween", () => {
	test("there are 13 months between these two dates", () => {
		const start = new Date("2025-06-12");
		const end = new Date("2026-07-06");
		expect(monthsBetween(start, end)).toBe(13);
	});

	test("there is 1 month between these two dates", () => {
		const start = new Date("2025-08-04");
		const end = new Date("2025-09-06");
		expect(monthsBetween(start, end)).toBe(1);
	});

	test("there are 1 month between these two dates", () => {
		const start = new Date("2025-09-06");
		const end = new Date("2025-08-04");
		expect(monthsBetween(start, end)).toBe(1);
	});
});

describe("#yearsBetween", () => {
	test("there are 18 years between these two dates", () => {
		const start = new Date("2000-06-12");
		const end = new Date("2018-06-12");
		expect(yearsBetween(start, end)).toBe(18);
	});

	test("there is 17 years between these two dates", () => {
		const start = new Date("2000-08-04");
		const end = new Date("2018-08-03");
		expect(yearsBetween(start, end)).toBe(17);
	});

	test("there are 0 years between these two dates", () => {
		const start = new Date("2025-09-06");
		const end = new Date("2025-08-04");
		expect(yearsBetween(start, end)).toBe(0);
	});

	test("there are 20 years between these two dates", () => {
		const start = new Date("2025-09-06");
		const end = new Date("2005-08-04");
		expect(yearsBetween(start, end)).toBe(20);
	});
});
