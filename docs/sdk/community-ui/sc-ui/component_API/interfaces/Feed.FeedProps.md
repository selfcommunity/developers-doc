---
id: "Feed.FeedProps"
title: "Interface: FeedProps"
sidebar_label: "FeedProps"
custom_edit_url: null
---

[Feed](../modules/Feed).FeedProps

## Properties

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: [`FeedSidebarProps`](Feed.FeedSidebarProps)

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:122](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L122)

___

### ItemComponent

• **ItemComponent**: `ElementType`<`any`\>

Component used to render single feed item retrieved by the endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:94](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L94)

___

### ItemProps

• `Optional` **ItemProps**: `any`

Props to spread to single feed item

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:105](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L105)

___

### ItemSkeleton

• **ItemSkeleton**: `ElementType`<`any`\>

Skeleton used to render loading effect during fetch

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:110](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L110)

___

### ItemSkeletonProps

• `Optional` **ItemSkeletonProps**: `any`

Props to spread to single feed item skeleton

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:116](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L116)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:66](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L66)

___

### endMessage

• `Optional` **endMessage**: `ReactNode`

End message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.noOtherFeedObject" defaultMessage="ui.feed.noOtherFeedObject" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:77](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L77)

___

### endpoint

• **endpoint**: `EndpointType`

Feed API Endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:71](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L71)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:60](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L60)

___

### refreshMessage

• `Optional` **refreshMessage**: `ReactNode`

Refresh message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.refreshRelease" defaultMessage="ui.feed.refreshRelease" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:83](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L83)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to insert into the feed

**`default`** empty array

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:89](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L89)

## Methods

### itemPropsGenerator

▸ **itemPropsGenerator**(`scUser`, `item`): `any`

Function used to convert the single result returned by the Endpoint into the props necessary to render the ItemComponent

#### Parameters

| Name | Type |
| :------ | :------ |
| `scUser` | `SCUserType` |
| `item` | `any` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:99](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-ui/src/components/Feed/Feed.tsx#L99)
