---
id: "types_notification.SCNotificationBlockedUserType"
title: "Interface: SCNotificationBlockedUserType"
sidebar_label: "SCNotificationBlockedUserType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationBlockedUserType

Interface SCNotificationBlockedUserType.
Blocked User Notification Schema.

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationBlockedUserType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L134)

___

### blocked\_settings

• **blocked\_settings**: [`SCUserBlockedSettingsType`](types_user.SCUserBlockedSettingsType.md)

Data of user block

#### Defined in

[types/notification.ts:308](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L308)

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

• **type**: [`BLOCKED_USER`](../enums/types_notification.SCNotificationTypologyType.md#blocked_user)

Type Blocked User

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:303](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L303)
