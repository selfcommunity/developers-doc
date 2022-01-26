---
sidebar_label: SCLocaleProvider
sidebar_position: 1
title: SCLocaleProvider
---

:::info
This component makes the `intl` available down the React tree.
:::

## Create Global Context

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCLocaleContext = createContext<SCLocaleContextType>({} as SCLocaleContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCLocaleContext.Consumer>{(locale,) => (...)}</SCLocaleContext.Consumer>
2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);
3. const scLocaleContext: SCLocaleContextType = useSCLocale();
````
</TabItem>

:::

## Functions

### useSCLocale()
<p>Let's only export the <code>useSCLocale</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  