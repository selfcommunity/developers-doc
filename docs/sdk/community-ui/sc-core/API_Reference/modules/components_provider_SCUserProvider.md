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

 * @hidden
SCUserContext (Authentication Context)
Consuming this context in one of the following ways:
 1. `<SCUserContext.Consumer>
      {(user, session, error, loading, logout, ...) => (...)}
    </SCUserContext.Consumer>`
 2. const scUserContext: SCUserContextType = useContext(SCUserContext);
 3. const scUserContext: SCUserContextType = useSCUser();

#### Defined in

[components/provider/SCUserProvider/index.tsx:30](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L30)

## Functions

### SCUserProvider

▸ **SCUserProvider**(`__namedParameters`): `JSX.Element`

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

[components/provider/SCUserProvider/index.tsx:36](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L36)

___

### useSCUser

▸ **useSCUser**(): [`SCUserContextType`](../interfaces/types_context.SCUserContextType)

 * @hidden
Let's only export the `useSCUser` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCUserContextType`](../interfaces/types_context.SCUserContextType)

#### Defined in

[components/provider/SCUserProvider/index.tsx:184](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L184)
