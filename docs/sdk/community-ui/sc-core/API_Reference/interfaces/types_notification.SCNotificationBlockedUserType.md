---
id: "types_notification.SCNotificationBlockedUserType"
title: "Interface: SCNotificationBlockedUserType"
sidebar_label: "SCNotificationBlockedUserType"
custom_edit_url: null
---

[types/notification](../modules/types_notification).SCNotificationBlockedUserType

Interface SCNotificationBlockedUserType.
Blocked User Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType)

  ↳ **`SCNotificationBlockedUserType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[active_at](types_notification.SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L134)

___

### blocked\_settings

• **blocked\_settings**: [`SCUserBlockedSettingsType`](types_user.SCUserBlockedSettingsType)

Data of user block

#### Defined in

[types/notification.ts:308](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L308)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[is_new](types_notification.SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType).[sid](types_notification.SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`BLOCKED_USER`](../enums/types_notification.SCNotificationTypologyType#blocked_user)

Type Blocked User

#### Overrides

[SCNotificationType](types_notification.SCNotificationType).[type](types_notification.SCNotificationType#type)

#### Defined in

[types/notification.ts:303](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-core/src/types/notification.ts#L303)
