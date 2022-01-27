---
sidebar_label: useSCCachingManager
sidebar_position: 1
title: useSCCachingManager
---

:::info
This custom hook manages cached data and the loading state.
:::

 

## Members

- [updateCache](#updateCache)
- [emptyCache](#emptyCache)
- [isLoading](#isLoading)


<a name="updateCache"></a>

### updateCache

Updates cache.

**Kind**: inner constant of `useSCCachingManager`

| Param |
| --- |
| ids | 


<a name="emptyCache"></a>

### emptyCache

Empties cache.

:::warning
Emptying the cache in each isFollow request results in a request to the server.
:::

**Kind**: inner constant of `useSCCachingManager`

<a name="isLoading"></a>

### isLoading

Returns true if the manager is checking the follow status of the obj.

**Kind**: inner constant of `useSCCachingManager`

| Param |
| --- |
| category | 

