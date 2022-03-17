---
id: "Message"
title: "Module: Message"
sidebar_label: "Message"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [MessageProps](../interfaces/Message.MessageProps.md)

## Functions

### Message

▸ **Message**(`props`): `JSX.Element`

> API documentation for the Community-UI Message component. Learn about the available props and the CSS API.

#### Import

```jsx
import {Message} from '@selfcommunity/ui';
```

#### Component Name

The name `SCMessage` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCMessage-root|Styles applied to the root element.|
|card|.SCMessage-card|Styles applied to the card element.|
|selected|.SCMessage-selected|Styles applied to the selected element.|
|info|.SCMessage-info|Styles applied to the info section.|
|messageBox|.SCMessage-messageBox|Styles applied to the message box element.|
|messageTime|.SCMessage-messageTime|Styles applied to the message time element.|
|unread|.SCMessage-unread|Styles applied to the unread element.|
|hide|.SCMessage-hide|Styles applied to the hidden element.|
|img|.SCMessage-img|Styles applied to the img element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MessageProps`](../interfaces/Message.MessageProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:149](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Message/Message.tsx#L149)

___

### MessageSkeleton

▸ **MessageSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Message/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Message/Skeleton.tsx#L25)
