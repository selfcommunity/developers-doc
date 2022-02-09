---
sidebar_label: SCContextProvider
sidebar_position: 1
title: SCContextProvider
---

:::info
This component imports all providers.
:::


## API

`SCContextProvider(conf,children) => Provider`
### Arguments

- **Type:** [SCContextProviderType](../Types/context/#sccontextprovidertype)

| Name | Type |
| :------ | :------ |
| conf | [SCSettingsType](../Types/context/#scsettingstype) |
| children | ReactNode |

### Returns

```jsx
<SCContext.Provider value={{settings}}>
```


### SCContext

Creates a global Context object, of [SCContextType](../Types/context/#sccontexttype).

```jsx
export const SCContext = createContext<SCContextType>({} as SCContextType);
```


:::tipContext can be consumed in one of the following ways:
```jsx
1. <SCContext.Consumer>{settings => (...)}</SCContext.Consumer>
```
```jsx
2. const scContext: SCContextType = useContext(SCContext);
```
```jsx
3. const scContext: SCContextType = useSCContext();
````
:::

