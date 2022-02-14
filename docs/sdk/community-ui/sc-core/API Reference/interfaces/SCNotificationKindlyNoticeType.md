---
id: "SCNotificationKindlyNoticeType"
title: "Interface: SCNotificationKindlyNoticeType"
sidebar_label: "SCNotificationKindlyNoticeType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCNotificationType`](SCNotificationType)

  ↳ **`SCNotificationKindlyNoticeType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](SCNotificationType).[active_at](SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• `Optional` **comment**: [`SCCommentType`](SCCommentType)

If the contribute is a comment

#### Defined in

[types/notification.ts:356](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L356)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](SCFeedDiscussionType)

If the contribute is a discussion

#### Defined in

[types/notification.ts:341](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L341)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](SCNotificationType).[is_new](SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L119)

___

### post

• `Optional` **post**: [`SCFeedPostType`](SCFeedPostType)

If the contribute is a post

#### Defined in

[types/notification.ts:346](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L346)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](SCNotificationType).[sid](SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L124)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](SCFeedObjectType)

If the contribute is a status

#### Defined in

[types/notification.ts:351](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L351)

___

### type

• **type**: [`KINDLY_NOTICE_ADVERTISING`](../enums/SCNotificationTypologyType#kindly_notice_advertising) \| [`KINDLY_NOTICE_AGGRESSIVE`](../enums/SCNotificationTypologyType#kindly_notice_aggressive) \| [`KINDLY_NOTICE_VULGAR`](../enums/SCNotificationTypologyType#kindly_notice_vulgar) \| [`KINDLY_NOTICE_POOR`](../enums/SCNotificationTypologyType#kindly_notice_poor) \| [`KINDLY_NOTICE_OFFTOPIC`](../enums/SCNotificationTypologyType#kindly_notice_offtopic) \| [`KINDLY_NOTICE_FLAG`](../enums/SCNotificationTypologyType#kindly_notice_flag)

Type Kindly Notice User

#### Overrides

[SCNotificationType](SCNotificationType).[type](SCNotificationType#type)

#### Defined in

[types/notification.ts:330](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L330)
