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

[MainFeed/MainFeed.tsx:53](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L53)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[MainFeed/MainFeed.tsx:59](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L59)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[MainFeed/MainFeed.tsx:41](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L41)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[MainFeed/MainFeed.tsx:35](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L35)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[MainFeed/MainFeed.tsx:47](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/MainFeed/MainFeed.tsx#L47)
