**ListItem** — a standard row: icon tile + title/subtitle + trailing value or chevron. The backbone of records, documents, medications, and settings lists.

```jsx
<ListItem icon="Pill" title="Lisinopril" subtitle="10 mg · morning" onClick={open} />
<ListItem icon="FileText" iconTone={{bg:'var(--cyan-100)',fg:'var(--cyan-400)'}} title="Lab report" trailing={<Badge tone="info">New</Badge>} />
```
