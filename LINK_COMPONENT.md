# Enhanced Link Component

The `Link` component extends React Router's `Link` with support for parallel navigation through a simple `target` prop.

## Why Use This?

Instead of importing two different components (`Link` from React Router and `ParallelLink` from this package), you can use a single `Link` component for both regular and parallel navigation.

## Installation

Already included in `parallel-router`.

## Usage

### Regular Navigation (Default)

Works exactly like React Router's `Link`:

```tsx
import { Link } from 'parallel-router';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}
```

### Parallel Navigation

Add `target="parallel"` to open routes in the sidebar:

```tsx
import { Link } from 'parallel-router';

function UserCard({ userId }) {
  return (
    <div className="user-card">
      <h3>User {userId}</h3>
      {/* Opens in parallel sidebar */}
      <Link to={`/user/${userId}`} target="parallel">
        View Profile
      </Link>
    </div>
  );
}
```

### Mixed Navigation

Use both in the same component:

```tsx
import { Link } from 'parallel-router';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      
      {/* Regular navigation - goes to product page */}
      <Link to={`/products/${product.id}`}>
        View Details
      </Link>
      
      {/* Parallel navigation - opens in sidebar */}
      <Link to={`/products/${product.id}/quick-view`} target="parallel">
        Quick View
      </Link>
    </div>
  );
}
```

## API Reference

### Props

Extends all React Router `LinkProps` with the following additions:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string \| LocationDescriptor` | Required | Destination path |
| `target` | `'parallel' \| '_self' \| '_blank' \| '_parent' \| '_top'` | `undefined` | Navigation target. Use `"parallel"` for sidebar navigation |
| `paramName` | `string` | `'parallel'` | URL parameter name (only used when `target="parallel"`) |
| `...rest` | `LinkProps` | - | All standard React Router Link props (className, style, onClick, etc.) |

### TypeScript

Full TypeScript support with IntelliSense:

```tsx
import { Link, type LinkProps } from 'parallel-router';

const MyLink: React.FC<LinkProps> = (props) => {
  return <Link {...props} />;
};
```

## Examples

### Dynamic Routes

```tsx
<Link to={`/user/${userId}`} target="parallel">
  View Profile
</Link>
```

### With Styling

```tsx
<Link 
  to="/settings" 
  target="parallel"
  className="btn btn-primary"
  style={{ color: 'blue' }}
>
  Open Settings
</Link>
```

### With Custom Parameter Name

```tsx
<Link 
  to="/notifications" 
  target="parallel"
  paramName="sidebar"
>
  View Notifications
</Link>
```

### With onClick Handler

```tsx
<Link 
  to="/help" 
  target="parallel"
  onClick={() => console.log('Opening help...')}
>
  Help
</Link>
```

### External Links (Regular Target)

```tsx
{/* Opens in new tab */}
<Link to="https://example.com" target="_blank">
  External Link
</Link>
```

### Conditional Target

```tsx
function SmartLink({ to, openInSidebar, children }) {
  return (
    <Link 
      to={to} 
      target={openInSidebar ? 'parallel' : undefined}
    >
      {children}
    </Link>
  );
}
```

## Comparison with ParallelLink

| Feature | `Link` (Recommended) | `ParallelLink` (Legacy) |
|---------|---------------------|------------------------|
| Regular navigation | ✅ Yes (default) | ❌ No |
| Parallel navigation | ✅ Yes (`target="parallel"`) | ✅ Yes (always) |
| React Router Link features | ✅ Full support | ❌ Limited |
| Active link styling | ✅ Supported | ❌ Not supported |
| Programmatic navigation | ✅ Yes | ✅ Yes |
| TypeScript support | ✅ Full | ✅ Full |
| **Recommended** | ✅ **Yes** | ⚠️ Backward compatibility only |

## Migration from ParallelLink

### Before

```tsx
import { Link } from 'react-router-dom';
import { ParallelLink } from 'parallel-router';

function MyComponent() {
  return (
    <>
      {/* Regular link */}
      <Link to="/about">About</Link>
      
      {/* Parallel link */}
      <ParallelLink to="/user/123">View Profile</ParallelLink>
    </>
  );
}
```

### After

```tsx
import { Link } from 'parallel-router';

function MyComponent() {
  return (
    <>
      {/* Regular link */}
      <Link to="/about">About</Link>
      
      {/* Parallel link */}
      <Link to="/user/123" target="parallel">View Profile</Link>
    </>
  );
}
```

## Benefits

✅ **Single component** - No need to remember two different imports  
✅ **Intuitive API** - Simple `target` prop to control behavior  
✅ **Full React Router support** - All Link features work  
✅ **Type-safe** - Full TypeScript support with IntelliSense  
✅ **Backward compatible** - `ParallelLink` still works  
✅ **Flexible** - Easy to switch between regular and parallel navigation  

## Notes

- The `Link` component is a drop-in replacement for React Router's `Link`
- Without `target="parallel"`, it behaves exactly like React Router's `Link`
- `ParallelLink` is still available for backward compatibility
- All React Router Link props are supported (replace, state, preventScrollReset, etc.)

## Advanced Usage

### With React Router's NavLink Features

If you need active link styling, you can combine this pattern with React Router's `NavLink`:

```tsx
import { NavLink } from 'react-router-dom';
import { useParallelNavigation } from 'parallel-router';

function ParallelNavLink({ to, target, children, ...props }) {
  const { openParallel } = useParallelNavigation();
  
  if (target === 'parallel') {
    return (
      <NavLink 
        to={to} 
        onClick={(e) => {
          e.preventDefault();
          openParallel(to);
        }}
        {...props}
      >
        {children}
      </NavLink>
    );
  }
  
  return <NavLink to={to} {...props}>{children}</NavLink>;
}
```

## See Also

- [Quick Start Guide](./QUICKSTART.md)
- [Routes API](./ROUTES_API.md)
- [useParallelNavigation Hook](./README.md#useparallelnavigation)

