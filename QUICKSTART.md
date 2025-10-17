# Quick Start Guide

Get up and running with Parallel Router in under 5 minutes!

## Installation

```bash
npm install @parallel-router/core
```

## Basic Setup (3 Steps)

### Step 1: Wrap Your App

```tsx
import { BrowserRouter } from 'react-router-dom';
import { ParallelRouterProvider } from '@parallel-router/core';

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        {/* Your app here */}
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

### Step 2: Add the Sidebar

```tsx
import { Routes, Route } from 'react-router-dom';
import { ParallelSidebar } from '@parallel-router/core';

function App() {
  return (
    <>
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Parallel routes sidebar - pass Routes as children */}
      <ParallelSidebar>
        <Routes>
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ParallelSidebar>
    </>
  );
}
```

### Step 3: Add Links

```tsx
import { ParallelLink } from '@parallel-router/core';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* Click to open in sidebar */}
      <ParallelLink to="/user/123">View User</ParallelLink>
      <ParallelLink to="/settings">Settings</ParallelLink>
    </div>
  );
}
```

## That's It! 🎉

Now when you click a `ParallelLink`, it will:
1. Add the route to the URL as `?parallel=/user/123`
2. Open the sidebar with the parallel route
3. Keep your main page visible
4. Allow you to close with ESC or clicking outside

## Next Steps

- [Read the full documentation](./README.md)
- [View the example app](./example/README.md)
- Customize the sidebar appearance
- Use programmatic navigation with `useParallelNavigation()`

## Common Patterns

### Reuse Routes (Recommended!)
```tsx
const allRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

// Use the same routes for both!
<main>{allRoutes}</main>
<ParallelSidebar>{allRoutes}</ParallelSidebar>
```

Now `/user/:id` works both as a regular page AND in the sidebar!

### Programmatic Control
```tsx
const { openParallel, closeParallel } = useParallelNavigation();

<button onClick={() => openParallel('/settings')}>
  Open Settings
</button>
```

### Custom Styling
```tsx
<ParallelSidebar
  width={500}
  position="left"
  style={{ backgroundColor: '#f5f5f5' }}
>
  <Routes>
    <Route path="/profile" element={<Profile />} />
  </Routes>
</ParallelSidebar>
```

### Routes Array (Alternative)
```tsx
<ParallelSidebar
  routes={[
    { path: '/profile', element: <Profile /> },
    { path: '/settings', element: <Settings /> },
  ]}
/>
```

### Multiple Parallel Routes
Yes! You can have different parallel routes on different pages:
```tsx
<ParallelSidebar>
  <Routes>
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/notifications" element={<Notifications />} />
  </Routes>
</ParallelSidebar>
```

Need help? Check the [README](./README.md) or open an issue on GitHub!
