[@selfcommunity/ui](../README.md) / [Exports](../modules.md) / SCMediaObjectType

# Interface: SCMediaObjectType

List all exports

## Table of contents

### Properties

- [editButton](SCMediaObjectType.md#editbutton)
- [editComponent](SCMediaObjectType.md#editcomponent)
- [name](SCMediaObjectType.md#name)
- [previewComponent](SCMediaObjectType.md#previewcomponent)
- [previewProps](SCMediaObjectType.md#previewprops)

### Methods

- [filter](SCMediaObjectType.md#filter)

## Properties

### editButton

• **editButton**: `ElementType`<`any`\>

The button used to trigger the action

#### Defined in

[packages/sc-ui/src/types/media.ts:25](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L25)

___

### editComponent

• **editComponent**: `ElementType`<`any`\>

The component used to interact with the list of media of this type

#### Defined in

[packages/sc-ui/src/types/media.ts:30](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L30)

___

### name

• **name**: `string`

The media action name, used for triggering the change view

#### Defined in

[packages/sc-ui/src/types/media.ts:10](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L10)

___

### previewComponent

• **previewComponent**: `ElementType`<`any`\>

The component used to display media

#### Defined in

[packages/sc-ui/src/types/media.ts:15](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L15)

___

### previewProps

• `Optional` **previewProps**: `any`

Hook for insert custom props to preview component

#### Defined in

[packages/sc-ui/src/types/media.ts:20](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L20)

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

[packages/sc-ui/src/types/media.ts:35](https://github.com/selfcommunity/community-ui/blob/6b6e2bd/packages/sc-ui/src/types/media.ts#L35)
