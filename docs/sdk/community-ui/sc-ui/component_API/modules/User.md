---
id: "User"
title: "Module: User"
sidebar_label: "User"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UserProps](../interfaces/User.UserProps)

## Functions

### User

▸ **User**(`props`): `JSX.Element`

> API documentation for the Community-UI User component. Learn about the available props and the CSS API.

#### Import

```jsx
import {User} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUser` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUser-root|Styles applied to the root element.|
|avatar|.SCUser-avatar|Styles applied to the avatar element.|
|actions|.SCUser-actions|Styles applied to actions section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserProps`](../interfaces/User.UserProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:97](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/User/User.tsx#L97)

___

### UserSkeleton

▸ **UserSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/User/Skeleton.tsx:27](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/User/Skeleton.tsx#L27)
