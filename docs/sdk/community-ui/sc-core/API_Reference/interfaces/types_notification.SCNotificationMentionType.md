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

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L127)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If user is mentioned in a comment

#### Defined in

[types/notification.ts:174](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L174)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If user is mentioned in a discussion

#### Defined in

[types/notification.ts:159](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L159)

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

If the user is mentioned in a post

#### Defined in

[types/notification.ts:164](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L164)

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

If user is mentioned in a status

#### Defined in

[types/notification.ts:169](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L169)

___

### type

• **type**: [`MENTION`](../enums/types_notification.SCNotificationTypologyType.md#mention)

Type Mention

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:154](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L154)
