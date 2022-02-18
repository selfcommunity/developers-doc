---
id: "CommentObject.CommentObjectProps"
title: "Interface: CommentObjectProps"
sidebar_label: "CommentObjectProps"
custom_edit_url: null
---

[CommentObject](../modules/CommentObject).CommentObjectProps

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### CommentObjectSkeletonProps

• `Optional` **CommentObjectSkeletonProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object skeleton

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:213](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L213)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object ReplyCommentObject

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:219](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L219)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:140](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L140)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:152](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L152)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:146](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L146)

___

### commentReply

• `Optional` **commentReply**: `SCCommentType`

comment to reply
Used to intial open reply box for that comment

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:189](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L189)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:182](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L182)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page (latest_comments)

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:176](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L176)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:164](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L164)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:158](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L158)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:170](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L170)

## Methods

### onFetchLatestComment

▸ `Optional` **onFetchLatestComment**(): `void`

Callback on fecth latest comments

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:207](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L207)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:195](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L195)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:201](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L201)
