---
sidebar_label: useAuth
sidebar_position: 1
title: useAuth
---

:::info
This custom hook is used to manage user session and other actions.
:::

## API

`useSCAuth(initialSession) => {state, dispatch}`


### Arguments

`initialSession` ([SCSessionType](../Types/context/#scsessiontype))


### Returns

`{state, dispatch}`


### Examples

```tsx
export default function SCUserProvider(): JSX.Element {
  const {state, dispatch} = useSCAuth(initialSession);
}
```






