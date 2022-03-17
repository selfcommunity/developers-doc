---
id: "FeedUpdates"
title: "Module: FeedUpdates"
sidebar_label: "FeedUpdates"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FeedUpdatesProps](../interfaces/FeedUpdates.FeedUpdatesProps.md)

## Functions

### FeedUpdates

▸ **FeedUpdates**(`props`): `JSX.Element`

> API documentation for the Community-UI FeedUpdates component. Learn about the available props and the CSS API.
This Component subscribe to updates from PubSub channel (eg. websocket) and tell the feed to updates if necessary.

#### Import

```jsx
import {FeedUpdates} from '@selfcommunity/ui';
```

#### Component Name

The name `SCFeedUpdates` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCFeedUpdates-root|Styles applied to the root element.|
|image|.SCFeedUpdates-image|Styles applied to the image element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedUpdatesProps`](../interfaces/FeedUpdates.FeedUpdatesProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:89](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L89)

___

### FeedUpdatesSkeleton

▸ **FeedUpdatesSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx:14](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx#L14)
