import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

export interface ParallelLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  paramName?: string;
  children: React.ReactNode;
}

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
