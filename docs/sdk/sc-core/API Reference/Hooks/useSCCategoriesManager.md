---
sidebar_label: useSCCategoriesManager
sidebar_position: 1
title: useSCCategoriesManager
---

:::info
This custom hook is used to manage the categories followed.
:::

:::tip

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;
3. scCategoriesManager.isFollowed(category)
```
:::

 ## Members

- [refresh](#refresh)
- [follow](#follow)
- [isFollowed](#isFollowed)
- [checkIsCategoryFollowed(category)](#checkIsCategoryFollowed)

<a name="refresh"></a>

### refresh

Memoized refresh all categories.
It makes a single request to the server and retrieves
all the categories followed by the user in a single solution.
It might be useful for multi-tab sync.

**Kind**: inner constant of `useSCCategoriesManager`  

<a name="follow"></a>

### follow

Memoized follow/unfollow Category toggle action.

**Kind**: inner constant of `useSCCategoriesManager`  

<a name="isFollowed"></a>

### isFollowed

Memoized isFollowed.
If category is already in cache, checks if the category is in categories;
otherwise, it checks if user follows the category

**Kind**: inner constant of `useSCCategoriesManager` 

<a name="checkIsCategoryFollowed"></a>

### checkIsCategoryFollowed(category)

Checks if the user follows the category.
Then update the categories cached, and the ones followed.

**Kind**: inner method of `useSCCategoriesManager`  

| Param |
| --- |
| category | 

