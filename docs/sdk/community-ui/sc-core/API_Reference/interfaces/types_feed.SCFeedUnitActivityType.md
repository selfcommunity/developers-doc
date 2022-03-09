---
id: "types_feed.SCFeedUnitActivityType"
title: "Interface: SCFeedUnitActivityType"
sidebar_label: "SCFeedUnitActivityType"
custom_edit_url: null
---

[types/feed](../modules/types_feed.md).SCFeedUnitActivityType

Interface SCFeedUnitActivityType.
FeedUnit Activity Schema.

## Properties

### active\_at

• **active\_at**: `Date`

Time of activity

#### Defined in

[types/feed.ts:96](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L96)

___

### author

• **author**: [`SCUserType`](types_user.SCUserType.md)

The user involved.

#### Defined in

[types/feed.ts:91](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L91)

___

### comment

• `Optional` **comment**: `any`

The comment if type ==  SCFeedUnitActivityTypologyType.COMMENT.

#### Defined in

[types/feed.ts:86](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L86)

___

### seen\_by\_id

• `Optional` **seen\_by\_id**: `number`[]

Id of Users that have seen this activity

#### Defined in

[types/feed.ts:101](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L101)

___

### type

• **type**: [`SCFeedUnitActivityTypologyType`](../enums/types_feed.SCFeedUnitActivityTypologyType.md)

The type of the activity.

#### Defined in

[types/feed.ts:81](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/feed.ts#L81)
