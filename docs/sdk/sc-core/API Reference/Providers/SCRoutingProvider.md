---
sidebar_label: SCRoutingProvider
sidebar_position: 1
title: SCRoutingProvider
---

:::info
This component provides routing context.
:::

## Create Global Context

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsxexport const SCRoutingContext = createContext<SCRoutingContextType>({} as SCRoutingContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCRoutingContext.Consumer>{(routerLink, routes, url) => (...)}</SCRoutingContext.Consumer>
2. const scRoutingContext: SCRoutingContextType = useContext(SCRoutingContext);
3. const scRoutingContext: SCRoutingContextType = useSCRouting();
````
</TabItem>

:::

## Functions


### useSCRouting()
<p>Let's only export the <code>useSCTheme</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
