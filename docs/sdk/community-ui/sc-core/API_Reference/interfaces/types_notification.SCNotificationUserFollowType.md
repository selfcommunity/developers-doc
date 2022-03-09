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

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L134)

___

### follower

• **follower**: [`SCUserType`](types_user.SCUserType.md)

Follower

#### Defined in

[types/notification.ts:461](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L461)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[is_new](types_notification.SCNotificationType.md#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[sid](types_notification.SCNotificationType.md#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`USER_FOLLOW`](../enums/types_notification.SCNotificationTypologyType.md#user_follow)

Type User Follow

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:456](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L456)
