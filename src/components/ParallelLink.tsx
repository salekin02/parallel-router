import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

/**
 * @deprecated Use the enhanced `Link` component with `target="parallel"` instead.
 * This component is kept for backward compatibility.
 * 
 * @example
 * // Old way (still works)
 * <ParallelLink to="/profile">Profile</ParallelLink>
 * 
 * // New way (recommended)
 * <Link to="/profile" target="parallel">Profile</Link>
 */
export interface ParallelLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  paramName?: string;
  children: React.ReactNode;
}

/**
 * @deprecated Use the enhanced `Link` component with `target="parallel"` instead.
 */
export function ParallelLink({ 
  to, 
  paramName = 'parallel',
  children, 
  onClick,
  ...rest 
}: ParallelLinkProps) {
  const { openParallel } = useParallelNavigation({ paramName });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openParallel(to);
    onClick?.(e);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
