---
id: "types_context.SCConnectionsManagerType"
title: "Interface: SCConnectionsManagerType"
sidebar_label: "SCConnectionsManagerType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCConnectionsManagerType

## Properties

### connections

• **connections**: `number`[]

List of all users in relations(social graph) with authenticated user

#### Defined in

[types/context.ts:200](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L200)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:205](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L205)

## Methods

### acceptConnection

▸ `Optional` **acceptConnection**(`user`): `Promise`<`any`\>

Handle accept connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:220](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L220)

___

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:235](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L235)

___

### isLoading

▸ **isLoading**(`user`): `boolean`

List of current users in loading state

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:210](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L210)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh connections status

#### Returns

`void`

#### Defined in

[types/context.ts:230](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L230)

___

### requestConnection

▸ `Optional` **requestConnection**(`user`): `Promise`<`any`\>

Handle request connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:215](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L215)

___

### status

▸ `Optional` **status**(`user`): `string`

Check user status

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`string`

#### Defined in

[types/context.ts:225](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L225)
