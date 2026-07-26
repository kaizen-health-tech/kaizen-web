**Tabs** — horizontal pill tabs for filtering a view (health profile sections, document types). Selected pill uses the tinted violet fill; the rest are white with a hairline.

```jsx
<Tabs items={[{label:"Overall",value:"o",icon:"Chart"},{label:"Activity",value:"a",icon:"Walk"}]} value={tab} onChange={setTab} />
```
