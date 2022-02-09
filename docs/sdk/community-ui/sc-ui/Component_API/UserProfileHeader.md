---
sidebar_label: User Profile Header
sidebar_position: 1
title: User Profile Header API
---
> API documentation for the Community-UI component. Learn about the available props and the CSS API.

### Import 

```jsx
import UserProfileHeader from '@selfcommunity/ui';
```

### Component Name

The name `SCUserProfileHeader` can be used when providing style overrides in the theme.


### Props

[UserProfileHeaderProps](../Interfaces/userprofileheaderprops)

|Name|Type|Default|Description|
|---|---|---|---|
|userId|integer|null|Id of user object.|
|user|[User](../../sc-core/Api_Reference/Types/user#properties)|null|User Object.|
|[p: string]|any|null|Other props.|




### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserProfileHeader-root|Styles applied to the root element.|
|cover|.SCUserProfileHeader-cover|Styles applied to the cover element.|
|avatar|.SCUserProfileHeader-avatar|Styles applied to the avatar element.|
|info|SCUserProfileHeader-info|Styles applied to the info element.|
|username|SCUserProfileHeader-username|Styles applied to the username element.|
|changePicture|.SCUserProfileHeader-change-picture|Styles applied to changePicture element.|
|changeCover|.SCUserProfileHeader-change-cover`|Styles applied to changeCover element.|

### Demos

- [UserProfileHeader](../Components/userprofileheader)