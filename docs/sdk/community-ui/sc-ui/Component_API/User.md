---
sidebar_label: User
sidebar_position: 1
title: User API
---
> API documentation for the Community-UI User component. Learn about the available props and the CSS API.

### Import 

```jsx
import User from '@selfcommunity/sc-ui/src/components/User';
```

### Component Name

The name `SCUser` can be used when providing style overrides in the theme.


### Props

#### User Props

|Name|Type|Default|Description|
|---|---|---|---|
|id|integer|null|Id of user object.|
|user|[User](../../sc-core/Api_Reference/Types/user#properties)|null|User Object.|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|
|handleIgnoreAction|func|null|Handles actions ignore.|
|onFollowProps|func|null|Callback function on follow action.|




### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUser-root|Styles applied to the root element.|

### Demos

- [User](../Components/user)