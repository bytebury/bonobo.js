export type Milliseconds = number;

export function now(): Date {
	return new Date();
}

export function today(): Date {
	return new Date(now().setHours(0, 0, 0, 0));
}

export function tomorrow(): Date {
	return addDays(today(), 1);
}

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
 *
 * @note the number returned will always be positive.
 */
export function daysBetween(start: Date, end: Date): number {
	const startTime = new Date(start).getTime();
	const endTime = new Date(end).getTime();

	return Math.abs(Math.floor((endTime - startTime) / days(1)));
}

/**
 * Calculates the months between two dates.
 *
 * @note the number returned will always be positive.
 */
export function monthsBetween(start: Date, end: Date): number {
	const startDate = new Date(start);
	const endDate = new Date(end);

	const years = endDate.getFullYear() - startDate.getFullYear();
	const months = endDate.getMonth() - startDate.getMonth();

	return Math.abs(years * 12 + months);
}

/**
 * Calculates the years between two dates.
 * The date must be equal or past for it to count as a full year.
 *
 * @example
 * yearsBetween(new Date('2007-08-01', '2008-07-31')); // 0
 * yearsBetween(new Date('2007-08-01', '2008-08-01')); // 1
 *
 * @note the number returned will always be positive.
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

/**
 * Converts seconds to milliseconds.
 */
export function seconds(seconds: number): Milliseconds {
	return seconds * 1_000;
}

/**
 * Converts minutes to milliseconds.
 */
export function minutes(minutes: number): Milliseconds {
	return seconds(minutes * 60);
}

/**
 * Converts hours to milliseconds.
 */
export function hours(hours: number): Milliseconds {
	return minutes(hours * 60);
}

/**
 * Converts days to milliseconds.
 */
export function days(days: number): Milliseconds {
	return hours(days * 24);
}
