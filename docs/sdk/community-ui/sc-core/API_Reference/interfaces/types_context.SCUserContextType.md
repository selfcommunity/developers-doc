---
id: "types_context.SCUserContextType"
title: "Interface: SCUserContextType"
sidebar_label: "SCUserContextType"
custom_edit_url: null
---

[types/context](../modules/types_context).SCUserContextType

Interface SCUserContextType

## Properties

### error

• `Optional` **error**: `any`

Error that occurred during authentication.

#### Defined in

[types/context.ts:92](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L92)

___

### loading

• **loading**: `boolean`

Authentication is loading.

#### Defined in

[types/context.ts:87](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L87)

___

### managers

• **managers**: `Object`

Managers: followed, connections, categories, etc...

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categories` | [`SCCategoriesManagerType`](types_context.SCCategoriesManagerType) |
| `connections?` | [`SCConnectionsManagerType`](types_context.SCConnectionsManagerType) |
| `followed?` | [`SCFollowedManagerType`](types_context.SCFollowedManagerType) |

#### Defined in

[types/context.ts:122](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L122)

___

### session

• `Optional` **session**: [`SCSessionType`](types_context.SCSessionType)

Current Session.

#### Defined in

[types/context.ts:82](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L82)

___

### user

• `Optional` **user**: [`SCUserType`](types_user.SCUserType)

Authenticated User.

#### Defined in

[types/context.ts:77](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L77)

## Methods

### logout

▸ **logout**(): `void`

Triggered when logout is performed.

#### Returns

`void`

#### Defined in

[types/context.ts:97](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L97)

___

### refreshSession

▸ **refreshSession**(): `Promise`<`any`\>

Triggered when call a refresh session.

#### Returns

`Promise`<`any`\>

#### Defined in

[types/context.ts:102](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L102)

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

[types/context.ts:112](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L112)

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

[types/context.ts:117](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L117)

___

### updateUser

▸ **updateUser**(`info`): `void`

Handle change user info

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[types/context.ts:107](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/context.ts#L107)
