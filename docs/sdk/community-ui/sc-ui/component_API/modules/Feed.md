---
id: "Feed"
title: "Module: Feed"
sidebar_label: "Feed"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FeedProps](../interfaces/Feed.FeedProps)
- [FeedSidebarProps](../interfaces/Feed.FeedSidebarProps)

## Functions

### Feed

▸ **Feed**(`props`): `JSX.Element`

> API documentation for the Community-UI Feed component. Learn about the available props and the CSS API.

#### Import

```jsx
import {Feed} from '@selfcommunity/ui';
```

#### Component Name

The name `SCFeed` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCFeed-root|Styles applied to the root element.|
|left|.SCFeed-left|Styles applied to the left element.|
|right|.SCFeed-right|Styles applied to the right element.|
|end|.SCFeed-end|Styles applied to the end element.|
|refresh|.SCFeed-refresh|Styles applied to the refresh section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedProps`](../interfaces/Feed.FeedProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:165](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-ui/src/components/Feed/Feed.tsx#L165)

___

### FeedSkeleton

▸ **FeedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<`FeedSkeletonMap`\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Feed/Skeleton.tsx:35](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-ui/src/components/Feed/Skeleton.tsx#L35)
