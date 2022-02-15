---
id: "provider_SCNotificationProvider"
title: "Module: provider/SCNotificationProvider"
sidebar_label: "provider/SCNotificationProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCNotificationContext

• **SCNotificationContext**: `Context`<`SCNotificationContextType`\>

Create Global Context
Consuming this context in one of the following ways:
 1. `<SCNotificationContext.Consumer>
      {(wsInstance, wpSubscription,) => (...)}
    </SCNotificationContext.Consumer>`
 2. const scNotificationContext: SCNotificationContextType = useContext(SCNotificationContext);
 3. const scNotificationContext: SCNotificationContextType = useSCNotification();

#### Defined in

[provider/SCNotificationProvider/index.tsx:15](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L15)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

This component makes the notification context available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[provider/SCNotificationProvider/index.tsx:20](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L20)

___

### useSCNotification

▸ **useSCNotification**(): `SCNotificationContextType`

Let's only export the `useSCNotification` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

`SCNotificationContextType`

#### Defined in

[provider/SCNotificationProvider/index.tsx:31](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L31)
