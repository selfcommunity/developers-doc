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

`initialSession` ([SCSessionType](../Types/context/#scsessiontype)): The initial session.


### Returns

1. `{state, dispatch}`: Reducer for state and actions handling.
2. `helpers: {refreshSession}`: Memoized helper function that refreshes session.


### Examples

```tsx
import useSCAuth from '@selfcommunity/core';

export default function SCUserProvider(): JSX.Element {
  const {state, dispatch} = useSCAuth(initialSession);
}
```





