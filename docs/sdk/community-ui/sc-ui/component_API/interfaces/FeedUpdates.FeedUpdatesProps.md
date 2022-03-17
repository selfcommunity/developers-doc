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

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:34](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L34)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'custom_adv'

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:28](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L28)

___

### message

• `Optional` **message**: `ReactNode`

Update message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feedUpdates.message" defaultMessage="ui.feedUpdates.message" />

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:40](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L40)

___

### publicationChannel

• `Optional` **publicationChannel**: `string`

Publish channel for refresh notification

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:57](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L57)

___

### subscriptionChannel

• **subscriptionChannel**: `string`

Subscription channel for updates notification

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:45](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L45)

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

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:52](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L52)
