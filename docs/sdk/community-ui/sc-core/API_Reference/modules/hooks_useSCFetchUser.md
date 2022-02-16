---
id: "hooks_useSCFetchUser"
title: "Module: hooks/useSCFetchUser"
sidebar_label: "hooks/useSCFetchUser"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`initialSession`): `Object`

Custom hook 'useSCFetchUser'
Use this hook to fetch a user object

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialSession` | `Object` |
| `initialSession.id?` | `number` |
| `initialSession.user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scUser` | [`SCUserType`](../interfaces/types_user.SCUserType) |
| `setSCUser` | `Dispatch`<`SetStateAction`<[`SCUserType`](../interfaces/types_user.SCUserType)\>\> |

#### Defined in

[hooks/useSCFetchUser.ts:14](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCFetchUser.ts#L14)
