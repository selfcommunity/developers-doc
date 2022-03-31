---
id: "UserFollowers"
title: "Module: UserFollowers"
sidebar_label: "UserFollowers"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UserFollowersProps](../interfaces/UserFollowers.UserFollowersProps.md)

## Functions

### UserFollowers

▸ **UserFollowers**(`inProps`): `JSX.Element`

> API documentation for the Community-UI User Followers component. Learn about the available props and the CSS API.

#### Import

```jsx
import {UserFollowers} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUserFollowers` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserFollowers-root|Styles applied to the root element.|
|title|.SCUserFollowers-title|Styles applied to the title element.|
|noResults|.SCUserFollowers-noResults|Styles applied to noResults section.|
|followersItem|.SCUserFollowers-followers-item|Styles applied to follower item element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UserFollowersProps`](../interfaces/UserFollowers.UserFollowersProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserFollowers/UserFollowers.tsx:108](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserFollowers/UserFollowers.tsx#L108)

___

### UserFollowersSkeleton

▸ **UserFollowersSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WidgetProps`](../interfaces/Widget.WidgetProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserFollowers/Skeleton.tsx:5](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserFollowers/Skeleton.tsx#L5)
