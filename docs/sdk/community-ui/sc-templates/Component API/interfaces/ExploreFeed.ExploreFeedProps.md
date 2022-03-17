---
id: "ExploreFeed.ExploreFeedProps"
title: "Interface: ExploreFeedProps"
sidebar_label: "ExploreFeedProps"
custom_edit_url: null
---

[ExploreFeed](../modules/ExploreFeed.md).ExploreFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[ExploreFeed/ExploreFeed.tsx:53](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L53)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[ExploreFeed/ExploreFeed.tsx:59](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L59)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[ExploreFeed/ExploreFeed.tsx:41](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L41)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[ExploreFeed/ExploreFeed.tsx:35](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L35)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[ExploreFeed/ExploreFeed.tsx:47](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L47)
