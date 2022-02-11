---
id: "SCFeedUnitActivityType"
title: "Interface: SCFeedUnitActivityType"
sidebar_label: "SCFeedUnitActivityType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### active\_at

• **active\_at**: `Date`

Time of activity

#### Defined in

[types/feed.ts:96](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L96)

___

### author

• **author**: [`SCUserType`](SCUserType)

The user involved.

#### Defined in

[types/feed.ts:91](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L91)

___

### comment

• `Optional` **comment**: `any`

The comment if type ==  SCFeedUnitActivityTypologyType.COMMENT.

#### Defined in

[types/feed.ts:86](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L86)

___

### seen\_by\_id

• `Optional` **seen\_by\_id**: `number`[]

Id of Users that have seen this activity

#### Defined in

[types/feed.ts:101](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L101)

___

### type

• **type**: [`SCFeedUnitActivityTypologyType`](../enums/SCFeedUnitActivityTypologyType)

The type of the activity.

#### Defined in

[types/feed.ts:81](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L81)
