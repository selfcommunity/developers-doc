---
id: "SCMediaObjectType"
title: "Interface: SCMediaObjectType"
sidebar_label: "SCMediaObjectType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### editButton

• **editButton**: `ElementType`<`any`\>

The button used to trigger the action

#### Defined in

[packages/sc-ui/src/types/media.ts:25](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L25)

___

### editComponent

• **editComponent**: `ElementType`<`any`\>

The component used to interact with the list of media of this type

#### Defined in

[packages/sc-ui/src/types/media.ts:30](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L30)

___

### name

• **name**: `string`

The media action name, used for triggering the change view

#### Defined in

[packages/sc-ui/src/types/media.ts:10](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L10)

___

### previewComponent

• **previewComponent**: `ElementType`<`any`\>

The component used to display media

#### Defined in

[packages/sc-ui/src/types/media.ts:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L15)

___

### previewProps

• `Optional` **previewProps**: `any`

Hook for insert custom props to preview component

#### Defined in

[packages/sc-ui/src/types/media.ts:20](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L20)

## Methods

### filter

▸ **filter**(`media`): `boolean`

The function used to filter media objects for rendering purpose

#### Parameters

| Name | Type |
| :------ | :------ |
| `media` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/sc-ui/src/types/media.ts:35](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/types/media.ts#L35)
