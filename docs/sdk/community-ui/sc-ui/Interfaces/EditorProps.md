### Properties

- [className](EditorProps.md#classname)
- [defaultValue](EditorProps.md#defaultvalue)
- [id](EditorProps.md#id)
- [readOnly](EditorProps.md#readonly)

### Methods

- [onChange](EditorProps.md#onchange)
- [onRef](EditorProps.md#onref)

## Properties

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:115](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L115)

___

### defaultValue

• `Optional` **defaultValue**: `string`

Default value for the editor

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:121](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L121)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'poll'

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:109](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L109)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Is the content of the editor read only

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:127](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L127)

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

[packages/sc-ui/src/components/Editor/Editor.tsx:133](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L133)

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

[packages/sc-ui/src/components/Editor/Editor.tsx:139](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/components/Editor/Editor.tsx#L139)
