# Repository Guidelines

## Git Commits

- Never commit changes. Committing is always a manual user action until this instruction is explicitly revoked.
- Leave completed changes uncommitted, even when resolving or completing a merge.

## Project Structure

- This is a Next.js 16 App Router application using React 19 and TypeScript.
- Routes, layouts, metadata, and API handlers live in `app/`; the primary site routes are grouped under `app/(site)`.
- Reusable UI belongs in `components/`, shared application code in `lib/`, shared types in `types/`, content in `data/` and `markdown/`, and static assets in `public/`.
- Use the `@/*` path alias for project-root imports where it improves clarity.

## Tooling and Commands

- Use Yarn 4 and Node.js 22 or newer.
- `yarn install` installs dependencies.
- `yarn dev` starts the Turbopack development server, `yarn build` creates the production build, and `yarn start` serves it.
- `yarn lint` is the declared lint command. Run the relevant validation command after edits, and use `yarn build` for changes that affect routing, rendering, configuration, or server code.
- No automated test script is currently declared; document focused manual verification for behavior changes.

## Next.js and React Conventions

- Preserve the server-component default. Add `"use client"` only when a component needs browser APIs, state, effects, event handlers, or a client-only library.
- Keep secrets and privileged integrations in server-only modules or route handlers. Never expose `OPENAI_API_KEY`, SendGrid credentials, or other secrets through client bundles or `NEXT_PUBLIC_*` variables.
- Keep API endpoints in `app/api` and validate untrusted request data before using it.
- Follow existing component and route organization instead of creating parallel patterns for a single feature.
- Maintain strict null handling even though the broader TypeScript configuration is not fully strict.

## Styling, Assets, and Performance

- Use Tailwind CSS 4 and the existing global/design patterns before adding bespoke styling systems.
- Keep responsive behavior and light/dark theme behavior intact.
- Use `next/image` where appropriate and follow the remote image allowlist in `next.config.js`.
- Place public static files under `public/`; avoid importing generated `.next/` output or treating it as source.
- Preserve accessibility semantics, keyboard behavior, meaningful alt text, and visible focus states when changing UI.

## Environment and Deployment

- Local secrets belong in `.env.local` and must never be committed.
- The site is deployed through Netlify; treat build configuration, headers, caching, and route behavior as production-sensitive.
- Do not edit generated `.next/` or `.firebase/` contents as source changes.

