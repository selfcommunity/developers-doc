---
id: "types_notification.SCNotificationUnDeletedForType"
title: "Interface: SCNotificationUnDeletedForType"
sidebar_label: "SCNotificationUnDeletedForType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationUnDeletedForType

Interface SCNotificationUnDeletedForType.
Undeleted for Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationUnDeletedForType`**

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

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If a status is undeleted

#### Defined in

[types/notification.ts:439](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L439)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If a discussion is undeleted

#### Defined in

[types/notification.ts:424](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L424)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:113](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L113)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

If a post is undeleted

#### Defined in

[types/notification.ts:429](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L429)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:118](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L118)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

If a comment is undeleted

#### Defined in

[types/notification.ts:434](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L434)

___

### type

• **type**: [`UNDELETED_FOR`](../enums/types_notification.SCNotificationTypologyType.md#undeleted_for)

Type Undeleted for

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:419](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L419)
