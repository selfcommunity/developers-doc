---
id: "UserProps"
title: "Interface: UserProps"
sidebar_label: "UserProps"
sidebar_position: 0
custom_edit_url: null
---

List all exports

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

[packages/sc-ui/src/components/User/User.tsx:65](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L65)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:55](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L55)

___

### connectUserButtonProps

• `Optional` **connectUserButtonProps**: `ConnectionButtonProps`

Props to spread to connection button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:82](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L82)

___

### followUserButtonProps

• `Optional` **followUserButtonProps**: [`FollowUserButtonProps`](FollowUserButtonProps)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:76](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L76)

___

### id

• `Optional` **id**: `number`

Id of user object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:50](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L50)

___

### user

• `Optional` **user**: `SCUserType`

User Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:60](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L60)

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

[packages/sc-ui/src/components/User/User.tsx:70](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L70)
