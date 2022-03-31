---
id: "CategoryFeed.CategoryFeedProps"
title: "Interface: CategoryFeedProps"
sidebar_label: "CategoryFeedProps"
custom_edit_url: null
---

[CategoryFeed](../modules/CategoryFeed.md).CategoryFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[CategoryFeed/CategoryFeed.tsx:65](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L65)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[CategoryFeed/CategoryFeed.tsx:71](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L71)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:47](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L47)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category for filter the feed

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:53](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L53)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:41](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L41)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[CategoryFeed/CategoryFeed.tsx:35](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L35)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[CategoryFeed/CategoryFeed.tsx:59](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L59)
