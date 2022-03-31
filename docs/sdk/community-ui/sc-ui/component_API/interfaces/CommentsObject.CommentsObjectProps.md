---
id: "CommentsObject.CommentsObjectProps"
title: "Interface: CommentsObjectProps"
sidebar_label: "CommentsObjectProps"
custom_edit_url: null
---

[CommentsObject](../modules/CommentsObject.md).CommentsObjectProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### CommentObjectProps

• `Optional` **CommentObjectProps**: [`CommentObjectProps`](CommentObject.CommentObjectProps.md)

Props to spread to single comment object

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:148](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L148)

___

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {variant: 'outlined'}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:154](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L154)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `ReplyCommentObjectProps`

Props to spread to single reply comment object

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:160](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L160)

___

### additionalHeaderComments

• `Optional` **additionalHeaderComments**: `SCCommentType`[]

additional comments to show in the header
usefull when from a feedObject publish a comment
and this component show recent comments

**`default`** []

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:229](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L229)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:112](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L112)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:142](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L142)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:136](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L136)

___

### commentsLoadingBoxCount

• `Optional` **commentsLoadingBoxCount**: `number`

number of box of skeleton loading to show during loading phase

**`default`** 3

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:221](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L221)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `SCCommentsOrderBy`

comments orderBy

**`default`** SCCommentsOrderBy.ADDED_AT_DESC

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:192](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L192)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:186](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L186)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:124](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L124)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L118)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:130](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L130)

___

### fixedPrimaryReply

• `Optional` **fixedPrimaryReply**: `boolean`

position the primary reply in the bottom of the component

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:215](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L215)

___

### hideAdvertising

• `Optional` **hideAdvertising**: `boolean`

show/hide box advertising

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:242](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L242)

___

### hidePrimaryReply

• `Optional` **hidePrimaryReply**: `boolean`

show/hide primary content reply box

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:209](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L209)

___

### id

• `Optional` **id**: `string`

Id of the CommentsObject

**`default`** `comments_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:106](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L106)

___

### infiniteScrolling

• `Optional` **infiniteScrolling**: `boolean`

enable/disable infinite scrolling

**`default`** true

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:203](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L203)

___

### page

• `Optional` **page**: `number`

page

**`default`** 1

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:180](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L180)

___

### showTitle

• `Optional` **showTitle**: `boolean`

show title (number of comments)

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:197](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L197)

## Methods

### onChangePage

▸ `Optional` **onChangePage**(`page`): `any`

Callback invoked when load comments page
Usefull to sync location path for SEO optimization

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `any` |

#### Returns

`any`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:236](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L236)

___

### renderComment

▸ `Optional` **renderComment**(`SCCommentType`): `Element`

renderComment function
Usefull to override the single Comment

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `SCCommentType` | `any` |

#### Returns

`Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:167](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L167)

___

### renderNoComments

▸ `Optional` **renderNoComments**(): `Element`

renderNoComment function
invoked when no comments founds

**`default`** null

#### Returns

`Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:174](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L174)
