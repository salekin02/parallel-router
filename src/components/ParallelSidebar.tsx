import { CSSProperties, ReactNode, useEffect, isValidElement, ReactElement, useRef, useState } from 'react';
import { Routes, Route, useLocation, matchRoutes, type RouteObject } from 'react-router-dom';
import { useParallelNavigation } from '../hooks/useParallelNavigation';
import styles from './ParallelSidebar.module.css';

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


  // Animation state for smooth close
  const [visible, setVisible] = useState(isParallelOpen);
  const [shouldShowOpen, setShouldShowOpen] = useState(isParallelOpen);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When isParallelOpen becomes true, show sidebar and trigger open class after a tick
  useEffect(() => {
    if (isParallelOpen) {
      setVisible(true);
      // Wait for next tick to allow transition
      setTimeout(() => setShouldShowOpen(true), 10);
    } else {
      setShouldShowOpen(false);
      // Wait for transition to finish before hiding
      closeTimeout.current = setTimeout(() => {
        setVisible(false);
      }, 300); // match CSS transition duration
    }
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, [isParallelOpen]);

  if (!visible && !isParallelOpen) {
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
          className={[
            styles.overlay,
            !isParallelOpen ? styles.overlayClosed : '',
            overlayClassName
          ].filter(Boolean).join(' ')}
          onClick={handleClose}
        />
      )}
      <div
        className={[
          styles.sidebar,
          position === 'left' ? styles.sidebarLeft : styles.sidebarRight,
          shouldShowOpen ? styles.sidebarOpen : styles.sidebarClosed,
          className
        ].filter(Boolean).join(' ')}
        style={{ width, ...style }}
        data-parallel-sidebar-position={position}
        data-parallel-sidebar-open={isParallelOpen}
      >
        <button
          className={[styles.closeButton, 'parallel-sidebar-close', position === 'left' ? 'parallel-sidebar-close-left' : 'parallel-sidebar-close-right'].join(' ')}
          onClick={handleClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        <div className={[styles.content, 'parallel-sidebar-content'].join(' ')}>
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
