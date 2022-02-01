---
sidebar_label: SCThemeProvider
sidebar_position: 1
title: SCThemeProvider
---

:::info
This component makes the `theme` available down the React tree.
It should preferably be used at <strong>the root of your component tree</strong>.
See: https://mui.com/system/styled/
:::


## API

### SCThemeContext.Provider

```JSX
      <SCThemeContext.Provider value={{theme, setTheme: setCustomTheme}}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SCThemeContext.Provider>
```

## SCThemeContext

Creates a global Context object, of [SCThemeContextType](../Types/context/#scthemecontexttype).

```jsx
export const SCThemeContext = createContext<SCThemeContextType>({} as SCThemeContextType);
```


:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCThemeContext.Consumer>{(theme,) => (...)}</SCThemeContext.Consumer>
```
```jsx
2. const scThemeContext: SCThemeContextType = useContext(SCThemeContext);
```
```jsx
3. const scThemeContext: SCThemeContextType = useSCTheme();
````

:::


