---
sidebar_label: Related Discussion
sidebar_position: 1
title: Related Discussion API
---

> API documentation for the Community-UI Related Discussion component. Learn about the available props and the CSS API.

### Import 

```jsx
import Related Discussion from '@selfcommunity/sc-ui/src/components/RelatedDiscussion';
```

### Component Name

The name `SCRelatedDiscussion` can be used when providing style overrides in the theme.


### Props

|Name|Type|Default|Description|
|---|---|---|---|
|feedObjectId|integer|null|Id of the feed object|
|feedObjectType|[SCFeedObjectTypologyType](../../sc-core/Api_Reference/Types/feed/#scfeedobjecttypologytype)|'discussion'|Type of  feed object|
|template|[FeedObjectTemplateType](../Types/feed/#feedobjecttemplatetype)|'snippet'|Feed Object template type|
|FeedObjectProps|[FeedObjectProps](#)|empty|Props to spread to single feed object|
|autoHide|bool|false|If true, hides the component.|
|className|string|null|Overrides or extends the styles applied to the component.|
|[p: string]|any|null|Other props.|



### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCRelatedDiscussion-root|Styles applied to the root element.|

### Demos

- [RelatedDiscussion](../Components/relateddiscussion)