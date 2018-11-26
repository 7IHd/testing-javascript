# Auto-format all files and validate relevant files in a precommit script with lint-staged

Rather than failing when a developer has failed to format their files or run
linting on all the files in the project on every commit, it would be even better
to just automatically format the files on commit and only check the relevant
files with eslint. Let’s use lint-staged to run scripts on the files that are
going to be committed as part of our precommit hook.

```
npm install
npm run flow init
```

Take a look at the `package.json`'s precommit script and you'll see
`lint-staged`.

Configure lint-staged via the `.lintstagedrc`. If a file matches a glob, then we
can run a specific script relative to the matching file.

## Testing it out

1. Make changes to the `src/example.js` file (changes that go against the
   defined .eslintrc file).
2. Commit those changes (prettier will automatically format your staged files).
