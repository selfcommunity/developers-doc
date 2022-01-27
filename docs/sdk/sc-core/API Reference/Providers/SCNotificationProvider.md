---
sidebar_label: SCNotificationProvider
sidebar_position: 1
title: SCNotificationProvider
---

:::info
This component makes the notification context available down the React tree.
:::


## SCNotificationContext()

Creates global context.

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
```
```jsx
2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);
```
```jsx
3. const scNotificationContext: SCNotificationContextType = useSCNotification();
````
</TabItem>

:::


## Members

- [receiveMessage](#receiveMessage)
- [useEffect](#useEffect)

<a name="receiveMessage"></a>

### receiveMessage(data)

Receive a message from wsInstance.

| Param |
| --- |
| data |

<a name="useEffect"></a>

### useEffect

Checks if there is a currently active session and a
wsInstance connection when the provider is mounted for the first time.
If there is an error, it means there is no session.



## Functions

### useSCNotification()
<p>Let's only export the <code>useSCNotification</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  
