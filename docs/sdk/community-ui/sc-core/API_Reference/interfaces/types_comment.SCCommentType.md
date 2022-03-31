---
id: "types_comment.SCCommentType"
title: "Interface: SCCommentType"
sidebar_label: "SCCommentType"
custom_edit_url: null
---

[types/comment](../modules/types_comment.md).SCCommentType

Interface SCCommentType.
Comment Schema.

## Properties

### added\_at

• **added\_at**: `Date`

Added at

#### Defined in

[types/comment.ts:41](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L41)

___

### author

• `Optional` **author**: [`SCUserType`](types_user.SCUserType.md)

User who commented

#### Defined in

[types/comment.ts:36](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L36)

___

### collapsed

• **collapsed**: `boolean`

If the comments is hidden

#### Defined in

[types/comment.ts:61](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L61)

___

### comment\_count

• **comment\_count**: `number`

Number of comments

#### Defined in

[types/comment.ts:91](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L91)

___

### deleted

• **deleted**: `boolean`

If the comments is deleted

#### Defined in

[types/comment.ts:56](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L56)

___

### discussion

• `Optional` **discussion**: `number`

Id of the Discussion object

#### Defined in

[types/comment.ts:21](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L21)

___

### flag\_count

• **flag\_count**: `number`

Number of flags

#### Defined in

[types/comment.ts:86](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L86)

___

### html

• **html**: `string`

Html of the comment

#### Defined in

[types/comment.ts:46](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L46)

___

### id

• **id**: `number`

Id of the comment

#### Defined in

[types/comment.ts:16](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L16)

___

### in\_reply\_to

• `Optional` **in\_reply\_to**: `number`

Id of the reply Comment, it must have the same parent

#### Defined in

[types/comment.ts:71](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L71)

___

### latest\_comments

• `Optional` **latest\_comments**: [`SCCommentType`](types_comment.SCCommentType.md)[]

Comments childs

#### Defined in

[types/comment.ts:101](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L101)

___

### parent

• **parent**: `number`

Id of the parent

#### Defined in

[types/comment.ts:66](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L66)

___

### post

• `Optional` **post**: `number`

Id of the Post object

#### Defined in

[types/comment.ts:26](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L26)

___

### status

• `Optional` **status**: `number`

Id of the Status object

#### Defined in

[types/comment.ts:31](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L31)

___

### summary

• **summary**: `string`

Summary

#### Defined in

[types/comment.ts:51](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L51)

___

### text

• **text**: `string`

Text of the comment

#### Defined in

[types/comment.ts:96](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L96)

___

### type

• **type**: `string`

Type: comment

#### Defined in

[types/comment.ts:106](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L106)

___

### vote\_count

• **vote\_count**: `number`

Number of votes

#### Defined in

[types/comment.ts:76](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L76)

___

### voted

• **voted**: `boolean`

True if the logged user has already voted the comment

#### Defined in

[types/comment.ts:81](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/comment.ts#L81)
