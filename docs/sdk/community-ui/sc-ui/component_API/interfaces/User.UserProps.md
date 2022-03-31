---
id: "User.UserProps"
title: "Interface: UserProps"
sidebar_label: "UserProps"
custom_edit_url: null
---

[User](../modules/User.md).UserProps

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

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:56](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L56)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:46](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L46)

___

### followConnectUserButtonProps

• `Optional` **followConnectUserButtonProps**: [`FollowUserButtonProps`](FollowUserButton.FollowUserButtonProps.md) \| [`FriendshipButtonProps`](FriendshipUserButton.FriendshipButtonProps.md)

Props to spread to follow/friendship button

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:66](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L66)

___

### id

• `Optional` **id**: `number`

Id of user object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:41](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L41)

___

### showFollowers

• `Optional` **showFollowers**: `boolean`

 Prop to show user followers as secondary text

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:71](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L71)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:51](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L51)

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

[sdk/community-ui/packages/sc-ui/src/components/User/User.tsx:61](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/User/User.tsx#L61)
