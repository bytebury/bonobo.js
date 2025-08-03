export type Milliseconds = number;

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
	/**
	 * Numeric representation of milliseconds, simply returns what
	 * was given.
	 */
	milliseconds: (milliseconds: Milliseconds): Milliseconds => {
		return milliseconds;
	},
	/**
	 * Converts the given number of seconds to milliseconds.
	 */
	seconds: (seconds: number): Milliseconds => {
		return seconds * 1000;
	},
	/**
	 * Converts the given number of minutes to milliseconds.
	 */
	minutes: (minutes: number): Milliseconds => {
		return minutes * 60 * 1000;
	},
	/**
	 * Converts the given number of hours to milliseconds.
	 */
	hours: (hours: number): Milliseconds => {
		return hours * 60 * 60 * 1000;
	},
	/**
	 * Converts the given number of days to milliseconds.
	 */
	days: (days: number): Milliseconds => {
		return days * 24 * 60 * 60 * 1000;
	},
};
