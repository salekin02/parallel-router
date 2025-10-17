# Example App - Parallel Router Demo

This is a **live demo application** showing how to use `parallel-router` in a real React application.

🌐 **Running at:** http://localhost:3000/

## 🚀 Quick Start

The app is already running! Open your browser to:
```
http://localhost:3000/
```

## 🎯 What's Included

### Pages
- **Home** (`/`) - Main page with feature overview
- **About** (`/about`) - Information about parallel routing
- **Products** (`/products`) - Product catalog with parallel details view

### Parallel Routes (Sidebar)
- **User Profile** (`/user/:id`) - View user profiles
- **Settings** (`/settings`) - Interactive settings panel
- **Notifications** (`/notifications`) - Notification center
- **Product Details** (`/product/:id`) - Product information

## 💡 Try These Features

1. **Click Parallel Links**: Click any colored button to open a sidebar
2. **URL Updates**: Notice the URL changes to include `?parallel=/route`
3. **Browser Navigation**: Use back/forward buttons - they work!
4. **Keyboard Shortcut**: Press ESC to close the sidebar
5. **Click Outside**: Click the overlay to close
6. **Multiple Routes**: Navigate between pages while keeping sidebar open

## 🛠️ Development

### Start Development Server
```bash
cd example
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
example/
├── src/
│   ├── components/
│   │   └── Navigation.tsx       # Main navigation with close button
│   ├── pages/
│   │   ├── Home.tsx             # Home page
│   │   ├── About.tsx            # About page
│   │   ├── Products.tsx         # Product catalog
│   │   └── parallel/            # Parallel route pages
│   │       ├── UserProfile.tsx
│   │       ├── Settings.tsx
│   │       ├── Notifications.tsx
│   │       └── ProductDetail.tsx
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # Styles
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration

```

## 🔧 How It Works

### 1. Setup (App.tsx)
```tsx
import { ParallelRouterProvider, ParallelSidebar } from 'parallel-router';

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        {/* Main routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        {/* Parallel routes */}
        <ParallelSidebar routes={[...]} />
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}
```

### 2. Create Links (Any Page)
```tsx
import { ParallelLink } from 'parallel-router';

<ParallelLink to="/user/123">View Profile</ParallelLink>
```

### 3. Programmatic Control (Navigation.tsx)
```tsx
import { useParallelNavigation } from 'parallel-router';

const { isParallelOpen, closeParallel } = useParallelNavigation();
```

## 🎨 Customization Examples

The example app demonstrates:
- ✅ Custom styling with CSS classes
- ✅ Different sidebar widths
- ✅ Multiple parallel routes
- ✅ Dynamic content in parallel pages
- ✅ Interactive components (settings, notifications)
- ✅ URL parameter parsing
- ✅ Responsive design

## 📝 Code Highlights

### Vite Configuration
The `vite.config.ts` uses path aliases to import the parallel-router source directly:
```ts
resolve: {
  alias: {
    'parallel-router': path.resolve(__dirname, '../src/index.ts'),
  },
}
```

This means you can **modify the source code** in `../src/` and see changes **instantly** in the example app!

## 🔥 Hot Module Replacement

Changes to either the example app OR the parallel-router source will trigger hot reload:
- Edit `src/components/ParallelSidebar.tsx` in the root
- Edit `example/src/pages/Home.tsx`
- Changes appear instantly without full page reload

## 🐛 Debugging Tips

1. **Check the URL**: Parallel routes add `?parallel=/route` to the URL
2. **React DevTools**: Inspect the `ParallelRouterContext` values
3. **Network Tab**: No extra network requests (all client-side)
4. **Console**: Check for any errors or warnings

## 📚 Learn More

- Main README: `../README.md`
- Quick Start: `../QUICKSTART.md`
- Package Overview: `../OVERVIEW.md`

## 🎓 Experiment!

Try modifying:
- Sidebar width in `App.tsx`
- Sidebar position (left/right)
- Add new parallel routes
- Customize styling in `App.css`
- Add new pages
- Create nested routes

**Happy coding! 🚀**

