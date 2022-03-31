---
id: "types_notification.SCNotificationUserFollowType"
title: "Interface: SCNotificationUserFollowType"
sidebar_label: "SCNotificationUserFollowType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationUserFollowType

Interface SCNotificationUserFollowType.
User Follow Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationUserFollowType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:128](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L128)

___

### follower

• **follower**: [`SCUserType`](types_user.SCUserType.md)

Follower

#### Defined in

[types/notification.ts:455](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L455)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:113](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L113)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L118)

___

### type

• **type**: [`USER_FOLLOW`](../enums/types_notification.SCNotificationTypologyType.md#user_follow)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:450](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/notification.ts#L450)
