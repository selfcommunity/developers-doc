---
id: "WSClientType"
title: "Interface: WSClientType"
sidebar_label: "WSClientType"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Implemented by

- [`WSClient`](../classes/WSClient)

## Methods

### close

▸ **close**(): `void`

Close the connection

#### Returns

`void`

#### Defined in

[utils/websocket.ts:86](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L86)

___

### getState

▸ **getState**(): `string`

Get current state

#### Returns

`string`

#### Defined in

[utils/websocket.ts:61](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L61)

___

### isClosed

▸ **isClosed**(): `boolean`

Return if ws is closed

#### Returns

`boolean`

#### Defined in

[utils/websocket.ts:81](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L81)

___

### isClosing

▸ **isClosing**(): `boolean`

Check if ws is closing connection

#### Returns

`boolean`

#### Defined in

[utils/websocket.ts:76](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L76)

___

### isConnected

▸ **isConnected**(): `boolean`

Check if ws is connected

#### Returns

`boolean`

#### Defined in

[utils/websocket.ts:71](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L71)

___

### isConnecting

▸ **isConnecting**(): `boolean`

Get current connection state

#### Returns

`boolean`

#### Defined in

[utils/websocket.ts:66](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L66)

___

### sendMessage

▸ **sendMessage**(`message`): `void`

Send message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`void`

#### Defined in

[utils/websocket.ts:56](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L56)
