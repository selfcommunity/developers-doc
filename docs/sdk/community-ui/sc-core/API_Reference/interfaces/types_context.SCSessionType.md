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

[types/context.ts:255](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L255)

___

### clientId

• `Optional` **clientId**: `string`

ClientID: only for OAuth.

#### Defined in

[types/context.ts:250](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L250)

___

### type

• **type**: `string`

Session types: OAuth, JWT, Cookies.

#### Defined in

[types/context.ts:245](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L245)

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

[types/context.ts:260](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L260)
