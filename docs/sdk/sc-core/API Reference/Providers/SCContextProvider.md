---
sidebar_label: SCContextProvider
sidebar_position: 1
title: SCContextProvider
---

:::info
This component imports all providers.
:::

## Create Global Context

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCContext = createContext<SCContextType>({} as SCContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCContext.Consumer>{settings => (...)}</SCContext.Consumer>
2. const scContext: SCContextType = useContext(SCContext);
3. const scContext: SCContextType = useSCContext();
````
</TabItem>

:::

## Functions

### useSCContext()
<p>Let's only export the <code>useSCContext</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
