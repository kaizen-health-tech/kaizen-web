# Kaizen mobile app — UI kit

An interactive recreation of the Kaizen Health iOS/Android app (React Native · react-native-paper), rebuilt from the product source (`kaizenhealth/src/screens`, `src/components`, `src/core/theme.js`).

## Screens
- **Home** — date + "Hi, {name}" greeting, Kai insight trigger, favourite-member health bubbles, health-score card, an AI review banner, upcoming events, and a news card.
- **Kai** — the AI assistant chat: memory chips, streamed-style bubbles, and an attachment/compose bar. Type and press Enter to send.
- **Records** — search, Mine / Shared segmented control, category chips, and a document list (labs, meds, notes, events).
- **Health profile** — large score ring, Overall/Activity/Shared tabs, and per-contributor progress (activity, sleep, resting HR, energy).
- **Groups** — the family/care group with members and their sharing scopes.

## Navigation
Bottom `TabBar` (Home · Groups · Kai · Records) with the elevated violet "+" that, in-product, opens the create-document sheet. The Home insight and score card deep-link to Health profile.

## Composition
Every control is a design-system component (`window.KaizenHealthDesignSystem_869e5e`): Button, Card, ListItem, Avatar, Badge, Tag, Chip, SearchBar, SegmentedControl, ProgressBar, Banner, Toast, TabBar, TopBar, ChatBubble, MemoryChip, Icon. The health-score ring is a small kit-local SVG (no product component exists for it). Data is illustrative.
