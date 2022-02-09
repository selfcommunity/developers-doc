[@selfcommunity/ui](../README.md) / [Exports](../modules.md) / FollowCategoryButtonProps

# Interface: FollowCategoryButtonProps

List all exports

## Indexable

▪ [p: `string`]: `any`

Others properties

## Table of contents

### Properties

- [category](FollowCategoryButtonProps.md#category)
- [categoryId](FollowCategoryButtonProps.md#categoryid)
- [className](FollowCategoryButtonProps.md#classname)

### Methods

- [onFollow](FollowCategoryButtonProps.md#onfollow)

## Properties

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx:42](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx#L42)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx:36](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx#L36)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx:30](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx#L30)

## Methods

### onFollow

▸ `Optional` **onFollow**(`category`, `followed`): `any`

onFollow callback

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | `SCCategoryType` |
| `followed` | `boolean` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx:49](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx#L49)
