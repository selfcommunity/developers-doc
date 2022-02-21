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
| `object.feedObject?` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) |
| `object.feedObjectType` | [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType) |
| `object.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType)\>\> |

#### Defined in

[hooks/useSCFetchFeedObject.ts:18](https://github.com/selfcommunity/community-ui/blob/009afd8/packages/sc-core/src/hooks/useSCFetchFeedObject.ts#L18)
