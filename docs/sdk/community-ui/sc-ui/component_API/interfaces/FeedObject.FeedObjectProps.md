---
id: "FeedObject.FeedObjectProps"
title: "Interface: FeedObjectProps"
sidebar_label: "FeedObjectProps"
custom_edit_url: null
---

[FeedObject](../modules/FeedObject.md).FeedObjectProps

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

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:192](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L192)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:203](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L203)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:221](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L221)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:197](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L197)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:209](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L209)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:239](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L239)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:245](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L245)

___

### hideShareAction

• `Optional` **hideShareAction**: `boolean`

Hide share action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:233](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L233)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:186](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L186)

___

### markRead

• `Optional` **markRead**: `boolean`

Mark the FeedObject as read when enter in viewport

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:215](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L215)

___

### template

• `Optional` **template**: `FeedObjectTemplateType`

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:227](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L227)
