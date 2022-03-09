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

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:131](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L131)

___

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:137](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L137)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `ReplyCommentObjectProps`

Props to spread to single reply comment object

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:143](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L143)

___

### additionalHeaderComments

• `Optional` **additionalHeaderComments**: `SCCommentType`[]

additional comments to show in the header

**`default`** []

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:210](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L210)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:95](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L95)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:125](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L125)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:119](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L119)

___

### commentsLoadingBoxCount

• `Optional` **commentsLoadingBoxCount**: `number`

number of box of skeleton loading to show during loading phase

**`default`** 3

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:204](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L204)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:175](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L175)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:169](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L169)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:107](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L107)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:101](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L101)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:113](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L113)

___

### fixedPrimaryReply

• `Optional` **fixedPrimaryReply**: `boolean`

position the primary reply in the bottom of the component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:198](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L198)

___

### hideAdvertising

• `Optional` **hideAdvertising**: `boolean`

show/hide box advertising

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:223](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L223)

___

### hidePrimaryReply

• `Optional` **hidePrimaryReply**: `boolean`

show/hide primary content reply box

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:192](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L192)

___

### id

• `Optional` **id**: `string`

Id of the CommentsObject

**`default`** `comments_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:89](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L89)

___

### infiniteScrolling

• `Optional` **infiniteScrolling**: `boolean`

enable/disable infinite scrolling

**`default`** true

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:186](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L186)

___

### page

• `Optional` **page**: `number`

page

**`default`** 1

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:163](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L163)

___

### showTitle

• `Optional` **showTitle**: `boolean`

show title (number of comments)

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:180](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L180)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:217](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L217)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:150](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L150)

___

### renderNoComments

▸ `Optional` **renderNoComments**(): `Element`

renderNoComment function
invoked when no comments founds

**`default`** null

#### Returns

`Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:157](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L157)
