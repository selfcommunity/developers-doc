---
sidebar_label: Category 
sidebar_position: 1
title: Category API
---

> API documentation for the Community-UI Category component. Learn about the available props and the CSS API.

### Import 

```jsx
import Category from '@selfcommunity/sc-ui/src/components/Category';
```

### Component Name

The name `SCCategory` can be used when providing style overrides in the theme.


### Props

#### Category Props

|Name|Type|Default|Description|
|---|---|---|---|
|id|integer|null|Id of category object|
|category|[SCCategoryType](../../sc-core/Api_Reference/Types/category#properties)|null|Category Object|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|popular|bool|false|If true, renders different sections for popular categories list|
|onFollowProps|func|null|Callback fired on follow action|
|[p: string]|any|null|Other props.|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCategory-root|Styles applied to the root element.|

### Demos

- [Category](../Components/category)