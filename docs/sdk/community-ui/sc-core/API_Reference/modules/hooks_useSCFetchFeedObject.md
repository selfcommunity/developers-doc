---
id: "hooks_useSCFetchFeedObject"
title: "Module: hooks/useSCFetchFeedObject"
sidebar_label: "hooks/useSCFetchFeedObject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`__namedParameters`): `Object`

Custom hook 'useFetchFeedObject'
Use this hook to fetch a feed object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.feedObject?` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) |
| `__namedParameters.feedObjectType` | [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCFeedObjectType`](../interfaces/types_feed.SCFeedObjectType) \| [`SCFeedDiscussionType`](../interfaces/types_feed.SCFeedDiscussionType) \| [`SCFeedPostType`](../interfaces/types_feed.SCFeedPostType)\>\> |

#### Defined in

[hooks/useSCFetchFeedObject.ts:16](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCFetchFeedObject.ts#L16)
