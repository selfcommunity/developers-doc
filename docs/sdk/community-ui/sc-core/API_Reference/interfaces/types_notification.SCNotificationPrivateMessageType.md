---
id: "types_notification.SCNotificationPrivateMessageType"
title: "Interface: SCNotificationPrivateMessageType"
sidebar_label: "SCNotificationPrivateMessageType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationPrivateMessageType

Interface SCNotificationPrivateMessageType.
Private Message Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationPrivateMessageType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:128](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L128)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:113](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L113)

___

### message

• **message**: [`SCPrivateMessageType`](types_privateMessage.SCPrivateMessageType.md)

Private message

#### Defined in

[types/notification.ts:223](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L223)

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

• **type**: [`PRIVATE_MESSAGE`](../enums/types_notification.SCNotificationTypologyType.md#private_message)

Type Private message

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:218](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L218)
