---
id: "FeedObjectProps"
title: "Interface: FeedObjectProps"
sidebar_label: "FeedObjectProps"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- `CardProps`

  ↳ **`FeedObjectProps`**

## Indexable

▪ [p: `string`]: `any`

Other props

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:181](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L181)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:192](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L192)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:204](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L204)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:186](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L186)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:198](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L198)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:222](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L222)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:228](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L228)

___

### hideShareAction

• `Optional` **hideShareAction**: `boolean`

Hide share action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:216](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L216)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:175](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L175)

___

### template

• `Optional` **template**: [`FeedObjectTemplateType`](../enums/FeedObjectTemplateType)

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:210](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L210)
