**Button** — primary action control. Contained (violet fill + aquamarine label) for the main action on a screen; outlined for secondary; ghost for tertiary/quiet actions.

```jsx
<Button mode="contained" leftIcon="Plus">Add medication</Button>
<Button mode="outlined" size="md">Not now</Button>
<Button mode="ghost">Skip</Button>
```

Sizes sm/md/lg (heights 42/48/58), 16px radius. Pass `leftIcon`/`rightIcon` as icon registry names, `loading` for a spinner, `fullWidth` to stretch.
