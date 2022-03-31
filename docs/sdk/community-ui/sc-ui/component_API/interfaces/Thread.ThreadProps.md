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

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:123](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L123)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:118](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L118)

___

### id

• `Optional` **id**: `number`

Thread id

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:108](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L108)

___

### openNewMessage

• `Optional` **openNewMessage**: `boolean`

Opens new message screen

**`default`** false

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:132](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L132)

___

### receiverId

• `Optional` **receiverId**: `number`

Message receiver id

**`default`** null

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:113](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L113)

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

[sdk/community-ui/packages/sc-ui/src/components/Thread/Thread.tsx:137](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Thread/Thread.tsx#L137)
