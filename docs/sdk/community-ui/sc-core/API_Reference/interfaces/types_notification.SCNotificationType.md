---
id: "types_notification.SCNotificationType"
title: "Interface: SCNotificationType"
sidebar_label: "SCNotificationType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationType

Interface SCNotificationType.
Notification Schema.

## Hierarchy

- **`SCNotificationType`**

  ↳ [`SCNotificationCommentType`](types_notification.SCNotificationCommentType.md)

  ↳ [`SCNotificationMentionType`](types_notification.SCNotificationMentionType.md)

  ↳ [`SCNotificationConnectionRequestType`](types_notification.SCNotificationConnectionRequestType.md)

  ↳ [`SCNotificationConnectionAcceptType`](types_notification.SCNotificationConnectionAcceptType.md)

  ↳ [`SCNotificationPrivateMessageType`](types_notification.SCNotificationPrivateMessageType.md)

  ↳ [`SCNotificationFollowType`](types_notification.SCNotificationFollowType.md)

  ↳ [`SCNotificationVoteUpType`](types_notification.SCNotificationVoteUpType.md)

  ↳ [`SCNotificationBlockedUserType`](types_notification.SCNotificationBlockedUserType.md)

  ↳ [`SCNotificationUnBlockedUserType`](types_notification.SCNotificationUnBlockedUserType.md)

  ↳ [`SCNotificationKindlyNoticeType`](types_notification.SCNotificationKindlyNoticeType.md)

  ↳ [`SCNotificationCollapsedForType`](types_notification.SCNotificationCollapsedForType.md)

  ↳ [`SCNotificationDeletedForType`](types_notification.SCNotificationDeletedForType.md)

  ↳ [`SCNotificationUnDeletedForType`](types_notification.SCNotificationUnDeletedForType.md)

  ↳ [`SCNotificationUserFollowType`](types_notification.SCNotificationUserFollowType.md)

  ↳ [`SCNotificationIncubatorType`](types_notification.SCNotificationIncubatorType.md)

  ↳ [`SCNotificationCustomNotificationType`](types_notification.SCNotificationCustomNotificationType.md)

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Defined in

[types/notification.ts:127](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L127)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Defined in

[types/notification.ts:112](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L112)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Defined in

[types/notification.ts:117](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L117)

___

### type

• **type**: [`SCNotificationTypologyType`](../enums/types_notification.SCNotificationTypologyType.md)

Type of the notification

#### Defined in

[types/notification.ts:122](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/notification.ts#L122)
