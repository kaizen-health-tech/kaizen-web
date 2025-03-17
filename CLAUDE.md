# CLAUDE.md - Guidelines for Kaizen Web Project

## Commands
- Build: `yarn build` or `npm run build`
- Dev server: `yarn dev` or `npm run dev`
- Start: `yarn start` or `npm run start`
- Lint: `yarn lint` or `npm run lint`

## Code Style
- Use TypeScript with proper type definitions
- React functional components with arrow functions
- Group imports: React/hooks, Next.js, third-party, internal
- Component props defined in `/types` directory
- Use Tailwind CSS for styling
- Follow folder structure: components organized by feature
- Use "use client" directive for client components
- Prefer named exports over default exports
- Use async/await for asynchronous operations
- Error handling with try/catch blocks
- Use path aliases with @/ prefix for imports
- Follow React hooks naming convention (useX)