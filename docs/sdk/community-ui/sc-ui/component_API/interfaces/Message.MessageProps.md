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

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:92](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L92)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Overrides

Pick.className

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:82](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L82)

___

### id

• `Optional` **id**: `number`

Id of message object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:77](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L77)

___

### loggedUser

• `Optional` **loggedUser**: `number`

Id of the logged user

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:122](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L122)

___

### message

• `Optional` **message**: `SCPrivateMessageType`

Message Object

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:87](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L87)

___

### snippetType

• `Optional` **snippetType**: `boolean`

The message type. If true, it shows snippet type structure, otherwise it shows thread message structure;

**`default`** true

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:97](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L97)

___

### unseen

• `Optional` **unseen**: `boolean`

The message status. If true, shows a dot next to message headline.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:102](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L102)

## Methods

### isHovering

▸ `Optional` **isHovering**(): `void`

Gets mouse hovering status

**`default`** null

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:117](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L117)

___

### onDeleteIconClick

▸ `Optional` **onDeleteIconClick**(): `void`

Action triggered on delete icon click

**`default`** null

#### Returns

`void`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:127](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L127)

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

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:107](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L107)

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

[sdk/community-ui/packages/sc-ui/src/components/Message/Message.tsx:112](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Message/Message.tsx#L112)
