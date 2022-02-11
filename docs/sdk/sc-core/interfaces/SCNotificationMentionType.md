---
id: "SCNotificationMentionType"
title: "Interface: SCNotificationMentionType"
sidebar_label: "SCNotificationMentionType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCNotificationType`](SCNotificationType)

  ↳ **`SCNotificationMentionType`**

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

If user is mentioned in a comment

#### Defined in

[types/notification.ts:181](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L181)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](SCFeedDiscussionType)

If user is mentioned in a discussion

#### Defined in

[types/notification.ts:166](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L166)

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

If the user is mentioned in a post

#### Defined in

[types/notification.ts:171](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L171)

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

If user is mentioned in a status

#### Defined in

[types/notification.ts:176](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L176)

___

### type

• **type**: [`MENTION`](../enums/SCNotificationTypologyType#mention)

Type Mention

#### Overrides

[SCNotificationType](SCNotificationType).[type](SCNotificationType#type)

#### Defined in

[types/notification.ts:161](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L161)
