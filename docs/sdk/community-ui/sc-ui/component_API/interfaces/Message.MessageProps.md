---
id: "Message.MessageProps"
title: "Interface: MessageProps"
sidebar_label: "MessageProps"
custom_edit_url: null
---

[Message](../modules/Message.md).MessageProps

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`MessageProps`**

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:83](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L83)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:73](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L73)

___

### id

• `Optional` **id**: `number`

Id of message object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:68](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L68)

___

### loggedUser

• `Optional` **loggedUser**: `number`

Id of the logged user

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:113](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L113)

___

### message

• `Optional` **message**: `SCPrivateMessageType`

Message Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:78](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L78)

___

### snippetType

• `Optional` **snippetType**: `boolean`

The message type. If true, it shows snippet type structure, otherwise it shows thread message structure;

**`default`** true

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:88](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L88)

___

### unseen

• `Optional` **unseen**: `boolean`

The message status. If true, shows a dot next to message headline.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:93](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L93)

## Methods

### isHovering

▸ `Optional` **isHovering**(): `void`

Gets mouse hovering status

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:108](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L108)

___

### onDeleteIconClick

▸ `Optional` **onDeleteIconClick**(): `void`

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:114](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L114)

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

[packages/sc-ui/src/components/Message/Message.tsx:98](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L98)

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

[packages/sc-ui/src/components/Message/Message.tsx:103](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Message/Message.tsx#L103)
