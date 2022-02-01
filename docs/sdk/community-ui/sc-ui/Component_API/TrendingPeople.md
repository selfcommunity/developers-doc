---
sidebar_label: Trending People
sidebar_position: 1
title: Trending People API
---

> API documentation for the Community-UI Trending People component. Learn about the available props and the CSS API.

### Import 

```jsx
import Trending People from '@selfcommunity/sc-ui/src/components/TrendingPeople';
```

### Component Name

The name `SCTrendingPeople` can be used when providing style overrides in the theme.


### Props

|Name|Type|Default|Description|
|---|---|---|---|
|categoryId|integer|null|Id of category object|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|
|UserProps|[UserProps](../Component_API/User/#user-props)|empty|Props to spread to single user object.|



### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCTrendingPeople-root|Styles applied to the root element.|

### Demos

- [TrendingPeople](../Components/trendingpeople)