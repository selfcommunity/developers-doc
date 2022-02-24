---
id: "MessageEditor.MessageEditorProps"
title: "Interface: MessageEditorProps"
sidebar_label: "MessageEditorProps"
custom_edit_url: null
---

[MessageEditor](../modules/MessageEditor).MessageEditorProps

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:36](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L36)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:41](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L41)

## Methods

### getMessage

▸ `Optional` **getMessage**(`message`): `void`

Callback to pass message item

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:59](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L59)

___

### onRef

▸ `Optional` **onRef**(`ref`): `void`

Handles emoji editor

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `RefObject`<`TMUIRichTextEditorRef`\> |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:46](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L46)

___

### send

▸ `Optional` **send**(): `void`

Callback to send the message

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:54](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L54)
