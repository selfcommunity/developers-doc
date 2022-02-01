---
sidebar_label: Trending Feed
sidebar_position: 1
title: Trending Feed API
---

> API documentation for the Community-UI Trending Feed component. Learn about the available props and the CSS API.

### Import 

```jsx
import TrendingFeedObject from '@selfcommunity/sc-ui/src/components/TrendingFeed';
```

### Component Name

The name `SCTrendingFeed` can be used when providing style overrides in the theme.


### Props

#### Feed Props

|Name|Type|Default|Description|
|---|---|---|---|
|categoryId|string|'feed'|Id of category.|
|template|[FeedObjectTemplateType](../Types/feed/#feedobjecttemplatetype)|'snippet'|Feed Object template type|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCTrendingFeed-root|Styles applied to the root element.|

### Demos

- [TrendingFeed](../Components/trendingfeed)