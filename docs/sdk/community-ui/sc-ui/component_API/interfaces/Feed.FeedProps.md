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

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:158](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L158)

___

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: [`FeedSidebarProps`](Feed.FeedSidebarProps.md)

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:152](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L152)

___

### ItemComponent

• **ItemComponent**: `ElementType`<`any`\>

Component used to render single feed item retrieved by the endpoint

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:114](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L114)

___

### ItemProps

• `Optional` **ItemProps**: `any`

Props to spread to single feed item

**`default`** empty object

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:130](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L130)

___

### ItemSkeleton

• **ItemSkeleton**: `ElementType`<`any`\>

Skeleton used to render loading effect during fetch

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:135](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L135)

___

### ItemSkeletonProps

• `Optional` **ItemSkeletonProps**: `any`

Props to spread to single feed item skeleton

**`default`** empty object

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:141](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L141)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:86](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L86)

___

### endMessage

• `Optional` **endMessage**: `ReactNode`

End message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.noOtherFeedObject" defaultMessage="ui.feed.noOtherFeedObject" />

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:97](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L97)

___

### endpoint

• **endpoint**: `EndpointType`

Feed API Endpoint

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:91](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L91)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:80](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L80)

___

### refreshMessage

• `Optional` **refreshMessage**: `ReactNode`

Refresh message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.refreshRelease" defaultMessage="ui.feed.refreshRelease" />

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:103](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L103)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to insert into the feed

**`default`** empty array

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:109](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L109)

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

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:124](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L124)

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

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:119](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L119)

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

[sdk/community-ui/packages/sc-ui/src/components/Feed/Feed.tsx:146](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Feed/Feed.tsx#L146)
