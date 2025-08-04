import { describe, expect, test } from "vitest";
import { ByteSize } from "./bytes";

describe("#bytes", () => {
	test("should return 100", () => {
		expect(ByteSize.bytes(100)).toBe(100);
	});

	test("should return the ceil when decimals are passed", () => {
		expect(ByteSize.bytes(0.1)).toBe(1);
	});
});

describe("#kilobytes", () => {
	test("should return the right amount of kilobytes", () => {
		expect(ByteSize.kilobytes(1)).toBe(1024);
		expect(ByteSize.kilobytes(0.5)).toBe(512);
	});
});

describe("#megabytes", () => {
	test("should return the right amount of megabytes", () => {
		expect(ByteSize.megabytes(1)).toBe(1_048_576);
		expect(ByteSize.megabytes(0.5)).toBe(524_288);
	});
});

describe("#gigabytes", () => {
	test("should return the right amount of gigabytes", () => {
		expect(ByteSize.gigabytes(0.001)).toBe(1_073_742);
	});
});
