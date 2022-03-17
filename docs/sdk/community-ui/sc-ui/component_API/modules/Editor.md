---
id: "Editor"
title: "Module: Editor"
sidebar_label: "Editor"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [EditorProps](../interfaces/Editor.EditorProps.md)

## Type aliases

### TRichTextEditorRef

Ƭ **TRichTextEditorRef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `focus` | () => `void` |
| `insertAtomicBlock` | (`name`: `string`, `data`: `any`) => `void` |
| `insertAtomicBlockAsync` | (`name`: `string`, `promise`: `Promise`<`TAsyncAtomicBlockResponse`\>, `placeholder?`: `string`) => `void` |
| `insertAtomicBlockSync` | (`name`: `string`, `data`: `any`) => `void` |
| `insertText` | (`text`: `string`) => `void` |
| `save` | () => `void` |

#### Defined in

[packages/sc-ui/src/components/Editor/RichTextEditor/RichTextEditor.tsx:66](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Editor/RichTextEditor/RichTextEditor.tsx#L66)

## Properties

### RichTextEditor

• **RichTextEditor**: `ForwardRefExoticComponent`<`TRichTextEditorProps` & `RefAttributes`<[`TRichTextEditorRef`](Editor.md#trichtexteditorref)\>\>

## Functions

### Editor

▸ **Editor**(`props`): `JSX.Element`

> API documentation for the Community-UI Editor component. Learn about the available props and the CSS API.

#### Import

```jsx
import {Editor} from '@selfcommunity/ui';
```

#### Component Name

The name `SCEditor` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCEditor-root|Styles applied to the root element.|
|drop|.SCEditor-drop|Styles applied to the drop element.|
|actions|.SCEditor-actions|Styles applied to the actions section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`EditorProps`](../interfaces/Editor.EditorProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:167](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Editor/Editor.tsx#L167)

___

### EditorSkeleton

▸ **EditorSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Editor/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/Editor/Skeleton.tsx#L4)
