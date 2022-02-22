---
id: "User.UserProps"
title: "Interface: UserProps"
sidebar_label: "UserProps"
custom_edit_url: null
---

[User](../modules/User).UserProps

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`UserProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides user component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:54](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L54)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:44](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L44)

___

### followConnectUserButtonProps

• `Optional` **followConnectUserButtonProps**: [`FollowUserButtonProps`](FollowUserButton.FollowUserButtonProps) \| [`FriendshipButtonProps`](FriendshipUserButton.FriendshipButtonProps)

Props to spread to follow/friendship button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:65](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L65)

___

### id

• `Optional` **id**: `number`

Id of user object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:39](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L39)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:49](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L49)

## Methods

### handleIgnoreAction

▸ `Optional` **handleIgnoreAction**(`u`): `void`

Handles actions ignore

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `any` |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:59](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-ui/src/components/User/User.tsx#L59)