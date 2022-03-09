---
id: "components_provider_SCNotificationProvider"
title: "Module: components/provider/SCNotificationProvider"
sidebar_label: "components/provider/SCNotificationProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCNotificationContext

• `Const` **SCNotificationContext**: `Context`<[`SCNotificationContextType`](../interfaces/types_context.SCNotificationContextType.md)\>

Creates Global Context

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCNotificationContext.Consumer>{(wsInstance, subscribe,) => (...)}</SCNotificationContext.Consumer>
```
```jsx
2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);
```
```jsx
3. const scNotificationContext: SCNotificationContextType = useSCNotification();
````
:::

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:22](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L22)

## Functions

### SCNotificationProvider

▸ **SCNotificationProvider**(`children`): `JSX.Element`

#### Description:
This component makes the notification context available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCNotificationContext.Provider value={{wsInstance}}>{children}</SCNotificationContext.Provider>
```

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L33)

___

### useSCNotification

▸ **useSCNotification**(): [`SCNotificationContextType`](../interfaces/types_context.SCNotificationContextType.md)

Let's only export the `useSCNotification` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCNotificationContextType`](../interfaces/types_context.SCNotificationContextType.md)

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:44](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L44)