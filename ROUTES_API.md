# Routes API - All Supported Patterns

The `ParallelSidebar` component accepts routes in **4 different ways** to provide maximum flexibility. All patterns are fully typed and supported.

## Pattern 1: Inline JSX with Children

Pass `<Routes>` directly as children.

```tsx
import { ParallelSidebar } from 'parallel-router';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ParallelSidebar width={500} position="right">
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </ParallelSidebar>
  );
}
```

**Use case:** Simple, small number of routes defined inline.

---

## Pattern 2: Routes Array via `routes` Prop

Pass an array of route configuration objects.

```tsx
import { ParallelSidebar, type ParallelRouteConfig } from 'parallel-router';

function App() {
  const routesArray: ParallelRouteConfig[] = [
    { path: '/user/:id', element: <UserProfile /> },
    { path: '/settings', element: <Settings /> },
    { path: '/notifications', element: <Notifications /> },
    { path: '/product/:id', element: <ProductDetail /> },
  ];

  return <ParallelSidebar routes={routesArray} width={500} />;
}
```

**Use case:** Routes defined programmatically or imported from a separate file.

---

## Pattern 3: JSX Variable as Children

Define routes in a variable, then pass as children.

```tsx
import { Routes, Route } from 'react-router-dom';
import { ParallelSidebar } from 'parallel-router';

function App() {
  // Define routes once
  const mainRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );

  return (
    <>
      {/* Use in main content */}
      <main>{mainRoutes}</main>
      
      {/* Reuse in parallel sidebar */}
      <ParallelSidebar width={500} position="right">
        {mainRoutes}
      </ParallelSidebar>
    </>
  );
}
```

**Use case:** ⭐ **RECOMMENDED** - Define routes once, reuse in multiple places. Eliminates duplication.

---

## Pattern 4: JSX Variable via `routes` Prop

Same as Pattern 3, but pass via `routes` prop instead of children.

```tsx
import { Routes, Route } from 'react-router-dom';
import { ParallelSidebar } from 'parallel-router';

function App() {
  const mainRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );

  return (
    <>
      <main>{mainRoutes}</main>
      
      {/* Pass as prop instead of children */}
      <ParallelSidebar routes={mainRoutes} width={500} position="right" />
    </>
  );
}
```

**Use case:** Alternative to Pattern 3, useful when you prefer explicit prop passing.

---

## TypeScript Types

### ParallelRouteConfig

Simple route configuration object:

```typescript
interface ParallelRouteConfig {
  path: string;
  element: ReactNode;
}
```

### ParallelSidebarProps

Full component props with detailed documentation:

```typescript
interface ParallelSidebarProps {
  /**
   * Routes can be:
   * - Array of ParallelRouteConfig objects
   * - JSX element containing <Routes> component
   * - RouteObject[] (React Router's official type)
   */
  routes?: ParallelRouteConfig[] | ReactElement | RouteObject[];
  
  /**
   * JSX children, typically <Routes> with <Route> components
   */
  children?: ReactNode;
  
  /** URL parameter name for parallel routing (default: 'parallel') */
  paramName?: string;
  
  /** Sidebar width in pixels or CSS string (default: 400) */
  width?: string | number;
  
  /** Sidebar position (default: 'right') */
  position?: 'left' | 'right';
  
  /** Show overlay backdrop (default: true) */
  overlay?: boolean;
  
  /** Callback when sidebar is closed */
  onClose?: () => void;
  
  /** Custom CSS class for sidebar */
  className?: string;
  
  /** Custom CSS class for overlay */
  overlayClassName?: string;
  
  /** Custom inline styles for sidebar */
  style?: CSSProperties;
}
```

---

## Comparison Table

| Pattern | Syntax | Reusability | Best For |
|---------|--------|-------------|----------|
| **1. Inline Children** | `<ParallelSidebar><Routes>...</Routes></ParallelSidebar>` | ❌ No | Simple, one-off usage |
| **2. Array Prop** | `<ParallelSidebar routes={array} />` | ✅ Yes | Programmatic routes, config files |
| **3. Variable Children** ⭐ | `<ParallelSidebar>{routeVar}</ParallelSidebar>` | ✅✅ Yes | **Route reusability** (recommended) |
| **4. Variable Prop** | `<ParallelSidebar routes={routeVar} />` | ✅✅ Yes | Alternative to Pattern 3 |

---

## Advanced Examples

### Combining Main Routes with Additional Parallel Routes

```tsx
function App() {
  // Main app routes
  const mainRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );

  // Additional routes only for parallel sidebar
  const additionalParallelRoutes = [
    { path: '/quick-actions', element: <QuickActions /> },
    { path: '/recent-items', element: <RecentItems /> },
  ];

  return (
    <>
      <main>{mainRoutes}</main>
      
      {/* Sidebar shows main routes + additional routes */}
      <ParallelSidebar routes={additionalParallelRoutes}>
        {mainRoutes}
      </ParallelSidebar>
    </>
  );
}
```

**Note:** When both `routes` prop and `children` are provided, the `routes` prop takes precedence.

### Nested Routes

All patterns support nested routes:

```tsx
const nestedRoutes = (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="analytics" element={<Analytics />} />
      <Route path="reports" element={<Reports />} />
      <Route index element={<DashboardHome />} />
    </Route>
  </Routes>
);

<ParallelSidebar routes={nestedRoutes} />
```

### Dynamic Routes with Parameters

```tsx
const dynamicRoutes = [
  { path: '/user/:userId', element: <UserProfile /> },
  { path: '/post/:postId/edit', element: <EditPost /> },
  { path: '/category/:categoryName/products/:productId', element: <ProductDetail /> },
];

<ParallelSidebar routes={dynamicRoutes} />
```

### Using React Router's RouteObject Type

You can also use React Router's official `RouteObject[]` type:

```tsx
import { type RouteObject } from 'react-router-dom';
import { ParallelSidebar } from 'parallel-router';

const routes: RouteObject[] = [
  { 
    path: '/dashboard', 
    element: <Dashboard />,
    children: [
      { path: 'stats', element: <Stats /> },
      { index: true, element: <DashboardHome /> },
    ],
  },
];

<ParallelSidebar routes={routes} />
```

---

## Migration Guide

### From Old API (routes prop only)

**Before:**
```tsx
const routes = [
  { path: '/user/:id', element: <User /> },
];

<ParallelSidebar routes={routes} />
```

**After (still works!):**
```tsx
// No changes needed - fully backward compatible
const routes = [
  { path: '/user/:id', element: <User /> },
];

<ParallelSidebar routes={routes} />
```

### From Duplicate Route Definitions

**Before (duplicated routes):**
```tsx
// Main routes
<Routes>
  <Route path="/user/:id" element={<User />} />
  <Route path="/settings" element={<Settings />} />
</Routes>

// Parallel routes (duplicated!)
<ParallelSidebar routes={[
  { path: '/user/:id', element: <User /> },
  { path: '/settings', element: <Settings /> },
]} />
```

**After (single definition, reused):**
```tsx
const routes = (
  <Routes>
    <Route path="/user/:id" element={<User />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

<main>{routes}</main>
<ParallelSidebar>{routes}</ParallelSidebar>
```

---

## Key Takeaways

✅ **4 flexible patterns** - Choose what fits your use case  
✅ **Full TypeScript support** - IntelliSense and type checking  
✅ **Route reusability** - Define once, use everywhere  
✅ **React Router compatibility** - Works with RouteObject, nested routes, dynamic segments  
✅ **Backward compatible** - Old code continues to work  
✅ **Zero breaking changes** - All existing implementations still valid

Choose the pattern that best fits your application architecture!

