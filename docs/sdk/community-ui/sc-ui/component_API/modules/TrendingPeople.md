---
id: "TrendingPeople"
title: "Module: TrendingPeople"
sidebar_label: "TrendingPeople"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [TrendingPeopleProps](../interfaces/TrendingPeople.TrendingPeopleProps.md)

## Functions

### TrendingPeople

▸ **TrendingPeople**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Trending People component. Learn about the available props and the CSS API.

#### Import

```jsx
import {TrendingPeople} from '@selfcommunity/ui';
```

#### Component Name

The name `SCTrendingPeople` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCTrendingPeople-root|Styles applied to the root element.|
|title|.SCTrendingPeople-title|Styles applied to the title element.|
|noResults|.SCTrendingPeople-noResults|Styles applied to noResults section.|
|trendingUserItem|.SCTrendingPeople-trending-user-items|Styles applied to the trending user item element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`TrendingPeopleProps`](../interfaces/TrendingPeople.TrendingPeopleProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/TrendingPeople/TrendingPeople.tsx:94](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/TrendingPeople/TrendingPeople.tsx#L94)

___

### TrendingPeopleSkeleton

▸ **TrendingPeopleSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WidgetProps`](../interfaces/Widget.WidgetProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/TrendingPeople/Skeleton.tsx:24](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/TrendingPeople/Skeleton.tsx#L24)
