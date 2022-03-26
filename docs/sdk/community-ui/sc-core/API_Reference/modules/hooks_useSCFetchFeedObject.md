---
id: "hooks_useSCFetchFeedObject"
title: "Module: hooks/useSCFetchFeedObject"
sidebar_label: "hooks/useSCFetchFeedObject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchFeedObject

▸ **useSCFetchFeedObject**(`object`): `Object`

:::info
This custom hook is used to fetch a feed object.
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.feedObject?` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) |
| `object.feedObjectType` | [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType.md) |
| `object.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `obj` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType.md) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType.md) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType.md) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType.md)\>\> |

#### Defined in

[hooks/useSCFetchFeedObject.ts:18](https://github.com/selfcommunity/community-ui/blob/c7df98e/packages/sc-core/src/hooks/useSCFetchFeedObject.ts#L18)
