# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm start` - Start development server (localhost:3000)
- `npm run build` - Production build with service worker generation
- `npm test` - Run tests in watch mode
- `npm test -- --watchAll=false` - Run tests once (CI mode)
- `npm test -- --testPathPattern="App.test"` - Run a single test file

## Architecture

This is a React PWA template using Create React App with TypeScript.

### Key Patterns

**Theme Management**: `src/context/ThemeContext.tsx` provides a React context for light/dark mode toggling. Theme preference persists to localStorage. Access via `useThemeContext()` hook.

**Routing**: Uses React Router DOM with BrowserRouter. Routes defined in `src/App.tsx`. Pages live in `src/pages/`.

**PWA/Service Worker**: Two-part system:
1. `src/serviceWorkerRegistration.ts` - Registers the service worker in production only
2. `workbox-config.js` - Workbox configuration for generating the production service worker

The service worker is generated during build via `npm run generate-sw` (runs automatically after build).

### Component Library

Uses Material-UI (MUI) v7. Grid uses the legacy API (`@mui/material/GridLegacy`).
