---
id: "types_notification.SCNotificationVoteUpType"
title: "Interface: SCNotificationVoteUpType"
sidebar_label: "SCNotificationVoteUpType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationVoteUpType

Interface SCNotificationVoteUpType.
VoteUp Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationVoteUpType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If user is mentioned in a comment

#### Defined in

[types/notification.ts:287](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L287)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If user is mentioned in a discussion

#### Defined in

[types/notification.ts:272](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L272)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L119)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

If the user is mentioned in a post

#### Defined in

[types/notification.ts:277](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L277)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L124)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

If user is mentioned in a status

#### Defined in

[types/notification.ts:282](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L282)

___

### type

• **type**: [`VOTE_UP`](../enums/types_notification.SCNotificationTypologyType.md#vote_up)

Type VoteUp

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:267](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L267)

___

### user

• `Optional` **user**: [`SCUserType`](types_user.SCUserType.md)

User voted up

#### Defined in

[types/notification.ts:292](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L292)
