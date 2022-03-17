---
id: "types_notification.SCNotificationConnectionAcceptType"
title: "Interface: SCNotificationConnectionAcceptType"
sidebar_label: "SCNotificationConnectionAcceptType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationConnectionAcceptType

Interface SCNotificationConnectionAcceptType.
Connection Accept Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationConnectionAcceptType`**

## Properties

### accept\_user

• **accept\_user**: [`SCUserType`](types_user.SCUserType.md)

User accepted the connection request

#### Defined in

[types/notification.ts:206](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L206)

___

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L127)

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

• **type**: [`CONNECTION_ACCEPT`](../enums/types_notification.SCNotificationTypologyType.md#connection_accept)

Type Connection accept

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:201](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L201)
