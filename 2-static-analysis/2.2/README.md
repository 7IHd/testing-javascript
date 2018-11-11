# Format Code by installing and running Prettier
Prettier can help you avoid a lot of useless time spent formatting code. It can also help you catch subtl issues with your code that you may not notice otherwise.

## Installing Prettier
`npm install --save-dev prettier`

## Testing prettier
Look at `src/example.js` and do some really weird formatting to the file e.g. return line a couple of times between the closing parenthesis of the if condition and the opening curly bracket.

```
if (!("serviceWorker" in navigator))


 {
  // you have an old browser :-(
}
```
 Run prettier with the write flag so that it will write the changes to the disk. Caution though, always double check.

 Prettier is capable of formatting more than just JavaScript, but JSON and CSS even.

 ## Package.json
 Update the scripts property. Prettier will go through the whole project for all files that match the glob and attempt to format them.

 ```
 "scripts": {
     "lint": "eslint src",
     "format": "prettier --write \"**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql|vue)\""
 },
 ```

## Understanding the output
Those that are gray needed no changes.

## Text Editor
You could always setup format on save.
