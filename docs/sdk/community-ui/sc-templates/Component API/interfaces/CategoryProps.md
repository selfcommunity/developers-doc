---
id: "CategoryProps"
title: "Interface: CategoryProps"
sidebar_label: "CategoryProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[components/Category/Category.tsx:54](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L54)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[components/Category/Category.tsx:60](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L60)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[components/Category/Category.tsx:36](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L36)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category for filter the feed

**`default`** null

#### Defined in

[components/Category/Category.tsx:42](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L42)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[components/Category/Category.tsx:30](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L30)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[components/Category/Category.tsx:24](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L24)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[components/Category/Category.tsx:48](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/Category/Category.tsx#L48)
