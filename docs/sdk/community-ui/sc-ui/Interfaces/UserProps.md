## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`UserProps`**

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Table of contents

### Properties


- [autoHide](#autohide)
- [className](#classname)
- [connectUserButtonProps](#connectuserbuttonprops)
- [followUserButtonProps](#followuserbuttonprops)
- [hidden](#hidden)
- [id](#id)
- [user](#user)


### Methods

- [handleIgnoreAction](#handleignoreaction)

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides user component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:65](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L65)

___


### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:55](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L55)

___


### connectUserButtonProps

• `Optional` **connectUserButtonProps**: `ConnectionButtonProps`

Props to spread to connection button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:82](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L82)

___


___

### followUserButtonProps

• `Optional` **followUserButtonProps**: [`FollowUserButtonProps`](FollowUserButtonProps.md)

Props to spread to follow button

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:76](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L76)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

Pick.hidden

#### Defined in

node_modules/@types/react/index.d.ts:1841

___

### id

• `Optional` **id**: `number`

Id of user object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:50](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L50)

___


### user

• `Optional` **user**: [SCUserType](../../sc-core/Api_Reference/Types/user#scusertype)

User Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:60](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/User/User.tsx#L60)

___
