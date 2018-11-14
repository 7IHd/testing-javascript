# Validate all files are formatted when linting
Not everyone on a team will want to use prettier for their editor.
A validation script can be used as an alternative.

## Prettier flags
List files that would be changed by prettier. If any of the files fail, this script will exit with a non-zero exit code.
```
--list-different
```

Write the changes to the file(s).
```
--write
```

## Package.json

Validate
```
npm run validate
```

Format
```
npm run format
```

Note: Notice how we use `--` to forward along the flags.
