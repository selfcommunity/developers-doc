---
id: "SignIn.SignInProps"
title: "Interface: SignInProps"
sidebar_label: "SignInProps"
custom_edit_url: null
---

[SignIn](../modules/SignIn).SignInProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### ButtonProps

• `Optional` **ButtonProps**: `OverrideProps`<`ButtonTypeMap`<{}, ``"button"``\>, ``"button"``\>

Default props to submit button Input

**`default`** {variant: 'contained'}

#### Defined in

[packages/sc-ui/src/components/SignIn/SignIn.tsx:56](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignIn/SignIn.tsx#L56)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/SignIn/SignIn.tsx:50](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignIn/SignIn.tsx#L50)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/SignIn/SignIn.tsx:38](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignIn/SignIn.tsx#L38)

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

[packages/sc-ui/src/components/SignIn/SignIn.tsx:44](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignIn/SignIn.tsx#L44)
