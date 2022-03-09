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

[types/context.ts:209](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L209)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:214](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L214)

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

[types/context.ts:229](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L229)

___

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:244](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L244)

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

[types/context.ts:219](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L219)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh connections status

#### Returns

`void`

#### Defined in

[types/context.ts:239](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L239)

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

[types/context.ts:224](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L224)

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

[types/context.ts:234](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/context.ts#L234)
