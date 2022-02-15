---
id: "FeedUpdates"
title: "Module: FeedUpdates"
sidebar_label: "FeedUpdates"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FeedUpdatesProps](../interfaces/FeedUpdates.FeedUpdatesProps)

## Functions

### FeedUpdatesSkeleton

▸ **FeedUpdatesSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx:19](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx#L19)

___

### default

▸ **default**(`props`): `JSX.Element`

This Component subscribe to updates from PubSub channel (eg. websocket) and tell the feed to updates if necessary

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedUpdatesProps`](../interfaces/FeedUpdates.FeedUpdatesProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:66](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L66)
