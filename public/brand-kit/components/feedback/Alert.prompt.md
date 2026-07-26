**Alert** — a small centered confirm dialog with stacked buttons (vs `Dialog`, which is a larger left-aligned sheet). Use `destructive` for delete-style actions.

```jsx
<Alert title="Delete record?" message="This can't be undone." icon="Trash" destructive confirmLabel="Delete" cancelLabel="Cancel" onConfirm={del} onCancel={close} />
```
