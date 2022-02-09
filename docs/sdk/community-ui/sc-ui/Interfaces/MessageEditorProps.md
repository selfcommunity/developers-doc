[@selfcommunity/ui](../README.md) / [Exports](../modules.md) / MessageEditorProps

# Interface: MessageEditorProps

List all exports

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Table of contents

### Properties

- [autoHide](MessageEditorProps.md#autohide)
- [className](MessageEditorProps.md#classname)

### Methods

- [getMessage](MessageEditorProps.md#getmessage)
- [onRef](MessageEditorProps.md#onref)
- [send](MessageEditorProps.md#send)

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:34](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L34)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:39](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L39)

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

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:57](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L57)

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

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:44](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L44)

___

### send

▸ `Optional` **send**(): `void`

Callback to send the message

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:52](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L52)
