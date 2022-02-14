---
id: "SCSessionType"
title: "Interface: SCSessionType"
sidebar_label: "SCSessionType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### authToken

• `Optional` **authToken**: [`SCAuthTokenType`](SCAuthTokenType)

Access Token.

#### Defined in

[types/context.ts:263](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L263)

___

### clientId

• `Optional` **clientId**: `string`

ClientID: only for OAuth.

#### Defined in

[types/context.ts:258](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L258)

___

### type

• **type**: `string`

Session types: OAuth, JWT, Cookies.

#### Defined in

[types/context.ts:253](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L253)

## Methods

### handleRefreshToken

▸ `Optional` **handleRefreshToken**(`currentSession`): `Promise`<[`SCAuthTokenType`](SCAuthTokenType)\>

Callback to refresh the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentSession` | `any` |

#### Returns

`Promise`<[`SCAuthTokenType`](SCAuthTokenType)\>

#### Defined in

[types/context.ts:268](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L268)
