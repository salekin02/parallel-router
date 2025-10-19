/**
 * Copyright (c) 2025 Serajus Salekin
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
