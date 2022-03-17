---
id: "types_context.SCFollowedCategoriesManagerType"
title: "Interface: SCFollowedCategoriesManagerType"
sidebar_label: "SCFollowedCategoriesManagerType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCFollowedCategoriesManagerType

## Properties

### categories

• **categories**: `number`[]

List of all categories ids followed by the authenticated user

#### Defined in

[types/context.ts:172](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L172)

___

### loading

• **loading**: `number`[]

List of all categories in loading state

#### Defined in

[types/context.ts:177](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L177)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:202](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L202)

___

### follow

▸ `Optional` **follow**(`category`): `Promise`<`any`\>

Handle user follow/unfollow category

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`SCCategoryType`](types_category.SCCategoryType.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:187](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L187)

___

### isFollowed

▸ `Optional` **isFollowed**(`category`): `boolean`

Handle check if a user follow a category, caching data

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`SCCategoryType`](types_category.SCCategoryType.md) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:192](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L192)

___

### isLoading

▸ **isLoading**(`category`): `boolean`

List of current categories in loading state

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`SCCategoryType`](types_category.SCCategoryType.md) |

#### Returns

`boolean`

#### Defined in

[types/context.ts:182](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L182)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh categories

#### Returns

`void`

#### Defined in

[types/context.ts:197](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/context.ts#L197)
