# Publishing Guide

## Before Publishing

1. Update version in `package.json`
2. Update `CHANGELOG.md` with changes
3. Build the package:
   ```bash
   npm run build
   ```
4. Test the built package locally

## Publishing to NPM

1. Login to npm (if not already):
   ```bash
   npm login
   ```

2. Publish the package:
   ```bash
   npm publish --access public
   ```

## Testing Before Publish

Test locally using npm link:

```bash
# In parallel-router directory
npm link

# In your test project
npm link @parallel-router/core
```

Or use npm pack to create a tarball:

```bash
npm pack
# This creates a .tgz file you can install in other projects
```

## Post-Publishing

1. Create a git tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. Create a GitHub release with the changelog

## Version Guidelines

Follow semantic versioning (semver):
- MAJOR version for breaking changes
- MINOR version for new features
- PATCH version for bug fixes
