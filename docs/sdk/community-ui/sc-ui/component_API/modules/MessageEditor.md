---
id: "MessageEditor"
title: "Module: MessageEditor"
sidebar_label: "MessageEditor"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [MessageEditorProps](../interfaces/MessageEditor.MessageEditorProps.md)

## Functions

### MessageEditor

▸ **MessageEditor**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Message Editor component. Learn about the available props and the CSS API.

#### Import

```jsx
import {MessageEditor} from '@selfcommunity/ui';
```

#### Component Name

The name `SCMessageEditor` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCMessageEditor-root|Styles applied to the root element.|
|messageInput|.SCMessageEditor-card|Styles applied to the message input element.|
|sendMediaSection|.SCMessageEditor-send-media-section|Styles applied to the send media section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`MessageEditorProps`](../interfaces/MessageEditor.MessageEditorProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:93](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L93)

___

### MessageEditorSkeleton

▸ **MessageEditorSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/MessageEditor/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/MessageEditor/Skeleton.tsx#L4)
