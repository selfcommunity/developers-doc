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

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L127)

___

### custom\_notification

• **custom\_notification**: [`SCCustomNotificationType`](types_customNotification.SCCustomNotificationType.md)

Custom notification data

#### Defined in

[types/notification.ts:491](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L491)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:112](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L112)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:117](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L117)

___

### type

• **type**: [`CUSTOM_NOTIFICATION`](../enums/types_notification.SCNotificationTypologyType.md#custom_notification)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:481](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L481)

___

### user

• **user**: [`SCUserType`](types_user.SCUserType.md)

User generate the custom notification

#### Defined in

[types/notification.ts:486](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L486)
