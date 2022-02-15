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

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:182](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L182)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:193](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L193)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:211](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L211)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:187](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L187)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:199](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L199)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:229](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L229)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:235](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L235)

___

### hideShareAction

• `Optional` **hideShareAction**: `boolean`

Hide share action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:223](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L223)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:176](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L176)

___

### markRead

• `Optional` **markRead**: `boolean`

Mark the FeedObject as read when enter in viewport

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:205](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L205)

___

### template

• `Optional` **template**: `FeedObjectTemplateType`

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:217](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L217)
