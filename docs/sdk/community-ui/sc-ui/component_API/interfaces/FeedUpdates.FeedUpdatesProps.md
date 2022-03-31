---
id: "FeedUpdates.FeedUpdatesProps"
title: "Interface: FeedUpdatesProps"
sidebar_label: "FeedUpdatesProps"
custom_edit_url: null
---

[FeedUpdates](../modules/FeedUpdates.md).FeedUpdatesProps

## Indexable

▪ [p: `string`]: `any`

Other Card props

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:39](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L39)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'custom_adv'

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:33](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L33)

___

### message

• `Optional` **message**: `ReactNode`

Update message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feedUpdates.message" defaultMessage="ui.feedUpdates.message" />

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:45](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L45)

___

### publicationChannel

• `Optional` **publicationChannel**: `string`

Publish channel for refresh notification

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:62](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L62)

___

### subscriptionChannel

• **subscriptionChannel**: `string`

Subscription channel for updates notification

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:50](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L50)

## Methods

### subscriptionChannelUpdatesCallback

▸ `Optional` **subscriptionChannelUpdatesCallback**(`msg`, `data`): `boolean`

Callback used to check if the message published to the channel is an update message

**`default`** (msg, data) => true

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `data` | `any` |

#### Returns

`boolean`

boolean

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:57](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L57)
