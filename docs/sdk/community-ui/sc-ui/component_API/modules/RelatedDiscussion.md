---
id: "RelatedDiscussion"
title: "Module: RelatedDiscussion"
sidebar_label: "RelatedDiscussion"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [RelatedDiscussionProps](../interfaces/RelatedDiscussion.RelatedDiscussionProps.md)

## Functions

### RelatedDiscussion

▸ **RelatedDiscussion**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Related Discussion component. Learn about the available props and the CSS API.

#### Import

```jsx
import {RelatedDiscussion} from '@selfcommunity/ui';
```

#### Component Name

The name `SCRelatedDiscussion` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCRelatedDiscussion-root|Styles applied to the root element.|
|title|.SCRelatedDiscussion-title|Styles applied to the title element.|
|noResults|.SCRelatedDiscussion-noResults|Styles applied to noResults section.|
|relatedItem|.SCRelatedDiscussion-related-item|Styles applied to the related item element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`RelatedDiscussionProps`](../interfaces/RelatedDiscussion.RelatedDiscussionProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/RelatedDiscussion/RelatedDiscussion.tsx:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/RelatedDiscussion/RelatedDiscussion.tsx#L118)

___

### RelatedDiscussionSkeleton

▸ **RelatedDiscussionSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/RelatedDiscussion/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/RelatedDiscussion/Skeleton.tsx#L4)
