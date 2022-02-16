---
id: "hooks_useSCFetchCategory"
title: "Module: hooks/useSCFetchCategory"
sidebar_label: "hooks/useSCFetchCategory"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCategory'
Use this hook to fetch a category object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.category?` | [`SCCategoryType`](../interfaces/types_category.SCCategoryType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scCategory` | [`SCCategoryType`](../interfaces/types_category.SCCategoryType) |
| `setSCCategory` | `Dispatch`<`SetStateAction`<[`SCCategoryType`](../interfaces/types_category.SCCategoryType)\>\> |

#### Defined in

[hooks/useSCFetchCategory.ts:15](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCFetchCategory.ts#L15)
