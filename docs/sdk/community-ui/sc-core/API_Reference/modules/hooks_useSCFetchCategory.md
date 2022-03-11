---
id: "hooks_useSCFetchCategory"
title: "Module: hooks/useSCFetchCategory"
sidebar_label: "hooks/useSCFetchCategory"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchCategory

▸ **useSCFetchCategory**(`object`): `Object`

:::info
This custom hook is used to fetch a category object.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.category?` | [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md) |
| `object.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `scCategory` | [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md) |
| `setSCCategory` | `Dispatch`<`SetStateAction`<[`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)\>\> |

#### Defined in

[hooks/useSCFetchCategory.ts:17](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/hooks/useSCFetchCategory.ts#L17)
