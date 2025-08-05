import { Duration } from "./duration";

/**
 * Right now. This is an alias for `new Date()`.
 */
export function now(): Date {
	return new Date();
}

/**
 * Today's date at midnight.
 */
export function today(): Date {
	return new Date(now().setHours(0, 0, 0, 0));
}

/**
 * Tomorrow's date at midnight.
 */
export function tomorrow(): Date {
	return addDays(today(), 1);
}

/**
 * Yesterday's date at midnight.
 */
export function yesterday(): Date {
	return subtractDays(today(), 1);
}

/**
 * Adds the given amount of days to the specified date.
 */
export function addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

/**
 * Subtracts the given amount of days from the specified date.
 */
export function subtractDays(date: Date, days: number): Date {
	return addDays(new Date(date), -days);
}

/**
 * Adds the given amount of months to the specified date.
 */
export function addMonths(date: Date, months: number): Date {
	const result = new Date(date);
	result.setMonth(result.getMonth() + months);
	return result;
}

/**
 * Subtracts the given amount of months from the specified date.
 */
export function subtractMonths(date: Date, months: number): Date {
	return addMonths(new Date(date), -months);
}

/**
 * Adds the given amount of years to the specified date.
 */
export function addYears(date: Date, years: number): Date {
	return addMonths(new Date(date), years * 12);
}

/**
 * Subtracts the given amount of yers from the specified date.
 */
export function subtractYears(date: Date, years: number): Date {
	return addYears(new Date(date), -years);
}

/**
 * Calculates the days between two dates.
 */
export function daysBetween(start: Date, end: Date): number {
	return Math.abs(
		Math.floor((end.getTime() - start.getTime()) / Duration.days(1)),
	);
}

/**
 * Calculates the months between two dates.
 */
export function monthsBetween(start: Date, end: Date): number {
	const years = end.getFullYear() - start.getFullYear();
	const months = end.getMonth() - start.getMonth();

	return Math.abs(years * 12 + months);
}

/**
 * Calculates the years between two dates.
 * The date must be equal or past for it to count as a full year.
 *
 * @example
 * yearsBetween(new Date('2007-08-01', '2008-07-31')); // 0
 * yearsBetween(new Date('2007-08-01', '2008-08-01')); // 1
 */
export function yearsBetween(start: Date, end: Date): number {
	const years = end.getFullYear() - start.getFullYear();

	if (years === 0) return 0;

	// Check if the end date is before the start date
	const hasDayPassed =
		end.getMonth() > start.getMonth() ||
		(end.getMonth() === start.getMonth() && end.getDate() >= start.getDate());

	if (!hasDayPassed) {
		if (years < 0) {
			return Math.abs(years);
		}
		return Math.abs(years - 1);
	}

	return Math.abs(years);
}
