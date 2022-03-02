---
id: "types_notification.SCNotificationAggregatedType"
title: "Interface: SCNotificationAggregatedType"
sidebar_label: "SCNotificationAggregatedType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationAggregatedType

Interface SCNotificationAggregatedType.
Notification aggregated Schema.

## Properties

### aggregated

• **aggregated**: [`SCNotificationType`](types_notification.SCNotificationType)[]

List of aggregated notifications by type.
Types Object: NotificationTypeComment, NotificationTypeMention,
NotificationTypeConnectionAccept, NotificationTypeConnectionRequest,
NotificationTypePrivateMessage, NotificationTypeFollow, NotificationTypeVoteUp,
NotificationTypeBlockedUser, NotificationTypeUnBlockedUser,
NotificationTypeKindlyNotice, NotificationTypeCollapsedFor,
NotificationTypeDeletedFor, NotificationTypeCustomNotification

#### Defined in

[types/notification.ts:108](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L108)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType)

Primary object involved (object that is common to notifications group)
if it is a discusssion. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:85](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L85)

___

### is\_new

• **is\_new**: `boolean`

It's true if in the aggregated group there is at least one
notification not yet seen by the user making the request

#### Defined in

[types/notification.ts:79](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L79)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType)

Primary object involved (object that is common to notifications group)
if it is a post. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:91](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L91)

___

### sid

• **sid**: `string`

Serialization id of the macro notification aggregate block

#### Defined in

[types/notification.ts:73](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L73)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType)

Primary object involved (object that is common to notifications group)
if it is a status. For some types of notifications it will not be present.

#### Defined in

[types/notification.ts:97](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L97)
