import { MouseEvent, forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

/**
 * Enhanced Link component that supports both regular and parallel navigation.
 * 
 * @example
 * // Regular navigation (default behavior)
 * <Link to="/about">About</Link>
 * 
 * @example
 * // Parallel navigation (opens in sidebar)
 * <Link to="/user/123" target="parallel">View Profile</Link>
 * 
 * @example
 * // With custom parallel parameter name
 * <Link to="/settings" target="parallel" paramName="sidebar">Settings</Link>
 */
export interface LinkProps extends Omit<RouterLinkProps, 'target'> {
  /**
   * Navigation target:
   * - undefined (default): Regular navigation using React Router
   * - "parallel": Opens route in parallel sidebar
   */
  target?: 'parallel' | '_self' | '_blank' | '_parent' | '_top';
  
  /**
   * URL parameter name for parallel routing (default: 'parallel')
   * Only used when target="parallel"
   */
  paramName?: string;
}

/**
 * Enhanced Link component that extends React Router's Link with parallel routing support.
 * 
 * - By default, behaves exactly like React Router's Link
 * - When target="parallel", opens the route in a parallel sidebar
 * - Supports all standard React Router Link props
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, target, paramName = 'parallel', onClick, ...rest }, ref) => {
    const { openParallel } = useParallelNavigation({ paramName });

    // Handle parallel navigation
    if (target === 'parallel') {
      const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const path = typeof to === 'string' ? to : to.pathname || '';
        openParallel(path);
        onClick?.(e as any);
      };

      return (
        <RouterLink
          ref={ref}
          to={to}
          onClick={handleClick}
          {...rest}
        />
      );
    }

    // Regular React Router Link behavior
    return (
      <RouterLink
        ref={ref}
        to={to}
        target={target}
        onClick={onClick}
        {...rest}
      />
    );
  }
);

Link.displayName = 'Link';
