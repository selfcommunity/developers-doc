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

[sdk/community-ui/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:54](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L54)

___

### TextFieldProps

• `Optional` **TextFieldProps**: `TextFieldProps`

Default props to TextField Input

**`default`** {variant: 'outlined'}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:48](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L48)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:36](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L36)

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

[sdk/community-ui/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx:42](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/AccountRecover/AccountRecover.tsx#L42)
