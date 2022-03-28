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

[components/provider/SCThemeProvider/index.tsx:28](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L28)

## Functions

### SCThemeProvider

▸ **SCThemeProvider**(`__namedParameters`): `JSX.Element`

This component makes the `theme` available down the React tree.
It should preferably be used at **the root of your component tree**.
See: https://mui.com/system/styled/

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCThemeProvider/index.tsx:35](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L35)

___

### useSCTheme

▸ **useSCTheme**(): [`SCThemeContextType`](../interfaces/types_context.SCThemeContextType.md)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType.md)

#### Defined in

[components/provider/SCThemeProvider/index.tsx:70](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L70)

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

[components/provider/SCThemeProvider/index.tsx:57](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L57)
