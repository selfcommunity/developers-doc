---
id: "components_provider_SCAlertMessagesProvider"
title: "Module: components/provider/SCAlertMessagesProvider"
sidebar_label: "components/provider/SCAlertMessagesProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCAlertMessagesContext

• **SCAlertMessagesContext**: `Context`<[`SCAlertMessagesContextType`](../interfaces/types_context.SCAlertMessagesContextType)\>

Creates Global Context

:::tipContext can be consumed in one of the following ways:
```jsx
1. <SCAlertMessagesContext.Consumer>{(options,) => (...)}</SCAlertMessagesContext.Consumer>
```
```jsx
2. const scAlertMessagesContext: SCAlertMessagesContextType = useContext(SCAlertMessagesContext)
```
```jsx
3. const scAlertMessagesContext: SCAlertMessagesContextType = useSCAlertMessages();
````
:::

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L21)

## Functions

### SCAlertMessagesProvider

▸ **SCAlertMessagesProvider**(`children`): `JSX.Element`

#### Description:
This component makes the `intl` available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCAlertMessagesContext.Provider value={{options}}>
```

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:32](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L32)

___

### useSCAlertMessages

▸ **useSCAlertMessages**(): [`SCAlertMessagesContextType`](../interfaces/types_context.SCAlertMessagesContextType)

Let's only export the `useSCAlertMessages` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCAlertMessagesContextType`](../interfaces/types_context.SCAlertMessagesContextType)

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:46](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L46)
