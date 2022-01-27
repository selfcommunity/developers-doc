---
sidebar_label: useSCFollowedManager
sidebar_position: 1
title: useSCFollowedManager
---

:::info
This custom hook is used to manage to manage followed users.
:::


:::tip

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;
3. scFollowedManager.isFollowed(user)
```
:::

## Members

- [refresh](#refresh)
- [follow](#follow)
- [getConnectionStatus](#getConnectionStatus)
- [isFollowed](#isFollowed)
- [notificationSubscriber(msg, data)](#notificationSubscriber)
- [checkIsUserFollowed(user)](#checkIsUserFollowed)
- [useEffect](#useEffect)

<a name="refresh"></a>

### refresh

Memoized refresh all followed users.
It makes a single request to the server and retrieves
all the users followed by the authenticated user in a single solution.
It might be useful for multi-tab sync.

**Kind**: inner constant of `useSCFollowedManager`

<a name="follow"></a>

### follow

Memoized follow/unfollow User, toggle action.

**Kind**: inner constant of `useSCFollowedManager`

<a name="getConnectionStatus"></a>

### getConnectionStatus

Bypasses remote check if the user is followed.

**Kind**: inner constant of `useSCFollowedManager`

<a name="isFollowed"></a>

### isFollowed

Memoized isFollowed.
If user is already in cache, checks if it is in followed;
otherwise, it checks if authenticated user follows the user.

**Kind**: inner constant of `useSCFollowedManager`

<a name="notificationSubscriber"></a>

### notificationSubscriber(msg, data)
Notification subscriber only for `FOLLOW`

**Kind**: inner method of `useSCFollowedManager` 

| Param |
| --- |
| msg | 
| data | 

<a name="checkIsUserFollowed"></a>

### checkIsUserFollowed(user)
Checks if the authenticated user follows the user.
Update the followed cached and users.

**Kind**: inner method of `useSCFollowedManager` 

| Param |
| --- |
| user | 

<a name="useEffect"></a>

### useEffect
Subscribes to notification types `user_follow`, `user_unfollow`.

## Constants

- [STATUS_FOLLOWED](#STATUS_FOLLOWED)

<a name="STATUS_FOLLOWED"></a>

### STATUS_FOLLOWED

It is used on refresh and in isFollowed method.
Checks if the user status is `followed` to update the cache and data.

**Kind**: Global constant

