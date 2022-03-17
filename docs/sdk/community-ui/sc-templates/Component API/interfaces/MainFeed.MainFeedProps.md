---
id: "MainFeed.MainFeedProps"
title: "Interface: MainFeedProps"
sidebar_label: "MainFeedProps"
custom_edit_url: null
---

[MainFeed](../modules/MainFeed.md).MainFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[MainFeed/MainFeed.tsx:52](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L52)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[MainFeed/MainFeed.tsx:58](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L58)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[MainFeed/MainFeed.tsx:40](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L40)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[MainFeed/MainFeed.tsx:34](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L34)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[MainFeed/MainFeed.tsx:46](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L46)
