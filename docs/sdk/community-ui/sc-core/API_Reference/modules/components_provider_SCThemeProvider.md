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

 * @hidden
Create Global Context
Consuming this context in one of the following ways:
 1. `<SCThemeContext.Consumer>
      {(theme,) => (...)}
    </SCThemeContext.Consumer>`
 2. const scThemeContext: SCThemeContextType = useContext(SCThemeContext);
 3. const scThemeContext: SCThemeContextType = useSCTheme();

#### Defined in

[components/provider/SCThemeProvider/index.tsx:20](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L20)

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

[components/provider/SCThemeProvider/index.tsx:27](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L27)

___

### useSCTheme

▸ **useSCTheme**(): [`SCThemeContextType`](../interfaces/types_context.SCThemeContextType)

 * @hidden
Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCThemeContextType`](../interfaces/types_context.SCThemeContextType)

#### Defined in

[components/provider/SCThemeProvider/index.tsx:63](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L63)

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

[components/provider/SCThemeProvider/index.tsx:49](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L49)
