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

[packages/sc-ui/src/components/Notification/Notification.tsx:109](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L109)

___

### id

• `Optional` **id**: `string`

Id of the UserNotification

**`default`** `notification_<notificationObject.sid>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:103](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L103)

___

### key

• **key**: `number`

The obj key

#### Overrides

CardProps.key

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:132](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L132)

___

### notificationObject

• **notificationObject**: `SCNotificationAggregatedType`

Notification obj

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:115](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L115)

___

### showMaxAggregated

• `Optional` **showMaxAggregated**: `number`

The max n of results uncollapsed shown

**`default`** 2

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:127](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L127)

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

[packages/sc-ui/src/components/Notification/Notification.tsx:121](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Notification/Notification.tsx#L121)
