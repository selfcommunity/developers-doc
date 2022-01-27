---
sidebar_label: SCThemeProvider
sidebar_position: 1
title: SCThemeProvider
---

:::info
This component makes the <code>theme</code> available down the React tree.
It should preferably be used at <strong>the root of your component tree</strong>.
See: https://mui.com/system/styled/
:::

## SCThemeContext()

Create global context.

````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
export const SCThemeContext = createContext<SCThemeContextType>({} as SCThemeContextType);
```

</TabItem>
````

:::tip

<p>Context can be consumed in one of the following ways:</p>

````mdx-code-block

<TabItem value="jsx">

```jsx
1. <SCThemeContext.Consumer>{(theme,) => (...)}</SCThemeContext.Consumer>
```
```jsx
2. const scThemeContext: SCThemeContextType = useContext(SCThemeContext);
```
```jsx
3. const scThemeContext: SCThemeContextType = useSCTheme();
````
</TabItem>

:::


## Members

### withSCTheme(Component)

Exports hoc to inject the base theme to components.

| Param |
| --- |
| Component | 

## Functions

### useSCTheme()()

## withSCTheme
<p>Let's only export the <code>useSCTheme</code> hook instead of the context.
We only want to use the hook directly and never the context component.</p>

**Kind**: global function  