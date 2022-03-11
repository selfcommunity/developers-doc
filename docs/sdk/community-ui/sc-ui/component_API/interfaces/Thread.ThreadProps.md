---
id: "Thread.ThreadProps"
title: "Interface: ThreadProps"
sidebar_label: "ThreadProps"
custom_edit_url: null
---

[Thread](../modules/Thread.md).ThreadProps

## Indexable

▪ [p: `string`]: `any`

Any other properties

## Properties

### autoHide

• `Optional` **autoHide**: `boolean`

Hides this component

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:112](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L112)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:107](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L107)

___

### id

• `Optional` **id**: `number`

Thread id

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:97](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L97)

___

### openNewMessage

• `Optional` **openNewMessage**: `boolean`

Opens new message screen

**`default`** false

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:121](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L121)

___

### receiverId

• `Optional` **receiverId**: `number`

Message receiver id

**`default`** null

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:102](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L102)

## Methods

### onNewMessageSent

▸ `Optional` **onNewMessageSent**(`dispatch`): `void`

Callback fired when a new message is sent

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `any` |

#### Returns

`void`

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:126](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/Thread/Thread.tsx#L126)
