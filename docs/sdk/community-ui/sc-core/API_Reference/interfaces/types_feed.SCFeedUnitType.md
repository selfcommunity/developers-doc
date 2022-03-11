---
id: "types_feed.SCFeedUnitType"
title: "Interface: SCFeedUnitType"
sidebar_label: "SCFeedUnitType"
custom_edit_url: null
---

[types/feed](../modules/types_feed.md).SCFeedUnitType

Interface SCFeedUnitType.
FeedUnit Schema.

## Properties

### activities

• `Optional` **activities**: [`SCFeedUnitActivityType`](types_feed.SCFeedUnitActivityType.md)[]

List of feed activities. This field is returned only for relevance feed

#### Defined in

[types/feed.ts:63](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L63)

___

### discussion

• `Optional` **discussion**: [`SCFeedDiscussionType`](types_feed.SCFeedDiscussionType.md)

Discussion object

#### Defined in

[types/feed.ts:38](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L38)

___

### has\_boost

• `Optional` **has\_boost**: `boolean`

True if this object has the visibility boost

#### Defined in

[types/feed.ts:58](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L58)

___

### post

• `Optional` **post**: [`SCFeedPostType`](types_feed.SCFeedPostType.md)

Post object

#### Defined in

[types/feed.ts:43](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L43)

___

### seen\_by\_id

• `Optional` **seen\_by\_id**: `number`[]

Id of User that have seen this object

#### Defined in

[types/feed.ts:53](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L53)

___

### status

• `Optional` **status**: [`SCFeedObjectType`](types_feed.SCFeedObjectType.md)

Status object

#### Defined in

[types/feed.ts:48](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L48)

___

### type

• **type**: [`SCFeedObjectTypologyType`](../enums/types_feed.SCFeedObjectTypologyType.md)

The type of the object, can be discussion, post or status

#### Defined in

[types/feed.ts:33](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-core/src/types/feed.ts#L33)
