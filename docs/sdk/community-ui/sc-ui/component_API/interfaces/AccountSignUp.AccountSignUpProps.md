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

[sdk/community-ui/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:58](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L58)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:52](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L52)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:40](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L40)

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

[sdk/community-ui/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx:46](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignUp/AccountSignUp.tsx#L46)
