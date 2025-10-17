import { CSSProperties, ReactNode, useEffect, isValidElement, ReactElement } from 'react';
import { Routes, Route, useLocation, matchRoutes, type RouteObject } from 'react-router-dom';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

/**
 * Simple route configuration object
 * @example
 * const routes = [
 *   { path: '/user/:id', element: <UserProfile /> },
 *   { path: '/settings', element: <Settings /> }
 * ];
 */
export interface ParallelRouteConfig {
  path: string;
  element: ReactNode;
}

/**
 * Props for ParallelSidebar component
 * 
 * Routes can be provided in multiple ways:
 * 
 * 1. As an array of route objects:
 *    <ParallelSidebar routes={[{ path: '/user/:id', element: <User /> }]} />
 * 
 * 2. As JSX children with <Routes>:
 *    <ParallelSidebar>
 *      <Routes>
 *        <Route path="/user/:id" element={<User />} />
 *      </Routes>
 *    </ParallelSidebar>
 * 
 * 3. As a variable containing <Routes>:
 *    const myRoutes = <Routes><Route path="/user/:id" element={<User />} /></Routes>;
 *    <ParallelSidebar>{myRoutes}</ParallelSidebar>
 *    // OR
 *    <ParallelSidebar routes={myRoutes} />
 */
export interface ParallelSidebarProps {
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

const defaultStyles = {
  sidebar: (position: 'left' | 'right', width: string | number): CSSProperties => ({
    position: 'fixed',
    top: 0,
    [position]: 0,
    bottom: 0,
    width: typeof width === 'number' ? `${width}px` : width,
    backgroundColor: '#fff',
    boxShadow: position === 'left' 
      ? '2px 0 8px rgba(0,0,0,0.15)' 
      : '-2px 0 8px rgba(0,0,0,0.15)',
    zIndex: 1000,
    overflowY: 'auto',
    transition: 'transform 0.3s ease-in-out',
  }),
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },
  closeButton: (position: 'left' | 'right'): CSSProperties => ({
    position: 'absolute',
    top: '1rem',
    [position === 'left' ? 'right' : 'left']: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    lineHeight: 1,
  }),
};

export function ParallelSidebar({
  routes,
  children,
  paramName = 'parallel',
  width = 400,
  position = 'right',
  overlay = true,
  onClose,
  className = '',
  overlayClassName = '',
  style = {},
}: ParallelSidebarProps) {
  const { parallelPath, isParallelOpen, closeParallel } = useParallelNavigation({ paramName });
  const location = useLocation();

  const handleClose = () => {
    closeParallel();
    onClose?.();
  };

  // Close sidebar on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isParallelOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isParallelOpen]);

  if (!isParallelOpen) {
    return null;
  }

  // Create a pseudo-location object for the parallel route
  const parallelLocation = {
    ...location,
    pathname: parallelPath || '',
  };

  // Extract routes from children using React Router's approach
  const extractRoutesFromChildren = (children: ReactNode): RouteObject[] => {
    const extractedRoutes: RouteObject[] = [];
    
    const processChild = (child: any) => {
      if (!isValidElement(child)) return;
      
      // Check if it's a Routes component
      if (child.type === Routes) {
        // Process Routes children
        const routesChildren = (child as ReactElement<any>).props.children;
        if (Array.isArray(routesChildren)) {
          routesChildren.forEach(processChild);
        } else if (routesChildren) {
          processChild(routesChildren);
        }
      }
      // Check if it's a Route component
      else if (child.type === Route || (child.type as any)?.name === 'Route') {
        const props = (child as ReactElement<any>).props;
        const { path, element, index, children: routeChildren } = props;
        
        const routeObject: RouteObject = {
          path,
          element,
          index,
        };
        
        // Handle nested routes
        if (routeChildren) {
          const childRoutes = extractRoutesFromChildren(routeChildren);
          if (childRoutes.length > 0) {
            routeObject.children = childRoutes;
          }
        }
        
        extractedRoutes.push(routeObject);
      }
    };

    if (Array.isArray(children)) {
      children.forEach(processChild);
    } else if (children) {
      processChild(children);
    }

    return extractedRoutes;
  };

  /**
   * Process routes prop to handle all possible input types:
   * 1. Array of ParallelRouteConfig objects: [{ path: '/', element: <Home /> }]
   * 2. Array of RouteObject (React Router type)
   * 3. JSX element containing <Routes>: <Routes><Route ... /></Routes>
   */
  const processRoutesProp = (routes: ParallelRouteConfig[] | ReactElement | RouteObject[]): RouteObject[] => {
    // Case 1 & 2: Array of route configs or RouteObject[]
    if (Array.isArray(routes)) {
      // Check if it's already RouteObject[] by checking first element
      const firstRoute = routes[0];
      if (firstRoute && 'path' in firstRoute && 'element' in firstRoute) {
        // Could be either ParallelRouteConfig[] or RouteObject[]
        // Both have compatible structure, so we can safely convert
        return routes.map(route => ({
          path: (route as any).path,
          element: (route as any).element,
          index: (route as any).index,
          children: (route as any).children,
        }));
      }
      return [];
    }
    
    // Case 3: JSX element (like <Routes>...</Routes>)
    if (isValidElement(routes)) {
      return extractRoutesFromChildren(routes);
    }
    
    return [];
  };

  // Use provided routes or extract from children
  const routeObjects = routes 
    ? processRoutesProp(routes)
    : (children ? extractRoutesFromChildren(children) : []);

  // Use matchRoutes to find the matching route for the parallel path
  const matches = parallelPath ? matchRoutes(routeObjects, parallelPath) : null;

  // Check if route exists when parallel path is set
  const hasValidRoute = !parallelPath || (matches && matches.length > 0);

  return (
    <>
      {overlay && (
        <div
          style={defaultStyles.overlay}
          className={overlayClassName}
          onClick={handleClose}
        />
      )}
      <div
        style={{ ...defaultStyles.sidebar(position, width), ...style }}
        className={className}
      >
        <button
          style={defaultStyles.closeButton(position)}
          onClick={handleClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        <div style={{ padding: '3rem 1.5rem 1.5rem' }}>
          {!hasValidRoute ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
              <p>Route not found: {parallelPath}</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                The requested route does not exist in the parallel sidebar configuration.
              </p>
            </div>
          ) : (
            <Routes location={parallelLocation}>
              {routeObjects.map((route, index) => (
                <Route
                  key={route.path || index}
                  path={route.path}
                  element={route.element}
                  index={route.index}
                />
              ))}
            </Routes>
          )}
        </div>
      </div>
    </>
  );
}
