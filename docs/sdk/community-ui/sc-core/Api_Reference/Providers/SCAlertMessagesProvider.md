---
sidebar_label: SCAlertMessagesProvider
sidebar_position: 1
title: SCAlertMessagesProvider
---

:::info
This component makes the `intl` available down the React tree.
:::



## API

`SCAlertMessagesProvider(children) => Provider`

### Arguments

| Name | Type |
| :------ | :------ |
| children | ReactNode |

### Returns

```jsx
<SCAlertMessagesContext.Provider value={{options}}>
```

### SCAlertMessagesContext

Creates a global Context object, of [SCAlertMessagesContextType](../Types/context/#scalertmessagescontexttype).


```jsx
export const SCAlertMessagesContext = createContext<SCAlertMessagesContextType>({} as SCAlertMessagesContextType);;
```


:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCAlertMessagesContext.Consumer>{(options,) => (...)}</SCAlertMessagesContext.Consumer>
```
```jsx
2. const scAlertMessagesContext: SCAlertMessagesContextType = useContext(SCAlertMessagesContext)
```
```jsx
3. const scAlertMessagesContext: SCAlertMessagesContextType = useSCAlertMessages();
````
:::

