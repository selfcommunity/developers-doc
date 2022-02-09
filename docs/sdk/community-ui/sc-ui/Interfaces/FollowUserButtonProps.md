[@selfcommunity/ui](../README.md) / [Exports](../modules.md) / FollowUserButtonProps

# Interface: FollowUserButtonProps

List all exports

## Indexable

▪ [p: `string`]: `any`

Others properties

## Table of contents

### Properties

- [user](FollowUserButtonProps.md#user)
- [userId](FollowUserButtonProps.md#userid)

### Methods

- [onFollow](FollowUserButtonProps.md#onfollow)

## Properties

### user

• `Optional` **user**: `SCUserType`

User

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx:36](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx#L36)

___

### userId

• `Optional` **userId**: `number`

Id of the user

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx:30](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx#L30)

## Methods

### onFollow

▸ `Optional` **onFollow**(`user`, `followed`): `any`

onFollow callback

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `SCUserType` |
| `followed` | `boolean` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx:43](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx#L43)
