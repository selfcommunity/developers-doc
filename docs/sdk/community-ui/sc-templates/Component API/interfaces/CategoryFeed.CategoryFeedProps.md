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

[CategoryFeed/CategoryFeed.tsx:74](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L74)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[CategoryFeed/CategoryFeed.tsx:80](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L80)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:56](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L56)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category for filter the feed

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:62](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L62)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[CategoryFeed/CategoryFeed.tsx:50](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L50)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[CategoryFeed/CategoryFeed.tsx:44](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L44)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[CategoryFeed/CategoryFeed.tsx:68](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L68)
