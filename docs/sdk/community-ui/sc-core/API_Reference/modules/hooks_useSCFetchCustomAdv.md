---
id: "hooks_useSCFetchCustomAdv"
title: "Module: hooks/useSCFetchCustomAdv"
sidebar_label: "hooks/useSCFetchCustomAdv"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchCustomAdv

▸ **useSCFetchCustomAdv**(`object`): `Object`

:::info
This custom hook is used to fetch a custom adv object.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.categoriesId?` | `number`[] |
| `object.position?` | [`SCCustomAdvPosition`](../enums/types_customAdv.SCCustomAdvPosition.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `scCustomAdv` | [`SCCustomAdvType`](../interfaces/types_customAdv.SCCustomAdvType.md) |
| `setSCCustomAdv` | `Dispatch`<`SetStateAction`<[`SCCustomAdvType`](../interfaces/types_customAdv.SCCustomAdvType.md)\>\> |

#### Defined in

[hooks/useSCFetchCustomAdv.ts:17](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/hooks/useSCFetchCustomAdv.ts#L17)
