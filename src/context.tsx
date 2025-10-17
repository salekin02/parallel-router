import { createContext, useContext } from 'react';

export interface ParallelRouterContextValue {
  parallelParam: string;
  isParallelRoute: boolean;
  closeParallel: () => void;
}

export const ParallelRouterContext = createContext<ParallelRouterContextValue | null>(null);

export function useParallelRouter() {
  const context = useContext(ParallelRouterContext);
  if (!context) {
    throw new Error('useParallelRouter must be used within ParallelRouterProvider');
  }
  return context;
}
