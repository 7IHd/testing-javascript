# 1.1 Throw an Error with a Simple Test in JavaScript

It is super simple to test *pure functions* (functions which always return the same output for a given input and does not change the state of the world around them).

Automated testing is basically, code that will throw an error when the result is not what we expect.

The job of testing frameworks is to make the failure message as useful as possible so we can quickly identify what the problem is and fix it.

Tests can get more complicated when you're dealing with code that depends on some state to be set up first. For instance, a component that needs to be rendered to the document before you can fire browser events.

See example, [simple.js](./simple.js)
