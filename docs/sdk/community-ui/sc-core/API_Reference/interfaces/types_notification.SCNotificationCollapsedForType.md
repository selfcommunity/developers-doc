---
id: "types_notification.SCNotificationCollapsedForType"
title: "Interface: SCNotificationCollapsedForType"
sidebar_label: "SCNotificationCollapsedForType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationCollapsedForType

Interface SCNotificationCollapsedForType.
Collapsed for Notification Schema.
Only for comments.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationCollapsedForType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:128](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L128)

___

### comment

• **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

comment collapsed

#### Defined in

[types/notification.ts:372](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L372)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:113](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L113)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:118](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L118)

___

### type

• **type**: [`COLLAPSED_FOR_ADVERTISING`](../enums/types_notification.SCNotificationTypologyType.md#collapsed_for_advertising) \| [`COLLAPSED_FOR_AGGRESSIVE`](../enums/types_notification.SCNotificationTypologyType.md#collapsed_for_aggressive) \| [`COLLAPSED_FOR_VULGAR`](../enums/types_notification.SCNotificationTypologyType.md#collapsed_for_vulgar) \| [`COLLAPSED_FOR_POOR`](../enums/types_notification.SCNotificationTypologyType.md#collapsed_for_poor) \| [`COLLAPSED_FOR_OFFTOPIC`](../enums/types_notification.SCNotificationTypologyType.md#collapsed_for_offtopic)

Type Kindly Notice User

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:362](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L362)
