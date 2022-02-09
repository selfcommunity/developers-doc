---
sidebar_label: ChangeCover
sidebar_position: 1
title: ChangeCover API
---

> API documentation for the Community-UI ChangeCover component. Learn about the available props and the CSS API.

### Import 

```jsx
import ChangeCover from '@selfcommunity/ui';
```

### Component Name

The name `SCChangeCoverButton` can be used when providing style overrides in the theme.


### Props

[ChangeCoverProps](../Interfaces/ChangeCoverProps)

|Name|Type|Default|Description|
|---|---|---|---|
|onChange|func|null|On change function|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCChangeCoverButton-root|Styles applied to the root element.|
|helpPopover|.SCChangeCoverButton-help-popover|Styles applied to the help popover element.|
|menuItem|.SCChangeCoverButton-menu-item|Styles applied to the menu element.|

### Demos

- [ChangeCover](../Components/changecover)