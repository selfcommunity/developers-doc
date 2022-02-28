---
id: "FeedObject.FeedObjectProps"
title: "Interface: FeedObjectProps"
sidebar_label: "FeedObjectProps"
custom_edit_url: null
---

[FeedObject](../modules/FeedObject).FeedObjectProps

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

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:184](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L184)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:195](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L195)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:213](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L213)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:189](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L189)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:201](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L201)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:231](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L231)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:237](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L237)

___

### hideShareAction

• `Optional` **hideShareAction**: `boolean`

Hide share action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:225](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L225)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:178](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L178)

___

### markRead

• `Optional` **markRead**: `boolean`

Mark the FeedObject as read when enter in viewport

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:207](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L207)

___

### template

• `Optional` **template**: `FeedObjectTemplateType`

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:219](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L219)
