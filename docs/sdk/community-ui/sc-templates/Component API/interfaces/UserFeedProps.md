---
id: "UserFeedProps"
title: "Interface: UserFeedProps"
sidebar_label: "UserFeedProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[components/UserFeed/UserFeed.tsx:62](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L62)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[components/UserFeed/UserFeed.tsx:68](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L68)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[components/UserFeed/UserFeed.tsx:38](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L38)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'user_feed'

#### Defined in

[components/UserFeed/UserFeed.tsx:32](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L32)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[components/UserFeed/UserFeed.tsx:50](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L50)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[components/UserFeed/UserFeed.tsx:44](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L44)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[components/UserFeed/UserFeed.tsx:56](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L56)
