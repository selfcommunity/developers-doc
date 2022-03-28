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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:122](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L122)

___

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:128](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L128)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `ReplyCommentObjectProps`

Props to spread to single reply comment object

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:134](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L134)

___

### additionalHeaderComments

• `Optional` **additionalHeaderComments**: `SCCommentType`[]

additional comments to show in the header

**`default`** []

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:201](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L201)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:86](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L86)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:116](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L116)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:110](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L110)

___

### commentsLoadingBoxCount

• `Optional` **commentsLoadingBoxCount**: `number`

number of box of skeleton loading to show during loading phase

**`default`** 3

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:195](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L195)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:166](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L166)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:160](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L160)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:98](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L98)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:92](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L92)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:104](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L104)

___

### fixedPrimaryReply

• `Optional` **fixedPrimaryReply**: `boolean`

position the primary reply in the bottom of the component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:189](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L189)

___

### hideAdvertising

• `Optional` **hideAdvertising**: `boolean`

show/hide box advertising

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:214](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L214)

___

### hidePrimaryReply

• `Optional` **hidePrimaryReply**: `boolean`

show/hide primary content reply box

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:183](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L183)

___

### id

• `Optional` **id**: `string`

Id of the CommentsObject

**`default`** `comments_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:80](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L80)

___

### infiniteScrolling

• `Optional` **infiniteScrolling**: `boolean`

enable/disable infinite scrolling

**`default`** true

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:177](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L177)

___

### page

• `Optional` **page**: `number`

page

**`default`** 1

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:154](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L154)

___

### showTitle

• `Optional` **showTitle**: `boolean`

show title (number of comments)

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:171](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L171)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:208](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L208)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:141](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L141)

___

### renderNoComments

▸ `Optional` **renderNoComments**(): `Element`

renderNoComment function
invoked when no comments founds

**`default`** null

#### Returns

`Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:148](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L148)
