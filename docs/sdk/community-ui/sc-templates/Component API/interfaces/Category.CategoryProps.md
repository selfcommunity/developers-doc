---
id: "Category.CategoryProps"
title: "Interface: CategoryProps"
sidebar_label: "CategoryProps"
custom_edit_url: null
---

[Category](../modules/Category.md).CategoryProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[Category/Category.tsx:55](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L55)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[Category/Category.tsx:61](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L61)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[Category/Category.tsx:37](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L37)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category for filter the feed

**`default`** null

#### Defined in

[Category/Category.tsx:43](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L43)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[Category/Category.tsx:31](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L31)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[Category/Category.tsx:25](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L25)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[Category/Category.tsx:49](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/Category/Category.tsx#L49)
