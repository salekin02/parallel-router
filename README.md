# Parallel Router

A React Router v6 extension that enables parallel routing with sidebar navigation. Display multiple routes simultaneously - one in the main view and another in a sidebar.

## Features

- 🚀 Built on top of React Router v6
- 📱 Sidebar appears when clicking parallel links
- 🔗 Routes synced via URL search parameters
- ⌨️ Keyboard support (ESC to close)
- 🎨 Fully customizable styling
- 📦 TypeScript support
- 🪶 Lightweight with zero additional dependencies

## Installation

```bash
npm install @parallel-router/core
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
import { ParallelRouterProvider } from '@parallel-router/core';

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

#### Option 3: Route Reusability (⭐ Recommended)
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

**See [ROUTES_API.md](./ROUTES_API.md) for detailed examples of all patterns.**

### 3. Use ParallelLink to open routes in the sidebar

```tsx
import { ParallelLink } from '@parallel-router/core';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ParallelLink to="/user/123">View User Profile</ParallelLink>
      <ParallelLink to="/settings">Open Settings</ParallelLink>
    </div>
  );
}
```

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

### `<ParallelLink>`

Link component that opens routes in the sidebar.

**Props:**
- `to`: string - Target route path
- `paramName?`: string - URL search parameter name (default: `'parallel'`)
- `children`: ReactNode - Link content
- All standard anchor tag props (`className`, `style`, etc.)

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
import { useParallelNavigation } from '@parallel-router/core';

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

If you want to use a different URL parameter (e.g., `?modal=...` instead of `?parallel=...`):

```tsx
<ParallelRouterProvider paramName="modal">
  <ParallelSidebar
    paramName="modal"
    routes={routes}
  />
  <ParallelLink paramName="modal" to="/profile">
    Open Profile
  </ParallelLink>
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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Created with ❤️ for better routing experiences
