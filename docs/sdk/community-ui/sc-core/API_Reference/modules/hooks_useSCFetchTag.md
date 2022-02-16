---
id: "hooks_useSCFetchTag"
title: "Module: hooks/useSCFetchTag"
sidebar_label: "hooks/useSCFetchTag"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`__namedParameters`): `Object`

Custom hook 'useSCFetchTag'
Use this hook to fetch a tag object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id?` | `number` |
| `__namedParameters.tag?` | [`SCTagType`](../interfaces/types_tag.SCTagType) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scTag` | [`SCTagType`](../interfaces/types_tag.SCTagType) |
| `setSCTag` | `Dispatch`<`SetStateAction`<[`SCTagType`](../interfaces/types_tag.SCTagType)\>\> |

#### Defined in

[hooks/useSCFetchTag.ts:15](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCFetchTag.ts#L15)
