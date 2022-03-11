---
id: "types_notification.SCNotificationFollowType"
title: "Interface: SCNotificationFollowType"
sidebar_label: "SCNotificationFollowType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationFollowType

Interface SCNotificationFollowType.
Follow Notification Schema.
(discussion, post, status)

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationFollowType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L127)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

If user is mentioned in a discussion

#### Defined in

[types/notification.ts:239](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L239)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:112](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L112)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

If the user is mentioned in a post

#### Defined in

[types/notification.ts:244](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L244)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:117](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L117)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

If user is mentioned in a status

#### Defined in

[types/notification.ts:249](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L249)

___

### type

• **type**: [`FOLLOW`](../enums/types_notification.SCNotificationTypologyType.md#follow)

Type Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:234](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L234)
