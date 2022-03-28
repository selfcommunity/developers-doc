---
id: "components_provider_SCContextProvider"
title: "Module: components/provider/SCContextProvider"
sidebar_label: "components/provider/SCContextProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCContext

• `Const` **SCContext**: `Context`<[`SCContextType`](../interfaces/types_context.SCContextType.md)\>

Creates Global Context

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

#### Defined in

[components/provider/SCContextProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L21)

## Functions

### SCContextProvider

▸ **SCContextProvider**(`__namedParameters`): `JSX.Element`

SCContextProvider
This import all providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SCContextProviderType`](../interfaces/types_context.SCContextProviderType.md) |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCContextProvider/index.tsx:27](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L27)

___

### useSCContext

▸ **useSCContext**(): [`SCContextType`](../interfaces/types_context.SCContextType.md)

Let's only export the `useSCContext` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCContextType`](../interfaces/types_context.SCContextType.md)

#### Defined in

[components/provider/SCContextProvider/index.tsx:84](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L84)
