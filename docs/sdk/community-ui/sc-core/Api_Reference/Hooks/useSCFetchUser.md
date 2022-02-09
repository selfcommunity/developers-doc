---
sidebar_label: useSCFetchUser
sidebar_position: 1
title: useSCFetchUser
---


:::info
This custom hook is used to fetch a user object.
:::

## API

`useSCFetchUser(initialSession) => {scUser, setSCUser}`

### Arguments

1. `id`(number): The user Id.
2. `user`([SCUserType](../Types/user)): The user obj.



### Returns

`{scUser, setSCUser}`: Hook to manage User obj state and update.

### Examples

```jsx
import useSCFetchUser from '@selfcommunity/core';

export default function User(props: UserProps): JSX.Element {
      const {scUser, setSCUser} = useSCFetchUser({id, user});
}
```