---
id: "hooks_useSCCachingManager"
title: "Module: hooks/useSCCachingManager"
sidebar_label: "hooks/useSCCachingManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(): `Object`

Custom hook 'useSCCachingManager'
Helpers hook useful to manage cached data
Manage cached data and the loading state

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cache` | `number`[] |
| `data` | `any`[] |
| `emptyCache` | () => `void` |
| `isLoading` | (`obj`: { `id`: `number`  }) => `boolean` |
| `loading` | `number`[] |
| `setData` | `Dispatch`<`SetStateAction`<`any`[]\>\> |
| `setLoading` | `Dispatch`<`SetStateAction`<`number`[]\>\> |
| `updateCache` | (`ids`: `number`[]) => `void` |

#### Defined in

[hooks/useSCCachingManager.ts:8](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCCachingManager.ts#L8)
