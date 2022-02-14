---
id: "SCFeedWidgetType"
title: "Interface: SCFeedWidgetType"
sidebar_label: "SCFeedWidgetType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### column

• **column**: ``"left"`` \| ``"right"``

Column where insert the widget

#### Defined in

[packages/sc-ui/src/types/feed.ts:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L22)

___

### component

• **component**: `ElementType`<`any`\>

The component used to display the widget

#### Defined in

[packages/sc-ui/src/types/feed.ts:12](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L12)

___

### componentProps

• **componentProps**: `any`

Props to spread into the component

#### Defined in

[packages/sc-ui/src/types/feed.ts:17](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L17)

___

### position

• **position**: `number`

Position where insert the widget into the column

#### Defined in

[packages/sc-ui/src/types/feed.ts:27](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L27)

___

### publishEvents

• `Optional` **publishEvents**: `boolean`

Publish/Subscribe to events
If true, the component has the ability to post event to a channel/topic
The component accept publicationChannel and subscriptionChannel

#### Defined in

[packages/sc-ui/src/types/feed.ts:34](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L34)

___

### type

• **type**: ``"widget"``

Type of the widget

#### Defined in

[packages/sc-ui/src/types/feed.ts:7](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/feed.ts#L7)
