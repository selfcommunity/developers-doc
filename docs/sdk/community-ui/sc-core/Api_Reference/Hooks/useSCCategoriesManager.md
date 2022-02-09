---
sidebar_label: useSCCategoriesManager
sidebar_position: 1
title: useSCCategoriesManager
---

:::info
This custom hook is used to manage the categories followed.
:::

:::tipHow to use it:

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;
3. scCategoriesManager.isFollowed(category)
```
:::

## API 

`useSCCategoriesManager(user?: SCUserType) => {categories: data, loading, isLoading, follow, isFollowed, refresh, emptyCache}`

### Arguments

`user `([SCUserType](../Types/user)): The logged in user (if any).


### Returns

1. `data`: Categories data.
2. `loading`: Categories loading state.
3. `isLoading`: Returns `true` if the manager is loading the obj.
4. `follow`: Memoized follow/unfollow Category toggle action.
5. `isFollowed`: Memoized isFollowed. If category is already in cache, checks if the category is in categories; otherwise, it checks if user follows the category.
6. `refresh`: Memoized refresh all categories. It makes a single request to the server and retrieves all the categories followed by the user in a single solution. It might be useful for multi-tab sync.
7. `emptyCache`: Empties cache.

:::warningImportant:
In case of **anonymous** session, only `data`, `loading` and `isLoading` are returned.
:::


### Examples

```jsx
import useSCCategoriesManager from '@selfcommunity/core';

export default function SCUserProvider({children}: {children: React.ReactNode}): JSX.Element {
const categoriesManager: SCCategoriesManagerType = useSCCategoriesManager(user);
}

```

