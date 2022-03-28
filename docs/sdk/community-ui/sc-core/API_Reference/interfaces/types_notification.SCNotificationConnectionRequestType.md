---
id: "types_notification.SCNotificationConnectionRequestType"
title: "Interface: SCNotificationConnectionRequestType"
sidebar_label: "SCNotificationConnectionRequestType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationConnectionRequestType

Interface SCNotificationConnectionRequestType.
Connection Request Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationConnectionRequestType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L134)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L119)

___

### request\_user

• **request\_user**: [`SCUserType`](types_user.SCUserType.md)

User request the connection

#### Defined in

[types/notification.ts:197](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L197)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`CONNECTION_REQUEST`](../enums/types_notification.SCNotificationTypologyType.md#connection_request)

Type Connection request

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:192](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L192)
