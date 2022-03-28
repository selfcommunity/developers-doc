---
id: "types_notification.SCNotificationCommentType"
title: "Interface: SCNotificationCommentType"
sidebar_label: "SCNotificationCommentType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationCommentType

Interface SCNotificationCommentType.
Comment Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationCommentType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

Comment of first/second level

#### Defined in

[types/notification.ts:145](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L145)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L119)

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

• **type**: [`COMMENT`](../enums/types_notification.SCNotificationTypologyType.md#comment) \| [`NESTED_COMMENT`](../enums/types_notification.SCNotificationTypologyType.md#nested_comment)

Type Comment or Nested_comment

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:150](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/notification.ts#L150)
