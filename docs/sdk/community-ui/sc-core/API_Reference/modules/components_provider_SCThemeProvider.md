---
id: "components_provider_SCThemeProvider"
title: "Module: components/provider/SCThemeProvider"
sidebar_label: "components/provider/SCThemeProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCThemeContext

• `Const` **SCThemeContext**: `Context`<[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType.md)\>

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

[components/provider/SCThemeProvider/index.tsx:29](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L29)

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

[components/provider/SCThemeProvider/index.tsx:45](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L45)

___

### useSCTheme

▸ **useSCTheme**(): [`SCThemeContextType`](../interfaces/types_context.SCThemeContextType.md)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType.md)

#### Defined in

[components/provider/SCThemeProvider/index.tsx:92](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L92)

___

### withSCTheme

▸ **withSCTheme**(`Component`): (`props`: `any`) => `Element`

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

[components/provider/SCThemeProvider/index.tsx:79](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L79)
