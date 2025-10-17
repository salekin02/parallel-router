# Changelog

All notable changes to this project will be documented in this file.

## [0.0.5] - 2025-10-17

### Changed
- **CSS now auto-imports!** Users no longer need to manually import `'parallel-router/styles.css'`
- Simplified Quick Start guide - removed manual CSS import step
- Improved developer experience - completely hassle-free setup

### Fixed
- CSS automatically bundled with package - no additional import needed

## [0.0.4] - 2025-10-17

### Fixed
- Added CSS import instructions to README
- Users must now import `'parallel-router/styles.css'` for styling to work

### Documentation
- Clarified CSS import requirement in Quick Start guide
- Added CSS import examples in all code snippets

## [0.0.3] - 2025-10-17

### Changed
- Repository cleanup and improvements

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

