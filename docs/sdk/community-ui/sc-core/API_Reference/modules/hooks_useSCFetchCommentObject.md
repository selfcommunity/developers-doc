---
id: "hooks_useSCFetchCommentObject"
title: "Module: hooks/useSCFetchCommentObject"
sidebar_label: "hooks/useSCFetchCommentObject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchCommentObject

▸ **useSCFetchCommentObject**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCommentObject'
Use this hook to fetch a comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.commentObject?` | [`SCCommentType`](../interfaces/types_comment.SCCommentType.md) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCCommentType`](../interfaces/types_comment.SCCommentType.md) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCCommentType`](../interfaces/types_comment.SCCommentType.md)\>\> |

#### Defined in

[hooks/useSCFetchCommentObject.ts:15](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCFetchCommentObject.ts#L15)
