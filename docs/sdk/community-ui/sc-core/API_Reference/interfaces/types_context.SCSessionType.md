---
id: "types_context.SCSessionType"
title: "Interface: SCSessionType"
sidebar_label: "SCSessionType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCSessionType

Interface SCSessionType

## Properties

### authToken

• `Optional` **authToken**: [`SCAuthTokenType`](types_context.SCAuthTokenType.md)

Access Token.

#### Defined in

[types/context.ts:258](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/context.ts#L258)

___

### clientId

• `Optional` **clientId**: `string`

ClientID: only for OAuth.

#### Defined in

[types/context.ts:253](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/context.ts#L253)

___

### type

• **type**: `string`

Session types: OAuth, JWT, Cookies.

#### Defined in

[types/context.ts:248](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/context.ts#L248)

## Methods

### handleRefreshToken

▸ `Optional` **handleRefreshToken**(`currentSession`): `Promise`<[`SCAuthTokenType`](types_context.SCAuthTokenType.md)\>

Callback to refresh the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentSession` | `any` |

#### Returns

`Promise`<[`SCAuthTokenType`](types_context.SCAuthTokenType.md)\>

#### Defined in

[types/context.ts:263](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-core/src/types/context.ts#L263)