---
id: "types_context.SCUserContextType"
title: "Interface: SCUserContextType"
sidebar_label: "SCUserContextType"
custom_edit_url: null
---

[types/context](../modules/types_context.md).SCUserContextType

Interface SCUserContextType

## Properties

### error

• `Optional` **error**: `any`

Error that occurred during authentication.

#### Defined in

[types/context.ts:84](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L84)

___

### loading

• **loading**: `boolean`

Authentication is loading.

#### Defined in

[types/context.ts:79](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L79)

___

### managers

• **managers**: `Object`

Managers: followed, connections, categories, etc...

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categories` | [`SCCategoriesManagerType`](types_context.SCCategoriesManagerType.md) |
| `connections?` | [`SCConnectionsManagerType`](types_context.SCConnectionsManagerType.md) |
| `followed?` | [`SCFollowedManagerType`](types_context.SCFollowedManagerType.md) |

#### Defined in

[types/context.ts:119](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L119)

___

### session

• `Optional` **session**: [`SCSessionType`](types_context.SCSessionType.md)

Current Session.

#### Defined in

[types/context.ts:74](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L74)

___

### user

• `Optional` **user**: [`SCUserType`](types_user.SCUserType.md)

Authenticated User.

#### Defined in

[types/context.ts:69](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L69)

## Methods

### logout

▸ **logout**(): `void`

Triggered when logout is performed.

#### Returns

`void`

#### Defined in

[types/context.ts:89](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L89)

___

### refreshSession

▸ **refreshSession**(): `Promise`<`any`\>

Triggered when call a refresh session.

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:94](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L94)

___

### setAvatar

▸ **setAvatar**(`avatar`): `void`

Handle change avatar

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatar` | `string` |

#### Returns

`void`

#### Defined in

[types/context.ts:99](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L99)

___

### setCover

▸ **setCover**(`cover`): `void`

Handle change cover

#### Parameters

| Name | Type |
| :------ | :------ |
| `cover` | `string` |

#### Returns

`void`

#### Defined in

[types/context.ts:104](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L104)

___

### setUnseenInteractionsCounter

▸ **setUnseenInteractionsCounter**(`counter`): `void`

Handle change unseen interactions counter

#### Parameters

| Name | Type |
| :------ | :------ |
| `counter` | `number` |

#### Returns

`void`

#### Defined in

[types/context.ts:109](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L109)

___

### setUnseenNotificationBannersCounter

▸ **setUnseenNotificationBannersCounter**(`counter`): `void`

Handle change unseen notification banner counter

#### Parameters

| Name | Type |
| :------ | :------ |
| `counter` | `number` |

#### Returns

`void`

#### Defined in

[types/context.ts:114](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/types/context.ts#L114)
