---
sidebar_label: SCRoutingProvider
sidebar_position: 1
title: SCRoutingProvider
---

:::info
This component provides routing context.
:::


## API

### SCRoutingContext.Provider

```JSX
<SCRoutingContext.Provider value={contextValue}>{children}</SCRoutingContext.Provider>
```

### SCRoutingContext

Creates a global Context object, of [SCRoutingContextType](../Types/context/#scroutingcontexttype).


```jsx 
export const SCRoutingContext = createContext<SCRoutingContextType>({} as SCRoutingContextType);
```

:::tipContext can be consumed in one of the following ways:


```jsx
1. <SCRoutingContext.Consumer>{(routerLink, routes, url) => (...)}</SCRoutingContext.Consumer>
```
```jsx
2. const scRoutingContext: SCRoutingContextType = useContext(SCRoutingContext);
```
```jsx
3. const scRoutingContext: SCRoutingContextType = useSCRouting();
````

:::


