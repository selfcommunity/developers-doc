---
id: "AccountSignIn.AccountSignInProps"
title: "Interface: AccountSignInProps"
sidebar_label: "AccountSignInProps"
custom_edit_url: null
---

[AccountSignIn](../modules/AccountSignIn.md).AccountSignInProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### ButtonProps

• `Optional` **ButtonProps**: `OverrideProps`<`ButtonTypeMap`<{}, ``"button"``\>, ``"button"``\>

Default props to submit button Input

**`default`** {variant: 'contained'}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:63](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L63)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:57](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L57)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:36](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L36)

## Methods

### onSubmit

▸ `Optional` **onSubmit**(`username`, `password`): `void`

Callback triggered for handling custom signin process instead of the default one

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:44](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L44)

___

### onSuccess

▸ `Optional` **onSuccess**(`token`): `void`

Callback triggered on success sign in

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `SCAuthTokenType` |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:51](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L51)
