---
id: "hooks_useSCConnectionsManager"
title: "Module: hooks/useSCConnectionsManager"
sidebar_label: "hooks/useSCConnectionsManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCConnectionsManager

▸ **useSCConnectionsManager**(`user?`): { `acceptConnection`: `undefined` ; `connections`: `any`[] = data; `emptyCache`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined` ; `requestConnection`: `undefined` ; `status`: `undefined`  } \| { `acceptConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `connections`: `any`[] = data; `emptyCache`: () => `void` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void` ; `requestConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `status`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `string`  }

:::info
This custom hook is used to manage to manage friends.
:::

:::tipHow to use it:

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;
3. scConnectionsManager.status(user)
```
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

{ `acceptConnection`: `undefined` ; `connections`: `any`[] = data; `emptyCache`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined` ; `requestConnection`: `undefined` ; `status`: `undefined`  } \| { `acceptConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `connections`: `any`[] = data; `emptyCache`: () => `void` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void` ; `requestConnection`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `Promise`<`any`\> ; `status`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType)) => `string`  }

#### Defined in

[hooks/useSCConnectionsManager.ts:39](https://github.com/selfcommunity/community-ui/blob/487fa8c/packages/sc-core/src/hooks/useSCConnectionsManager.ts#L39)
