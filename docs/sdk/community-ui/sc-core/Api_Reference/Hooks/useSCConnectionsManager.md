---
sidebar_label: useSCConnectionsManager
sidebar_position: 1
title: useSCConnectionsManager

---
:::info
This custom hook is used to manage to manage friends.
:::

:::tipHow to use it:

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;
3. scConnectionsManager.status(user)
```
:::

## Api

`useSCConnectionsManager(user?: SCUserType) => {connections: data, loading, isLoading, status, requestConnection, acceptConnection, refresh, emptyCache}`

### Arguments

`user `([SCUserType](../Types/user)): The logged in user (if any).


### Returns

1. `data`: Connections data.
2. `loading`: Loading status.
3. `isLoading`: Returns `true` if the manager is loading the obj.
4. `status`: If user is already in cache, checks data user statuses; otherwise, it checks if authenticated user is connected with user.
5. `requestConnection`: Memoized Request connection.
6. `acceptConnection`: Memoized Accept Request connection.
7. `refresh`: It makes a single request to the server and retrieves all the users connected to the authenticated user in a single solution.It might be useful for multi-tab sync.

:::warningImportant:
In case of **anonymous** session, or if **connection** option is **disabled** in SC Preferences, only `data`, `loading` and `isLoading` are returned.
:::

### Examples 

```jsx
import useSCConnectionsManager from '@selfcommunity/core';

export default function SCUserProvider({children}: {children: React.ReactNode}): JSX.Element {
    const connectionsManager: SCConnectionsManagerType = useSCConnectionsManager(user);
}
```