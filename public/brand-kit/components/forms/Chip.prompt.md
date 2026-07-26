**Chip** — small filled token for filters, categories, and selected values. Round (25px) by default; `shape="rec"` for the 5px record-category style. Provide a `tone` for the category color families (cyan / pink / yellow / heather).

```jsx
<Chip label="Cardiology" leftIcon="Heart" />
<Chip label="Lab result" shape="rec" tone={{bg:'var(--cyan-100)',fg:'var(--cyan-400)'}} />
<Chip label="Dad" onClose={remove} />
```
