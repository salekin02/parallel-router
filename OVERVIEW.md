# Parallel Router Package

## 📦 Package Contents

```
parallel-router/
├── src/                          # Source code
│   ├── components/
│   │   ├── ParallelRouterProvider.tsx
│   │   ├── ParallelLink.tsx
│   │   └── ParallelSidebar.tsx
│   ├── hooks/
│   │   └── useParallelNavigation.ts
│   ├── context.tsx
│   └── index.ts
├── dist/                         # Built files (generated)
│   ├── index.js                  # CommonJS
│   ├── index.mjs                 # ES Module
│   ├── index.d.ts                # TypeScript definitions
│   └── source maps
├── example/                      # Example application
│   ├── App.tsx
│   └── README.md
└── documentation files
```

## 🎯 Core Concepts

### 1. URL-Based State
The parallel router uses URL search parameters to maintain state:
- Main route: `/products`
- Parallel route open: `/products?parallel=/user/123`
- Browser back/forward works naturally

### 2. Component Architecture

```
App
├── ParallelRouterProvider (Context)
│   ├── Main Routes (Regular React Router)
│   │   └── Your pages
│   └── ParallelSidebar
│       └── Parallel Routes
│           └── Sidebar pages
```

### 3. Navigation Flow

```
User clicks ParallelLink
    ↓
URL updated with search param
    ↓
ParallelSidebar detects change
    ↓
Sidebar opens with route content
    ↓
Both routes visible simultaneously
```

## 🔧 Technical Details

### Dependencies
- **Peer Dependencies**: React 18+, React Router DOM v6+
- **Dev Dependencies**: TypeScript, tsup
- **Bundle Size**: ~5KB (minified)

### Build Output
- **ESM**: Modern JavaScript modules
- **CJS**: CommonJS for compatibility
- **Types**: Full TypeScript definitions
- **Source Maps**: For debugging

### Browser Support
Supports all modern browsers that React 18 and React Router v6 support.

## 🎨 Customization

### Sidebar Styling
```tsx
<ParallelSidebar
  routes={routes}
  width={450}                    // Custom width
  position="left"                // Left or right
  className="my-sidebar"         // Custom CSS class
  style={{ backgroundColor: '#fff' }}  // Inline styles
  overlayClassName="my-overlay"  // Overlay custom class
/>
```

### Custom Parameter Name
Use a different URL parameter:
```tsx
<ParallelRouterProvider paramName="modal">
  <ParallelSidebar paramName="modal" routes={routes} />
  <ParallelLink paramName="modal" to="/profile">Profile</ParallelLink>
</ParallelRouterProvider>
```

URL becomes: `?modal=/profile` instead of `?parallel=/profile`

## 🚀 Performance

- **Lazy Loading**: Compatible with React.lazy()
- **Code Splitting**: Works with dynamic imports
- **Re-renders**: Optimized with useMemo and useCallback
- **Bundle Size**: Minimal overhead (~5KB)

## 🔒 Type Safety

Full TypeScript support with exported types:
```tsx
import type {
  ParallelRouteConfig,
  ParallelLinkProps,
  ParallelSidebarProps,
  UseParallelNavigationOptions,
  ParallelRouterContextValue,
} from '@parallel-router/core';
```

## 📱 Use Cases

1. **User Profiles**: Quick view without navigation
2. **Settings Panels**: Side-by-side configuration
3. **Product Details**: Compare while browsing
4. **Notifications**: Non-blocking alerts
5. **Help Documentation**: Context-aware help
6. **Form Workflows**: Multi-step processes
7. **Media Viewers**: Image/video galleries
8. **Chat/Comments**: Parallel conversations

## 🤝 Integration

Works seamlessly with:
- ✅ React Router v6 features (loaders, actions, etc.)
- ✅ State management (Redux, Zustand, etc.)
- ✅ UI libraries (MUI, Chakra, Tailwind, etc.)
- ✅ Form libraries (React Hook Form, Formik, etc.)
- ✅ Data fetching (React Query, SWR, etc.)

## 📊 Comparison

### vs Modal Libraries
- **Parallel Router**: URL-based, browser-native navigation
- **Modal Libraries**: JavaScript state, no URL sync

### vs Drawer Components
- **Parallel Router**: Full routing capability, shareable URLs
- **Drawer Components**: Simple content display

### vs Next.js Parallel Routes
- **Parallel Router**: Works with any React Router v6 app
- **Next.js**: Framework-specific feature

## 🐛 Troubleshooting

### Sidebar not appearing?
- Ensure `ParallelRouterProvider` wraps your app
- Check that route paths match between link and sidebar config

### Types not working?
- Ensure `@types/react` and `@types/react-dom` are installed
- Check TypeScript version (5.0+ recommended)

### Build errors?
- Verify peer dependencies are installed
- Check React and React Router versions

## 📚 Resources

- [Quick Start Guide](./QUICKSTART.md)
- [Full Documentation](./README.md)
- [Example App](./example/README.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Publishing Guide](./PUBLISHING.md)

## 🎯 Roadmap

Future features being considered:
- Animation options
- Multiple sidebars
- Modal mode (centered overlay)
- Nested parallel routes
- History management options
- Accessibility enhancements

## 💡 Tips

1. **Keyboard Support**: ESC closes the sidebar
2. **Overlay Click**: Click outside to close
3. **URL Sharing**: Parallel routes are in the URL!
4. **Nested Routes**: Use standard React Router nesting
5. **Custom Close**: Use `useParallelNavigation()` hook

---

Made with ❤️ for better routing experiences
