---
id: "types_notification.SCNotificationDeletedForType"
title: "Interface: SCNotificationDeletedForType"
sidebar_label: "SCNotificationDeletedForType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationDeletedForType

Interface SCNotificationDeletedForType.
Deleted for Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationDeletedForType`**

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

If a status is deleted

#### Defined in

[types/notification.ts:407](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L407)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If a discussion is deleted

#### Defined in

[types/notification.ts:392](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L392)

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

If a post is deleted

#### Defined in

[types/notification.ts:397](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L397)

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

If a comment is deleted

#### Defined in

[types/notification.ts:402](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L402)

___

### type

• **type**: [`DELETED_FOR_ADVERTISING`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_advertising) \| [`DELETED_FOR_AGGRESSIVE`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_aggressive) \| [`DELETED_FOR_VULGAR`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_vulgar) \| [`DELETED_FOR_POOR`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_poor) \| [`DELETED_FOR_OFFTOPIC`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_offtopic)

Type Deleted for

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:382](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/notification.ts#L382)
