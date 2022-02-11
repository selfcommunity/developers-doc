---
id: "SCNotificationCustomNotificationType"
title: "Interface: SCNotificationCustomNotificationType"
sidebar_label: "SCNotificationCustomNotificationType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCNotificationType`](SCNotificationType)

  ↳ **`SCNotificationCustomNotificationType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](SCNotificationType).[active_at](SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L134)

___

### custom\_notification

• **custom\_notification**: [`SCCustomNotificationType`](SCCustomNotificationType)

Custom notification data

#### Defined in

[types/notification.ts:498](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L498)

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

• **type**: [`CUSTOM_NOTIFICATION`](../enums/SCNotificationTypologyType#custom_notification)

Type User Follow

#### Overrides

[SCNotificationType](SCNotificationType).[type](SCNotificationType#type)

#### Defined in

[types/notification.ts:488](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L488)

___

### user

• **user**: [`SCUserType`](SCUserType)

User generate the custom notification

#### Defined in

[types/notification.ts:493](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L493)
