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

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If a status is undeleted

#### Defined in

[types/notification.ts:445](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L445)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If a discussion is undeleted

#### Defined in

[types/notification.ts:430](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L430)

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

If a post is undeleted

#### Defined in

[types/notification.ts:435](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L435)

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

If a comment is undeleted

#### Defined in

[types/notification.ts:440](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L440)

___

### type

• **type**: [`UNDELETED_FOR`](../enums/types_notification.SCNotificationTypologyType.md#undeleted_for)

Type Undeleted for

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:425](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L425)
