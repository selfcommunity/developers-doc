---
id: "Editor.EditorProps"
title: "Interface: EditorProps"
sidebar_label: "EditorProps"
custom_edit_url: null
---

[Editor](../modules/Editor.md).EditorProps

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L118)

___

### defaultValue

• `Optional` **defaultValue**: `string`

Default value for the editor

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:124](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L124)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'poll'

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:112](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L112)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Is the content of the editor read only

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:130](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L130)

## Methods

### onChange

▸ `Optional` **onChange**(`value`): `void`

Handler for change event of the editor

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:136](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L136)

___

### onRef

▸ `Optional` **onRef**(`editor`): `void`

Handler for ref forwarding of the MUIRichTextEditor

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `RefObject`<[`TRichTextEditorRef`](../modules/Editor.md#trichtexteditorref)\> |

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Editor/Editor.tsx:142](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Editor/Editor.tsx#L142)
