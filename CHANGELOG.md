# Changelog

All notable changes to this project will be documented in this file.

## [0.0.2] - 2025-10-17

### Added
- Enhanced `Link` component that supports both regular and parallel navigation
- Use `target="parallel"` to open routes in sidebar

### Changed
- `ParallelLink` is now deprecated in favor of the unified `Link` component
- Cleaned up documentation (removed internal guides)
- Fixed emoji rendering issues in README

### Deprecated
- `ParallelLink` - Use `Link` with `target="parallel"` instead

## [0.0.1] - 2025-10-17

### Added
- Initial release
- `ParallelRouterProvider` component for context management
- `ParallelSidebar` component for displaying parallel routes
- `ParallelLink` component for navigation
- `useParallelNavigation` hook for programmatic control
- `useParallelRouter` hook for context access
- TypeScript support
- Keyboard support (ESC to close)
- Customizable styling options
- Position control (left/right)
- Overlay backdrop option

