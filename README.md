# bonobo.js

🙊 A civilized and peaceful utility library for TypeScript and ECMAScript.

## Installation

```sh
npm install --save @bytebury/bonobo
```

## Documentation

https://bytebury.github.io/bonobo.js/

## Sample Usage

```js
import { reverse, isEmpty } from "@bytebury/bonobo";
import { yearsBetween, today } from "@bytebury/bonobo/dates";
import { ValueOf } from "@bytebury/bonobo/types";

function isPalindrome(text: string): boolean {
  return reverse(text) === text;
}

const Fruits = ["apple", "banana", "orange"] as const;

function eat(fruits: ValueOf<typeof Fruits>[]): void {
  if (isEmpty(fruits)) {
    console.log('you need to eat at least one fruit');
    return;
  }
  console.log(`You ate: ${fruits.join(', ')}.`)
}

function isOver18() {
  return yearsBetween(today(), new Date("2000-06-01")) >= 18;
}
```
