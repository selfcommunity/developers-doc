---
id: "SCConnectionsManagerType"
title: "Interface: SCConnectionsManagerType"
sidebar_label: "SCConnectionsManagerType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### connections

• **connections**: `number`[]

List of all users in relations(social graph) with authenticated user

#### Defined in

[types/context.ts:208](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L208)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:213](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L213)

## Methods

### acceptConnection

▸ `Optional` **acceptConnection**(`user`): `Promise`<`any`\>

Handle accept connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](SCUserType) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:228](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L228)

___

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:243](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L243)

___

### isLoading

▸ **isLoading**(`user`): `boolean`

List of current users in loading state

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](SCUserType) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:218](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L218)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh connections status

#### Returns

`void`

#### Defined in

[types/context.ts:238](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L238)

___

### requestConnection

▸ `Optional` **requestConnection**(`user`): `Promise`<`any`\>

Handle request connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](SCUserType) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:223](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L223)

___

### status

▸ `Optional` **status**(`user`): `string`

Check user status

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](SCUserType) |

#### Returns

`string`

#### Defined in

[types/context.ts:233](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/context.ts#L233)
