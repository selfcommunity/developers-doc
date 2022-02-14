---
id: "MessageProps"
title: "Interface: MessageProps"
sidebar_label: "MessageProps"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Hierarchy

- `Pick`<`CardProps`, `Exclude`<keyof `CardProps`, ``"id"``\>\>

  ↳ **`MessageProps`**

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:82](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L82)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:72](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L72)

___

### id

• `Optional` **id**: `number`

Id of message object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:67](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L67)

___

### loggedUser

• `Optional` **loggedUser**: `number`

Id of the logged user

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:112](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L112)

___

### message

• `Optional` **message**: `SCPrivateMessageType`

Message Object

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:77](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L77)

___

### snippetType

• `Optional` **snippetType**: `boolean`

The message type. If true, it shows snippet type structure, otherwise it shows thread message structure;

**`default`** true

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:87](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L87)

___

### unseen

• `Optional` **unseen**: `boolean`

The message status. If true, shows a dot next to message headline.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:92](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L92)

## Methods

### isHovering

▸ `Optional` **isHovering**(): `void`

Gets mouse hovering status

**`default`** null

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:107](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L107)

___

### onDeleteIconClick

▸ `Optional` **onDeleteIconClick**(): `void`

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:113](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L113)

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

[packages/sc-ui/src/components/Message/Message.tsx:97](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L97)

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

[packages/sc-ui/src/components/Message/Message.tsx:102](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L102)
