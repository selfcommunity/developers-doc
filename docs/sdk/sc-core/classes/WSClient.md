---
id: "WSClient"
title: "Class: WSClient"
sidebar_label: "WSClient"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Implements

- [`WSClientType`](../interfaces/WSClientType)

## Constructors

### constructor

• **new WSClient**(`cfg`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | [`WSClientPropTypes`](../interfaces/WSClientPropTypes) |

#### Defined in

[utils/websocket.ts:107](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L107)

## Properties

### \_attempts

• `Private` **\_attempts**: `number` = `1`

#### Defined in

[utils/websocket.ts:99](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L99)

___

### \_cfg

• `Private` **\_cfg**: `any`

#### Defined in

[utils/websocket.ts:96](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L96)

___

### \_heartbeatInterval

• `Private` **\_heartbeatInterval**: `any` = `null`

#### Defined in

[utils/websocket.ts:100](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L100)

___

### \_missedHeartbeats

• `Private` **\_missedHeartbeats**: `number` = `0`

#### Defined in

[utils/websocket.ts:101](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L101)

___

### \_timer

• `Private` **\_timer**: `any`

#### Defined in

[utils/websocket.ts:98](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L98)

___

### \_ws

• `Private` **\_ws**: `any`

#### Defined in

[utils/websocket.ts:97](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L97)

___

### \_instance

▪ `Static` `Private` **\_instance**: `any`

#### Defined in

[utils/websocket.ts:95](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L95)

## Methods

### close

▸ **close**(): `void`

Close the connection

#### Returns

`void`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[close](../interfaces/WSClientType#close)

#### Defined in

[utils/websocket.ts:341](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L341)

___

### connect

▸ **connect**(): `void`

Connect

#### Returns

`void`

#### Defined in

[utils/websocket.ts:126](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L126)

___

### generateInteval

▸ **generateInteval**(`k`): `number`

Generate an interval that is randomly between 0 and 2^k - 1, where k is
the number of connection attmpts, with a maximum interval of 30 seconds,
so it starts at 0 - 1 seconds and maxes out at 0 - 30 seconds

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `any` |

#### Returns

`number`

#### Defined in

[utils/websocket.ts:285](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L285)

___

### getState

▸ **getState**(): `any`

Get the ws state

#### Returns

`any`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[getState](../interfaces/WSClientType#getstate)

#### Defined in

[utils/websocket.ts:306](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L306)

___

### isClosed

▸ **isClosed**(): `boolean`

Check if ws is closed

#### Returns

`boolean`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[isClosed](../interfaces/WSClientType#isclosed)

#### Defined in

[utils/websocket.ts:334](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L334)

___

### isClosing

▸ **isClosing**(): `boolean`

Check if ws is in closing state

#### Returns

`boolean`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[isClosing](../interfaces/WSClientType#isclosing)

#### Defined in

[utils/websocket.ts:327](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L327)

___

### isConnected

▸ **isConnected**(): `boolean`

Check if ws is connected

#### Returns

`boolean`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[isConnected](../interfaces/WSClientType#isconnected)

#### Defined in

[utils/websocket.ts:320](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L320)

___

### isConnecting

▸ **isConnecting**(): `boolean`

Check if ws is in connecting state

#### Returns

`boolean`

#### Implementation of

[WSClientType](../interfaces/WSClientType).[isConnecting](../interfaces/WSClientType#isconnecting)

#### Defined in

[utils/websocket.ts:313](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L313)

___

### isValidOptions

▸ **isValidOptions**(`cfg`): `boolean`

Validate options

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | [`WSClientPropTypes`](../interfaces/WSClientPropTypes) |

#### Returns

`boolean`

#### Defined in

[utils/websocket.ts:155](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L155)

___

### onClose

▸ **onClose**(`evt`): `void`

Connection closed. Try to reconnect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any` |

#### Returns

`void`

#### Defined in

[utils/websocket.ts:250](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L250)

___

### onError

▸ **onError**(`evt`): `void`

An error occured

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any` |

#### Returns

`void`

#### Defined in

[utils/websocket.ts:260](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L260)

___

### onMessage

▸ **onMessage**(`evt`): `any`

A message has arrived.
If it is the heartbeat -> reset this._missedHeartbeats
If it is data pass data to the callback

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any` |

#### Returns

`any`

#### Defined in

[utils/websocket.ts:271](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L271)

___

### onOpen

▸ **onOpen**(): `void`

Established the new connection
Reset this._attempts counter

#### Returns

`void`

#### Defined in

[utils/websocket.ts:236](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L236)

___

### reconnect

▸ **reconnect**(): `void`

Reestablish the connection
Increase the number of attempts

#### Returns

`void`

#### Defined in

[utils/websocket.ts:208](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L208)

___

### sendHeartbeat

▸ **sendHeartbeat**(): `void`

Send heartbeat every 5 seconds
If missing more than 3 heartbeats close connection

#### Returns

`void`

#### Defined in

[utils/websocket.ts:217](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L217)

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

#### Implementation of

[WSClientType](../interfaces/WSClientType).[sendMessage](../interfaces/WSClientType#sendmessage)

#### Defined in

[utils/websocket.ts:299](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L299)

___

### tryToReconnect

▸ **tryToReconnect**(): `void`

Try to reconnect if previous connection failed
Generate an interval, after that try to reconnect

#### Returns

`void`

#### Defined in

[utils/websocket.ts:196](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L196)

___

### getInstance

▸ `Static` **getInstance**(`cfg`): [`WSClient`](WSClient)

Get instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | `any` |

#### Returns

[`WSClient`](WSClient)

#### Defined in

[utils/websocket.ts:118](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L118)
