# 📦 Publishing Guide - parallel-router

## Version: 0.0.1

This guide will help you publish your package to npm.

---

## 📋 Pre-Publish Checklist

✅ Package built successfully  
✅ Version set to `0.0.1`  
✅ README.md updated  
✅ Documentation cleaned up  
✅ No unnecessary files  

---

## 🔐 Step 1: Login to npm

If you don't have an npm account, create one at https://www.npmjs.com/signup

Then login via terminal:

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

Verify you're logged in:
```bash
npm whoami
```

---

## 🏷️ Step 2: Check Package Name Availability

Check if the scoped package name is available:

```bash
npm view parallel-router
```

If you see "npm ERR! 404 Not Found", the name is available! ✅

If it shows package details, the name is taken. You'll need to:
- Use a different scope: `@your-username/parallel-router`
- Or use an unscoped name: `parallel-router-core`

---

## 🚀 Step 3: Publish Package

### Option A: Dry Run First (Recommended)

Test what will be published without actually publishing:

```bash
npm publish --dry-run
```

This shows:
- Which files will be included
- Package size
- Any warnings or errors

### Option B: Publish Package

```bash
npm publish
```

This will:
- Publish version `0.0.1`
- Tag it as `latest` (default)
- Users can install with: `npm install parallel-router`

---

## 📦 Step 4: Verify Publication

After publishing, verify it's live:

```bash
npm view parallel-router
```

Or visit:
```
https://www.npmjs.com/package/parallel-router
```

---

## 🧪 Step 5: Test Installation

Create a test project and install your package:

```bash
mkdir test-parallel-router
cd test-parallel-router
npm init -y
npm install parallel-router
```

Verify it works:
```bash
npm list parallel-router
```

---

## 🎯 Commands Summary

```bash
# 1. Login to npm
npm login

# 2. Verify login
npm whoami

# 3. Check package name
npm view parallel-router

# 4. Dry run (optional but recommended)
npm publish --dry-run

# 5. Publish package
npm publish

# 6. Verify publication
npm view parallel-router
```

---

## 📝 What Gets Published

Based on your `package.json` files array:

```
✅ dist/              (All built files)
✅ README.md          (Package documentation)
✅ CHANGELOG.md       (Version history)
✅ LICENSE            (MIT license)
```

**NOT published:**
- ❌ src/ (source files)
- ❌ example/ (example app)
- ❌ node_modules/
- ❌ .git/
- ❌ Other documentation files

---

## 🔢 Version Information

**Current Version:** `0.0.1`

**Version Format:**
- `0.0.1` - Initial release (following semver)
- Version `0.0.x` indicates early development stage

**Next versions:**
- Bug fixes: `0.0.2`, `0.0.3`, etc.
- New features: `0.1.0`, `0.2.0`, etc.
- Stable release: `1.0.0`

---

## 🏷️ npm Tags

### Latest Tag (Default)
```bash
npm install parallel-router
# or
npm install parallel-router@latest
```

Your package will be tagged as `latest` by default.

### Specific Version
```bash
npm install parallel-router@0.0.1
```

Users can always install a specific version.

---

## 📊 Package Stats

After publishing, you can see:
- Download stats: https://npm-stat.com/charts.html?package=parallel-router
- Package details: https://bundlephobia.com/package/parallel-router
- Size: ~23 KB (uncompressed)

---

## 🔄 Updating the Package

To publish updates:

1. **Make changes** to your code
2. **Update version** in package.json
   ```bash
   npm version patch  # 0.0.1 → 0.0.2 (bug fixes)
   npm version minor  # 0.0.1 → 0.1.0 (new features)
   npm version major  # 0.0.1 → 1.0.0 (breaking changes)
   ```
3. **Build** the package
   ```bash
   npm run build
   ```
4. **Publish** the update
   ```bash
   npm publish
   ```

---

## 🐛 Troubleshooting

### "need auth" error
```bash
npm login
```

### "402 Payment Required"
Your package name requires a paid account. Use a scoped name with your username:
```json
{
  "name": "@your-username/parallel-router"
}
```

### "403 Forbidden"
- Check if name is already taken
- Verify you have publishing rights
- Ensure you're logged in with correct account

### "Package name too similar"
npm may reject names too similar to existing packages. Try:
- `parallel-router`
- `@your-username/parallel-router`
- `react-parallel-router`

---

## ✅ Post-Publish Checklist

After successful publication:

1. ✅ Test installation in a new project
2. ✅ Update GitHub repository with npm badge
3. ✅ Share on social media / dev communities
4. ✅ Monitor for issues/feedback
5. ✅ Prepare for stable 1.0.0 release

---

## 🎉 Ready to Publish!

Your package is ready. Follow the steps above to publish to npm.

**Recommended flow:**
```bash
npm login
npm publish --dry-run
npm publish
npm view parallel-router
```

Good luck! 🚀


