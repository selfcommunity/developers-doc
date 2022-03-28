---
id: "types_context.SCCategoriesManagerType"
title: "Interface: SCCategoriesManagerType"
sidebar_label: "SCCategoriesManagerType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCCategoriesManagerType

## Properties

### categories

• **categories**: `number`[]

List of all categories ids followed by the authenticated user

#### Defined in

[types/context.ts:163](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L163)

___

### loading

• **loading**: `number`[]

List of all categories in loading state

#### Defined in

[types/context.ts:168](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L168)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:193](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L193)

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

[types/context.ts:178](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L178)

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

[types/context.ts:183](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L183)

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

[types/context.ts:173](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L173)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh categories

#### Returns

`void`

#### Defined in

[types/context.ts:188](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L188)
