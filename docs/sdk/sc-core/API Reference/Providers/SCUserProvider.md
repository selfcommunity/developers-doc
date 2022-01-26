---
sidebar_label: SCUserProvider
sidebar_position: 1
title: SCUserProvider
---

:::info
This component keeps current user logged and session.
Export the provider as we need to wrap the entire app with it.
:::

## Create Global Context

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
2. const scUserContext: SCUserContextType = useContext(SCUserContext);
3. const scUserContext: SCUserContextType = useSCUser();
````
</TabItem>

:::


## Functions

### useSCUser()
<p>Let's only export the <code>useSCUser</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
