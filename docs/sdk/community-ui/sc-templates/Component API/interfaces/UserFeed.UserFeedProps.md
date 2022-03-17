---
id: "UserFeed.UserFeedProps"
title: "Interface: UserFeedProps"
sidebar_label: "UserFeedProps"
custom_edit_url: null
---

[UserFeed](../modules/UserFeed.md).UserFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[UserFeed/UserFeed.tsx:65](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L65)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserFeed/UserFeed.tsx:71](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L71)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:41](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L41)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'user_feed'

#### Defined in

[UserFeed/UserFeed.tsx:35](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L35)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:53](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L53)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:47](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L47)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserFeed/UserFeed.tsx:59](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L59)
