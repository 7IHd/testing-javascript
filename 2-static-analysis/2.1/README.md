# 2.1 Lint JavaScript by configuring and running ESLint

`npm install --save-dev eslint`

## Some options to consider...
`.eslintrc` allows us to configure eslint via various options.
`parserOptions`
- `ecmaVersion`

`rules`
-  For instance `valid-typeof`, we can specify the error type e.g. `warning` or `error`.

`extends`
- Another option is to use `extends`. A good built in configuration is `eslint: recommended`

`env`
- `browser: true` the environment that our JavaScript is going to be running in so it would know what global variables are available.

## Package.json
Add `Run `npx eslint src` to `scripts`.
