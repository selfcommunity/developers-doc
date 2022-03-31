---
id: "SnippetNotifications.SnippetNotificationsProps"
title: "Interface: SnippetNotificationsProps"
sidebar_label: "SnippetNotificationsProps"
custom_edit_url: null
---

[SnippetNotifications](../modules/SnippetNotifications.md).SnippetNotificationsProps

## Hierarchy

- `CardProps`

  ↳ **`SnippetNotificationsProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### ScrollContainerProps

• `Optional` **ScrollContainerProps**: `Record`<`string`, `any`\>

Props to spread to ScrollContainer component
This lib use 'react-custom-scrollbars' component to perform scrollbars
For more info: https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:115](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L115)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:84](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L84)

___

### id

• `Optional` **id**: `string`

Id of the UserNotification

**`default`** `notification_<notificationObject.sid>`

#### Overrides

CardProps.id

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:78](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L78)

___

### key

• **key**: `number`

The obj key

#### Overrides

CardProps.key

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:107](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L107)

___

### showMax

• `Optional` **showMax**: `number`

The max n of results shown

**`default`** 20

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:102](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L102)

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

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:90](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L90)

___

### handleNotification

▸ `Optional` **handleNotification**(`type`, `data`, `content`): `Element`

Handle single notification
Override content

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `data` | `any` |
| `content` | `any` |

#### Returns

`Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:96](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L96)
