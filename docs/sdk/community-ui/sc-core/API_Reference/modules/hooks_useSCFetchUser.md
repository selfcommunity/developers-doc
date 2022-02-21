---
id: "hooks_useSCFetchUser"
title: "Module: hooks/useSCFetchUser"
sidebar_label: "hooks/useSCFetchUser"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchUser

▸ **useSCFetchUser**(`object`): `Object`

:::info
This custom hook is used to fetch a user object.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.id?` | `number` |
| `object.user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scUser` | [`SCUserType`](../interfaces/types_user.SCUserType) |
| `setSCUser` | `Dispatch`<`SetStateAction`<[`SCUserType`](../interfaces/types_user.SCUserType)\>\> |

#### Defined in

[hooks/useSCFetchUser.ts:17](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/hooks/useSCFetchUser.ts#L17)
