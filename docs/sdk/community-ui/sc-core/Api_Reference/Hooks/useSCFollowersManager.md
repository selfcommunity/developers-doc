---
sidebar_label: useSCFollowedManager
sidebar_position: 1
title: useSCFollowedManager
---

:::info
This custom hook is used to manage to manage followed users.
:::


:::tipHow to use it:

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;
3. scFollowedManager.isFollowed(user)
```
:::


## API

`useSCFollowedManager(user) => {followed: data, loading, isLoading, follow, isFollowed, refresh, emptyCache}`

### Arguments

`user `([SCUserType](../Types/user)): The logged in user (if any).


### Returns

1. `data`: Followed data.
2. `loading`: Loading status.
3. `isLoading`: Returns `true` if the manager is loading the obj.
4. `follow`: Memoized follow/unfollow User, toggle action.
5. `is_followed`: Memoized isFollowed. If user is already in cache, checks if it is in followed; otherwise, it checks if authenticated user follows the user.
6. `refresh`: It makes a single request to the server and retrieves all the users followed by the authenticated user in a single solution.It might be useful for multi-tab sync.
7. `emptyCache`: Empties cache.

:::warningImportant:
In case of **anonymous** session, or if **follow** option is **disabled** in SC Preferences, only `data`, `loading` and `isLoading` are returned.
:::


### Examples

```jsx
import useSCFollowedManager from '@selfcommunity/core';

export default function SCUserProvider({children}: {children: React.ReactNode}): JSX.Element {
  const followedManager: SCFollowedManagerType = useSCFollowedManager(state.user);
}
```
