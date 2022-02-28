---
id: "CommentsObject.CommentsObjectProps"
title: "Interface: CommentsObjectProps"
sidebar_label: "CommentsObjectProps"
custom_edit_url: null
---

[CommentsObject](../modules/CommentsObject).CommentsObjectProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### CommentObjectProps

• `Optional` **CommentObjectProps**: [`CommentObjectProps`](CommentObject.CommentObjectProps)

Props to spread to single comment object

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:126](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L126)

___

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:132](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L132)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `ReplyCommentObjectProps`

Props to spread to single reply comment object

**`default`** {variant: 'outlined'}

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:138](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L138)

___

### additionalHeaderComments

• `Optional` **additionalHeaderComments**: `SCCommentType`[]

additional comments to show in the header

**`default`** []

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:205](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L205)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:90](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L90)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:120](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L120)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:114](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L114)

___

### commentsLoadingBoxCount

• `Optional` **commentsLoadingBoxCount**: `number`

number of box of skeleton loading to show during loading phase

**`default`** 3

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:199](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L199)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:170](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L170)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:164](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L164)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:102](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L102)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:96](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L96)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:108](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L108)

___

### fixedPrimaryReply

• `Optional` **fixedPrimaryReply**: `boolean`

position the primary reply in the bottom of the component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:193](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L193)

___

### hideAdvertising

• `Optional` **hideAdvertising**: `boolean`

show/hide box advertising

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:218](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L218)

___

### hidePrimaryReply

• `Optional` **hidePrimaryReply**: `boolean`

show/hide primary content reply box

**`default`** false

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:187](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L187)

___

### id

• `Optional` **id**: `string`

Id of the CommentsObject

**`default`** `comments_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:84](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L84)

___

### infiniteScrolling

• `Optional` **infiniteScrolling**: `boolean`

enable/disable infinite scrolling

**`default`** true

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:181](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L181)

___

### page

• `Optional` **page**: `number`

page

**`default`** 1

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:158](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L158)

___

### showTitle

• `Optional` **showTitle**: `boolean`

show title (number of comments)

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:175](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L175)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:212](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L212)

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

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:145](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L145)

___

### renderNoComments

▸ `Optional` **renderNoComments**(): `Element`

renderNoComment function
invoked when no comments founds

**`default`** null

#### Returns

`Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:152](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L152)
