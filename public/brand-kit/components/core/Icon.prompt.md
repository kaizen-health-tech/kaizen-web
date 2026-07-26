**Icon** — a glyph from the Kaizen Health icon registry (24px grid, mostly 1.5px stroke). Use it anywhere the product needs an icon; never hand-draw SVGs.

```jsx
<Icon name="Kai" size={24} />
<Icon name="Heart" color="var(--violet)" />
<Icon name="Pill" size={20} strokeWidth={1.44} />
```

Names are PascalCase registry keys (`window.KaizenIcons`): Kai, Kaizen, Heart, Pill, FileText, Users, Bell, Camera, Search, Settings, Brain, Syringe, AiSparkleRounded, ChevronRight, and ~110 more. Outline glyphs inherit `color` as stroke; solid glyphs (Kai, Kaizen, NavPlus) inherit it as fill.
