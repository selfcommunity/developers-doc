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

[packages/sc-ui/src/components/Editor/Editor.tsx:117](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L117)

___

### defaultValue

• `Optional` **defaultValue**: `string`

Default value for the editor

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:123](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L123)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'poll'

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:111](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L111)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Is the content of the editor read only

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:129](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L129)

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

[packages/sc-ui/src/components/Editor/Editor.tsx:135](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L135)

___

### onRef

▸ `Optional` **onRef**(`editor`): `void`

Handler for ref forwarding of the MUIRichTextEditor

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `RefObject`<`TMUIRichTextEditorRef`\> |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:141](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-ui/src/components/Editor/Editor.tsx#L141)
