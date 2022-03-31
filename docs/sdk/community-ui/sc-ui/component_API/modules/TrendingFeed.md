---
id: "TrendingFeed"
title: "Module: TrendingFeed"
sidebar_label: "TrendingFeed"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [TrendingFeedProps](../interfaces/TrendingFeed.TrendingFeedProps.md)

## Functions

### TrendingFeed

▸ **TrendingFeed**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Trending Feed component. Learn about the available props and the CSS API.

#### Import

```jsx
import {TrendingFeed} from '@selfcommunity/ui';
```

#### Component Name

The name `SCTrendingFeed` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCTrendingFeed-root|Styles applied to the root element.|
|title|.SCTrendingFeed-title|Styles applied to the title element.|
|noResults|.SCTrendingFeed-noResults|Styles applied to noResults section.|
|trendingItem|.SCTrendingFeed-trending-item|Styles applied to the trending feed item element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`TrendingFeedProps`](../interfaces/TrendingFeed.TrendingFeedProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/TrendingFeed/TrendingFeed.tsx:91](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/TrendingFeed/TrendingFeed.tsx#L91)

___

### TrendingFeedSkeleton

▸ **TrendingFeedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/TrendingFeed/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/TrendingFeed/Skeleton.tsx#L25)
