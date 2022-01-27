---
sidebar_label: useSCConnectionsManager
sidebar_position: 1
title: useSCConnectionsManager

---
:::info
This custom hook is used to manage to manage friends.
:::

:::tip

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;
3. scConnectionsManager.status(user)
```
:::

## Members

- [refresh](refresh)
- [requestConnection](#requestConnection)
- [acceptConnection](#acceptConnection)
- [getCurrentStatus](#getCurrentStatus)
- [status](#status)
- [notificationSubscriber(msg, data)](#notificationSubscriber)
- [checkUserConnectionStatus(user)](#checkUserConnectionStatus)
- [useEffect](useEffect)


<a name="refresh"></a>

### refresh

Memoized refresh all connections.
It makes a single request to the server and retrieves all the users connected to the authenticated user in a single solution.
It might be useful for multi-tab sync.

**Kind**: inner constant of `useSCConnectionsManager`

<a name="requestConnection"></a>

### requestConnection

Memoized Request connection.

**Kind**: inner constant of `useSCConnectionsManager`

<a name="acceptConnection"></a>

### acceptConnection

Memoized Accept Request connection.

**Kind**: inner constant of `useSCConnectionsManager`

<a name="getCurrentStatus"></a>

### getCurrentStatus

Returns the current user status if exists; otherwise it returns null.

**Kind**: inner constant of `useSCConnectionsManager`

<a name="status"></a>

### status

Memoized status.
If user is already in cache, checks data user statuses;
otherwise, it checks if authenticated user is connected with user.

**Kind**: inner constant of `useSCConnectionsManager`

<a name="notificationSubscriber"></a>

### notificationSubscriber(msg, data)

Notification subscriber only for `FOLLOW`.

**Kind**: inner method of `useSCConnectionsManager`  

| Param |
| --- |
| msg | 
| data | 


<a name="checkUserConnectionStatus"></a>

### checkUserConnectionStatus(user)

Checks if the authenticated user is connected with the user.
Updates the users cached and their statuses.

**Kind**: inner method of `useSCConnectionsManager` 

| Param |
| --- |
| user | 

<a name="useEffect"></a>

### useEffect

Subscribes to notification types `user_follow`, `user_unfollow`.


## Constants

- [Status](#STATUS)

<a name="STATUS"></a>

### STATUS_TYPE

It is used on refresh and in status method.
Checks if the user status is `connected`, `sent_connection_request` or
`received_connection_request`  to update the cache and data.

**Kind**: Global constant