// Auto-import CSS
import './components/ParallelSidebar.module.css';

// Context
export { ParallelRouterContext, useParallelRouter } from './context';
export type { ParallelRouterContextValue } from './context';

// Components
export { ParallelRouterProvider } from './components/ParallelRouterProvider';
export type { ParallelRouterProviderProps } from './components/ParallelRouterProvider';

export { Link } from './components/Link';
export type { LinkProps } from './components/Link';

export { ParallelLink } from './components/ParallelLink';
export type { ParallelLinkProps } from './components/ParallelLink';

export { ParallelSidebar } from './components/ParallelSidebar';
export type { ParallelSidebarProps, ParallelRouteConfig } from './components/ParallelSidebar';

// Hooks
export { useParallelNavigation } from './hooks/useParallelNavigation';
export type { UseParallelNavigationOptions } from './hooks/useParallelNavigation';
