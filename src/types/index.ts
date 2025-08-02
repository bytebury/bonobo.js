/**
 * This is a utility type that allows you to get the keys from an object or list.
 *
 * If `T` is a type of list, then this behaves the same as `ValuesOf`.
 *
 * @example
 * const MyEnum = { foo: 'bar', another: 'baz' } as const;
 * const MyList = ['apple', 'banana', 'orange'] as const;
 *
 * function example(param: KeyOf<typeof MyEnum>): void {
 *   // param would be: "foo" | "another"
 * }
 *
 * function example2(param: KeyOf<typeof MyList): void {
 *   // param would be: "apple" | "banana" | "orange"
 * }
 */
export type KeyOf<T> = T extends readonly unknown[] ? ValueOf<T> : keyof T;

/**
 * This is a utility type that allows you to get the values from an object
 * or a list.
 *
 * @example
 * const MyEnum = { foo: 'bar', another: 'baz' } as const;
 * const MyList = ['apple', 'banana', 'orange'] as const;
 *
 * function example(param: ValueOf<typeof MyEnum>): void {
 *   // param would be: "bar" | "baz"
 * }
 *
 * function example2(param: ValueOf<typeof MyList): void {
 *   // param would be: "apple" | "banana" | "orange"
 * }
 */
export type ValueOf<T> = T extends readonly unknown[] ? T[number] : T[keyof T];

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
