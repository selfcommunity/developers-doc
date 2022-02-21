---
id: "UserProfile.UserProfileProps"
title: "Interface: UserProfileProps"
sidebar_label: "UserProfileProps"
custom_edit_url: null
---

[UserProfile](../modules/UserProfile).UserProfileProps

## Properties

### FeedObjectProps

• `Optional` **FeedObjectProps**: `FeedObjectProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[UserProfile/UserProfile.tsx:78](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L78)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[UserProfile/UserProfile.tsx:84](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L84)

___

### UserProfileHeaderProps

• `Optional` **UserProfileHeaderProps**: `UserProfileHeaderProps`

Props to spread to UserProfileHeader component

**`default`** {}

#### Defined in

[UserProfile/UserProfile.tsx:90](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L90)

___

### UserProfileInfoProps

• `Optional` **UserProfileInfoProps**: `UserProfileInfoProps`

Props to spread to UserProfileInfo component

**`default`** {}

#### Defined in

[UserProfile/UserProfile.tsx:96](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L96)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:54](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L54)

___

### id

• `Optional` **id**: `string`

Id of the user profile

**`default`** 'user'

#### Defined in

[UserProfile/UserProfile.tsx:48](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L48)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:60](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L60)

___

### userId

• `Optional` **userId**: `number`

Id of the user for filter the feed

**`default`** null

#### Defined in

[UserProfile/UserProfile.tsx:66](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L66)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[UserProfile/UserProfile.tsx:72](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L72)

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

[UserProfile/UserProfile.tsx:102](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-templates/src/components/UserProfile/UserProfile.tsx#L102)
