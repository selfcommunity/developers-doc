---
id: "CategoryProps"
title: "Interface: CategoryProps"
sidebar_label: "CategoryProps"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`CategoryProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

**`default`** null

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:68](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L68)

___

### category

• `Optional` **category**: [`SCCategoryType`](SCCategoryType)

Category Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:63](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L63)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:58](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L58)

___

### followCategoryButtonProps

• `Optional` **followCategoryButtonProps**: [`FollowCategoryButtonProps`](FollowCategoryButtonProps)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:78](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L78)

___

### id

• `Optional` **id**: `number`

Id of category object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:53](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L53)

___

### popular

• `Optional` **popular**: `boolean`

Renders different section for popular categories list

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:73](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L73)
