---
id: "UserProfileEdit"
title: "Module: UserProfileEdit"
sidebar_label: "UserProfileEdit"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UserProfileEditProps](../interfaces/UserProfileEdit.UserProfileEditProps.md)
- [UserProfileEditSectionPublicInfoProps](../interfaces/UserProfileEdit.UserProfileEditSectionPublicInfoProps.md)
- [UserProfileEditSectionSettingsProps](../interfaces/UserProfileEdit.UserProfileEditSectionSettingsProps.md)

## Functions

### UserProfileEdit

▸ **UserProfileEdit**(`inProps`): `JSX.Element`

> API documentation for the Community-UI User Profile Edit component. Learn about the available props and the CSS API.

#### Import

```jsx
import {UserProfileEdit} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUserProfileEdit` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserProfileEdit-root|Styles applied to the root element.|
|field|.SCUserProfileEdit-field|Styles applied to the field element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UserProfileEditProps`](../interfaces/UserProfileEdit.UserProfileEditProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileEdit/UserProfileEdit.tsx:124](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileEdit/UserProfileEdit.tsx#L124)

___

### UserProfileEditSectionPublicInfo

▸ **UserProfileEditSectionPublicInfo**(`inProps`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UserProfileEditSectionPublicInfoProps`](../interfaces/UserProfileEdit.UserProfileEditSectionPublicInfoProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileEdit/Section/PublicInfo.tsx:112](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileEdit/Section/PublicInfo.tsx#L112)

___

### UserProfileEditSectionSettings

▸ **UserProfileEditSectionSettings**(`inProps`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`UserProfileEditSectionSettingsProps`](../interfaces/UserProfileEdit.UserProfileEditSectionSettingsProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileEdit/Section/Settings.tsx:50](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileEdit/Section/Settings.tsx#L50)

___

### UserProfileEditSkeleton

▸ **UserProfileEditSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/UserProfileEdit/Skeleton.tsx:18](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/UserProfileEdit/Skeleton.tsx#L18)
