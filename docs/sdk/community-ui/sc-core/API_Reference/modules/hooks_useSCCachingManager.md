---
id: "hooks_useSCCachingManager"
title: "Module: hooks/useSCCachingManager"
sidebar_label: "hooks/useSCCachingManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCCachingManager

▸ **useSCCachingManager**(): `Object`

:::info
This custom hook manages cached data and the loading state.
:::

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

[hooks/useSCCachingManager.ts:8](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/hooks/useSCCachingManager.ts#L8)
