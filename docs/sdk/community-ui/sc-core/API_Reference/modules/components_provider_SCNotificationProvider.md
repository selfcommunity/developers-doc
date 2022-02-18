---
id: "components_provider_SCNotificationProvider"
title: "Module: components/provider/SCNotificationProvider"
sidebar_label: "components/provider/SCNotificationProvider"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### SCNotificationProvider

▸ **SCNotificationProvider**(`__namedParameters`): `JSX.Element`

This component makes the notification context available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L21)

___

### useSCNotification

▸ **useSCNotification**(): [`SCNotificationContextType`](../interfaces/types_context.SCNotificationContextType)

 * @hidden
Let's only export the `useSCNotification` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCNotificationContextType`](../interfaces/types_context.SCNotificationContextType)

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L33)
