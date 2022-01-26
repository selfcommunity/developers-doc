---
sidebar_label: SCNotificationProvider
sidebar_position: 1
title: SCNotificationProvider
---

:::info
This component makes the notification context available down the React tree.
:::


## Create Global Context

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCNotificationContext = createContext<SCNotificationContextType>({} as SCNotificationContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCNotificationContext.Consumer>{(wsInstance, subscribe,) => (...)}</SCNotificationContext.Consumer>
2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);
3. const scNotificationContext: SCNotificationContextType = useSCNotification();
````
</TabItem>

:::



## Functions

### useSCNotification()
<p>Let's only export the <code>useSCNotification</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
