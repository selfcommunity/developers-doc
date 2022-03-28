---
id: "Category.CategoryProps"
title: "Interface: CategoryProps"
sidebar_label: "CategoryProps"
custom_edit_url: null
---

[Category](../modules/Category.md).CategoryProps

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

[packages/sc-ui/src/components/Category/Category.tsx:56](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L56)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:51](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L51)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:46](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L46)

___

### id

• `Optional` **id**: `number`

Id of category object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:41](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L41)

___

### popular

• `Optional` **popular**: `boolean`

Renders different section for popular categories list

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:61](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L61)

## Methods

### onFollowProps

▸ `Optional` **onFollowProps**(): `void`

Callback function on follow action.

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:66](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/Category/Category.tsx#L66)
