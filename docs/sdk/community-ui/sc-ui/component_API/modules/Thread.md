---
id: "Thread"
title: "Module: Thread"
sidebar_label: "Thread"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ThreadProps](../interfaces/Thread.ThreadProps)

## Functions

### Thread

▸ **Thread**(`props`): `JSX.Element`

> API documentation for the Community-UI Thread component. Learn about the available props and the CSS API.

#### Import

```jsx
import Thread from '@selfcommunity/ui';
```

#### Component Name

The name `SCThread` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCThread-root|Styles applied to the root element.|
|emptyBox|.SCThread-emptyBox|Styles applied to the empty box element.|
|sender|.SCThread-sender|Styles applied to the sender element.|
|receiver|.SCThread-receiver|Styles applied to the receiver element.|
|center|.SCThread-center|Styles applied to the center section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ThreadProps`](../interfaces/Thread.ThreadProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:126](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Thread/Thread.tsx#L126)

___

### ThreadSkeleton

▸ **ThreadSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Thread/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-ui/src/components/Thread/Skeleton.tsx#L4)
