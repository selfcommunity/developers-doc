---
id: "UserFeed.UserFeedProps"
title: "Interface: UserFeedProps"
sidebar_label: "UserFeedProps"
custom_edit_url: null
---

[UserFeed](../modules/UserFeed).UserFeedProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[UserFeed/UserFeed.tsx:63](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L63)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserFeed/UserFeed.tsx:69](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L69)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:39](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L39)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'user_feed'

#### Defined in

[UserFeed/UserFeed.tsx:33](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L33)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:51](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L51)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:45](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L45)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserFeed/UserFeed.tsx:57](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L57)
