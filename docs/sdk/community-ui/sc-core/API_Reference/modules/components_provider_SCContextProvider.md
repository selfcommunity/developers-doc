---
id: "components_provider_SCContextProvider"
title: "Module: components/provider/SCContextProvider"
sidebar_label: "components/provider/SCContextProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCContext

• **SCContext**: `Context`<[`SCContextType`](../interfaces/types_context.SCContextType)\>

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

[components/provider/SCContextProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L21)

## Functions

### SCContextProvider

▸ **SCContextProvider**(`object`): `JSX.Element`

This component imports all providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`SCContextProviderType`](../interfaces/types_context.SCContextProviderType) |

#### Returns

`JSX.Element`

```jsx
<SCContext.Provider value={{settings}}>
```

#### Defined in

[components/provider/SCContextProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L33)

___

### useSCContext

▸ **useSCContext**(): [`SCContextType`](../interfaces/types_context.SCContextType)

Let's only export the `useSCContext` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCContextType`](../interfaces/types_context.SCContextType)

#### Defined in

[components/provider/SCContextProvider/index.tsx:90](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L90)
