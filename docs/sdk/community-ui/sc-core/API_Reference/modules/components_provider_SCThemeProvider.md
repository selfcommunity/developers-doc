---
id: "components_provider_SCThemeProvider"
title: "Module: components/provider/SCThemeProvider"
sidebar_label: "components/provider/SCThemeProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCThemeContext

• **SCThemeContext**: `Context`<[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType)\>

Creates Global Context

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

#### Defined in

[components/provider/SCThemeProvider/index.tsx:28](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L28)

## Functions

### SCThemeProvider

▸ **SCThemeProvider**(`children`): `JSX.Element`

#### Description:
This component makes the `theme` available down the React tree.
It should preferably be used at **the root of your component tree**.
See: https://mui.com/system/styled/

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCThemeContext.Provider value={{theme, setTheme: setCustomTheme}}>
<ThemeProvider theme={theme}>{children}</ThemeProvider>
</SCThemeContext.Provider>
```

#### Defined in

[components/provider/SCThemeProvider/index.tsx:44](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L44)

___

### useSCTheme

▸ **useSCTheme**(): [`SCThemeContextType`](../interfaces/types_context.SCThemeContextType)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType)

#### Defined in

[components/provider/SCThemeProvider/index.tsx:79](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L79)

___

### withSCTheme

▸ `Const` **withSCTheme**(`Component`): (`props`: `any`) => `Element`

Export hoc to inject the base theme to components

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `any` |

#### Returns

`fn`

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

##### Returns

`Element`

#### Defined in

[components/provider/SCThemeProvider/index.tsx:66](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L66)
