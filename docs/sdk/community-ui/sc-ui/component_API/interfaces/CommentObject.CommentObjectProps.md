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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:215](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L215)

___

### ReplyCommentObjectProps

• `Optional` **ReplyCommentObjectProps**: `OverrideProps`<`CardTypeMap`<{}, ``"div"``\>, ``"div"``\>

Props to spread to single comment object ReplyCommentObject

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:221](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L221)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:142](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L142)

___

### commentObject

• `Optional` **commentObject**: `SCCommentType`

Comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:154](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L154)

___

### commentObjectId

• `Optional` **commentObjectId**: `number`

Id of the comment object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:148](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L148)

___

### commentReply

• `Optional` **commentReply**: `SCCommentType`

comment to reply
Used to intial open reply box for that comment

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:191](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L191)

___

### commentsOrderBy

• `Optional` **commentsOrderBy**: `CommentsOrderBy`

comments orderBy

**`default`** CommentsOrderBy.ADDED_AT_DESC

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:184](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L184)

___

### commentsPageCount

• `Optional` **commentsPageCount**: `number`

comments per page (latest_comments)

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:178](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L178)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:166](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L166)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:160](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L160)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Type of feed object

**`default`** SCFeedObjectTypologyType.POST

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:172](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L172)

## Methods

### onFetchLatestComment

▸ `Optional` **onFetchLatestComment**(): `void`

Callback on fecth latest comments

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:209](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L209)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:197](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L197)

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

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:203](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L203)
