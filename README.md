# bonobo.js
🙊 A civilized and peaceful utility library for TypeScript and ECMAScript.

## Installation

```sh
npm install --save @bytebury/bonobo
```

## Sample Usage

```js
import { reverse, isNullOrWhitespace, titleCase, bool } from "@bytebury/bonobo"

function isPalindrome(text) {
  return reverse(text) === text;
}

function sayHello(name) {
  if (isNullOrWhitespace(name)) {
    console.log("Hello, Guest.");
    return;
  }
  console.log(`Hello, ${titleCase(name)}`);
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
