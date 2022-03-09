---
id: "AccountSignUp.AccountSignUpProps"
title: "Interface: AccountSignUpProps"
sidebar_label: "AccountSignUpProps"
custom_edit_url: null
---

[AccountSignUp](../modules/AccountSignUp.md).AccountSignUpProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### ButtonProps

• `Optional` **ButtonProps**: `OverrideProps`<`ButtonTypeMap`<{}, ``"button"``\>, ``"button"``\>

Default props to submit button Input

**`default`** {variant: 'contained'}

#### Defined in

[packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:57](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L57)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:51](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L51)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:39](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L39)

## Methods

### onSuccess

▸ `Optional` **onSuccess**(`user`): `void`

Callback triggered on success sign in

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `SCUserType` |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:45](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L45)
