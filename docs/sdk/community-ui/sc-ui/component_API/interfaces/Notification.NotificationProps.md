---
id: "Notification.NotificationProps"
title: "Interface: NotificationProps"
sidebar_label: "NotificationProps"
custom_edit_url: null
---

[Notification](../modules/Notification.md).NotificationProps

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

[packages/sc-ui/src/components/Notification/Notification.tsx:100](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L100)

___

### id

• `Optional` **id**: `string`

Id of the UserNotification

**`default`** `notification_<notificationObject.sid>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:94](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L94)

___

### key

• **key**: `number`

The obj key

#### Overrides

CardProps.key

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:123](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L123)

___

### notificationObject

• **notificationObject**: `SCNotificationAggregatedType`

Notification obj

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:106](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L106)

___

### showMaxAggregated

• `Optional` **showMaxAggregated**: `number`

The max n of results shown

**`default`** 2

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:118](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L118)

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

[packages/sc-ui/src/components/Notification/Notification.tsx:112](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Notification/Notification.tsx#L112)
