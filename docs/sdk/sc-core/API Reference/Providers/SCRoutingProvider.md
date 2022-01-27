---
sidebar_label: SCRoutingProvider
sidebar_position: 1
title: SCRoutingProvider
---

:::info
This component provides routing context.
:::

## SCRoutingContext()

Creates global context.

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx 
export const SCRoutingContext = createContext<SCRoutingContextType>({} as SCRoutingContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCRoutingContext.Consumer>{(routerLink, routes, url) => (...)}</SCRoutingContext.Consumer>
```
```jsx
2. const scRoutingContext: SCRoutingContextType = useContext(SCRoutingContext);
```
```jsx
3. const scRoutingContext: SCRoutingContextType = useSCRouting();
````
</TabItem>

:::



## Members

- [getPreferencesRoutes](#getPreferencesRoutes)
- [url](#url)
- [contextValue](#contextValue)


<a name="getPreferencesRoutes"></a>

### getPreferencesRoutes

Get override routes from community preferences.

<a name="url"></a>

### url

Generates a path.


<a name="contextValue"></a>

### contextValue

Memoized context value.
## Functions


### useSCRouting()
<p>Let's only export the <code>useSCTheme</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
