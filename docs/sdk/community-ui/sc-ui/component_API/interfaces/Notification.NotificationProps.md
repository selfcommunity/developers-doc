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

[packages/sc-ui/src/components/Notification/Notification.tsx:107](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L107)

___

### id

• `Optional` **id**: `string`

Id of the UserNotification

**`default`** `notification_<notificationObject.sid>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:101](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L101)

___

### key

• **key**: `number`

The obj key

#### Overrides

CardProps.key

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:130](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L130)

___

### notificationObject

• **notificationObject**: `SCNotificationAggregatedType`

Notification obj

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:113](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L113)

___

### showMaxAggregated

• `Optional` **showMaxAggregated**: `number`

The max n of results uncollapsed shown

**`default`** 2

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:125](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L125)

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

[packages/sc-ui/src/components/Notification/Notification.tsx:119](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Notification/Notification.tsx#L119)
