---
id: "CategoryFeedProps"
title: "Interface: CategoryFeedProps"
sidebar_label: "CategoryFeedProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:63](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L63)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:69](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L69)

___

### category

• `Optional` **category**: `SCCategoryType`

Category Object

**`default`** null

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:45](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L45)

___

### categoryId

• `Optional` **categoryId**: `number`

Id of the category for filter the feed

**`default`** null

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L51)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:39](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L39)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:33](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L33)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[components/CategoryFeed/CategoryFeed.tsx:57](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/CategoryFeed/CategoryFeed.tsx#L57)
