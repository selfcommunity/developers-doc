---
sidebar_label: Change Picture 
sidebar_position: 1
title: Change Picture API
---

> API documentation for the Community-UI Change Picture component. Learn about the available props and the CSS API.

### Import 

```jsx
import ChangePicture from '@selfcommunity/ui';
```

### Component Name

The name `SCChangePictureButton` can be used when providing style overrides in the theme.


### Props

[ChangePictureProps](../Interfaces/ChangePictureProps)

|Name|Type|Default|Description|
|---|---|---|---|
|onChange|func|null|On change function|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|
|iconButton|bool|null|If true, shows camera icon button|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCChangePictureButton-root|Styles applied to the root element.|

### Demos

- [ChangePicture](../Components/changepicture)