---
sidebar_label: SCPreferencesProvider
sidebar_position: 1
title: SCPreferencesProvider
---

:::info
This component imports all preferences and features enabled.
:::

## Create Global Context

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCPreferencesContext = createContext<SCPreferencesContextType>({} as SCPreferencesContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCPreferencesContext.Consumer>{(preferences) => (...)}</SCPreferencesContext.Consumer>
2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);
3. const scPreferences: SCPreferencesType = useSCPreferences();
````
</TabItem>

:::



## Functions


### useSCPreferences()
<p>Let's only export the <code>useSCPreferences</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
