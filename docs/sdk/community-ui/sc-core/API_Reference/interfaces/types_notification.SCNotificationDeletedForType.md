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

[types/notification.ts:128](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L128)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType.md)

If a status is deleted

#### Defined in

[types/notification.ts:408](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L408)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If a discussion is deleted

#### Defined in

[types/notification.ts:393](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L393)

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

If a post is deleted

#### Defined in

[types/notification.ts:398](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L398)

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

If a comment is deleted

#### Defined in

[types/notification.ts:403](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L403)

___

### type

• **type**: [`DELETED_FOR_ADVERTISING`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_advertising) \| [`DELETED_FOR_AGGRESSIVE`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_aggressive) \| [`DELETED_FOR_VULGAR`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_vulgar) \| [`DELETED_FOR_POOR`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_poor) \| [`DELETED_FOR_OFFTOPIC`](../enums/types_notification.SCNotificationTypologyType.md#deleted_for_offtopic)

Type Deleted for

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:383](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/types/notification.ts#L383)
