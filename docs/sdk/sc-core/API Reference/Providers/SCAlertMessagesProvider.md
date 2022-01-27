---
sidebar_label: SCAlertMessagesProvider
sidebar_position: 1
title: SCAlertMessagesProvider
---

:::info
This component makes the `intl` available down the React tree.
:::

## SCAlertMessagesContext()

Creates global context.

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCAlertMessagesContext = createContext<SCAlertMessagesContextType>({} as SCAlertMessagesContextType);;
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCAlertMessagesContext.Consumer>{(options,) => (...)}</SCAlertMessagesContext.Consumer>
```
```jsx
2. const scAlertMessagesContext: SCAlertMessagesContextType = useContext(SCAlertMessagesContext)
```
```jsx
3. const scAlertMessagesContext: SCAlertMessagesContextType = useSCAlertMessages();
````
</TabItem>

:::

## Functions

### useSCAlertMessages()
<p>Let's only export the <code>useSCAlertMessages</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
