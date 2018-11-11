# Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier
Because prettier can automatically fix a lot of stylistic issues in our codebase, it’s not necessary to have eslint check for those.

We can use `eslint-config-prettier` to disable all rules that are made irrelevant thanks to prettier.

Kent C. Dodds way of thinking is the red line in the editor is annoying and we should turn it off since we can have prettier fix it. I disagree, since the red line has helped me identify issues in the past and I'm hesistant with prettier putting all my faith into prettier.

If in the future I do want to move forward with his way of thinking...

`eslint-config-prettier` can be used to extend configuration so that it will automatically disable all the rules that Prettier renders irrelevant.

`npm install --save-dev eslint-config-prettier`

We can then update the `.eslintrc` file.

```
{
  "parserOptions": {
    "ecmaVersion": "2018"
  },
  "extends": [
    "eslint:recommended", "eslint-config-prettier"
  ],
  "rules": {
    "semi": "off",
    "no-console": "off"
  },
  "env": {
      "browser": true
  }
}
```

Since the `eslint-config-prettier` is at the very end, the rules that are specified will win in a conflict.

Now we don't have to explicitly turn off rules in the `.eslintrc` file, because `eslint-config-prettier` is going to disable or override them.

# Conclusion
All that we needed to do for this was add as a dev dependency eslint-config-prettier and then extend eslint-config-prettier in our ESLint configuration.
