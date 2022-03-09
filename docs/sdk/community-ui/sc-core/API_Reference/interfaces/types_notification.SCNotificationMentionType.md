---
id: "types_notification.SCNotificationMentionType"
title: "Interface: SCNotificationMentionType"
sidebar_label: "SCNotificationMentionType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationMentionType

Interface SCNotificationMentionType.
Mention Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationMentionType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If user is mentioned in a comment

#### Defined in

[types/notification.ts:181](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L181)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If user is mentioned in a discussion

#### Defined in

[types/notification.ts:166](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L166)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L119)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

If the user is mentioned in a post

#### Defined in

[types/notification.ts:171](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L171)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L124)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

If user is mentioned in a status

#### Defined in

[types/notification.ts:176](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L176)

___

### type

• **type**: [`MENTION`](../enums/types_notification.SCNotificationTypologyType.md#mention)

Type Mention

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:161](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/notification.ts#L161)