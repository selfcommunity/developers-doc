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

### ActionsProps

• `Optional` **ActionsProps**: `ActionsProps`

Props to spread to Actions component

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:277](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L277)

___

### ContributionActionsMenuProps

• `Optional` **ContributionActionsMenuProps**: `ContributionActionsMenuProps`

Props to spread to ContributionActionsMenu component

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:283](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L283)

___

### ContributorsFeedObjectProps

• `Optional` **ContributorsFeedObjectProps**: `ContributorsFeedObjectProps`

Props to spread to ContributorsFeedObject component

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:301](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L301)

___

### FeedObjectSkeletonProps

• `Optional` **FeedObjectSkeletonProps**: `FeedObjectSkeletonProps`

Props to spread to ContributionActionsMenu component

**`default`** {elevation: 0}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:265](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L265)

___

### FollowButtonProps

• `Optional` **FollowButtonProps**: `FollowProps`

Props to spread to Follow button component

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:271](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L271)

___

### MediasPreviewProps

• `Optional` **MediasPreviewProps**: `MediaPreviewProps`

Props to spread to MediasPreview component

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:289](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L289)

___

### PollObjectProps

• `Optional` **PollObjectProps**: `PollObjectProps`

Props to spread to PollObject component

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:295](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L295)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:212](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L212)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:223](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L223)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:241](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L241)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:217](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L217)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:229](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L229)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:253](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L253)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:259](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L259)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectType>_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:206](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L206)

___

### markRead

• `Optional` **markRead**: `boolean`

Mark the FeedObject as read when enter in viewport

**`default`** false

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:235](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L235)

___

### template

• `Optional` **template**: `FeedObjectTemplateType`

Feed Object template type

**`default`** 'preview'

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:247](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L247)
