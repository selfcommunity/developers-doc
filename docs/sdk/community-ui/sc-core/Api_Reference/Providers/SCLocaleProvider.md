---
sidebar_label: SCLocaleProvider
sidebar_position: 1
title: SCLocaleProvider
---

:::info
This component makes the `intl` available down the React tree.
:::


## API
`SCLocaleProvider(children) => Provider`
### Arguments

| Name | Type |
| :------ | :------ |
| children | ReactNode |

### Returns

```JSX
<SCLocaleContext.Provider value={{locale, messages, selectLocale}}>
```

## SCLocaleContext

Creates a global Context object, of [SCLocaleContextType](../Types/context/#sclocalecontexttype).


```jsx
export const SCLocaleContext = createContext<SCLocaleContextType>({} as SCLocaleContextType);
```


:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCLocaleContext.Consumer>{(locale,) => (...)}</SCLocaleContext.Consumer>
```
```jsx
2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);
```
```jsx
3. const scLocaleContext: SCLocaleContextType = useSCLocale();
````
:::


