---
id: "hooks_useSCFetchFeedObject"
title: "Module: hooks/useSCFetchFeedObject"
sidebar_label: "hooks/useSCFetchFeedObject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFetchFeedObject

▸ **useSCFetchFeedObject**(`__namedParameters`): `Object`

Custom hook 'useFetchFeedObject'
Use this hook to fetch a feed object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.feedObject?` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) |
| `__namedParameters.feedObjectType` | [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType.md) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType.md) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType.md) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType.md) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType.md) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType.md)\>\> |

#### Defined in

[hooks/useSCFetchFeedObject.ts:16](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCFetchFeedObject.ts#L16)
