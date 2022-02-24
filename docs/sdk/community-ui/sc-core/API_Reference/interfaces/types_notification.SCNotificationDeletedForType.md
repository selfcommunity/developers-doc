---
id: "types_notification.SCNotificationDeletedForType"
title: "Interface: SCNotificationDeletedForType"
sidebar_label: "SCNotificationDeletedForType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationDeletedForType

Interface SCNotificationDeletedForType.
Deleted for Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationDeletedForType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• `Optional` **comment**: [`SCCommentType`](types_comment.SCCommentType)

If a status is deleted

#### Defined in

[types/notification.ts:414](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L414)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType)

If a discussion is deleted

#### Defined in

[types/notification.ts:399](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L399)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L119)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType)

If a post is deleted

#### Defined in

[types/notification.ts:404](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L404)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L124)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType)

If a comment is deleted

#### Defined in

[types/notification.ts:409](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L409)

___

### type

• **type**: [`DELETED_FOR_ADVERTISING`](../enums/types_notification.SCNotificationTypologyType#deleted_for_advertising) \| [`DELETED_FOR_AGGRESSIVE`](../enums/types_notification.SCNotificationTypologyType#deleted_for_aggressive) \| [`DELETED_FOR_VULGAR`](../enums/types_notification.SCNotificationTypologyType#deleted_for_vulgar) \| [`DELETED_FOR_POOR`](../enums/types_notification.SCNotificationTypologyType#deleted_for_poor) \| [`DELETED_FOR_OFFTOPIC`](../enums/types_notification.SCNotificationTypologyType#deleted_for_offtopic)

Type Deleted for

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:389](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L389)
