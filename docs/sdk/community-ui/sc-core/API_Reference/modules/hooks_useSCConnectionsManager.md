---
id: "hooks_useSCConnectionsManager"
title: "Module: hooks/useSCConnectionsManager"
sidebar_label: "hooks/useSCConnectionsManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`user?`): { `acceptConnection`: `undefined` ; `connections`: `any`[] = data; `emptyCache`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined` ; `requestConnection`: `undefined` ; `status`: `undefined`  } \| { `acceptConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `connections`: `any`[] = data; `emptyCache`: () => `void` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void` ; `requestConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `status`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `string`  }

Custom hook 'useSCConnectionsManager'
Use this hook to manage friends:
1. const scUserContext: SCUserContextType = useSCUser();
2. const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;
3. scConnectionsManager.status(user)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

{ `acceptConnection`: `undefined` ; `connections`: `any`[] = data; `emptyCache`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined` ; `requestConnection`: `undefined` ; `status`: `undefined`  } \| { `acceptConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `connections`: `any`[] = data; `emptyCache`: () => `void` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void` ; `requestConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `status`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `string`  }

#### Defined in

[hooks/useSCConnectionsManager.ts:31](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCConnectionsManager.ts#L31)
