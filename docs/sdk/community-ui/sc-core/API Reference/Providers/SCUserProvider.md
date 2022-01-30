---
sidebar_label: SCUserProvider
sidebar_position: 1
title: SCUserProvider
---

:::info
This component keeps current user logged and session.
Export the provider as we need to wrap the entire app with it.
:::


## API

### SCUserContext.Provider

```JSX
<SCUserContext.Provider value={contextValue}>{!state.loading && children}</SCUserContext.Provider>
```

## SCUserContext

Creates a global Context object, of [SCUserContextType](../Types/context/#scusercontexttype).


```jsx
export const SCUserContext = createContext<SCUserContextType>({} as SCUserContextType);
```


:::tipContext can be consumed in one of the following ways:


```jsx
1. <SCUserContext.Consumer>{(user, session, error, loading, logout) => (...)}</SCUserContext.Consumer>
```
```jsx
2. const scUserContext: SCUserContextType = useContext(SCUserContext);
```
```jsx
3. const scUserContext: SCUserContextType = useSCUser();
````
:::

