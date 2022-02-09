[@selfcommunity/ui](../README.md) / [Exports](../modules.md) / FeedUpdatesProps

# Interface: FeedUpdatesProps

List all exports

## Indexable

▪ [p: `string`]: `any`

Other Card props

## Table of contents

### Properties

- [className](FeedUpdatesProps.md#classname)
- [id](FeedUpdatesProps.md#id)
- [message](FeedUpdatesProps.md#message)
- [publicationChannel](FeedUpdatesProps.md#publicationchannel)
- [subscriptionChannel](FeedUpdatesProps.md#subscriptionchannel)

### Methods

- [subscriptionChannelUpdatesCallback](FeedUpdatesProps.md#subscriptionchannelupdatescallback)

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:32](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L32)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'custom_adv'

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:26](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L26)

___

### message

• `Optional` **message**: `ReactNode`

Update message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feedUpdates.message" defaultMessage="ui.feedUpdates.message" />

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:38](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L38)

___

### publicationChannel

• `Optional` **publicationChannel**: `string`

Publish channel for refresh notification

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:55](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L55)

___

### subscriptionChannel

• **subscriptionChannel**: `string`

Subscription channel for updates notification

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:43](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L43)

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

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:50](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L50)
