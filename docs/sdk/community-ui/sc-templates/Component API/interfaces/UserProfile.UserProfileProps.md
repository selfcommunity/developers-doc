---
id: "UserProfile.UserProfileProps"
title: "Interface: UserProfileProps"
sidebar_label: "UserProfileProps"
custom_edit_url: null
---

[UserProfile](../modules/UserProfile.md).UserProfileProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[UserProfile/UserProfile.tsx:54](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L54)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserProfile/UserProfile.tsx:60](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L60)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:30](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L30)

___

### id

• `Optional` **id**: `string`

Id of the user profile

**`default`** 'user'

#### Defined in

[UserProfile/UserProfile.tsx:24](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L24)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:36](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L36)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:42](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L42)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserProfile/UserProfile.tsx:48](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L48)
