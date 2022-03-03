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

[types/context.ts:203](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L203)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:208](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L208)

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

[types/context.ts:223](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L223)

___

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:238](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L238)

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

[types/context.ts:213](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L213)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh connections status

#### Returns

`void`

#### Defined in

[types/context.ts:233](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L233)

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

[types/context.ts:218](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L218)

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

[types/context.ts:228](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L228)
