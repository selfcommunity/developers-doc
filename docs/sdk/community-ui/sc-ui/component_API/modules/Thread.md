---
id: "Thread"
title: "Module: Thread"
sidebar_label: "Thread"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ThreadProps](../interfaces/Thread.ThreadProps.md)

## Functions

### Thread

▸ **Thread**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Thread component. Learn about the available props and the CSS API.

#### Import

```jsx
import {Thread} from '@selfcommunity/ui';
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
|threadBox|.SCThread-threadBox|Styles applied to the thread box element.|
|emptyBox|.SCThread-emptyBox|Styles applied to the empty box element.|
|newMessageBox|.SCThread-newMessageBox|Styles applied to the new message box element.|
|newMessageEditor|.SCThread-newMessageEditor|Styles applied to the new message editor.|
|newMessageEmptyBox|.SCThread-newMessageEmptyBox|Styles applied to the new message empty box element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`ThreadProps`](../interfaces/Thread.ThreadProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:171](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L171)

___

### ThreadSkeleton

▸ **ThreadSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Skeleton.tsx#L4)
