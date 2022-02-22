---
id: "types_notification.SCNotificationUserFollowType"
title: "Interface: SCNotificationUserFollowType"
sidebar_label: "SCNotificationUserFollowType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationUserFollowType

Interface SCNotificationUserFollowType.
User Follow Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationUserFollowType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/notification.ts#L134)

___

### follower

• **follower**: [`SCUserType`](types_user.SCUserType)

Follower

#### Defined in

[types/notification.ts:461](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/notification.ts#L461)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`USER_FOLLOW`](../enums/types_notification.SCNotificationTypologyType#user_follow)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:456](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/notification.ts#L456)