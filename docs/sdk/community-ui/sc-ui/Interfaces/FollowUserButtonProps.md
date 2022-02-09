### Properties

- [user](#user)
- [userId](#userid)
- [p](#p)

### Methods

- [onFollow](#onfollow)

## Properties

### user

• `Optional` **user**: [SCUserType](../../sc-core/Api_Reference/Types/user#scusertype)

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
| user | [SCUserType](../../sc-core/Api_Reference/Types/user#scusertype) |
| followed | boolean |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx:43](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx#L43)

### p

• `Optional` **p**: `string`

Other props

**`default`** 'null'