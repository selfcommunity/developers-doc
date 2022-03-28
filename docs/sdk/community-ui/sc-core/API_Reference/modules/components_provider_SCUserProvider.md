---
id: "components_provider_SCUserProvider"
title: "Module: components/provider/SCUserProvider"
sidebar_label: "components/provider/SCUserProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCUserContext

• `Const` **SCUserContext**: `Context`<[`SCUserContextType`](../interfaces/types_context.SCUserContextType.md)\>

SCUserContext (Authentication Context)

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCUserContext.Consumer>{(user, session, error, loading, logout) => (...)}</SCUserContext.Consumer>
```
```jsx
2. const scUserContext: SCUserContextType = useContext(SCUserContext);
```
```jsx
3. const scUserContext: SCUserContextType = useSCUser();
````
:::

#### Defined in

[components/provider/SCUserProvider/index.tsx:37](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L37)

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

[components/provider/SCUserProvider/index.tsx:43](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L43)

___

### useSCUser

▸ **useSCUser**(): [`SCUserContextType`](../interfaces/types_context.SCUserContextType.md)

Let's only export the `useSCUser` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCUserContextType`](../interfaces/types_context.SCUserContextType.md)

#### Defined in

[components/provider/SCUserProvider/index.tsx:198](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L198)
