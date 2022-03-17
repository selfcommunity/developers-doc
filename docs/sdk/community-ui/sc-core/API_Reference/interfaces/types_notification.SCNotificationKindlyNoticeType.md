---
id: "types_notification.SCNotificationKindlyNoticeType"
title: "Interface: SCNotificationKindlyNoticeType"
sidebar_label: "SCNotificationKindlyNoticeType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationKindlyNoticeType

Interface SCNotificationKindlyNoticeType.
Kindly notice User Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationKindlyNoticeType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L127)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If the contribute is a comment

#### Defined in

[types/notification.ts:349](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L349)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If the contribute is a discussion

#### Defined in

[types/notification.ts:334](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L334)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:112](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L112)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

If the contribute is a post

#### Defined in

[types/notification.ts:339](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L339)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:117](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L117)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

If the contribute is a status

#### Defined in

[types/notification.ts:344](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L344)

___

### type

• **type**: [`KINDLY_NOTICE_ADVERTISING`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_advertising) \| [`KINDLY_NOTICE_AGGRESSIVE`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_aggressive) \| [`KINDLY_NOTICE_VULGAR`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_vulgar) \| [`KINDLY_NOTICE_POOR`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_poor) \| [`KINDLY_NOTICE_OFFTOPIC`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_offtopic) \| [`KINDLY_NOTICE_FLAG`](../enums/types_notification.SCNotificationTypologyType.md#kindly_notice_flag)

Type Kindly Notice User

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:323](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L323)
