---
id: "types_feed.SCFeedDiscussionType"
title: "Interface: SCFeedDiscussionType"
sidebar_label: "SCFeedDiscussionType"
custom_edit_url: null
---

[types/feed](../modules/types_feed.md).SCFeedDiscussionType

Interface SCFeedDiscussionType.
FeedDiscussion Schema.

## Hierarchy

- [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

  ↳ **`SCFeedDiscussionType`**

## Properties

### added\_at

• **added\_at**: `Date`

Added at

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[added_at](types_feed.SCFeedObjectType.md#added_at)

#### Defined in

[types/feed.ts:143](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L143)

___

### addressing

• **addressing**: [`SCTagType`](types_tag.SCTagType.md)[]

Tags adderssing

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[addressing](types_feed.SCFeedObjectType.md#addressing)

#### Defined in

[types/feed.ts:203](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L203)

___

### author

• `Optional` **author**: [`SCUserType`](types_user.SCUserType.md)

Author of the contribute

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[author](types_feed.SCFeedObjectType.md#author)

#### Defined in

[types/feed.ts:133](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L133)

___

### categories

• `Optional` **categories**: [`SCCategoryType`](types_category.SCCategoryType.md)[]

List of categories.

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[categories](types_feed.SCFeedObjectType.md#categories)

#### Defined in

[types/feed.ts:118](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L118)

___

### collapsed

• **collapsed**: `boolean`

True if the object is hidden

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[collapsed](types_feed.SCFeedObjectType.md#collapsed)

#### Defined in

[types/feed.ts:168](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L168)

___

### comment\_count

• **comment\_count**: `number`

Number of comment

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[comment_count](types_feed.SCFeedObjectType.md#comment_count)

#### Defined in

[types/feed.ts:173](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L173)

___

### deleted

• **deleted**: `boolean`

True if the object is deleted

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[deleted](types_feed.SCFeedObjectType.md#deleted)

#### Defined in

[types/feed.ts:163](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L163)

___

### flag\_count

• **flag\_count**: `number`

Number of flags

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[flag_count](types_feed.SCFeedObjectType.md#flag_count)

#### Defined in

[types/feed.ts:198](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L198)

___

### followed

• `Optional` **followed**: `boolean`

True if the logged user follow this object

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[followed](types_feed.SCFeedObjectType.md#followed)

#### Defined in

[types/feed.ts:183](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L183)

___

### html

• **html**: `string`

Html

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[html](types_feed.SCFeedObjectType.md#html)

#### Defined in

[types/feed.ts:153](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L153)

___

### id

• **id**: `number`

The ID of the post.

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[id](types_feed.SCFeedObjectType.md#id)

#### Defined in

[types/feed.ts:113](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L113)

___

### last\_activity\_at

• **last\_activity\_at**: `Date`

Last activity at

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[last_activity_at](types_feed.SCFeedObjectType.md#last_activity_at)

#### Defined in

[types/feed.ts:138](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L138)

___

### location

• `Optional` **location**: [`SCContributionLocation`](types_location.SCContributionLocation.md)

Location (contribution geolocation)

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[location](types_feed.SCFeedObjectType.md#location)

#### Defined in

[types/feed.ts:128](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L128)

___

### medias

• `Optional` **medias**: [`SCMediaType`](types_media.SCMediaType.md)[]

List of medias

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[medias](types_feed.SCFeedObjectType.md#medias)

#### Defined in

[types/feed.ts:123](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L123)

___

### poll

• `Optional` **poll**: [`SCPollType`](types_poll.SCPollType.md)

Poll

#### Defined in

[types/feed.ts:229](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L229)

___

### share\_count

• **share\_count**: `number`

Number of internal share

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[share_count](types_feed.SCFeedObjectType.md#share_count)

#### Defined in

[types/feed.ts:178](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L178)

___

### slug

• **slug**: `string`

Slug

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[slug](types_feed.SCFeedObjectType.md#slug)

#### Defined in

[types/feed.ts:148](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L148)

___

### summary

• **summary**: `string`

Summary

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[summary](types_feed.SCFeedObjectType.md#summary)

#### Defined in

[types/feed.ts:158](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L158)

___

### suspended

• `Optional` **suspended**: `boolean`

Suspended notification

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[suspended](types_feed.SCFeedObjectType.md#suspended)

#### Defined in

[types/feed.ts:213](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L213)

___

### title

• **title**: `string`

Title of the discussion

#### Defined in

[types/feed.ts:224](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L224)

___

### type

• **type**: [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType.md)

Type: discussion, post, status

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[type](types_feed.SCFeedObjectType.md#type)

#### Defined in

[types/feed.ts:208](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L208)

___

### vote\_count

• **vote\_count**: `number`

Number of votes

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[vote_count](types_feed.SCFeedObjectType.md#vote_count)

#### Defined in

[types/feed.ts:188](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L188)

___

### voted

• `Optional` **voted**: `boolean`

True if the logged user has already voted this object

#### Inherited from

[SCFeedObjectType](types_feed.SCFeedObjectType.md).[voted](types_feed.SCFeedObjectType.md#voted)

#### Defined in

[types/feed.ts:193](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L193)
