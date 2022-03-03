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

[components/provider/SCUserProvider/index.tsx:38](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L38)

## Functions

### SCUserProvider

▸ **SCUserProvider**(`children`): `JSX.Element`

#### Description:
This component keeps current user logged and session; it is exported as we need to wrap the entire app with it

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCUserContext.Provider value={contextValue}>{!state.loading && children}</SCUserContext.Provider>
```

#### Defined in

[components/provider/SCUserProvider/index.tsx:49](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L49)

___

### useSCUser

▸ **useSCUser**(): [`SCUserContextType`](../interfaces/types_context.SCUserContextType.md)

Let's only export the `useSCUser` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCUserContextType`](../interfaces/types_context.SCUserContextType.md)

#### Defined in

[components/provider/SCUserProvider/index.tsx:196](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L196)
