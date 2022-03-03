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

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:62](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L62)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:56](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L56)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:35](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L35)

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

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:43](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L43)

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

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:50](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L50)
