---
id: "SCNotificationBlockedUserType"
title: "Interface: SCNotificationBlockedUserType"
sidebar_label: "SCNotificationBlockedUserType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCNotificationType`](SCNotificationType)

  ↳ **`SCNotificationBlockedUserType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](SCNotificationType).[active_at](SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L134)

___

### blocked\_settings

• **blocked\_settings**: `SCUserBlockedSettingsType`

Data of user block

#### Defined in

[types/notification.ts:308](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L308)

___

### is\_new

• **is\_new**: `boolean`

True if the notification has been read, otherwise false

#### Inherited from

[SCNotificationType](SCNotificationType).[is_new](SCNotificationType#is_new)

#### Defined in

[types/notification.ts:119](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L119)

___

### sid

• **sid**: `string`

Serialization id of the single notification

#### Inherited from

[SCNotificationType](SCNotificationType).[sid](SCNotificationType#sid)

#### Defined in

[types/notification.ts:124](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L124)

___

### type

• **type**: [`BLOCKED_USER`](../enums/SCNotificationTypologyType#blocked_user)

Type Blocked User

#### Overrides

[SCNotificationType](SCNotificationType).[type](SCNotificationType#type)

#### Defined in

[types/notification.ts:303](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L303)
