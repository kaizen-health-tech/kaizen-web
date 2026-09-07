import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      ".firebase/**",
      ".yarn/**",
      "next-env.d.ts",
      // Static assets, served verbatim and never compiled by Next. The brand
      // kit ships standalone demo JSX/JS with its own conventions; `next lint`
      // never covered `public/` either, so this keeps the previous scope.
      "public/**",
    ],
  },

  ...nextCoreWebVitals,
  ...nextTypescript,

  {
    rules: {
      // Cosmetic only — React escapes JSX text at render time, so an
      // apostrophe in prose is not a bug. This fired 250+ times across the
      // marketing copy, every one a false alarm.
      "react/no-unescaped-entities": "off",

      // New in eslint-plugin-react-hooks 7 (shipped with Next 16). The five
      // pre-existing hits are client-only `navigator` sniffing and a
      // route-change menu reset — genuine refactors, not lint fixes. Left as
      // warnings so they stay visible without blocking CI.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
