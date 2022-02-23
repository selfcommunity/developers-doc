---
id: "SignUp.SignUpProps"
title: "Interface: SignUpProps"
sidebar_label: "SignUpProps"
custom_edit_url: null
---

[SignUp](../modules/SignUp).SignUpProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### ButtonProps

• `Optional` **ButtonProps**: `OverrideProps`<`ButtonTypeMap`<{}, ``"button"``\>, ``"button"``\>

Default props to submit button Input

**`default`** {variant: 'contained'}

#### Defined in

[packages/sc-ui/src/components/SignUp/SignUp.tsx:67](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignUp/SignUp.tsx#L67)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/SignUp/SignUp.tsx:61](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignUp/SignUp.tsx#L61)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/SignUp/SignUp.tsx:49](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignUp/SignUp.tsx#L49)

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

[packages/sc-ui/src/components/SignUp/SignUp.tsx:55](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/SignUp/SignUp.tsx#L55)
