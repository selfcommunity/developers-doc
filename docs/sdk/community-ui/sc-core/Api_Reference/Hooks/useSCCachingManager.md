---
sidebar_label: useSCCachingManager
sidebar_position: 1
title: useSCCachingManager
---

:::info
This custom hook manages cached data and the loading state.
:::

 ## API 

` useSCCachingManager() => {cache: cache.current, updateCache, emptyCache, data, setData, loading, setLoading, isLoading}`

### Returns

`{cache: cache.current, updateCache, emptyCache, data, setData, loading, setLoading, isLoading}`

1. `cache`: Current cached data.
2. `updateCache`: Updates cache.
3. `emptyCache`: Empties cache. Emptying the cache in each isFollow request results in a request to the server.
4. `{data, setData}`: To set data.
5. `{loading, setLoading}`: To set loading state.
6. `isLoading`: Returns `true` if the manager is checking the follow status of the obj.

### Examples

```jsx
import useSCCachingManager from '@selfcommunity/core';


export default function useSCFollowedManager(user?: SCUserType) {
  const {cache, updateCache, emptyCache, data, setData, loading, setLoading, isLoading} = useSCCachingManager();


  return {followed: data, loading, isLoading, follow, isFollowed, refresh, emptyCache};
}
  ```