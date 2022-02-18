---
id: "Notification.NotificationProps"
title: "Interface: NotificationProps"
sidebar_label: "NotificationProps"
custom_edit_url: null
---

[Notification](../modules/Notification).NotificationProps

## Hierarchy

- `CardProps`

  ↳ **`NotificationProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:102](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L102)

___

### id

• `Optional` **id**: `string`

Id of the UserNotification

**`default`** `notification_<notificationObject.sid>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:96](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L96)

___

### key

• **key**: `number`

The obj key

#### Overrides

CardProps.key

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:125](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L125)

___

### notificationObject

• **notificationObject**: `SCNotificationAggregatedType`

Notification obj

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:108](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L108)

___

### showMaxAggregated

• `Optional` **showMaxAggregated**: `number`

The max n of results shown

**`default`** 2

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:120](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L120)

## Methods

### handleCustomNotification

▸ `Optional` **handleCustomNotification**(`data`): `Element`

Handle custom notification

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Element`

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:114](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Notification/Notification.tsx#L114)
