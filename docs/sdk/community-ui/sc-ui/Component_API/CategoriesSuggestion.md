---
sidebar_label: Categories Suggestion 
sidebar_position: 1
title: Categories Suggestion API
---

> API documentation for the Community-UI Categories Suggestion component. Learn about the available props and the CSS API.

### Import 

```jsx
import CategoriesSuggestion from '@selfcommunity/sc-ui/src/components/CategoriesSuggestion';
```

### Component Name

The name `SCCategoriesSuggestion` can be used when providing style overrides in the theme.


### Props

#### CategoriesList Props

|Name|Type|Default|Description|
|---|---|---|---|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|CategoryProps|[CategoryProps](../Component_API/Category/#category-props)|empty obj|Props to spread to single category object.|
|[p: string]|any|null|Other props.|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCategoriesSuggestion-root|Styles applied to the root element.|

### Demos

- [CategoriesSuggestion](../Components/categoriessuggestion)