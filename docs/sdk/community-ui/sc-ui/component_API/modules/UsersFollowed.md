---
id: "UsersFollowed"
title: "Module: UsersFollowed"
sidebar_label: "UsersFollowed"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UsersFollowedProps](../interfaces/UsersFollowed.UsersFollowedProps.md)

## Functions

### UsersFollowed

▸ **UsersFollowed**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Users Followed component. Learn about the available props and the CSS API.

#### Import

```jsx
import {UsersFollowed} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUsersFollowed` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUsersFollowed-root|Styles applied to the root element.|
|title|.SCUsersFollowed-title|Styles applied to the title element.|
|noResults|.SCUsersFollowed-noResults|Styles applied to noResults section.|
|followedItem|.SCUsersFollowed-followed-item|Styles applied to the followed item element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UsersFollowedProps`](../interfaces/UsersFollowed.UsersFollowedProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UsersFollowed/UsersFollowed.tsx:107](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UsersFollowed/UsersFollowed.tsx#L107)

___

### UsersFollowedSkeleton

▸ **UsersFollowedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WidgetProps`](../interfaces/Widget.WidgetProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UsersFollowed/Skeleton.tsx:5](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UsersFollowed/Skeleton.tsx#L5)
