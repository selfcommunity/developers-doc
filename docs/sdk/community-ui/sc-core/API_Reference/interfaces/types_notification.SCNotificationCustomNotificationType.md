---
id: "types_notification.SCNotificationCustomNotificationType"
title: "Interface: SCNotificationCustomNotificationType"
sidebar_label: "SCNotificationCustomNotificationType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationCustomNotificationType

Interface SCNotificationCustomNotificationType.
CustomNotification Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationCustomNotificationType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L134)

___

### custom\_notification

• **custom\_notification**: [`SCCustomNotificationType`](types_customNotification.SCCustomNotificationType)

Custom notification data

#### Defined in

[types/notification.ts:498](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L498)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`CUSTOM_NOTIFICATION`](../enums/types_notification.SCNotificationTypologyType#custom_notification)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:488](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L488)

___

### user

• **user**: [`SCUserType`](types_user.SCUserType)

User generate the custom notification

#### Defined in

[types/notification.ts:493](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/notification.ts#L493)
