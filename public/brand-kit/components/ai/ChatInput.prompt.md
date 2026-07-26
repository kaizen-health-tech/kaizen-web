**ChatInput** — the compose bar for the Kai chat: attachment button, rounded text field, and a send button that fills violet when there's text.

```jsx
<ChatInput onSend={(text) => sendToKai(text)} onAttach={pickFile} />
```
