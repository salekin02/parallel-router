import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

export interface UseParallelNavigationOptions {
  paramName?: string;
}

export function useParallelNavigation(options: UseParallelNavigationOptions = {}) {
  const { paramName = 'parallel' } = options;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const parallelPath = searchParams.get(paramName);

  const openParallel = useCallback((path: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(paramName, path);
    navigate(`?${newSearchParams.toString()}`, { replace: false });
  }, [searchParams, navigate, paramName]);

  const closeParallel = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(paramName);
    navigate(`?${newSearchParams.toString()}`, { replace: false });
  }, [searchParams, navigate, paramName]);

  const isParallelOpen = useMemo(() => !!parallelPath, [parallelPath]);

  return {
    parallelPath,
    isParallelOpen,
    openParallel,
    closeParallel,
  };
}
