---
id: "UserProfileHeader"
title: "Module: UserProfileHeader"
sidebar_label: "UserProfileHeader"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UserProfileHeaderProps](../interfaces/UserProfileHeader.UserProfileHeaderProps.md)

## Functions

### UserProfileHeader

▸ **UserProfileHeader**(`inProps`): `JSX.Element`

> API documentation for the Community-UI User Profile Header component. Learn about the available props and the CSS API.

#### Import

```jsx
import {UserProfileHeader} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUserProfileHeader` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserProfileHeader-root|Styles applied to the root element.|
|cover|.SCUserProfileHeader-cover|Styles applied to the cover element.|
|avatar|.SCUserProfileHeader-avatar|Styles applied to the avatar element.|
|info|SCUserProfileHeader-info|Styles applied to the info element.|
|username|SCUserProfileHeader-username|Styles applied to the username element.|
|changePicture|.SCUserProfileHeader-change-picture|Styles applied to changePicture element.|
|changeCover|.SCUserProfileHeader-change-cover`|Styles applied to changeCover element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UserProfileHeaderProps`](../interfaces/UserProfileHeader.UserProfileHeaderProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileHeader/UserProfileHeader.tsx:139](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileHeader/UserProfileHeader.tsx#L139)

___

### UserProfileHeaderSkeleton

▸ **UserProfileHeaderSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileHeader/Skeleton.tsx:35](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileHeader/Skeleton.tsx#L35)
