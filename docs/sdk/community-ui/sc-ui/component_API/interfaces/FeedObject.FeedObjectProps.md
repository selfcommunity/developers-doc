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

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:278](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L278)

___

### ContributionActionsMenuProps

• `Optional` **ContributionActionsMenuProps**: `ContributionActionsMenuProps`

Props to spread to ContributionActionsMenu component

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:284](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L284)

___

### ContributorsFeedObjectProps

• `Optional` **ContributorsFeedObjectProps**: `ContributorsFeedObjectProps`

Props to spread to ContributorsFeedObject component

**`default`** {elevation: 0}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:302](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L302)

___

### FeedObjectSkeletonProps

• `Optional` **FeedObjectSkeletonProps**: `FeedObjectSkeletonProps`

Props to spread to ContributionActionsMenu component

**`default`** {elevation: 0}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:266](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L266)

___

### FollowButtonProps

• `Optional` **FollowButtonProps**: `FollowProps`

Props to spread to Follow button component

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:272](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L272)

___

### MediasPreviewProps

• `Optional` **MediasPreviewProps**: `MediaPreviewProps`

Props to spread to MediasPreview component

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:290](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L290)

___

### PollObjectProps

• `Optional` **PollObjectProps**: `PollObjectProps`

Props to spread to PollObject component

**`default`** {}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:296](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L296)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

CardProps.className

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:213](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L213)

___

### feedObject

• `Optional` **feedObject**: `SCFeedObjectType`

Feed Object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:224](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L224)

___

### feedObjectActivities

• `Optional` **feedObjectActivities**: `any`[]

Feed Object latest activities

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:242](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L242)

___

### feedObjectId

• `Optional` **feedObjectId**: `number`

Id of feed object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:218](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L218)

___

### feedObjectType

• `Optional` **feedObjectType**: `SCFeedObjectTypologyType`

Feed Object type

**`default`** 'post'

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:230](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L230)

___

### hideFollowAction

• `Optional` **hideFollowAction**: `boolean`

Hide follow action object

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:254](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L254)

___

### hideParticipantsPreview

• `Optional` **hideParticipantsPreview**: `boolean`

Hide Participants preview

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:260](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L260)

___

### id

• `Optional` **id**: `string`

Id of the feedObject

**`default`** `feed_object_<feedObjectId | feedObject.id>`

#### Overrides

CardProps.id

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:207](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L207)

___

### markRead

• `Optional` **markRead**: `boolean`

Mark the FeedObject as read when enter in viewport

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:236](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L236)

___

### template

• `Optional` **template**: `SCFeedObjectTemplateType`

Feed Object template type

**`default`** 'preview'

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedObject/FeedObject.tsx:248](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L248)
