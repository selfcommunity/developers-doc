---
id: "SCSettingsType"
title: "Interface: SCSettingsType"
sidebar_label: "SCSettingsType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### contextProviders

• `Optional` **contextProviders**: (`children`: `any`) => `Element`[]

List of SC context providers to override the default value
Default context providers:
SCPreferencesProvider, SCRoutingProvider, SCUserProvider,
SCNotificationProvider, SCThemeProvider, SCLocaleProvider,
SCPreferencesProvider,

#### Defined in

[types/context.ts:52](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L52)

___

### locale

• `Optional` **locale**: `SCLocaleType`

i18n. Locale: it, en, etc...

#### Defined in

[types/context.ts:17](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L17)

___

### notifications

• `Optional` **notifications**: `SCNotificationsType`

Object conf of notification.

#### Defined in

[types/context.ts:37](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L37)

___

### portal

• **portal**: `string`

Portal.

#### Defined in

[types/context.ts:12](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L12)

___

### router

• `Optional` **router**: `SCRoutingType`

Object conf of router.

#### Defined in

[types/context.ts:32](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L32)

___

### session

• **session**: [`SCSessionType`](SCSessionType)

Object conf of session.

#### Defined in

[types/context.ts:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L22)

___

### theme

• `Optional` **theme**: `Record`<`string`, `any`\>

Object conf of session.

#### Defined in

[types/context.ts:27](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L27)

## Methods

### handleAnonymousAction

▸ `Optional` **handleAnonymousAction**(): `void`

Callback to handle anonymous action
Ex. an anonymous user attempt to post a comment

#### Returns

`void`

#### Defined in

[types/context.ts:43](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L43)
