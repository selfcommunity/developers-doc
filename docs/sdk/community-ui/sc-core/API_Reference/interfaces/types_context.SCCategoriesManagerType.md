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

[types/context.ts:166](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L166)

___

### loading

• **loading**: `number`[]

List of all categories in loading state

#### Defined in

[types/context.ts:171](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L171)

## Methods

### emptyCache

▸ `Optional` **emptyCache**(): `void`

Empty cache to revalidate all categories

#### Returns

`void`

#### Defined in

[types/context.ts:196](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L196)

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

[types/context.ts:181](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L181)

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

[types/context.ts:186](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L186)

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

[types/context.ts:176](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L176)

___

### refresh

▸ `Optional` **refresh**(): `void`

Refresh categories

#### Returns

`void`

#### Defined in

[types/context.ts:191](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/context.ts#L191)
