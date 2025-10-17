# 🎯 Quick Reference - ParallelSidebar Routes

## All 4 Supported Patterns

### 1️⃣ Inline JSX Children
```tsx
<ParallelSidebar>
  <Routes>
    <Route path="/user/:id" element={<User />} />
  </Routes>
</ParallelSidebar>
```

### 2️⃣ Array Prop
```tsx
const routes = [
  { path: '/user/:id', element: <User /> }
];
<ParallelSidebar routes={routes} />
```

### 3️⃣ JSX Variable (Children) ⭐
```tsx
const routes = <Routes>...</Routes>;
<main>{routes}</main>
<ParallelSidebar>{routes}</ParallelSidebar>
```

### 4️⃣ JSX Variable (Prop)
```tsx
const routes = <Routes>...</Routes>;
<ParallelSidebar routes={routes} />
```

---

## TypeScript Types

```typescript
import { type ParallelRouteConfig } from '@parallel-router/core';

// Simple object
const routes: ParallelRouteConfig[] = [
  { path: '/user/:id', element: <User /> }
];

// Or use React Router's type
import { type RouteObject } from 'react-router-dom';
const routes: RouteObject[] = [...];
```

---

## Props Quick Reference

```typescript
interface ParallelSidebarProps {
  routes?: ParallelRouteConfig[] | ReactElement | RouteObject[];
  children?: ReactNode;
  width?: string | number;          // default: 400
  position?: 'left' | 'right';      // default: 'right'
  overlay?: boolean;                // default: true
  paramName?: string;               // default: 'parallel'
  onClose?: () => void;
  className?: string;
  overlayClassName?: string;
  style?: CSSProperties;
}
```

---

## Features

✅ 4 flexible patterns  
✅ Route reusability  
✅ TypeScript support  
✅ Dynamic routes (`:id`)  
✅ Nested routes  
✅ Route validation  
✅ matchRoutes integration  

---

## Read More

- **[ROUTES_API.md](./ROUTES_API.md)** - Complete guide with examples
- **[ROUTES_API_SUMMARY.md](./ROUTES_API_SUMMARY.md)** - Detailed summary
- **[USING_MATCHROUTES.md](./USING_MATCHROUTES.md)** - Technical details
