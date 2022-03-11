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
|header|.SCFeedObject-header|Styles applied to the header of the card.|
|tag|.SCFeedObject-tag|Styles applied to the tag element.|
|title-section|.SCFeedObject-title-section|Styles applied to the title section.|
|title|.SCFeedObject-title|Styles applied to the title element.|
|username|.SCFeedObject-username|Styles applied to the username element.|
|category|.SCFeedObject-category|Styles applied to the category element.|
|content|.SCFeedObject-content|Styles applied to the content section. Content section include: title-section, text-section, snippetContent, subContent, medias-section, polls-section, info-section.|
|text-section|.SCFeedObject-text-section|Styles applied to the text section.|
|text|.SCFeedObject-text|Styles applied to the text element.|
|snippetContent|.SCFeedObject-snippet-content|Styles applied to snippet content element.|
|medias-section|.SCFeedObject-medias-section|Styles applied to the medias section.|
|polls-section|.SCFeedObject-polls-section|Styles applied to the polls section.|
|info-section|.SCFeedObject-info-section|Styles applied to the info section.|
|subContent|.SCFeedObject-sub-content|Styles applied to the sub content (container placed immediately after the content, similar to a footer). Wrap the contributors and the follow button.|
|actions|.SCFeedObject-actions|Styles applied to the actions container.|
|activitiesContent|.SCFeedObject-activities-content|Styles applied to the activities content element.|
|activityAt|.SCFeedObject-activity-at|Styles applied to the activity at section.|
|deleted|.SCFeedObject-deleted|Styles applied to the feed obj when is deleted (visible only for admin and moderator).|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedObjectProps`](../interfaces/FeedObject.FeedObjectProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:349](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L349)

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

[packages/sc-ui/src/components/FeedObject/Skeleton.tsx:39](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/Skeleton.tsx#L39)
