---
id: "CommentObject"
title: "Module: CommentObject"
sidebar_label: "CommentObject"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CommentObjectProps](../interfaces/CommentObject.CommentObjectProps)

## Functions

### CommentObject

▸ **CommentObject**(`props`): `JSX.Element`

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
|textContent|.SCCommentObject-text-content|Styles applied to text content section.|
|commentChild|.SCCommentObject-comment-child|Styles applied to the comment child element.|
|btnVotes|.SCCommentObject-btn-votes|Styles applied to the vote button element.|
|votes|.SCCommentObject-votes|Styles applied to the votes section.|
|btnViewPreviousComments|.SCCommentObject-btn-view-previous-comments|Styles applied to previous comment button element|
|commentActionsMenu|.SCCommentObject-comment-actions-menu|Styles applied to comment action menu element.|
|deleted|.SCCommentObject-deleted|Styles applied to tdeleted element.|
|activityAt|.SCCommentObject-activity-at|Styles applied to activity at section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CommentObjectProps`](../interfaces/CommentObject.CommentObjectProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:264](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L264)

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

[packages/sc-ui/src/components/CommentObject/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/CommentObject/Skeleton.tsx#L25)
