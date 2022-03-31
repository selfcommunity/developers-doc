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

[UserFeed/UserFeed.tsx:66](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L66)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserFeed/UserFeed.tsx:72](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L72)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:42](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L42)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'user_feed'

#### Defined in

[UserFeed/UserFeed.tsx:36](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L36)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:54](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L54)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserFeed/UserFeed.tsx:48](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L48)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserFeed/UserFeed.tsx:60](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserFeed/UserFeed.tsx#L60)
