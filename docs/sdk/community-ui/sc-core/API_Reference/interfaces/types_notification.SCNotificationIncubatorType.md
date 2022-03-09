---
id: "types_notification.SCNotificationIncubatorType"
title: "Interface: SCNotificationIncubatorType"
sidebar_label: "SCNotificationIncubatorType"
custom_edit_url: null
---

[types/notification](../modules/types_notification.md).SCNotificationIncubatorType

Interface SCNotificationIncubatorType.
The incubator proposed by the user has been approved

## Hierarchy

- [`SCNotificationType`](types_notification.SCNotificationType.md)

  ↳ **`SCNotificationIncubatorType`**

## Properties

### active\_at

• **active\_at**: `Date`

Time when the notification was generated

#### Inherited from

[SCNotificationType](types_notification.SCNotificationType.md).[active_at](types_notification.SCNotificationType.md#active_at)

#### Defined in

[types/notification.ts:134](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L134)

___

### incubator

• **incubator**: [`SCIncubatorType`](types_incubator.SCIncubatorType.md)

Incubator

#### Defined in

[types/notification.ts:477](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L477)

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

• **type**: [`INCUBATOR_APPROVED`](../enums/types_notification.SCNotificationTypologyType.md#incubator_approved)

Type Incubator Approved

#### Overrides

[SCNotificationType](types_notification.SCNotificationType.md).[type](types_notification.SCNotificationType.md#type)

#### Defined in

[types/notification.ts:472](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/notification.ts#L472)
