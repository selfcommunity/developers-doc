---
id: "types_feed.SCFeedObjectType"
title: "Interface: SCFeedObjectType"
sidebar_label: "SCFeedObjectType"
custom_edit_url: null
---

[types/feed](../modules/types_feed.md).SCFeedObjectType

Interface SCFeedObjectType.
FeedObject Schema.
General object.

## Hierarchy

- **`SCFeedObjectType`**

  ↳ [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

  ↳ [`SCFeedPostType`](types_feed.SCFeedPostType.md)

## Properties

### added\_at

• **added\_at**: `Date`

Added at

#### Defined in

[types/feed.ts:143](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L143)

___

### addressing

• **addressing**: [`SCTagType`](types_tag.SCTagType.md)[]

Tags adderssing

#### Defined in

[types/feed.ts:203](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L203)

___

### author

• `Optional` **author**: [`SCUserType`](types_user.SCUserType.md)

Author of the contribute

#### Defined in

[types/feed.ts:133](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L133)

___

### categories

• `Optional` **categories**: [`SCCategoryType`](types_category.SCCategoryType.md)[]

List of categories.

#### Defined in

[types/feed.ts:118](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L118)

___

### collapsed

• **collapsed**: `boolean`

True if the object is hidden

#### Defined in

[types/feed.ts:168](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L168)

___

### comment\_count

• **comment\_count**: `number`

Number of comment

#### Defined in

[types/feed.ts:173](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L173)

___

### deleted

• **deleted**: `boolean`

True if the object is deleted

#### Defined in

[types/feed.ts:163](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L163)

___

### flag\_count

• **flag\_count**: `number`

Number of flags

#### Defined in

[types/feed.ts:198](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L198)

___

### followed

• `Optional` **followed**: `boolean`

True if the logged user follow this object

#### Defined in

[types/feed.ts:183](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L183)

___

### html

• **html**: `string`

Html

#### Defined in

[types/feed.ts:153](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L153)

___

### id

• **id**: `number`

The ID of the post.

#### Defined in

[types/feed.ts:113](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L113)

___

### last\_activity\_at

• **last\_activity\_at**: `Date`

Last activity at

#### Defined in

[types/feed.ts:138](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L138)

___

### location

• `Optional` **location**: [`SCContributionLocation`](types_location.SCContributionLocation.md)

Location (contribution geolocation)

#### Defined in

[types/feed.ts:128](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L128)

___

### medias

• `Optional` **medias**: [`SCMediaType`](types_media.SCMediaType.md)[]

List of medias

#### Defined in

[types/feed.ts:123](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L123)

___

### share\_count

• **share\_count**: `number`

Number of internal share

#### Defined in

[types/feed.ts:178](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L178)

___

### slug

• **slug**: `string`

Slug

#### Defined in

[types/feed.ts:148](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L148)

___

### summary

• **summary**: `string`

Summary

#### Defined in

[types/feed.ts:158](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L158)

___

### suspended

• `Optional` **suspended**: `boolean`

Suspended notification

#### Defined in

[types/feed.ts:213](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L213)

___

### type

• **type**: [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType.md)

Type: discussion, post, status

#### Defined in

[types/feed.ts:208](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L208)

___

### vote\_count

• **vote\_count**: `number`

Number of votes

#### Defined in

[types/feed.ts:188](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L188)

___

### voted

• `Optional` **voted**: `boolean`

True if the logged user has already voted this object

#### Defined in

[types/feed.ts:193](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-core/src/types/feed.ts#L193)
