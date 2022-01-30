---
sidebar_label: SCPreferencesProvider
sidebar_position: 1
title: SCPreferencesProvider
---

:::info
This component imports all preferences and features enabled.
:::


## API

### SCPreferencesContext.Provider

```JSX
<SCPreferencesContext.Provider value={{preferences, features}}>{!loading && children}</SCPreferencesContext.Provider>
```

### SCPreferencesContext

Creates a global Context object, of [SCPreferencesContextType](../Types/context/#scpreferencescontexttype).


```jsx
export const SCPreferencesContext = createContext<SCPreferencesContextType>({} as SCPreferencesContextType);
```

````

:::tipContext can be consumed in one of the following ways:


```jsx
1. <SCPreferencesContext.Consumer>{(preferences) => (...)}</SCPreferencesContext.Consumer>
```
```jsx
2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);
```
```jsx
3. const scPreferences: SCPreferencesType = useSCPreferences();
````
:::


