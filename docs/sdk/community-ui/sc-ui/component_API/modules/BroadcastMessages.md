---
id: "BroadcastMessages"
title: "Module: BroadcastMessages"
sidebar_label: "BroadcastMessages"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [BroadcastMessagesProps](../interfaces/BroadcastMessages.BroadcastMessagesProps.md)

## Functions

### BroadcastMessages

▸ **BroadcastMessages**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Broadcast Messages component. Learn about the available props and the CSS API.
> This component handles message broadcasts. It initially displays unseen messages. If all messages have been viewed it will show at most one message.

#### Import
```jsx
import {BroadcastMessages} from '@selfcommunity/ui';
```
#### Component Name
The name `SCBroadcastMessages` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCBroadcastMessages-root|Styles applied to the root element.|
|boxLoadMore|.SCBroadcastMessages-box-load-more|Styles applied to load more box.|
|buttonLoadMore|.SCBroadcastMessages-button-load-more|Styles applied to load more button.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`BroadcastMessagesProps`](../interfaces/BroadcastMessages.BroadcastMessagesProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/BroadcastMessages/BroadcastMessages.tsx:99](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/BroadcastMessages/BroadcastMessages.tsx#L99)

___

### BroadcastMessagesSkeleton

▸ **BroadcastMessagesSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/BroadcastMessages/Skeleton.tsx:62](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/BroadcastMessages/Skeleton.tsx#L62)
