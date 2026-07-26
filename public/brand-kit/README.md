# Kaizen Health — Design System

**Kaizen Health** is a family-health AI app. The core product is **Kai**, an AI health assistant (backed by Claude/GPT-4/Gemini/DeepSeek) that reads your uploaded records, tracks health scores from Apple HealthKit / Android Health Connect, and helps families coordinate care. Native iOS + Android (React Native, non-Expo), UI built on react-native-paper (Material Design 3). Website: kaizenhealth.io.

This project is the reusable design system extracted from that product: tokens, typography, the full icon set, reusable components, and an interactive mobile UI kit.

## Hosted portal

The complete system is hosted by `kaizen-web` at `/brand-kit`. The route opens
the browsable portal in `public/brand-kit/index.html`, while this directory
retains the source assets, specimens, component guidance, and interactive UI
kit.

Run the site locally from `kaizen-web`:

```sh
yarn dev
```

Then open `http://localhost:3000/brand-kit`.

## Sources this was built from

- **Figma:** "Kaizen Health.fig" (mounted, read-only) — 39 pages, 202 component sets + 91 standalone, 631 Figma variables. Confirms the app + marketing-site surfaces and the component vocabulary.
- **Codebase:** `kaizenhealth/` (mounted, read-only) — the React Native app. **Authoritative source of truth** for tokens and components:
  - `src/core/colors.js`, `src/core/theme.js` — palette + light/dark semantic aliases (copied verbatim into `tokens/colors.css`).
  - `src/core/typography.js` — the type scale (copied into `tokens/typography.css`).
  - `src/assets/icons/svgs.js` — the 122-glyph icon registry (extracted into `assets/kaizen-icons.js`).
  - `src/assets/fonts/SourceSans3-*.ttf` — the webfonts (copied into `assets/fonts/`).
  - `src/components/Base*.jsx` — the component library the web components recreate.
  - `docs/brand-kit/` — an existing brand kit + `tokens.json` (principles + portable tokens).
- **Logo:** `src/assets/images/kaizen_logo.svg` (horizontal wordmark) and `uploads/kaizen_logo.png` (app icon) — both real brand assets, copied into `assets/`.

---

## Content fundamentals

Kaizen's voice is a calm, competent care partner — think a good nurse, not a chatbot or a hospital form.

- **Four principles (from the brand kit):** Reassuring, not dismissive · Clear, not reductive · Capable, not clinical · Human, not cute.
- **Person & address:** Speak to the user as **"you"**; the assistant refers to itself as **"Kai"** in the first person ("I pulled your March labs"). Family framing throughout ("your family's health").
- **Casing:** Sentence case everywhere — headings, buttons, list titles. Reserve UPPERCASE only for tiny overline labels and badges (letter-spaced). Never Title Case UI.
- **Tone examples:** "Your health looks steady." · "2 documents ready to review." · "Up 3 points this week — sleep is your biggest gain." · "This can't be undone." Short, concrete, positive-but-honest. State the fact, then the next step.
- **Clinical care:** Plain-language over jargon; when a number matters, give the number and what it means ("LDL dropped 14 points — back in the healthy range"). Never alarmist, never dismissive.
- **Emoji:** none. Meaning is carried by the icon set and color, not emoji.

## Visual foundations

- **Color:** Violet `#6E40F3` is identity and primary action; **aquamarine `#66E6B5`** is the signature care/progress accent (it's the label color _on_ violet buttons, the score-ring fill, the checkbox tick). Plum/midnight depths (`#281B55 → #201839`) anchor dark surfaces and gradients. A cloud→ink neutral ramp carries hierarchy. Category families (cyan, candy-pink, yellow, heather) tag record types and data-viz. Semantic: success `#2FBF8F`, notice `#E3772A`, error `#E53950`, info `#3390B7`. Max 1–2 background colors per surface; semantic color communicates state, never decoration.
- **Type:** **Source Sans 3** only, across the whole product (weights 300–900). Regular for display, Bold for headings/titles, Medium/SemiBold for labels. Scale is 57/45/36 display · 32/24 headline · 20/18/16 title · 16/14/12 body · label ramp down to 11. Tight line-height (1.05) on display, 1.5 on body.
- **Backgrounds:** App canvas is **lavender `#F5F7FC`** (light) / **ink `#17161D`** (dark) — never pure white/black. Hero and score surfaces use a violet→plum diagonal gradient (`145deg, #6E40F3 → #5338A0 → #201839`), sometimes with a faint dot grid and soft glow orbs. No photographic hero backgrounds in-app; imagery appears inside cards.
- **Cards:** White (light) / phantom (dark) surface, **1px cloud hairline**, soft plum-tinted shadow (`0 10px 28px rgba(40,27,85,.07)`), **16–20px radius**. Flat variant drops the shadow. No colored-left-border cards.
- **Radii:** 8 (tags/checkbox) · 12 · 16 (buttons, inputs, cards, toasts) · 24 (dialogs) · 32 · 25 (round chips & segmented control) · pill (avatars, switches). Corners are generous and consistent; the app icon uses a squircle.
- **Shadows:** Two-tier, always plum-tinted and soft — never hard black. `--shadow-soft` for resting cards, `--shadow` for raised, `--shadow-lg` for modals/floating.
- **Motion:** Understated. Standard ease `cubic-bezier(.4,0,.2,1)`; 160ms for hovers/press, 300ms for the segmented-control slider and progress fills. Fades + gentle slides (react-native-reanimated FadeIn/FadeInDown in-app). No bounces or springy overshoot in chrome.
- **Hover / press:** Contained buttons darken violet→`#5F32E5` on hover and scale to .97 on press. Plain icon buttons reveal a cloud surface on hover. Chips/rows dim slightly when pressed. Focus rings use aquamarine.
- **Transparency & blur:** Used sparingly for overlays — modal backdrop is `rgba(14,12,21,.5/.8)`; glass panels on brand gradients use `backdrop-filter: blur`. Body UI is opaque.
- **Imagery vibe:** Cool, calm, health-forward. Avatars are photographic or initials-on-lilac. Category color tints, not saturated photography, do the visual sorting.

## Iconography

- **One system:** the product's own **122-glyph line set**, extracted verbatim from `src/assets/icons/svgs.js` into `assets/kaizen-icons.js` (`window.KaizenIcons`). 24px grid, ~1.5px stroke, round caps/joins. A handful are solid (the Kai face, the Kaizen mark, NavPlus).
- **Usage:** render through the `Icon` component (`<Icon name="Kai" />`). Outline glyphs inherit `color` as stroke; solid glyphs as fill. Distinct **AI variants** (AiSparkleRounded, AiAttachment, AiCamera, AiScan) mark Kai-powered actions. **Never** hand-draw an SVG or use emoji — always pick a registry glyph.
- Load `assets/kaizen-icons.js` before the bundle in any page that uses `Icon`.

---

## Components

Grouped React primitives (recreations of the app's `Base*` library). Namespace `window.KaizenHealthDesignSystem_869e5e`.

- **core/** — `Icon`
- **actions/** — `Button`, `IconButton`, `LabelButton`, `FavoriteButton`, `FileActionButton`
- **forms/** — `Input`, `Textarea`, `SearchBar`, `Checkbox`, `Radio`, `Switch`, `SegmentedControl`, `Chip`, `DatePicker`, `InputDropdown`, `DaySelector`, `Picker`
- **data/** — `Card`, `ListItem`, `Avatar`, `Tag`, `Badge`, `ProgressBar`, `Accordion`, `NewsCard`, `LineChart`, `DocumentCard`, `GroupCard`
- **feedback/** — `Toast`, `Banner`, `Dialog`, `Alert`, `Spinner`, `Skeleton`, `BottomSheet`
- **navigation/** — `TopBar`, `TabBar`, `Tabs`, `Pagination`, `GoBackButton`
- **ai/** — `ChatBubble`, `ChatInput`, `MemoryChip`

### Component naming — all names are intentional

Every component here is named for its **role in the product**, matching the app's `Base*` library rather than a Figma layer name (Figma layer names are inconsistent — `Buttons`, `chips`, `Component 3`, `Icon 24`, etc.). The names below are deliberate and confirmed, not accidental:

- `Icon` — wraps the product icon registry (`BaseIcon` in-app; the web system needs an equivalent). **Added.**
- `Button` ← `BaseButton` · `IconButton` ← `baseIconButton`
- `Input` ← `BaseInput` · `Textarea` ← `baseTextArea` · `SearchBar` ← `BaseSearchBar` · `Checkbox` ← `Basecheckbox` · `Radio` ← `BaseRadio` · `Switch` ← `BaseSwitch` · `SegmentedControl` ← `BaseSegmentedButtons` · `Chip` ← `chip`/`chips`
- `Card` ← `BaseBox`/`BaseSection` · `ListItem` ← `list/HealthRecord`/`listItem/Small` · `Avatar` ← `Avatar` · `Tag` ← `BaseTag` · `Badge` (status/count pill — expressed in-app via the `label` family + inline styles; **added** for reuse) · `ProgressBar` ← `BaseProgressBar`
- `Toast` ← `BaseToast` (DES-100 Toast Notification) · `Banner` ← `Banner` · `Dialog` ← `BaseDialog` · `Alert` ← `Alert` · `Spinner` ← `BaseSpinner` · `Skeleton` ← `BaseSkeleton`
- `TopBar` ← `Navbar`/`Header` · `TabBar` ← `Bottom menu icons` · `Tabs` ← `BaseTabs`/`contentsTab` · `Pagination` ← `BasePagination`/`IG slider` · `GoBackButton` ← `goBackButton`
- `LabelButton` ← `LabelButton` · `InputDropdown` ← `InputDropdown` · `FavoriteButton` ← `favoriteButton` · `FileActionButton` ← `fileActionButton` · `DaySelector` ← `Day`/`Day Selector` · `Picker` ← `basePicker`
- `DocumentCard` ← `Document card` · `GroupCard` ← `Group card`
- `Accordion` ← `BaseAccordion` · `NewsCard` ← `NewsArticleCard` (DES-99 NewsCard) · `LineChart` ← `BaseLineChart`/`bubbleChart` · `DatePicker` ← `baseDatePicker`/`baseDateCalendar`/`Calendar` · `BottomSheet` ← `BaseBottomSheet`
- `ChatBubble` ← `bubble` family · `ChatInput` ← `ChatInput` · `MemoryChip` ← `MemoryChip`

`Icon` and `Badge` are the only **net-new additions**; everything else is a renamed 1:1 recreation of a product component. `Spinner`, `Skeleton`, `ProgressBar`, `Accordion`, `Tabs`, `Pagination`, `LineChart`, `DatePicker`, `BottomSheet` all correspond to real `Base*` components that exist in code even where the Figma set name differs.

### Scope notes — the other Figma families are intentionally NOT built

The Figma file reports ~274 component families; **only ~26 are Kaizen product components** (the ones above). The remaining ~248 are intentionally skipped because they are not part of this brand's system:

- **Apple's stock iOS UI kit**, imported wholesale — every `_Accessory Bar …`, `_Keys - iPhone …`, `_Keyboard …`, `_Materials`, `_Background`, `_Gradient`, `_Time`, `Home Indicator`, `Native / Status Bar`, `Date and Time - Wheels`, `Components / Devices / iPhone / Screen`, etc. These are OS chrome, not Kaizen UI.
- **Third-party / example artboards** — App Store preview furniture, marketing flyers, Facebook/social banners, Zocdoc mocks, and Instagram story/slider widgets (`IG slider`, `IG story user header`, `Discover - Post`, etc.).
- **Icon variant sets** — `Icon 24`/`Icon 25` (95–162 "variants" each) are the icon glyphs, delivered as the 122-glyph `Icon` set, not as separate components.
- **Duplicate/renamed variant sets** — many families appear 2–6× (e.g. five separate `Button` sets, three `_Materials/Mode Options`) or as `Component 1…6`; these collapse into the single canonical component above.

Candidates for future extraction from the product (currently composed inline in the UI kit, not yet standalone components): BottomSheet menu variants, AudioPlayer, and the health-score ring.

## UI kits

- **ui_kits/mobile-app/** — interactive recreation of the Kaizen app: Home, Kai chat, Records, Health profile, Groups, with working tab navigation. See its `README.md`.

## Index / manifest

- `styles.css` — global entry point (link this). Imports:
  - `tokens/fonts.css` — Source Sans 3 `@font-face` (7 weights)
  - `tokens/colors.css` — palette + light/dark semantic aliases
  - `tokens/typography.css` — type scale, spacing, radius, motion tokens
  - `tokens/base.css` — element resets + `.kz-*` type utility classes
- `assets/` — `kaizen_logo.svg` (horizontal wordmark), `kaizen_logo_midnight.svg` (light-bg version), `kaizen_logo.png` (app icon), `background_dot.png`, `fonts/`, `kaizen-icons.js` (icon data)
- `components/<group>/` — the components above (each: `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` preview)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/mobile-app/` — the app UI kit
- `thumbnail.html` — project tile
- `SKILL.md` — portable skill wrapper

## Font note

Source Sans 3 ships as real `.ttf` files copied from the app — no substitution. (Figma also shows Inter/Roboto/etc. in imported third-party artboards; those are not part of the Kaizen brand and are ignored.)
