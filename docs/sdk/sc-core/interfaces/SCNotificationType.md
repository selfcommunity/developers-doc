---
id: "SCNotificationType"
title: "Interface: SCNotificationType"
sidebar_label: "SCNotificationType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- **`SCNotificationType`**

  ↳ [`SCNotificationCommentType`](SCNotificationCommentType)

  ↳ [`SCNotificationConnectionAcceptType`](SCNotificationConnectionAcceptType)

  ↳ [`SCNotificationConnectionRequestType`](SCNotificationConnectionRequestType)

  ↳ [`SCNotificationPrivateMessageType`](SCNotificationPrivateMessageType)

  ↳ [`SCNotificationMentionType`](SCNotificationMentionType)

  ↳ [`SCNotificationBlockedUserType`](SCNotificationBlockedUserType)

  ↳ [`SCNotificationCollapsedForType`](SCNotificationCollapsedForType)

  ↳ [`SCNotificationCustomNotificationType`](SCNotificationCustomNotificationType)

  ↳ [`SCNotificationDeletedForType`](SCNotificationDeletedForType)

  ↳ [`SCNotificationFollowType`](SCNotificationFollowType)

  ↳ [`SCNotificationKindlyNoticeType`](SCNotificationKindlyNoticeType)

  ↳ [`SCNotificationUnBlockedUserType`](SCNotificationUnBlockedUserType)

  ↳ [`SCNotificationUnDeletedForType`](SCNotificationUnDeletedForType)

  ↳ [`SCNotificationUserFollowType`](SCNotificationUserFollowType)

  ↳ [`SCNotificationVoteUpType`](SCNotificationVoteUpType)

  ↳ [`SCNotificationIncubatorType`](SCNotificationIncubatorType)

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L134)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`SCNotificationTypologyType`](../enums/SCNotificationTypologyType)

Type of the notification

#### Defined in

[types/notification.ts:129](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L129)
