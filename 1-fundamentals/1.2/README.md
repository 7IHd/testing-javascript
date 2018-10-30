# 1.2 Abstract Test Assertions into a JavaScript Assertion Library

Add abstraction so that tests can read nicer.

Write a simple abstraction to encapsulate the assertion from the simple test.

This function is like an assertion library.

```
function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error( `${actual} is not equal to ${expected}`);
			}
		}
	}
}
```

It takes an actual value and then it returns an object that has functions for different assertions that we can make on that actual value.
We can expand off of that to also have many more assertions.

See example, [index.js](./index.js)
