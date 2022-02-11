---
id: "SCFeedPostType"
title: "Interface: SCFeedPostType"
sidebar_label: "SCFeedPostType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- [`SCFeedObjectType`](SCFeedObjectType)

  ↳ **`SCFeedPostType`**

## Properties

### added\_at

• **added\_at**: `Date`

Added at

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[added_at](SCFeedObjectType#added_at)

#### Defined in

[types/feed.ts:143](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L143)

___

### addressing

• **addressing**: [`SCTagType`](SCTagType)[]

Tags adderssing

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[addressing](SCFeedObjectType#addressing)

#### Defined in

[types/feed.ts:203](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L203)

___

### author

• `Optional` **author**: [`SCUserType`](SCUserType)

Author of the contribute

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[author](SCFeedObjectType#author)

#### Defined in

[types/feed.ts:133](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L133)

___

### categories

• `Optional` **categories**: [`SCCategoryType`](SCCategoryType)[]

List of categories.

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[categories](SCFeedObjectType#categories)

#### Defined in

[types/feed.ts:118](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L118)

___

### collapsed

• **collapsed**: `boolean`

True if the object is hidden

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[collapsed](SCFeedObjectType#collapsed)

#### Defined in

[types/feed.ts:168](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L168)

___

### comment\_count

• **comment\_count**: `number`

Number of comment

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[comment_count](SCFeedObjectType#comment_count)

#### Defined in

[types/feed.ts:173](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L173)

___

### deleted

• **deleted**: `boolean`

True if the object is deleted

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[deleted](SCFeedObjectType#deleted)

#### Defined in

[types/feed.ts:163](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L163)

___

### flag\_count

• **flag\_count**: `number`

Number of flags

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[flag_count](SCFeedObjectType#flag_count)

#### Defined in

[types/feed.ts:198](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L198)

___

### followed

• `Optional` **followed**: `boolean`

True if the logged user follow this object

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[followed](SCFeedObjectType#followed)

#### Defined in

[types/feed.ts:183](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L183)

___

### html

• **html**: `string`

Html

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[html](SCFeedObjectType#html)

#### Defined in

[types/feed.ts:153](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L153)

___

### id

• **id**: `number`

The ID of the post.

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[id](SCFeedObjectType#id)

#### Defined in

[types/feed.ts:113](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L113)

___

### last\_activity\_at

• **last\_activity\_at**: `Date`

Last activity at

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[last_activity_at](SCFeedObjectType#last_activity_at)

#### Defined in

[types/feed.ts:138](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L138)

___

### location

• `Optional` **location**: [`SCContributionLocation`](SCContributionLocation)

Location (contribution geolocation)

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[location](SCFeedObjectType#location)

#### Defined in

[types/feed.ts:128](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L128)

___

### medias

• `Optional` **medias**: [`SCMediaType`](SCMediaType)[]

List of medias

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[medias](SCFeedObjectType#medias)

#### Defined in

[types/feed.ts:123](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L123)

___

### poll

• `Optional` **poll**: [`SCPollType`](SCPollType)

Poll

#### Defined in

[types/feed.ts:240](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L240)

___

### share\_count

• **share\_count**: `number`

Number of internal share

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[share_count](SCFeedObjectType#share_count)

#### Defined in

[types/feed.ts:178](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L178)

___

### slug

• **slug**: `string`

Slug

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[slug](SCFeedObjectType#slug)

#### Defined in

[types/feed.ts:148](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L148)

___

### summary

• **summary**: `string`

Summary

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[summary](SCFeedObjectType#summary)

#### Defined in

[types/feed.ts:158](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L158)

___

### suspended

• `Optional` **suspended**: `boolean`

Suspended notification

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[suspended](SCFeedObjectType#suspended)

#### Defined in

[types/feed.ts:213](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L213)

___

### type

• **type**: [`SCFeedObjectTypologyType`](../enums/SCFeedObjectTypologyType)

Type: discussion, post, status

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[type](SCFeedObjectType#type)

#### Defined in

[types/feed.ts:208](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L208)

___

### vote\_count

• **vote\_count**: `number`

Number of votes

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[vote_count](SCFeedObjectType#vote_count)

#### Defined in

[types/feed.ts:188](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L188)

___

### voted

• `Optional` **voted**: `boolean`

True if the logged user has already voted this object

#### Inherited from

[SCFeedObjectType](SCFeedObjectType).[voted](SCFeedObjectType#voted)

#### Defined in

[types/feed.ts:193](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L193)
