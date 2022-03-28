---
id: "hooks_useSCFetchCustomAdv"
title: "Module: hooks/useSCFetchCustomAdv"
sidebar_label: "hooks/useSCFetchCustomAdv"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchCustomAdv

▸ **useSCFetchCustomAdv**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCustomAdv'
Use this hook to fetch a custom adv object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.categoryId?` | `number` |
| `__namedParameters.position` | [`SCCustomAdvPosition`](../enums/types_customAdv.SCCustomAdvPosition.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scCustomAdv` | [`SCCustomAdvType`](../interfaces/types_customAdv.SCCustomAdvType.md) |
| `setSCCustomAdv` | `Dispatch`<`SetStateAction`<[`SCCustomAdvType`](../interfaces/types_customAdv.SCCustomAdvType.md)\>\> |

#### Defined in

[hooks/useSCFetchCustomAdv.ts:15](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCFetchCustomAdv.ts#L15)
