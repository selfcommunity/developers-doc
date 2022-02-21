---
id: "Category.CategoryProps"
title: "Interface: CategoryProps"
sidebar_label: "CategoryProps"
custom_edit_url: null
---

[Category](../modules/Category).CategoryProps

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`CategoryProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:57](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L57)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:52](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L52)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:47](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L47)

___

### followCategoryButtonProps

• `Optional` **followCategoryButtonProps**: [`FollowCategoryButtonProps`](FollowCategoryButton.FollowCategoryButtonProps)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:67](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L67)

___

### id

• `Optional` **id**: `number`

Id of category object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:42](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L42)

___

### popular

• `Optional` **popular**: `boolean`

Renders different section for popular categories list

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:62](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-ui/src/components/Category/Category.tsx#L62)
