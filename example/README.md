# Example App

This is a demo application showing how to use `@parallel-router/core`.

## Running the Example

1. Install dependencies:
```bash
npm install
```

2. Install the parallel-router package (from the root):
```bash
npm install
npm run build
```

3. Link the package locally or install it from npm

4. Start your React app and import the example:
```tsx
import App from './example/App';
```

## Features Demonstrated

- **ParallelLink**: Click links to open routes in sidebar
- **ParallelSidebar**: Displays parallel routes with custom styling
- **useParallelNavigation**: Programmatic control (see Navigation component)
- **URL Sync**: Browser back/forward buttons work correctly
- **Keyboard Support**: Press ESC to close sidebar
- **Overlay**: Click outside sidebar to close

## Usage Patterns

### Basic Link
```tsx
<ParallelLink to="/user/123">View Profile</ParallelLink>
```

### Programmatic Control
```tsx
const { openParallel, closeParallel } = useParallelNavigation();
<button onClick={() => openParallel('/settings')}>Settings</button>
```

### Custom Styling
```tsx
<ParallelSidebar
  routes={routes}
  width={450}
  position="right"
  style={{ backgroundColor: '#fff' }}
/>
```
