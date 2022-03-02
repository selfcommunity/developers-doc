---
id: "Feed.FeedProps"
title: "Interface: FeedProps"
sidebar_label: "FeedProps"
custom_edit_url: null
---

[Feed](../modules/Feed).FeedProps

## Properties

### CustomAdvProps

• `Optional` **CustomAdvProps**: [`CustomAdvProps`](CustomAdv.CustomAdvProps)

Props to spread to single custom adv element (this props can be used only if Custom Adv are enabled)

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:131](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L131)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: [`FeedSidebarProps`](Feed.FeedSidebarProps)

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:125](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L125)

___

### ItemComponent

• **ItemComponent**: `ElementType`<`any`\>

Component used to render single feed item retrieved by the endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:97](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L97)

___

### ItemProps

• `Optional` **ItemProps**: `any`

Props to spread to single feed item

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:108](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L108)

___

### ItemSkeleton

• **ItemSkeleton**: `ElementType`<`any`\>

Skeleton used to render loading effect during fetch

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:113](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L113)

___

### ItemSkeletonProps

• `Optional` **ItemSkeletonProps**: `any`

Props to spread to single feed item skeleton

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:119](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L119)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:69](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L69)

___

### endMessage

• `Optional` **endMessage**: `ReactNode`

End message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.noOtherFeedObject" defaultMessage="ui.feed.noOtherFeedObject" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:80](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L80)

___

### endpoint

• **endpoint**: `EndpointType`

Feed API Endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:74](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L74)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:63](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L63)

___

### refreshMessage

• `Optional` **refreshMessage**: `ReactNode`

Refresh message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.refreshRelease" defaultMessage="ui.feed.refreshRelease" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:86](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L86)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to insert into the feed

**`default`** empty array

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:92](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L92)

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

[packages/sc-ui/src/components/Feed/Feed.tsx:102](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Feed/Feed.tsx#L102)
