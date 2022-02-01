---
sidebar_label: Category Header
sidebar_position: 1
title: Category Header API
---

> API documentation for the Community-UI Category Header component. Learn about the available props and the CSS API.

### Import 

```jsx
import CategoryHeader from '@selfcommunity/sc-ui/src/components/CategoryHeader';
```

### Component Name

The name `SCCategoryHeader` can be used when providing style overrides in the theme.


### Props

|Name|Type|Default|Description|
|---|---|---|---|
|categoryId|integer|null|Id of category object|
|category|[SCCategoryType](../../sc-core/Api_Reference/Types/category#properties)|null|Category Object|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCategoryHeader-root|Styles applied to the root element.|

### Demos

- [CategoryHeader](../Components/categoryheader)