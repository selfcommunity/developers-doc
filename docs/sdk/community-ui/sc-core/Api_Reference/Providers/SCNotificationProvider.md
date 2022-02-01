---
sidebar_label: SCNotificationProvider
sidebar_position: 1
title: SCNotificationProvider
---

:::info
This component makes the notification context available down the React tree.
:::

## API

### SCNotificationContext.Provider

```JSX
<SCNotificationContext.Provider value={{wsInstance}}>{children}</SCNotificationContext.Provider>
```
### SCNotificationContext

Creates a global Context object, of [SCNotificationContextType](../Types/context/#scnotificationcontexttype).



```jsx
export const SCNotificationContext = createContext<SCNotificationContextType>({} as SCNotificationContextType);
```

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCNotificationContext.Consumer>{(wsInstance, subscribe,) => (...)}</SCNotificationContext.Consumer>
```
```jsx
2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);
```
```jsx
3. const scNotificationContext: SCNotificationContextType = useSCNotification();
````
:::


