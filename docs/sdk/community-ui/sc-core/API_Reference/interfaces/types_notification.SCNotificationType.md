---
id: "types_notification.SCNotificationType"
title: "Interface: SCNotificationType"
sidebar_label: "SCNotificationType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationType

Interface SCNotificationType.
Notification Schema.

## Hierarchy

- **`SCNotificationType`**

  ↳ [`SCNotificationCommentType`](types_notification.SCNotificationCommentType)

  ↳ [`SCNotificationMentionType`](types_notification.SCNotificationMentionType)

  ↳ [`SCNotificationConnectionRequestType`](types_notification.SCNotificationConnectionRequestType)

  ↳ [`SCNotificationConnectionAcceptType`](types_notification.SCNotificationConnectionAcceptType)

  ↳ [`SCNotificationPrivateMessageType`](types_notification.SCNotificationPrivateMessageType)

  ↳ [`SCNotificationFollowType`](types_notification.SCNotificationFollowType)

  ↳ [`SCNotificationVoteUpType`](types_notification.SCNotificationVoteUpType)

  ↳ [`SCNotificationBlockedUserType`](types_notification.SCNotificationBlockedUserType)

  ↳ [`SCNotificationUnBlockedUserType`](types_notification.SCNotificationUnBlockedUserType)

  ↳ [`SCNotificationKindlyNoticeType`](types_notification.SCNotificationKindlyNoticeType)

  ↳ [`SCNotificationCollapsedForType`](types_notification.SCNotificationCollapsedForType)

  ↳ [`SCNotificationDeletedForType`](types_notification.SCNotificationDeletedForType)

  ↳ [`SCNotificationUnDeletedForType`](types_notification.SCNotificationUnDeletedForType)

  ↳ [`SCNotificationUserFollowType`](types_notification.SCNotificationUserFollowType)

  ↳ [`SCNotificationIncubatorType`](types_notification.SCNotificationIncubatorType)

  ↳ [`SCNotificationCustomNotificationType`](types_notification.SCNotificationCustomNotificationType)

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L134)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`SCNotificationTypologyType`](../enums/types_notification.SCNotificationTypologyType)

Type of the notification

#### Defined in

[types/notification.ts:129](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/notification.ts#L129)
