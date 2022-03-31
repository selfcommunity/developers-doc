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

[UserProfile/UserProfile.tsx:79](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L79)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserProfile/UserProfile.tsx:85](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L85)

___

### UserProfileHeaderProps

• `Optional` **UserProfileHeaderProps**: `UserProfileHeaderProps`

Props to spread to UserProfileHeader component

**`default`** {}

#### Defined in

[UserProfile/UserProfile.tsx:91](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L91)

___

### UserProfileInfoProps

• `Optional` **UserProfileInfoProps**: `UserProfileInfoProps`

Props to spread to UserProfileInfo component

**`default`** {}

#### Defined in

[UserProfile/UserProfile.tsx:97](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L97)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:55](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L55)

___

### id

• `Optional` **id**: `string`

Id of the user profile

**`default`** 'user'

#### Defined in

[UserProfile/UserProfile.tsx:49](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L49)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:61](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L61)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:67](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L67)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserProfile/UserProfile.tsx:73](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L73)

## Methods

### onEditClick

▸ `Optional` **onEditClick**(`user`): `void`

Click handler for edit button

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `SCUserType` |

#### Returns

`void`

#### Defined in

[UserProfile/UserProfile.tsx:103](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L103)
