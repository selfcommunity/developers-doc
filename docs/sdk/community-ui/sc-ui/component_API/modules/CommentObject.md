---
id: "CommentObject"
title: "Module: CommentObject"
sidebar_label: "CommentObject"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CommentObjectProps](../interfaces/CommentObject.CommentObjectProps.md)

## Functions

### CommentObject

▸ **CommentObject**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Comment Object component. Learn about the available props and the CSS API.

#### Import

```jsx
import {CommentObject} from '@selfcommunity/ui';
```

#### Component Name

The name `SCCommentObject` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCommentObject-root|Styles applied to the root element.|
|comment|.SCCommentObject-comment|Styles applied to comment element.|
|avatarWrap|.SCCommentObject-avatar-wrap|Styles applied to avatar wrap.|
|avatar|.SCCommentObject-avatar|Styles applied to the avatar element.|
|author|.SCCommentObject-author|Styles applied to the author section.|
|content|.SCCommentObject-content|Styles applied to content section.|
|contentWrap|.SCCommentObject-content-wrap|Styles applied to content container element.|
|textContent|.SCCommentObject-text-content|Styles applied to text content section.|
|commentChild|.SCCommentObject-comment-child|Styles applied to the comment child element.|
|btnVotes|.SCCommentObject-btn-votes|Styles applied to the vote button element.|
|votes|.SCCommentObject-votes|Styles applied to the votes section.|
|btnViewPreviousComments|.SCCommentObject-btn-view-previous-comments|Styles applied to previous comment button element|
|commentActionsMenu|.SCCommentObject-comment-actions-menu|Styles applied to comment action menu element.|
|deleted|.SCCommentObject-deleted|Styles applied to tdeleted element.|
|activityAt|.SCCommentObject-activity-at|Styles applied to activity at section.|
|reply|.SCCommentObject-reply|Styles applied to the reply element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`CommentObjectProps`](../interfaces/CommentObject.CommentObjectProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:277](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L277)

___

### CommentObjectSkeleton

▸ **CommentObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/Skeleton.tsx#L25)
