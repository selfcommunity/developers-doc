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

[types/context.ts:135](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L135)

___

### loading

• **loading**: `number`[]

List of all users in loading state

#### Defined in

[types/context.ts:140](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L140)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all followed

#### Returns

`void`

#### Defined in

[types/context.ts:165](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L165)

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

[types/context.ts:150](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L150)

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

[types/context.ts:155](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L155)

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

[types/context.ts:145](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L145)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh followed

#### Returns

`void`

#### Defined in

[types/context.ts:160](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/context.ts#L160)
