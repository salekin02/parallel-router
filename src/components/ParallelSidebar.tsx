import { CSSProperties, ReactNode, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

export interface ParallelRouteConfig {
  path: string;
  element: ReactNode;
}

export interface ParallelSidebarProps {
  routes: ParallelRouteConfig[];
  paramName?: string;
  width?: string | number;
  position?: 'left' | 'right';
  overlay?: boolean;
  onClose?: () => void;
  className?: string;
  overlayClassName?: string;
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
          <Routes location={parallelLocation}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </>
  );
}
