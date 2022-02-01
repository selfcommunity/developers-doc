---
sidebar_label: Feed
sidebar_position: 1
title: Feed API
---

> API documentation for the Community-UI Feed component. Learn about the available props and the CSS API.

### Import 

```jsx
import Feed from '@selfcommunity/sc-ui/src/components/Feed';
```

### Component Name

The name `SCFeed` can be used when providing style overrides in the theme.


### Props

#### Feed Props

|Name|Type|Default|Description|
|---|---|---|---|
|id|string|'feed'|Id of feed object|
|className|string|null|Overrides or extends the styles applied to the component.|
|endpoint|[EndpointType](../Types/endpoint/#scendpointtype)|null|Feed API Endpoint|
|widgets|[SCFeedWidgetType](../Types/feed/#scfeedwidgettype)[]|empty|Widgets to insert into the feed|
|FeedObjectProps|[FeedObjectProps](#)|empty|Props to spread to single feed object|
|StickySidebarProps|[StickySidebarProps](#stickysidebarprops)|`{top: 0, bottomBoundary: #${id}}`|Props to spread to single feed object|

##### StickySidebarProps

|Name|Type|
|---|---|
|top|string/number|
|bottomBoundary|string/number|


### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCFeed-root|Styles applied to the root element.|

### Demos

- [Feed](../Components/feed)