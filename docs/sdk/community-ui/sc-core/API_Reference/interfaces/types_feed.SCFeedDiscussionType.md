---
id: "types_feed.SCFeedDiscussionType"
title: "Interface: SCFeedDiscussionType"
sidebar_label: "SCFeedDiscussionType"
custom_edit_url: null
---

[types/feed](../modules/types_feed).SCFeedDiscussionType

Interface SCFeedDiscussionType.
FeedDiscussion Schema.

## Hierarchy

- [`SCFeedObjectType`](types_feed.SCFeedObjectType)

  ↳ **`SCFeedDiscussionType`**

## Properties

### added\_at

• **added\_at**: `Date`

Added at

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[added_at](types_feed.SCFeedObjectType#added_at)

#### Defined in

[types/feed.ts:143](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L143)

___

### addressing

• **addressing**: [`SCTagType`](types_tag.SCTagType)[]

Tags adderssing

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[addressing](types_feed.SCFeedObjectType#addressing)

#### Defined in

[types/feed.ts:203](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L203)

___

### author

• `Optional` **author**: [`SCUserType`](types_user.SCUserType)

Author of the contribute

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[author](types_feed.SCFeedObjectType#author)

#### Defined in

[types/feed.ts:133](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L133)

___

### categories

• `Optional` **categories**: [`SCCategoryType`](types_category.SCCategoryType)[]

List of categories.

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[categories](types_feed.SCFeedObjectType#categories)

#### Defined in

[types/feed.ts:118](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L118)

___

### collapsed

• **collapsed**: `boolean`

True if the object is hidden

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[collapsed](types_feed.SCFeedObjectType#collapsed)

#### Defined in

[types/feed.ts:168](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L168)

___

### comment\_count

• **comment\_count**: `number`

Number of comment

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[comment_count](types_feed.SCFeedObjectType#comment_count)

#### Defined in

[types/feed.ts:173](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L173)

___

### deleted

• **deleted**: `boolean`

True if the object is deleted

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[deleted](types_feed.SCFeedObjectType#deleted)

#### Defined in

[types/feed.ts:163](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L163)

___

### flag\_count

• **flag\_count**: `number`

Number of flags

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[flag_count](types_feed.SCFeedObjectType#flag_count)

#### Defined in

[types/feed.ts:198](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L198)

___

### followed

• `Optional` **followed**: `boolean`

True if the logged user follow this object

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[followed](types_feed.SCFeedObjectType#followed)

#### Defined in

[types/feed.ts:183](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L183)

___

### html

• **html**: `string`

Html

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[html](types_feed.SCFeedObjectType#html)

#### Defined in

[types/feed.ts:153](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L153)

___

### id

• **id**: `number`

The ID of the post.

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[id](types_feed.SCFeedObjectType#id)

#### Defined in

[types/feed.ts:113](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L113)

___

### last\_activity\_at

• **last\_activity\_at**: `Date`

Last activity at

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[last_activity_at](types_feed.SCFeedObjectType#last_activity_at)

#### Defined in

[types/feed.ts:138](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L138)

___

### location

• `Optional` **location**: [`SCContributionLocation`](types_location.SCContributionLocation)

Location (contribution geolocation)

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[location](types_feed.SCFeedObjectType#location)

#### Defined in

[types/feed.ts:128](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L128)

___

### medias

• `Optional` **medias**: [`SCMediaType`](types_media.SCMediaType)[]

List of medias

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[medias](types_feed.SCFeedObjectType#medias)

#### Defined in

[types/feed.ts:123](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L123)

___

### poll

• `Optional` **poll**: [`SCPollType`](types_poll.SCPollType)

Poll

#### Defined in

[types/feed.ts:229](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L229)

___

### share\_count

• **share\_count**: `number`

Number of internal share

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[share_count](types_feed.SCFeedObjectType#share_count)

#### Defined in

[types/feed.ts:178](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L178)

___

### slug

• **slug**: `string`

Slug

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[slug](types_feed.SCFeedObjectType#slug)

#### Defined in

[types/feed.ts:148](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L148)

___

### summary

• **summary**: `string`

Summary

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[summary](types_feed.SCFeedObjectType#summary)

#### Defined in

[types/feed.ts:158](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L158)

___

### suspended

• `Optional` **suspended**: `boolean`

Suspended notification

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[suspended](types_feed.SCFeedObjectType#suspended)

#### Defined in

[types/feed.ts:213](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L213)

___

### title

• **title**: `string`

Title of the discussion

#### Defined in

[types/feed.ts:224](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L224)

___

### type

• **type**: [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType)

Type: discussion, post, status

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[type](types_feed.SCFeedObjectType#type)

#### Defined in

[types/feed.ts:208](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L208)

___

### vote\_count

• **vote\_count**: `number`

Number of votes

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[vote_count](types_feed.SCFeedObjectType#vote_count)

#### Defined in

[types/feed.ts:188](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L188)

___

### voted

• `Optional` **voted**: `boolean`

True if the logged user has already voted this object

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType).[voted](types_feed.SCFeedObjectType#voted)

#### Defined in

[types/feed.ts:193](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/feed.ts#L193)
