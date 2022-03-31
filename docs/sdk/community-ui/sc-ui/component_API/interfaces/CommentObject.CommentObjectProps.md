---
id: "CommentObject.CommentObjectProps"
title: "Interface: CommentObjectProps"
sidebar_label: "CommentObjectProps"
custom_edit_url: null
---

[CommentObject](../modules/CommentObject.md).CommentObjectProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {elevation: 0}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:226](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L226)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object ReplyCommentObject

**`default`** {elevation: 0}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:232](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L232)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:153](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L153)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:165](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L165)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:159](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L159)

___

### commentReply

• `Optional` **commentReply**: `SCCommentType`

comment to reply
Used to initial open reply box for that comment

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:202](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L202)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `SCCommentsOrderBy`

comments orderBy

**`default`** SCCommentsOrderBy.ADDED_AT_DESC

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:195](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L195)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page (latest_comments)

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:189](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L189)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:177](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L177)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:171](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L171)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:183](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L183)

## Methods

### onFetchLatestComment

▸ `Optional` **onFetchLatestComment**(): `void`

Callback on fecth latest comments

**`default`** null

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:220](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L220)

___

### onOpenReply

▸ `Optional` **onOpenReply**(`comment`): `void`

Callback on open reply box

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `SCCommentType` |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:208](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L208)

___

### onVote

▸ `Optional` **onVote**(`comment`): `void`

Callback on vote the comment or a sub-comment (latest_comments)

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `SCCommentType` |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/CommentObject/CommentObject.tsx:214](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L214)
