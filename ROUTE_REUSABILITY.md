# Route Reusability Guide

One of the most powerful features of Parallel Router is the ability to **reuse the same routes** for both normal navigation and parallel (sidebar) navigation.

## The Problem

In traditional implementations, you'd have to define routes twice:

```tsx
// ❌ Duplicating route definitions
<Routes>
  <Route path="/user/:id" element={<UserProfile />} />
  <Route path="/settings" element={<Settings />} />
</Routes>

<ParallelSidebar
  routes={[
    { path: '/user/:id', element: <UserProfile /> },  // Duplicate!
    { path: '/settings', element: <Settings /> },      // Duplicate!
  ]}
/>
```

This leads to:
- Code duplication
- Maintenance issues
- Potential inconsistencies

## The Solution

Parallel Router supports **passing Routes as children**, allowing you to define routes once:

```tsx
// ✅ Define routes once, use everywhere!
const appRoutes = (
  <Routes>
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

<main>{appRoutes}</main>
<ParallelSidebar>{appRoutes}</ParallelSidebar>
```

## Usage Patterns

### Pattern 1: All Routes Available in Sidebar

Use this when you want **every route** to be accessible in the sidebar:

```tsx
function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Navigation />
        <main>{routes}</main>
        <ParallelSidebar>{routes}</ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Result:** Any route can be opened in the sidebar OR navigated to normally!

### Pattern 2: Subset of Routes in Sidebar

Use this when only **certain routes** should be accessible in the sidebar:

```tsx
function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        {/* All routes available normally */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        {/* Only user and settings in sidebar */}
        <ParallelSidebar>
          <Routes>
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Result:** Home and About can only be accessed normally, while User and Settings can be opened in sidebar too!

### Pattern 3: Route Configuration Array

Use this when you manage routes in a configuration:

```tsx
const routeConfig = [
  { path: '/', element: <Home />, sidebar: false },
  { path: '/about', element: <About />, sidebar: false },
  { path: '/user/:id', element: <UserProfile />, sidebar: true },
  { path: '/settings', element: <Settings />, sidebar: true },
];

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Routes>
          {routeConfig.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>

        <ParallelSidebar>
          <Routes>
            {routeConfig
              .filter(route => route.sidebar)
              .map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
          </Routes>
        </ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Result:** Clean, configuration-driven routing with explicit sidebar access control!

### Pattern 4: Lazy Loading Routes

Works perfectly with React.lazy():

```tsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Settings = lazy(() => import('./pages/Settings'));

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Suspense fallback={<Loading />}>
          <main>{routes}</main>
          <ParallelSidebar>{routes}</ParallelSidebar>
        </Suspense>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Result:** Code-splitting works for both normal and parallel navigation!

## Backwards Compatibility

The original `routes` prop still works for backwards compatibility:

```tsx
// ✅ Still supported
<ParallelSidebar
  routes={[
    { path: '/user/:id', element: <UserProfile /> },
    { path: '/settings', element: <Settings /> },
  ]}
/>
```

However, we recommend using the `children` approach for:
- Less code duplication
- Easier maintenance
- Better TypeScript inference
- Cleaner component composition

## Real-World Examples

### E-commerce Application

```tsx
function EcommerceApp() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        {/* Product details can be viewed in sidebar while browsing */}
        <ParallelSidebar>
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Use case:** Browse products, open details in sidebar, compare multiple products!

### Dashboard Application

```tsx
function DashboardApp() {
  const routes = (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports/:id" element={<ReportDetail />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Sidebar />
        <main>{routes}</main>
        
        {/* All routes accessible in parallel */}
        <ParallelSidebar width={600} position="right">
          {routes}
        </ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Use case:** View reports while staying on dashboard, compare analytics side-by-side!

### Documentation Site

```tsx
function DocsApp() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/:section" element={<DocSection />} />
          <Route path="/api/:endpoint" element={<APIReference />} />
          <Route path="/examples/:id" element={<Example />} />
        </Routes>

        {/* Show docs/examples in sidebar without losing main context */}
        <ParallelSidebar position="right" width={700}>
          <Routes>
            <Route path="/docs/:section" element={<DocSection />} />
            <Route path="/api/:endpoint" element={<APIReference />} />
            <Route path="/examples/:id" element={<Example />} />
          </Routes>
        </ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

**Use case:** Read docs while keeping your work context visible!

## Benefits of Route Reusability

1. **DRY Principle** - Don't Repeat Yourself
2. **Single Source of Truth** - One route definition
3. **Easier Refactoring** - Change once, applies everywhere
4. **Type Safety** - Better TypeScript inference
5. **Consistent Behavior** - Same component, same behavior
6. **Flexible Access** - Routes work both ways automatically

## Migration Guide

If you're using the old approach:

### Before (v1.0.0)
```tsx
<Routes>
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>

<ParallelSidebar
  routes={[
    { path: '/user/:id', element: <UserProfile /> },
  ]}
/>
```

### After (v1.1.0+)
```tsx
const routes = (
  <Routes>
    <Route path="/user/:id" element={<UserProfile />} />
  </Routes>
);

<main>{routes}</main>
<ParallelSidebar>{routes}</ParallelSidebar>
```

**No breaking changes!** Both syntaxes work, but the new approach is recommended.

## Summary

Route reusability in Parallel Router gives you:
- ✅ Less code duplication
- ✅ Easier maintenance
- ✅ More flexibility
- ✅ Better developer experience
- ✅ Backwards compatible

Use `children` prop with `<Routes>` for the best experience!
