---
id: "FeedObject"
title: "Module: FeedObject"
sidebar_label: "FeedObject"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FeedObjectProps](../interfaces/FeedObject.FeedObjectProps.md)

## Functions

### FeedObject

▸ **FeedObject**(`props`): `JSX.Element`

> API documentation for the Community-UI Feed Object component. Learn about the available props and the CSS API.

#### Import

```jsx
import {FeedObject} from '@selfcommunity/ui';
```

#### Component Name

The name `SCFeedObject` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCFeedObject-root|Styles applied to the root element.|
|title|.SCFeedObject-title|Styles applied to the title element.|
|username|.SCFeedObject-username|Styles applied to the username element.|
|category|.SCFeedObject-category|Styles applied to the category element.|
|content|.SCFeedObject-content|Styles applied to the content section.|
|text|.SCFeedObject-text|Styles applied to the text element.|
|snippetContent|.SCFeedObject-snippet-content|Styles applied to snippet content element.|
|tag|.SCFeedObject-tag|Styles applied to the tag element.|
|activitiesContent|.SCFeedObject-activities-content|Styles applied to the activities content element.|
|followButton|.SCFeedObject-follow-button|Styles applied to the follow button element.|
|activityAt|.SCFeedObject-activity-at|Styles applied to the activity at section.|
|sharedContentFeedObject|.SCFeedObject-shared-content-feed-object|Styles applied to the feed obj shared content element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedObjectProps`](../interfaces/FeedObject.FeedObjectProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:286](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L286)

___

### FeedObjectSkeleton

▸ **FeedObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.template?` | `FeedObjectTemplateType` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedObject/Skeleton.tsx:29](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/Skeleton.tsx#L29)
