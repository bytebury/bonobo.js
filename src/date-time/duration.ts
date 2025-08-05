/**
 * Helpers around duration to portray explicit intent behind
 * what you are trying to do.
 *
 * @example
 * setTimeout(() => {
 *   doSomething();
 * }, Duration.seconds(2));
 */
export const Duration = {
	/** Numeric representation of milliseconds, simply returns what was given. */
	milliseconds: (milliseconds: number): number => milliseconds,
	/** Converts the given number of seconds to milliseconds. */
	seconds: (seconds: number): number => seconds * 1000,
	/** Converts the given number of minutes to milliseconds. */
	minutes: (minutes: number): number => minutes * 60 * 1000,
	/** Converts the given number of hours to milliseconds. */
	hours: (hours: number): number => hours * 60 * 60 * 1000,
	/** Converts the given number of days to milliseconds. */
	days: (days: number): number => days * 24 * 60 * 60 * 1000,
};
