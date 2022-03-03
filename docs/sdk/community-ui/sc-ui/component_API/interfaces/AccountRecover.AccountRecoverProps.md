---
id: "AccountRecover.AccountRecoverProps"
title: "Interface: AccountRecoverProps"
sidebar_label: "AccountRecoverProps"
custom_edit_url: null
---

[AccountRecover](../modules/AccountRecover.md).AccountRecoverProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### ButtonProps

• `Optional` **ButtonProps**: `OverrideProps`<`ButtonTypeMap`<{}, ``"button"``\>, ``"button"``\>

Default props to submit button Input

**`default`** {variant: 'contained'}

#### Defined in

[packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:53](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L53)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:47](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L47)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:35](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L35)

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

[packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:41](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L41)
