### Properties

- [FeedSidebarProps](#feedsidebarprops)
- [ItemComponent](#itemcomponent)
- [ItemProps](#itemprops)
- [ItemSkeleton](#itemskeleton)
- [ItemSkeletonProps](#itemskeletonprops)
- [className](#classname)
- [endMessage](#endmessage)
- [endpoint](#endpoint)
- [id](#id)
- [refreshMessage](#refreshmessage)
- [widgets](#widgets)

### Methods

- [itemPropsGenerator](#itempropsgenerator)

## Properties

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: [FeedSidebarProps](FeedSidebarProps)

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:124](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L124)

___

### ItemComponent

• **ItemComponent**: `ElementType`<`any`\>

Component used to render single feed item retrieved by the endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:96](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L96)

___

### ItemProps

• `Optional` **ItemProps**: `any`

Props to spread to single feed item

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:107](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L107)

___

### ItemSkeleton

• **ItemSkeleton**: `ElementType`<`any`\>

Skeleton used to render loading effect during fetch

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:112](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L112)

___

### ItemSkeletonProps

• `Optional` **ItemSkeletonProps**: `any`

Props to spread to single feed item skeleton

**`default`** empty object

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:118](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L118)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:68](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L68)

___

### endMessage

• `Optional` **endMessage**: `ReactNode`

End message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.noOtherFeedObject" defaultMessage="ui.feed.noOtherFeedObject" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:79](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L79)

___

### endpoint

• **endpoint**: [EndpointType](../Types/endpoint/#scendpointtype)

Feed API Endpoint

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:73](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L73)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'feed'

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:62](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L62)

___

### refreshMessage

• `Optional` **refreshMessage**: `ReactNode`

Refresh message, rendered when no more feed item can be displayed

**`default`** <FormattedMessage id="ui.feed.refreshRelease" defaultMessage="ui.feed.refreshRelease" />

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:85](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L85)

___

### widgets

• `Optional` **widgets**: [SCFeedWidgetType](../Types/feed/#scfeedwidgettype)[]

Widgets to insert into the feed

**`default`** empty array

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:91](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L91)

## Methods

### itemPropsGenerator

▸ **itemPropsGenerator**(`item`): `any`

Function used to convert the single result returned by the Endpoint into the props necessary to render the ItemComponent

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`any`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:101](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Feed/Feed.tsx#L101)
