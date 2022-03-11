---
id: "types_notification.SCNotificationAggregatedType"
title: "Interface: SCNotificationAggregatedType"
sidebar_label: "SCNotificationAggregatedType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationAggregatedType

Interface SCNotificationAggregatedType.
Notification aggregated Schema.

## Properties

### aggregated

• **aggregated**: [`SCNotificationType`](types_notification.SCNotificationType.md)[]

List of aggregated notifications by type.
Types Object: NotificationTypeComment, NotificationTypeMention,
NotificationTypeConnectionAccept, NotificationTypeConnectionRequest,
NotificationTypePrivateMessage, NotificationTypeFollow, NotificationTypeVoteUp,
NotificationTypeBlockedUser, NotificationTypeUnBlockedUser,
NotificationTypeKindlyNotice, NotificationTypeCollapsedFor,
NotificationTypeDeletedFor, NotificationTypeCustomNotification

#### Defined in

[types/notification.ts:101](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L101)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

Primary object involved (object that is common to notifications group)
if it is a discusssion. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:78](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L78)

___

### is\_new

• **is\_new**: `boolean`

It's true if in the aggregated group there is at least one
notification not yet seen by the user making the request

#### Defined in

[types/notification.ts:72](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L72)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

Primary object involved (object that is common to notifications group)
if it is a post. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:84](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L84)

___

### sid

• **sid**: `string`

Serialization id of the macro notification aggregate block

#### Defined in

[types/notification.ts:66](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L66)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

Primary object involved (object that is common to notifications group)
if it is a status. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:90](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L90)
