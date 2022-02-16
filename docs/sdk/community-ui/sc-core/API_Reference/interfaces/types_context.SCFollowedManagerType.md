---
id: "types_context.SCFollowedManagerType"
title: "Interface: SCFollowedManagerType"
sidebar_label: "SCFollowedManagerType"
custom_edit_url: null
---

[types/context](../modules/types_context).SCFollowedManagerType

## Properties

### followed

• **followed**: `number`[]

List of all user ids followed by the authenticated user

#### Defined in

[types/context.ts:134](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L134)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:139](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L139)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all followed

#### Returns

`void`

#### Defined in

[types/context.ts:164](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L164)

___

### follow

▸ `Optional` **follow**(`user`): `Promise`<`any`\>

Handle user follow/unfollow user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:149](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L149)

___

### isFollowed

▸ `Optional` **isFollowed**(`user`): `boolean`

Handle check if a user follow a user, caching data

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:154](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L154)

___

### isLoading

▸ **isLoading**(`user`): `boolean`

List of current users in loading state

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`SCUserType`](types_user.SCUserType) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:144](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L144)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh followed

#### Returns

`void`

#### Defined in

[types/context.ts:159](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/types/context.ts#L159)
