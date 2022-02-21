---
id: "types_notification.SCNotificationConnectionAcceptType"
title: "Interface: SCNotificationConnectionAcceptType"
sidebar_label: "SCNotificationConnectionAcceptType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationConnectionAcceptType

Interface SCNotificationConnectionAcceptType.
Connection Accept Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationConnectionAcceptType`**

## Properties

### accept\_user

• **accept\_user**: [`SCUserType`](types_user.SCUserType)

User accepted the connection request

#### Defined in

[types/notification.ts:213](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/types/notification.ts#L213)

___

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/types/notification.ts#L134)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`CONNECTION_ACCEPT`](../enums/types_notification.SCNotificationTypologyType#connection_accept)

Type Connection accept

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:208](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/types/notification.ts#L208)
