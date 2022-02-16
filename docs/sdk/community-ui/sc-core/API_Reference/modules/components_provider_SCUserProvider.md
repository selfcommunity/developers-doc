---
id: "components_provider_SCUserProvider"
title: "Module: components/provider/SCUserProvider"
sidebar_label: "components/provider/SCUserProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCUserContext

• **SCUserContext**: `Context`<[`SCUserContextType`](../interfaces/types_context.SCUserContextType)\>

SCUserContext (Authentication Context)
Consuming this context in one of the following ways:
 1. `<SCUserContext.Consumer>
      {(user, session, error, loading, logout, ...) => (...)}
    </SCUserContext.Consumer>`
 2. const scUserContext: SCUserContextType = useContext(SCUserContext);
 3. const scUserContext: SCUserContextType = useSCUser();

#### Defined in

[components/provider/SCUserProvider/index.tsx:29](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L29)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

Export the provider as we need to wrap the entire app with it
This provider keeps current user logged and session

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCUserProvider/index.tsx:35](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L35)

___

### useSCUser

▸ **useSCUser**(): [`SCUserContextType`](../interfaces/types_context.SCUserContextType)

Let's only export the `useSCUser` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCUserContextType`](../interfaces/types_context.SCUserContextType)

#### Defined in

[components/provider/SCUserProvider/index.tsx:190](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L190)
