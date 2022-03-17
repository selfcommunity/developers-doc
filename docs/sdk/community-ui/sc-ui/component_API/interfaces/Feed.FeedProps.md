---
id: "Feed.FeedProps"
title: "Interface: FeedProps"
sidebar_label: "FeedProps"
custom_edit_url: null
---

[Feed](../modules/Feed.md).FeedProps

## Properties

### CustomAdvProps

• `Optional` **CustomAdvProps**: [`CustomAdvProps`](CustomAdv.CustomAdvProps.md)

Props to spread to single custom adv element (this props can be used only if Custom Adv are enabled)

**`default`** {}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:156](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L156)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: [`FeedSidebarProps`](Feed.FeedSidebarProps.md)

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:150](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L150)

___

### ItemComponent

• **ItemComponent**: `ElementType`<`any`\>

Component used to render single feed item retrieved by the endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:112](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L112)

___

### ItemProps

• `Optional` **ItemProps**: `any`

Props to spread to single feed item

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:128](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L128)

___

### ItemSkeleton

• **ItemSkeleton**: `ElementType`<`any`\>

Skeleton used to render loading effect during fetch

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:133](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L133)

___

### ItemSkeletonProps

• `Optional` **ItemSkeletonProps**: `any`

Props to spread to single feed item skeleton

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:139](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L139)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:84](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L84)

___

### endMessage

• `Optional` **endMessage**: `ReactNode`

End message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.noOtherFeedObject" defaultMessage="ui.feed.noOtherFeedObject" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:95](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L95)

___

### endpoint

• **endpoint**: `EndpointType`

Feed API Endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:89](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L89)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:78](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L78)

___

### refreshMessage

• `Optional` **refreshMessage**: `ReactNode`

Refresh message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.refreshRelease" defaultMessage="ui.feed.refreshRelease" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:101](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L101)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to insert into the feed

**`default`** empty array

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:107](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L107)

## Methods

### itemIdGenerator

▸ **itemIdGenerator**(`item`): `any`

Function used to generate an id from the single result returned by the Endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:122](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L122)

___

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

[packages/sc-ui/src/components/Feed/Feed.tsx:117](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L117)

___

### onFetchData

▸ `Optional` **onFetchData**(`data`): `any`

Callback invoked whenever data is loaded during paging

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:144](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Feed/Feed.tsx#L144)
