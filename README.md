# bonobo.js
🙊 A civilized and peaceful utility library for TypeScript and ECMAScript.

## Installation

```sh
npm install --save @bytebury/bonobo
```

## Sample Usage

```js
import { reverse, bool } from "@bytebury/bonobo";
import { isNullOrWhitespace, titleCase } from "@bytebury/bonobo/strings";
import { yearsBetween, today, date } from "@bytebury/bonobo/dates";

function isPalindrome(text) {
  return reverse(text) === text;
}

function sayHello(name) {
  if (isNullOrWhitespace(name)) {
    console.log("Hello, Guest.");
    return;
  }
  console.log(`Hello, ${titleCase(name)}.`);
}

function isOver18() {
  return yearsBetween(today(), date("2000-06-01"));
}

// Sometimes, APIs will return booleans as text (for whatever reason).
function legacyApi() {
  const user = { name: "Baboon", isAdmin: "false" };

  if (bool(user.isAdmin)) { // this is false
    console.log("User is an admin!");
    return
  }
  console.log("User is not an admin!"); // in this example this outputs!
}


```
