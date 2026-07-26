**BottomSheet** — the app's primary modal surface for menus, pickers, and confirmations. Grab handle, rounded top, dim backdrop.

```jsx
<BottomSheet title="Add to records" onClose={close}>
  <ListItem icon="Camera" title="Scan a document" onClick={scan} />
  <ListItem icon="FileText" title="Upload a file" onClick={upload} />
</BottomSheet>
```
