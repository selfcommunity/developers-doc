---
id: "hooks_useSCFetchCommentObject"
title: "Module: hooks/useSCFetchCommentObject"
sidebar_label: "hooks/useSCFetchCommentObject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchCommentObject

▸ **useSCFetchCommentObject**(`object`): `Object`

:::info
This custom hooks is used to fetch a comment.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.commentObject?` | [`SCCommentType`](../interfaces/types_comment.SCCommentType.md) |
| `object.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `obj` | [`SCCommentType`](../interfaces/types_comment.SCCommentType.md) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCCommentType`](../interfaces/types_comment.SCCommentType.md)\>\> |

#### Defined in

[hooks/useSCFetchCommentObject.ts:17](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/hooks/useSCFetchCommentObject.ts#L17)
