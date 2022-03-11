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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:224](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L224)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object ReplyCommentObject

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:230](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L230)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:151](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L151)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:163](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L163)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:157](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L157)

___

### commentReply

• `Optional` **commentReply**: `SCCommentType`

comment to reply
Used to initial open reply box for that comment

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:200](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L200)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:193](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L193)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page (latest_comments)

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:187](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L187)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:175](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L175)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:169](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L169)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:181](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L181)

## Methods

### onFetchLatestComment

▸ `Optional` **onFetchLatestComment**(): `void`

Callback on fecth latest comments

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:218](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L218)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:206](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L206)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:212](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L212)
