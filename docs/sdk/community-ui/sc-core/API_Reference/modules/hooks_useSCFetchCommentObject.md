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

:::info
This custom hooks is used to fetch a comment.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.commentObject?` | [`SCCommentType`](../interfaces/types_comment.SCCommentType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCCommentType`](../interfaces/types_comment.SCCommentType) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCCommentType`](../interfaces/types_comment.SCCommentType)\>\> |

#### Defined in

[hooks/useSCFetchCommentObject.ts:17](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/hooks/useSCFetchCommentObject.ts#L17)
