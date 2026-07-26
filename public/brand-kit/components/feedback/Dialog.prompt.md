**Dialog** — a focused modal for confirmations and short flows. Dim backdrop, 24px-radius card, optional lilac icon tile, action buttons in the footer.

```jsx
<Dialog title="Delete this record?" icon="Trash"
  actions={<><Button mode="ghost" onClick={close}>Cancel</Button><Button onClick={confirm}>Delete</Button></>}>
  This can't be undone.
</Dialog>
```
