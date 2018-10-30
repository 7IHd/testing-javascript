# 1.5 Provide Testing Helper Functions as Globals in JavaScript
These testing utilities are pretty useful. We want to be able to use them throughout our application in every single one of our test files.

We could put these into a module that we would require an import into every single one of our test files, but many testing frameworks embrace the fact that you're going to be using these in every single one of your test files, and so they just make them available globally.

Now we can use [setup-globals.js](./setup-global.js) for each one of our test files.

Run

```
node --require ./setup-globals.js ./globals.js
```
