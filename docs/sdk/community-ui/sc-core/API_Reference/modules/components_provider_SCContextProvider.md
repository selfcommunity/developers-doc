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

Create Global Context
Consuming this context in one of the following ways:
 1. `<SCContext.Consumer>
      {settings => (...)}
    </SCContext.Consumer>`
 2. const scContext: SCContextType = useContext(SCContext);
 3. const scContext: SCContextType = useSCContext();

#### Defined in

[components/provider/SCContextProvider/index.tsx:15](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L15)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

SCContextProvider
This import all providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SCContextProviderType`](../interfaces/types_context.SCContextProviderType) |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCContextProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L21)

___

### useSCContext

▸ **useSCContext**(): [`SCContextType`](../interfaces/types_context.SCContextType)

Let's only export the `useSCContext` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCContextType`](../interfaces/types_context.SCContextType)

#### Defined in

[components/provider/SCContextProvider/index.tsx:78](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L78)
