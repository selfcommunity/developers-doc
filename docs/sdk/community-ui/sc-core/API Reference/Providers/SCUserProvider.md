---
sidebar_label: SCUserProvider
sidebar_position: 1
title: SCUserProvider
---

:::info
This component keeps current user logged and session.
Export the provider as we need to wrap the entire app with it.
:::

## SCUserContext() 

Creates global context.

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCUserContext = createContext<SCUserContextType>({} as SCUserContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCUserContext.Consumer>{(user, session, error, loading, logout) => (...)}</SCUserContext.Consumer>
```
```jsx
2. const scUserContext: SCUserContextType = useContext(SCUserContext);
```
```jsx
3. const scUserContext: SCUserContextType = useSCUser();
````
</TabItem>

:::

## Members

- [handleVisibilityChange](#handleVisibilityChange)
- [setAvatar](#setAvatar)
- [setCover](#setCover)
- [logout](#logout)
- [contextValue ](#contextValue)
- [useEffect](#useEffect)


<a name="handleVisibilityChange"></a>

### handleVisibilityChange

Handles handleVisibilityChange for this provider.
It refreshes followed categories, users, etc..


<a name="setAvatar"></a>

### setAvatar(avatar)

Handles change avatar.

| Param |
| --- |
| avatar |


<a name="setCover"></a>

### setCover(cover)

Handles change cover.

| Param |
| --- |
| cover |


<a name="logout"></a>

### logout

Calls the logout endpoint and then remove the user from the state.


<a name="contextValue"></a>

### contextValue

Makes the provider update only when it should.
We only want to force re-renders if the user, session, loading or error states change.
Whenever the `value` passed into a provider changes, the whole tree under the provider re-renders, andthat can be very costly! Even in this case, where you only get re-renders when logging in and out we want to keep things very performant.


<a name="useEffect"></a>

### useEffect

1. Checks if there is a currently active session when the provider is mounted for the first time. If there is an error, it means there is no session.
2. Controls caching of follow categories, users, etc...
To avoid multi-tab problems, on visibility change and document it is in foreground refresh the cache.


## Functions

### useSCUser()
<p>Let's only export the <code>useSCUser</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
