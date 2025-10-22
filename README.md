# Parallel Router

[![npm version](https://img.shields.io/npm/v/parallel-router.svg?style=flat-square)](https://www.npmjs.com/package/parallel-router)
[![npm downloads](https://img.shields.io/npm/dm/parallel-router.svg?style=flat-square)](https://www.npmjs.com/package/parallel-router)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-yellow?style=flat-square)](https://buymeacoffee.com/salekin02)

A React Router v6 extension that enables parallel routing with sidebar navigation. Display multiple routes simultaneously — one in the main view and another in a sidebar.

## 🚀 [Live Demo](https://salekin02.github.io/parallel-router/)

**👉 [Try it now!](https://salekin02.github.io/parallel-router/)** - See parallel routing in action before installing.

## Features

- Built on top of React Router v6
- Single Link component for both regular and parallel navigation
- Sidebar appears when clicking parallel links
- Routes synced via URL search parameters
- Keyboard support (ESC to close)
- Fully customizable styling
- TypeScript support
- Lightweight with zero additional dependencies

## Installation

[![npm](https://img.shields.io/npm/v/parallel-router?color=blue&logo=npm&style=flat-square)](https://www.npmjs.com/package/parallel-router)

Install via npm:

```bash
npm install parallel-router
```

## Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom react-router-dom
```

## Quick Start

### 1. Wrap your app with ParallelRouterProvider

```tsx
import { BrowserRouter } from 'react-router-dom';
import { ParallelRouterProvider } from 'parallel-router';

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        {/* Your app content */}
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

### 2. Add ParallelSidebar with your routes

You have **4 flexible options** for defining routes:

#### Option 1: Inline JSX (Simple)
```tsx
<ParallelSidebar width={500} position="right">
  <Routes>
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</ParallelSidebar>
```

#### Option 2: Array of Objects (Programmatic)
```tsx
const routes = [
  { path: '/user/:id', element: <UserProfile /> },
  { path: '/settings', element: <Settings /> },
];

<ParallelSidebar routes={routes} width={500} />
```

#### Option 3: Route Reusability (Recommended)
```tsx
// Define routes once
const appRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

// Use in main content
<main>{appRoutes}</main>

// Reuse in sidebar (no duplication!)
<ParallelSidebar>{appRoutes}</ParallelSidebar>
```

#### Option 4: Variable via Prop (Alternative)
```tsx
const routes = <Routes>...</Routes>;
<ParallelSidebar routes={routes} />
```

### 3. Use Link component to navigate

```tsx
import { Link } from 'parallel-router';
import 'parallel-router/styles.css'; // Don't forget the CSS!

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Regular navigation */}
      <Link to="/about">About Page</Link>
      
      {/* Parallel navigation (opens in sidebar) */}
      <Link to="/user/123" target="parallel">View User Profile</Link>
      <Link to="/settings" target="parallel">Open Settings</Link>
    </div>
  );
}
```

> **Note:** The `Link` component works for both regular and parallel navigation. Use `target="parallel"` to open routes in the sidebar.

## API Reference

### `<ParallelRouterProvider>`

Provides context for parallel routing.

**Props:**
- `children`: ReactNode - Your app content
- `paramName?`: string - URL search parameter name (default: `'parallel'`)

### `<ParallelSidebar>`

Displays parallel routes in a sidebar.

**Props:**
- `routes?`: ParallelRouteConfig[] | ReactElement | RouteObject[] - Routes configuration
  - Can be an array: `[{ path: '/user/:id', element: <User /> }]`
  - Can be JSX: `<Routes><Route path="..." element={...} /></Routes>`
  - Can be React Router's RouteObject[]
- `children?`: ReactNode - Routes component with Route definitions (alternative to routes prop)
- `paramName?`: string - URL search parameter name (default: `'parallel'`)
- `width?`: string | number - Sidebar width (default: `400`)
- `position?`: 'left' | 'right' - Sidebar position (default: `'right'`)
- `overlay?`: boolean - Show backdrop overlay (default: `true`)
- `onClose?`: () => void - Callback when sidebar closes
- `className?`: string - Custom CSS class for sidebar
- `overlayClassName?`: string - Custom CSS class for overlay
- `style?`: CSSProperties - Custom inline styles

### `<Link>`

Enhanced Link component that supports both regular and parallel navigation.

**Props:**
- `to`: string - Target route path
- `target?`: 'parallel' - Set to `'parallel'` to open in sidebar
- `paramName?`: string - URL search parameter name (default: `'parallel'`)
- `children`: ReactNode - Link content
- All React Router Link props (`replace`, `state`, etc.)

**Example:**
```tsx
// Regular navigation
<Link to="/about">About</Link>

// Parallel navigation (opens in sidebar)
<Link to="/profile" target="parallel">View Profile</Link>
```

### `useParallelNavigation()`

Hook for programmatic parallel navigation.

**Parameters:**
- `options?`: UseParallelNavigationOptions
  - `paramName?`: string - URL search parameter name

**Returns:**
- `parallelPath`: string | null - Current parallel route path
- `isParallelOpen`: boolean - Whether sidebar is open
- `openParallel`: (path: string) => void - Open a parallel route
- `closeParallel`: () => void - Close the parallel route

### `useParallelRouter()`

Hook to access parallel router context.

**Returns:**
- `parallelParam`: string - The parameter name being used
- `isParallelRoute`: boolean - Whether a parallel route is active
- `closeParallel`: () => void - Function to close parallel route

## Advanced Examples

### Reusing Routes for Both Main and Parallel Navigation

The **recommended approach** is to define routes once and reuse them:

```tsx
function App() {
  // Define your routes once
  const appRoutes = (
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
        {/* Main navigation */}
        <main>{appRoutes}</main>
        
        {/* Sidebar can open ANY of the routes! */}
        <ParallelSidebar>{appRoutes}</ParallelSidebar>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

Now you can navigate to `/settings` normally OR open it in a parallel sidebar!

### Subset of Routes in Sidebar

If you want only certain routes available in the sidebar:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>

{/* Only user profiles can be opened in sidebar */}
<ParallelSidebar>
  <Routes>
    <Route path="/user/:id" element={<UserProfile />} />
  </Routes>
</ParallelSidebar>
```

### Custom Styled Sidebar

```tsx
<ParallelSidebar
  routes={routes}
  width={500}
  position="left"
  className="custom-sidebar"
  overlayClassName="custom-overlay"
  style={{
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  }}
  onClose={() => console.log('Sidebar closed')}
/>
```

### Programmatic Navigation

```tsx
import { useParallelNavigation } from 'parallel-router';

function MyComponent() {
  const { openParallel, closeParallel, isParallelOpen } = useParallelNavigation();

  const handleButtonClick = () => {
    if (isParallelOpen) {
      closeParallel();
    } else {
      openParallel('/profile');
    }
  };

  return <button onClick={handleButtonClick}>Toggle Profile</button>;
}
```

### Custom Parameter Name

If you want to use a different URL parameter (e.g., `?xyz=...` instead of `?parallel=...`):

```tsx
<ParallelRouterProvider paramName="xyz">
  <ParallelSidebar
    paramName="xyz"
    routes={routes}
  />
  <Link paramName="xyz" to="/profile">
    Open Profile
  </Link>
</ParallelRouterProvider>
```

## How It Works

The parallel router works by:

1. **URL Management**: When a `ParallelLink` is clicked, it adds the route path to the URL as a search parameter (e.g., `?parallel=/profile`)
2. **Sidebar Rendering**: The `ParallelSidebar` component watches for this parameter and renders when it's present
3. **Independent Routing**: The sidebar uses React Router's `Routes` component with a custom location, allowing it to display a different route than the main view
4. **State Sync**: All navigation is synced through the URL, so browser back/forward buttons work correctly

## Real-World Use Cases

- **User Profiles**: View user profiles without leaving the current page
- **Product Details**: Show product details in a sidebar while browsing a catalog
- **Quick Actions**: Display forms or settings in a sidebar
- **Multi-tasking**: Work on multiple related items simultaneously
- **Documentation**: Show help or docs alongside your main content

## TypeScript

The package includes full TypeScript definitions. All components and hooks are fully typed.


## License

MIT Licensed. Copyright (c) Serajus Salekin 2025.


## Support

If this project helped you, please support it by:

- ☕ Buy me a coffee: [https://buymeacoffee.com/salekin02](https://buymeacoffee.com/salekin02)
- ⭐ Starring the repository on GitHub — it helps others discover the project.
- 🔁 Sharing the demo (https://salekin02.github.io/parallel-router/) on Twitter, LinkedIn, or in developer communities.

Thank you for your support!

