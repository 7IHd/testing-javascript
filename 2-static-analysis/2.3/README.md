# Configure Prettier
Prettier is a pretty opinionated tool, but it does allow for some customization.

The [prettier playground](https://prettier.io/playground/) is a great tool to help determine options that should be enabled in our projects `.prettierrc` file.

The `.prettierignore` can be used to avoid formatting any files generated within the project such as `node_modules` or a `build` folder.

## Using the Prettier Playground
Again, prettier is an opinionated tool. The prettier playground helps isolate which formatting options you want prettier to configure. Reason being, you don't want prettier conflicting with eslint.

`.prettierrc`
Once you have all the options you want, you can then generate the `.prettierrc` file (which can be placed right at the root).

`.prettierignore`
You'll want to add this file so that prettier does not run against generated files (e.g. `/node_modules`) within your project.

```
node_modules
coverage
dist
build
.build
```

## Conclusion
All that we needed to do to configure Prettier is we added a .prettierrc file in our project, with all the configuration options that we wanted. Then we added also a .prettierignore file, so that we can make sure that Prettier doesn't attempt to format files that are generated.


