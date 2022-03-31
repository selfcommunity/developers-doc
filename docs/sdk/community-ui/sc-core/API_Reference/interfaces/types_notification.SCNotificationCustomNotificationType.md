---
id: "types_notification.SCNotificationCustomNotificationType"
title: "Interface: SCNotificationCustomNotificationType"
sidebar_label: "SCNotificationCustomNotificationType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationCustomNotificationType

Interface SCNotificationCustomNotificationType.
CustomNotification Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationCustomNotificationType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:128](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L128)

___

### custom\_notification

• **custom\_notification**: [`SCCustomNotificationType`](types_customNotification.SCCustomNotificationType.md)

Custom notification data

#### Defined in

[types/notification.ts:492](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L492)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:113](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L113)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L118)

___

### type

• **type**: [`CUSTOM_NOTIFICATION`](../enums/types_notification.SCNotificationTypologyType.md#custom_notification)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:482](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L482)

___

### user

• **user**: [`SCUserType`](types_user.SCUserType.md)

User generate the custom notification

#### Defined in

[types/notification.ts:487](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L487)
