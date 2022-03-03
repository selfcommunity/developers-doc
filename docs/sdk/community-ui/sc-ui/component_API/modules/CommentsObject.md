---
id: "CommentsObject"
title: "Module: CommentsObject"
sidebar_label: "CommentsObject"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CommentsObjectProps](../interfaces/CommentsObject.CommentsObjectProps.md)

## Functions

### CommentsObject

▸ **CommentsObject**(`props`): `JSX.Element`

> API documentation for the Community-UI Comments Object component. Learn about the available props and the CSS API.

#### Import

```jsx
import {CommentsObject} from '@selfcommunity/ui';
```

#### Component Name

The name `SCCommentsObject` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCommentsObject-root|Styles applied to the root element.|
|fixedPrimaryReply|.SCCommentsObject-fixed-primary-reply|Styles applied to the comment primary reply element.|
|fixedTopPrimaryReply|.SCCommentsObject-fixed-top-primary-reply|Styles applied to the comment top primary reply element.|
|fixedBottomPrimaryReply|.SCCommentsObject-fixed-bottom-primary-reply|Styles applied to the comment bottom primary reply  element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CommentsObjectProps`](../interfaces/CommentsObject.CommentsObjectProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:250](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L250)

___

### CommentsObjectSkeleton

▸ **CommentsObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/Skeleton.tsx:23](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/CommentsObject/Skeleton.tsx#L23)
