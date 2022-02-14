---
id: "SCNotificationCollapsedForType"
title: "Interface: SCNotificationCollapsedForType"
sidebar_label: "SCNotificationCollapsedForType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCNotificationType`](SCNotificationType)

  ↳ **`SCNotificationCollapsedForType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](SCNotificationType).[active_at](SCNotificationType#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L134)

___

### comment

• **comment**: [`SCCommentType`](SCCommentType)

comment collapsed

#### Defined in

[types/notification.ts:378](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L378)

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

• **type**: [`COLLAPSED_FOR_ADVERTISING`](../enums/SCNotificationTypologyType#collapsed_for_advertising) \| [`COLLAPSED_FOR_AGGRESSIVE`](../enums/SCNotificationTypologyType#collapsed_for_aggressive) \| [`COLLAPSED_FOR_VULGAR`](../enums/SCNotificationTypologyType#collapsed_for_vulgar) \| [`COLLAPSED_FOR_POOR`](../enums/SCNotificationTypologyType#collapsed_for_poor) \| [`COLLAPSED_FOR_OFFTOPIC`](../enums/SCNotificationTypologyType#collapsed_for_offtopic)

Type Kindly Notice User

#### Overrides

[SCNotificationType](SCNotificationType).[type](SCNotificationType#type)

#### Defined in

[types/notification.ts:368](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/notification.ts#L368)
