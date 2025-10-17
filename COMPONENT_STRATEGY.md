# Component Strategy

## TL;DR

**Use the unified `Link` component for everything.**

```tsx
import { Link } from 'parallel-router';

// Regular navigation
<Link to="/about">About</Link>

// Parallel navigation (sidebar)
<Link to="/profile" target="parallel">Profile</Link>
```

---

## Why Keep ParallelLink?

**Short answer:** Backward compatibility.

### The Evolution

1. **v0.0.1 (Initial):**
   - Had separate `ParallelLink` component
   - Required users to import two components: `Link` from React Router and `ParallelLink` from this package

2. **v0.0.2 (Current):**
   - Introduced unified `Link` component
   - Works for both regular and parallel navigation
   - `ParallelLink` kept for backward compatibility

### Decision: Keep ParallelLink

**Why not delete it?**

1. **Backward Compatibility:** Early adopters might be using `ParallelLink`
2. **No Harm:** It's a small component (~30 lines)
3. **Deprecation Notice:** Users will see it's deprecated in their IDE
4. **Future Removal:** Can be removed in v1.0.0

**Benefits:**

- Existing code doesn't break
- Users can migrate at their own pace
- TypeScript shows deprecation warnings
- Documentation clearly recommends the new way

---

## Current Component Status

### ✅ Recommended: `Link` Component

**Status:** Primary, recommended  
**Export:** `export { Link } from './components/Link'`  
**Documentation:** Featured in README

```tsx
import { Link } from 'parallel-router';

// One component for everything
<Link to="/about">About</Link>
<Link to="/profile" target="parallel">Profile</Link>
```

### 🔄 Legacy: `ParallelLink` Component

**Status:** Deprecated, backward compatibility  
**Export:** `export { ParallelLink } from './components/ParallelLink'`  
**Documentation:** Mentioned as legacy in README, detailed migration guide in LINK_COMPONENT.md

```tsx
import { ParallelLink } from 'parallel-router';

// Still works, but deprecated
<ParallelLink to="/profile">Profile</ParallelLink>
```

**Deprecation Markers:**
- JSDoc `@deprecated` tag in source
- TypeScript will show strikethrough in IDEs
- Migration instructions in documentation

---

## Migration Path

### For Users

**If they're on v0.0.1:**
```tsx
// Old (still works)
import { ParallelLink } from 'parallel-router';
<ParallelLink to="/profile">Profile</ParallelLink>

// New (recommended)
import { Link } from 'parallel-router';
<Link to="/profile" target="parallel">Profile</Link>
```

**If they're starting fresh:**
- Just use `Link` component
- Never need to know about `ParallelLink`

### For Package Maintainers (Future)

**v1.0.0:**
- Can safely remove `ParallelLink`
- Update CHANGELOG with breaking change notice
- Users have had time to migrate

---

## Documentation Strategy

1. **README.md:**
   - Shows `Link` as the primary method
   - Brief note about `ParallelLink` for backward compatibility

2. **LINK_COMPONENT.md:**
   - Detailed migration guide
   - Comparison table
   - Examples of both approaches

3. **API Reference:**
   - `Link` documented as primary
   - `ParallelLink` noted as deprecated

---

## Summary

**ParallelLink exists for backward compatibility only.**

- ✅ Keep it in the codebase
- ✅ Export it from index.ts
- ✅ Mark as deprecated in source code
- ✅ Document as legacy in README
- ✅ Provide migration guide
- ⏰ Remove in v1.0.0

This approach ensures:
- Early adopters don't break
- New users use the better approach
- Clear migration path
- Professional package management
