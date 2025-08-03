/**
 * This is a utility type that allows you to Autocomplete a string.
 *
 * For example, let's say you have a situation where you would like an input
 * autocompleted with suggestion, but you also want people to be able to type
 * whatever they want. This would come in handy.
 *
 * @example
 * function setUserRole(role: AutoComplete<'free' | 'paid' | 'admin'>): void {
 *  // omitted
 * }
 */
export type AutoComplete<T extends string> = T | (string & {});
