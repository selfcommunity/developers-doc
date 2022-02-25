---
id: "types_notification.SCNotificationUnBlockedUserType"
title: "Interface: SCNotificationUnBlockedUserType"
sidebar_label: "SCNotificationUnBlockedUserType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationUnBlockedUserType

Interface SCNotificationUnBlockedUserType.
UnBlocked User Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationUnBlockedUserType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-core/src/types/notification.ts#L134)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`UNBLOCKED_USER`](../enums/types_notification.SCNotificationTypologyType#unblocked_user)

Type UnBlocked User

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:319](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-core/src/types/notification.ts#L319)
