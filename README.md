# Parallel Router# Parallel Router



> **Enhanced React Router v6** with parallel routing - display multiple routes simultaneously with elegant sidebar navigation.A React Router v6 extension that enables parallel routing with sidebar navigation. Display multiple routes simultaneously - one in the main view and another in a sidebar.



Built as an extension to React Router v6, this package adds the ability to show secondary routes in a sidebar while keeping your main content visible. Perfect for quick views, detail panels, settings overlays, and more.## Features



## ✨ Features- 🚀 Built on top of React Router v6

- 📱 Sidebar appears when clicking parallel links

- 🚀 **Built on React Router v6** - Works seamlessly with your existing React Router setup- 🔗 Routes synced via URL search parameters

- 🔗 **Enhanced Link Component** - Single `Link` component with `target="parallel"` support- ⌨️ Keyboard support (ESC to close)

- 📱 **Smooth Animations** - Beautiful slide-in/out transitions like popular UI libraries- 🎨 Fully customizable styling

- 🎨 **Fully Customizable** - CSS modules with overridable classes- 📦 TypeScript support

- ⌨️ **Keyboard Support** - ESC to close, full accessibility- 🪶 Lightweight with zero additional dependencies

- 🔄 **URL Synced** - Parallel routes reflected in URL search parameters

- 📦 **TypeScript First** - Complete type definitions with IntelliSense## Installation

- 🪶 **Zero Dependencies** - Only peer dependencies on React and React Router

- 🎯 **Flexible Routes** - Multiple ways to define routes (JSX, arrays, or reuse existing)```bash

npm install @parallel-router/core

## 📦 Installation```



```bash## Peer Dependencies

npm install @parallel-router/core react-router-dom

```Make sure you have these installed:



### Peer Dependencies```bash

npm install react react-dom react-router-dom

```json```

{

  "react": ">=18.0.0",## Quick Start

  "react-dom": ">=18.0.0",

  "react-router-dom": ">=6.0.0"### 1. Wrap your app with ParallelRouterProvider

}

``````tsx

import { BrowserRouter } from 'react-router-dom';

## 🚀 Quick Startimport { ParallelRouterProvider } from '@parallel-router/core';



### 1. Setup Providerfunction App() {

  return (

Wrap your app with `ParallelRouterProvider`:    <BrowserRouter>

      <ParallelRouterProvider>

```tsx        {/* Your app content */}

import { BrowserRouter } from 'react-router-dom';      </ParallelRouterProvider>

import { ParallelRouterProvider } from '@parallel-router/core';    </BrowserRouter>

  );

function App() {}

  return (```

    <BrowserRouter>

      <ParallelRouterProvider>### 2. Add ParallelSidebar with your routes

        {/* Your app content */}

      </ParallelRouterProvider>You have **4 flexible options** for defining routes:

    </BrowserRouter>

  );#### Option 1: Inline JSX (Simple)

}```tsx

```<ParallelSidebar width={500} position="right">

  <Routes>

### 2. Add Sidebar    <Route path="/user/:id" element={<UserProfile />} />

    <Route path="/settings" element={<Settings />} />

Add the `ParallelSidebar` component:  </Routes>

</ParallelSidebar>

```tsx```

import { Routes, Route } from 'react-router-dom';

import { ParallelSidebar } from '@parallel-router/core';#### Option 2: Array of Objects (Programmatic)

```tsx

function App() {const routes = [

  return (  { path: '/user/:id', element: <UserProfile /> },

    <div className="app">  { path: '/settings', element: <Settings /> },

      {/* Main content */}];

      <Routes>

        <Route path="/" element={<Home />} /><ParallelSidebar routes={routes} width={500} />

        <Route path="/about" element={<About />} />```

      </Routes>

#### Option 3: Route Reusability (⭐ Recommended)

      {/* Parallel sidebar */}```tsx

      <ParallelSidebar width={500} position="right">// Define routes once

        <Routes>const appRoutes = (

          <Route path="/user/:id" element={<UserProfile />} />  <Routes>

          <Route path="/settings" element={<Settings />} />    <Route path="/" element={<Home />} />

        </Routes>    <Route path="/user/:id" element={<UserProfile />} />

      </ParallelSidebar>    <Route path="/settings" element={<Settings />} />

    </div>  </Routes>

  ););

}

```// Use in main content

<main>{appRoutes}</main>

### 3. Use Enhanced Link

// Reuse in sidebar (no duplication!)

Use the `Link` component for navigation:<ParallelSidebar>{appRoutes}</ParallelSidebar>

```

```tsx

import { Link } from '@parallel-router/core';#### Option 4: Variable via Prop (Alternative)

```tsx

function HomePage() {const routes = <Routes>...</Routes>;

  return (<ParallelSidebar routes={routes} />

    <div>```

      {/* Regular navigation */}

      <Link to="/about">About Page</Link>**See [ROUTES_API.md](./ROUTES_API.md) for detailed examples of all patterns.**



      {/* Parallel navigation (opens in sidebar) */}### 3. Use Link component for navigation

      <Link to="/user/123" target="parallel">

        View User ProfileUse the enhanced `Link` component for both regular and parallel navigation:

      </Link>

      ```tsx

      <Link to="/settings" target="parallel">import { Link } from '@parallel-router/core';

        Settings

      </Link>function Home() {

    </div>  return (

  );    <div>

}      <h1>Home Page</h1>

```      

      {/* Regular navigation */}

That's it! 🎉      <Link to="/about">About</Link>

      

## 📖 Core Concepts      {/* Parallel navigation (opens in sidebar) */}

      <Link to="/user/123" target="parallel">View User Profile</Link>

### Enhanced Link Component      <Link to="/settings" target="parallel">Open Settings</Link>

    </div>

The `Link` component extends React Router's `Link` with parallel routing support:  );

}

```tsx```

import { Link } from '@parallel-router/core';

**See [LINK_COMPONENT.md](./LINK_COMPONENT.md) for detailed Link documentation.**

// Regular navigation (works exactly like React Router's Link)

<Link to="/products">Products</Link>## API Reference



// Parallel navigation (opens in sidebar)### `<ParallelRouterProvider>`

<Link to="/quick-view" target="parallel">Quick View</Link>

```Provides context for parallel routing.



**Props:****Props:**

- All React Router `Link` props (to, replace, state, etc.)- `children`: ReactNode - Your app content

- `target?: 'parallel' | '_blank' | '_self' | ...` - Set to `"parallel"` for sidebar- `paramName?`: string - URL search parameter name (default: `'parallel'`)

- `paramName?: string` - Custom URL parameter name (default: `"parallel"`)

### `<ParallelSidebar>`

### ParallelSidebar Component

Displays parallel routes in a sidebar.

Display routes in a sidebar overlay:

**Props:**

```tsx- `routes?`: ParallelRouteConfig[] | ReactElement | RouteObject[] - Routes configuration

<ParallelSidebar   - Can be an array: `[{ path: '/user/:id', element: <User /> }]`

  width={500}              // Sidebar width  - Can be JSX: `<Routes><Route path="..." element={...} /></Routes>`

  position="right"         // "left" or "right"  - Can be React Router's RouteObject[]

  overlay={true}           // Show backdrop- `children?`: ReactNode - Routes component with Route definitions (alternative to routes prop)

  className="my-sidebar"   // Custom class- `paramName?`: string - URL search parameter name (default: `'parallel'`)

>- `width?`: string | number - Sidebar width (default: `400`)

  <Routes>- `position?`: 'left' | 'right' - Sidebar position (default: `'right'`)

    <Route path="/user/:id" element={<User />} />- `overlay?`: boolean - Show backdrop overlay (default: `true`)

  </Routes>- `onClose?`: () => void - Callback when sidebar closes

</ParallelSidebar>- `className?`: string - Custom CSS class for sidebar

```- `overlayClassName?`: string - Custom CSS class for overlay

- `style?`: CSSProperties - Custom inline styles

**Props:**

- `routes?` - Route config (array or JSX)### `<ParallelLink>`

- `children?` - Routes as JSX children

- `width?` - Sidebar width (default: `400`)Link component that opens routes in the sidebar.

- `position?` - `"left"` or `"right"` (default: `"right"`)

- `overlay?` - Show backdrop (default: `true`)**Props:**

- `paramName?` - URL param name (default: `"parallel"`)- `to`: string - Target route path

- `onClose?` - Close callback- `paramName?`: string - URL search parameter name (default: `'parallel'`)

- `className?` - Custom CSS class- `children`: ReactNode - Link content

- `overlayClassName?` - Overlay CSS class- All standard anchor tag props (`className`, `style`, etc.)

- `style?` - Inline styles

### `useParallelNavigation()`

### Programmatic Navigation

Hook for programmatic parallel navigation.

Use the `useParallelNavigation` hook:

**Parameters:**

```tsx- `options?`: UseParallelNavigationOptions

import { useParallelNavigation } from '@parallel-router/core';  - `paramName?`: string - URL search parameter name



function MyComponent() {**Returns:**

  const { openParallel, closeParallel, isParallelOpen } = useParallelNavigation();- `parallelPath`: string | null - Current parallel route path

- `isParallelOpen`: boolean - Whether sidebar is open

  return (- `openParallel`: (path: string) => void - Open a parallel route

    <button onClick={() => openParallel('/settings')}>- `closeParallel`: () => void - Close the parallel route

      Open Settings

    </button>### `useParallelRouter()`

  );

}Hook to access parallel router context.

```

**Returns:**

## 🎨 Styling- `parallelParam`: string - The parameter name being used

- `isParallelRoute`: boolean - Whether a parallel route is active

The sidebar uses CSS modules with customizable classes:- `closeParallel`: () => void - Function to close parallel route



```tsx## Advanced Examples

<ParallelSidebar 

  className="my-custom-sidebar"### Reusing Routes for Both Main and Parallel Navigation

  overlayClassName="my-overlay"

>The **recommended approach** is to define routes once and reuse them:

  {/* ... */}

</ParallelSidebar>```tsx

```function App() {

  // Define your routes once

**CSS Class Hooks:**  const appRoutes = (

- `.my-custom-sidebar` - Sidebar container    <Routes>

- `[data-parallel-sidebar-open]` - Open/closed state      <Route path="/" element={<Home />} />

- `.parallel-sidebar-content` - Content wrapper      <Route path="/about" element={<About />} />

- `.parallel-sidebar-close` - Close button      <Route path="/user/:id" element={<UserProfile />} />

      <Route path="/settings" element={<Settings />} />

Import the default styles:    </Routes>

```tsx  );

import '@parallel-router/core/styles.css';

```  return (

    <BrowserRouter>

Or override with your own CSS modules.      <ParallelRouterProvider>

        {/* Main navigation */}

## 📚 Advanced Usage        <main>{appRoutes}</main>

        

### Route Reusability        {/* Sidebar can open ANY of the routes! */}

        <ParallelSidebar>{appRoutes}</ParallelSidebar>

Define routes once, use everywhere:      </ParallelRouterProvider>

    </BrowserRouter>

```tsx  );

const appRoutes = (}

  <Routes>```

    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />Now you can navigate to `/settings` normally OR open it in a parallel sidebar!

    <Route path="/user/:id" element={<User />} />

  </Routes>### Subset of Routes in Sidebar

);

If you want only certain routes available in the sidebar:

function App() {

  return (```tsx

    <><Routes>

      {/* Main content */}  <Route path="/" element={<Home />} />

      <main>{appRoutes}</main>  <Route path="/about" element={<About />} />

  <Route path="/user/:id" element={<UserProfile />} />

      {/* Reuse in sidebar */}</Routes>

      <ParallelSidebar>{appRoutes}</ParallelSidebar>

    </>{/* Only user profiles can be opened in sidebar */}

  );<ParallelSidebar>

}  <Routes>

```    <Route path="/user/:id" element={<UserProfile />} />

  </Routes>

### Dynamic Routes</ParallelSidebar>

```

Full support for React Router features:

### Custom Styled Sidebar

```tsx

<Routes>```tsx

  {/* Dynamic segments */}<ParallelSidebar

  <Route path="/user/:userId" element={<User />} />  routes={routes}

    width={500}

  {/* Nested routes */}  position="left"

  <Route path="/dashboard" element={<Dashboard />}>  className="custom-sidebar"

    <Route path="stats" element={<Stats />} />  overlayClassName="custom-overlay"

    <Route index element={<DashboardHome />} />  style={{

  </Route>    backgroundColor: '#f5f5f5',

      boxShadow: '0 0 20px rgba(0,0,0,0.3)',

  {/* Wildcards */}  }}

  <Route path="/docs/*" element={<Docs />} />  onClose={() => console.log('Sidebar closed')}

</Routes>/>

``````



### Multiple Sidebars### Programmatic Navigation



Use different parameter names:```tsx

import { useParallelNavigation } from '@parallel-router/core';

```tsx

<ParallelSidebar paramName="left-panel" position="left">function MyComponent() {

  {/* Left sidebar routes */}  const { openParallel, closeParallel, isParallelOpen } = useParallelNavigation();

</ParallelSidebar>

  const handleButtonClick = () => {

<ParallelSidebar paramName="right-panel" position="right">    if (isParallelOpen) {

  {/* Right sidebar routes */}      closeParallel();

</ParallelSidebar>    } else {

      openParallel('/profile');

{/* Links */}    }

<Link to="/settings" target="parallel" paramName="left-panel">  };

  Left Settings

</Link>  return <button onClick={handleButtonClick}>Toggle Profile</button>;

}

<Link to="/help" target="parallel" paramName="right-panel">```

  Right Help

</Link>### Custom Parameter Name

```

If you want to use a different URL parameter (e.g., `?modal=...` instead of `?parallel=...`):

### Custom Animations

```tsx

Override CSS transitions:<ParallelRouterProvider paramName="modal">

  <ParallelSidebar

```css    paramName="modal"

.my-sidebar {    routes={routes}

  transition: transform 0.5s ease-in-out !important;  />

}  <ParallelLink paramName="modal" to="/profile">

```    Open Profile

  </ParallelLink>

## 🔧 API Reference</ParallelRouterProvider>

```

### Components

## How It Works

- **`<ParallelRouterProvider>`** - Context provider (required)

- **`<ParallelSidebar>`** - Sidebar componentThe parallel router works by:

- **`<Link>`** - Enhanced Link with parallel support (recommended)

- **`<ParallelLink>`** - Legacy link component (backward compatibility)1. **URL Management**: When a `ParallelLink` is clicked, it adds the route path to the URL as a search parameter (e.g., `?parallel=/profile`)

2. **Sidebar Rendering**: The `ParallelSidebar` component watches for this parameter and renders when it's present

### Hooks3. **Independent Routing**: The sidebar uses React Router's `Routes` component with a custom location, allowing it to display a different route than the main view

4. **State Sync**: All navigation is synced through the URL, so browser back/forward buttons work correctly

- **`useParallelNavigation()`** - Navigate programmatically

- **`useParallelRouter()`** - Access router context## Real-World Use Cases



### Types- **User Profiles**: View user profiles without leaving the current page

- **Product Details**: Show product details in a sidebar while browsing a catalog

All components and hooks have full TypeScript definitions. Import types:- **Quick Actions**: Display forms or settings in a sidebar

- **Multi-tasking**: Work on multiple related items simultaneously

```tsx- **Documentation**: Show help or docs alongside your main content

import type { 

  LinkProps,## TypeScript

  ParallelSidebarProps,

  ParallelRouteConfig The package includes full TypeScript definitions. All components and hooks are fully typed.

} from '@parallel-router/core';

```## Contributing



## 📄 DocumentationContributions are welcome! Please feel free to submit a Pull Request.



- **[ROUTES_API.md](./ROUTES_API.md)** - Detailed routes configuration guide## License

- **[LINK_COMPONENT.md](./LINK_COMPONENT.md)** - Complete Link component documentation

- **[CHANGELOG.md](./CHANGELOG.md)** - Version historyMIT

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines

## Author

## 🤝 Contributing

Created with ❤️ for better routing experiences

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📝 License

MIT © [Your Name]

## 🙏 Credits

Built on top of [React Router v6](https://reactrouter.com/) - the amazing routing library for React.

---

**Made with ❤️ for the React community**
