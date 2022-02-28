---
id: "Message.MessageProps"
title: "Interface: MessageProps"
sidebar_label: "MessageProps"
custom_edit_url: null
---

[Message](../modules/Message).MessageProps

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`MessageProps`**

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:84](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L84)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:74](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L74)

___

### id

• `Optional` **id**: `number`

Id of message object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:69](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L69)

___

### loggedUser

• `Optional` **loggedUser**: `number`

Id of the logged user

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:114](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L114)

___

### message

• `Optional` **message**: `SCPrivateMessageType`

Message Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:79](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L79)

___

### snippetType

• `Optional` **snippetType**: `boolean`

The message type. If true, it shows snippet type structure, otherwise it shows thread message structure;

**`default`** true

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:89](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L89)

___

### unseen

• `Optional` **unseen**: `boolean`

The message status. If true, shows a dot next to message headline.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:94](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L94)

## Methods

### isHovering

▸ `Optional` **isHovering**(): `void`

Gets mouse hovering status

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:109](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L109)

___

### onDeleteIconClick

▸ `Optional` **onDeleteIconClick**(): `void`

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:115](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L115)

___

### onMouseEnter

▸ `Optional` **onMouseEnter**(): `void`

Callback fired on mouse hover

**`default`** null

#### Returns

`void`

#### Overrides

Pick.onMouseEnter

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:99](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L99)

___

### onMouseLeave

▸ `Optional` **onMouseLeave**(): `void`

Callback fired on mouse leave

**`default`** null

#### Returns

`void`

#### Overrides

Pick.onMouseLeave

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:104](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-ui/src/components/Message/Message.tsx#L104)
