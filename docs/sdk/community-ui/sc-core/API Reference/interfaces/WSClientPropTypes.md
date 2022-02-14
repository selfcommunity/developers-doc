---
id: "WSClientPropTypes"
title: "Interface: WSClientPropTypes"
sidebar_label: "WSClientPropTypes"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Properties

### debug

• `Optional` **debug**: `boolean`

Enable/disable debug

#### Defined in

[utils/websocket.ts:48](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L48)

___

### heartbeatMsg

• `Optional` **heartbeatMsg**: `string`

String to identify the heartbeat message.

#### Defined in

[utils/websocket.ts:18](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L18)

___

### mustReconnect

• `Optional` **mustReconnect**: `boolean`

Reconnect the websocket if close

#### Defined in

[utils/websocket.ts:23](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L23)

___

### protocols

• **protocols**: `string` \| `string`[]

The Websocket Protocols

#### Defined in

[utils/websocket.ts:13](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L13)

___

### uri

• **uri**: `string`

The Websocket URI

#### Defined in

[utils/websocket.ts:8](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L8)

## Methods

### connected

▸ `Optional` **connected**(): `any`

Callback called after the websocket is connected.

#### Returns

`any`

#### Defined in

[utils/websocket.ts:28](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L28)

___

### connecting

▸ `Optional` **connecting**(): `any`

Callback called when the websocket is connecting.

#### Returns

`any`

#### Defined in

[utils/websocket.ts:33](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L33)

___

### disconnected

▸ `Optional` **disconnected**(`evt`): `any`

Callback called after the websocket is disconnected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `any` |

#### Returns

`any`

#### Defined in

[utils/websocket.ts:38](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L38)

___

### receiveMessage

▸ `Optional` **receiveMessage**(`data`): `any`

Callback called when a message is received from the websocket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[utils/websocket.ts:43](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/websocket.ts#L43)
