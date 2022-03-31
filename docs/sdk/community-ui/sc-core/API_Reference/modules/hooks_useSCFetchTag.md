---
id: "hooks_useSCFetchTag"
title: "Module: hooks/useSCFetchTag"
sidebar_label: "hooks/useSCFetchTag"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchTag

▸ **useSCFetchTag**(`object`): `Object`

:::info
This custom hook is used to fetch a tag object.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.id?` | `number` |
| `object.tag?` | [`SCTagType`](../interfaces/types_tag.SCTagType.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `scTag` | [`SCTagType`](../interfaces/types_tag.SCTagType.md) |
| `setSCTag` | `Dispatch`<`SetStateAction`<[`SCTagType`](../interfaces/types_tag.SCTagType.md)\>\> |

#### Defined in

[hooks/useSCFetchTag.ts:17](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/hooks/useSCFetchTag.ts#L17)
