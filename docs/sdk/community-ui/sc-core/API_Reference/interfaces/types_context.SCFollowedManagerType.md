---
id: "types_context.SCFollowedManagerType"
title: "Interface: SCFollowedManagerType"
sidebar_label: "SCFollowedManagerType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCFollowedManagerType

## Properties

### followed

• **followed**: `number`[]

List of all user ids followed by the authenticated user

#### Defined in

[types/context.ts:126](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L126)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:131](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L131)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all followed

#### Returns

`void`

#### Defined in

[types/context.ts:156](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L156)

___

### follow

▸ `Optional` **follow**(`user`): `Promise`<`any`\>

Handle user follow/unfollow user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:141](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L141)

___

### isFollowed

▸ `Optional` **isFollowed**(`user`): `boolean`

Handle check if a user follow a user, caching data

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType.md) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:146](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L146)

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

[types/context.ts:136](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L136)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh followed

#### Returns

`void`

#### Defined in

[types/context.ts:151](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L151)
