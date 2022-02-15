---
id: "ExploreFeed.ExploreFeedProps"
title: "Interface: ExploreFeedProps"
sidebar_label: "ExploreFeedProps"
custom_edit_url: null
---

[ExploreFeed](../modules/ExploreFeed).ExploreFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[ExploreFeed/ExploreFeed.tsx:52](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L52)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[ExploreFeed/ExploreFeed.tsx:58](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L58)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[ExploreFeed/ExploreFeed.tsx:40](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L40)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[ExploreFeed/ExploreFeed.tsx:34](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L34)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[ExploreFeed/ExploreFeed.tsx:46](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-templates/src/components/ExploreFeed/ExploreFeed.tsx#L46)
