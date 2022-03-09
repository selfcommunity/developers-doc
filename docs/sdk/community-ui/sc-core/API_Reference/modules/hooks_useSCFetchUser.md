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
| `object.user?` | [`SCUserType`](../interfaces/types_user.SCUserType.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `scUser` | [`SCUserType`](../interfaces/types_user.SCUserType.md) |
| `setSCUser` | `Dispatch`<`SetStateAction`<[`SCUserType`](../interfaces/types_user.SCUserType.md)\>\> |

#### Defined in

[hooks/useSCFetchUser.ts:17](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/hooks/useSCFetchUser.ts#L17)
