# Kaizen Health brand & design system

This self-contained microsite turns the Kaizen Health product theme into a
shareable brand and UI reference. It lives in the web repository so Netlify can
host it without coupling it to the marketing site's application shell.

## Open the kit

From the `kaizen-web` repository:

```sh
yarn dev
```

Then open `http://localhost:3000/brand-kit`. The route redirects to the static
microsite at `/brand-kit/index.html`.

## Source of truth

- Product colors and light/dark semantics:
  `../kaizenhealth/src/core/colors.js` and
  `../kaizenhealth/src/core/theme.js`
- Product typography: `../kaizenhealth/src/core/typography.js`
- Primary web logo: `public/images/logo/kaizen-logo-light.svg`
- Portable token export: `public/brand-kit/tokens.json`

The page is marked `noindex, nofollow`. Remove that directive only if the brand
kit should become a public search result.

## Core principles

1. Reassuring, not dismissive.
2. Clear, not reductive.
3. Capable, not clinical.
4. Human, not cute.

Use violet for primary action and identity, aquamarine as a care/progress
accent, and the plum/neutral scales for information hierarchy. Semantic colors
should communicate state, never decoration alone.
