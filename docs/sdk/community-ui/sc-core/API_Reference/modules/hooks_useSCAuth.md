---
id: "hooks_useSCAuth"
title: "Module: hooks/useSCAuth"
sidebar_label: "hooks/useSCAuth"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### userActionTypes

• `Const` **userActionTypes**: `Object`

We have complex state logic that involves multiple sub-values,
so useReducer is preferable to useState.
Define all possible auth action types label
Use this to export actions and dispatch an action

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CHANGE_AVATAR` | `string` |
| `CHANGE_COVER` | `string` |
| `CHANGE_UNSEEN_INTERACTIONS_COUNTER` | `string` |
| `CHANGE_UNSEEN_NOTIFICATION_BANNERS_COUNTER` | `string` |
| `LOGIN_FAILURE` | `string` |
| `LOGIN_LOADING` | `string` |
| `LOGIN_SUCCESS` | `string` |
| `LOGOUT` | `string` |
| `REFRESH_SESSION` | `string` |
| `REFRESH_TOKEN_FAILURE` | `string` |
| `REFRESH_TOKEN_SUCCESS` | `string` |

#### Defined in

[hooks/useSCAuth.ts:14](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCAuth.ts#L14)

## Functions

### useAuth

▸ **useAuth**(`initialSession`): `Object`

Custom hook 'useAuth'
Use this hook to manage the session in AuthContextProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialSession` | [`SCSessionType`](../interfaces/types_context.SCSessionType.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dispatch` | `Dispatch`<`any`\> |
| `helpers` | { `refreshSession`: () => `Promise`<[`SCAuthTokenType`](../interfaces/types_context.SCAuthTokenType.md)\>  } |
| `helpers.refreshSession` | () => `Promise`<[`SCAuthTokenType`](../interfaces/types_context.SCAuthTokenType.md)\> |
| `state` | `any` |

#### Defined in

[hooks/useSCAuth.ts:106](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCAuth.ts#L106)
