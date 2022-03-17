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

[components/provider/SCContextProvider/index.tsx:22](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L22)

## Functions

### SCContextProvider

▸ **SCContextProvider**(`object`): `JSX.Element`

This component imports all providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`SCContextProviderType`](../interfaces/types_context.SCContextProviderType.md) |

#### Returns

`JSX.Element`

```jsx
<SCContext.Provider value={{settings}}>
```

#### Defined in

[components/provider/SCContextProvider/index.tsx:34](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L34)

___

### useSCContext

▸ **useSCContext**(): [`SCContextType`](../interfaces/types_context.SCContextType.md)

Let's only export the `useSCContext` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCContextType`](../interfaces/types_context.SCContextType.md)

#### Defined in

[components/provider/SCContextProvider/index.tsx:91](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L91)
