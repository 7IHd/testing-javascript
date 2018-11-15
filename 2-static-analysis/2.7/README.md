# Validate Code in a pre-commit git Hook with husky
It would be great to run some of these checks before someone even commits their code. That way they could fix any issues right away rather than waiting for CI to run. That's where Husky comes into to play.

## Install Husky

```
npm install --save-dev husky
```

## Configure Husky
```
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run validate"
    }
  }
}
```

## Git Hooks
Take a look at the `.git/hooks/` directory.

There are a bunch of git hooks in here. We have some samples that we can look at.

For example, the pre-commit file is actually a Husky-generated file. It will call the package.json's `pre-commit`.

```
.git/hooks/pre-commit
```

## package.json
Add a the precommit so that it calls `npm run validate`.

```
"scripts": {
    "lint": "eslint src",
    "format": "npm run prettier -- --write",
    "prettier": "prettier \"**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)\"",
    "validate": "npm run lint && npm run prettier -- --list-different && npm run flow",
    "precommit": "npm run validate"
},
```

## Quick test
1. Make changes so that validation fails.
2. Commit those changes `git commit --am 'stuff'`.
3. We can get around this with the `--no-verify` flag.

## Conclusion
Husky can have our back by checking our changes prior to a commit.
