---
name: kaizen-health-design
description: Use this skill to generate well-branded interfaces and assets for Kaizen Health (a family-health AI app centered on "Kai", an AI health assistant), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, the full icon set, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Global CSS:** link `styles.css` (imports fonts + tokens + base type classes).
- **Colors:** violet `#6E40F3` (primary/identity), aquamarine `#66E6B5` (care accent, the label color on violet buttons), plum/midnight depths, lavender/ink canvases. Semantic: success `#2FBF8F`, notice `#E3772A`, error `#E53950`, info `#3390B7`.
- **Type:** Source Sans 3 only. Sentence case. Use the `.kz-*` classes (`.kz-headline-md`, `.kz-body-lg`, …).
- **Icons:** load `assets/kaizen-icons.js`, then use the `Icon` component (`window.KaizenIcons` has 122 glyphs). Never hand-draw SVG icons or use emoji.
- **Components:** load `_ds_bundle.js`, then `const { Button, Card, ... } = window.KaizenHealthDesignSystem_869e5e`. See `components/*/*.prompt.md` for usage.
- **Voice:** reassuring, clear, capable, human. Speak as "you"; the assistant is "Kai".
- **UI reference:** `ui_kits/mobile-app/` shows the real app composed from these components.
