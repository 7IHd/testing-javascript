# Avoid Common Errors with Flow Type Definitions
ESLint can check for a lot of things, but it’s not a great tool for checking the types of variables that flow through your application.

For this you'll need a type-checking tool like Flow or TypeScript.

## Let's look at how Flow works.
Install `flow` as a dev dependency.

```
npm install --save-dev flow-bin
```

Update `package.json` with a `flow` script.

Initialize flow.

```
npm run flow init
```

That will create a new file called `.flowconfig`. Flow can be configured to ignore certain files, include specific files, and etc.

Flow knows which files to evaluate via the Flow pragma at the top of a file.

```
// @flow
```

## Quick test
1. Open src/flow-example.js
2. Change `add(1, 2)` to `add("1", 2)`. Basically, change the number `1` to a string by surrounding with quotes.
3. `npm run flow`
4. The error should be reported

```
> flow

Error ----------------------------------------------------------------------------------------- src/flow-example.js:20:5

Cannot call `add` with `"1"` bound to `a` because string [1] is incompatible with number [2].

   src/flow-example.js:20:5
   20| add("1", 2)
           ^^^ [1]

References:
   src/flow-example.js:2:17
    2| function add(a: number, b: number): number {
                       ^^^^^^ [2]


```

## ESLint
ESLint actually doesn't understand Flow syntax. To help it out, we're going to install a parser.

```
npm install --save-dev babel-eslint
```

With babel-eslint installed, I can go to my ESLint configuration and add parser: babel-eslint.

This what allows the `validate` script to work with flow found in `package.json`.

```
"validate": "npm run lint && npm run prettier -- --list-different && npm run flow"
```

## Conclusion
After installing the Flow binary, you can start using the Flow comment at the top of your files. Then you can start adding type definitions to your Javascript to help avoid some common errors in programming with JavaScript.
