import { ReactNode, useMemo } from 'react';
import { ParallelRouterContext } from '../context';
import { useParallelNavigation } from '../hooks/useParallelNavigation';

export interface ParallelRouterProviderProps {
  children: ReactNode;
  paramName?: string;
}

export function ParallelRouterProvider({ 
  children, 
  paramName = 'parallel' 
}: ParallelRouterProviderProps) {
  const { parallelPath, closeParallel } = useParallelNavigation({ paramName });

  const value = useMemo(() => ({
    parallelParam: paramName,
    isParallelRoute: !!parallelPath,
    closeParallel,
  }), [paramName, parallelPath, closeParallel]);

  return (
    <ParallelRouterContext.Provider value={value}>
      {children}
    </ParallelRouterContext.Provider>
  );
}
