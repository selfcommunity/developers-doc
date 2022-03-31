---
id: "hooks_useSCFollowersManager"
title: "Module: hooks/useSCFollowersManager"
sidebar_label: "hooks/useSCFollowersManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFollowedManager

▸ **useSCFollowedManager**(`user?`): { `emptyCache`: `undefined` ; `follow`: `undefined` ; `followed`: `any`[] = data; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `emptyCache`: () => `void` ; `follow`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType.md)) => `Promise`<`any`\> ; `followed`: `any`[] = data; `isFollowed`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

:::info
This custom hook is used to manage to manage followed users.
:::
:::tipHow to use it:

Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;
3. scFollowedManager.isFollowed(user)
```
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType.md) |

#### Returns

{ `emptyCache`: `undefined` ; `follow`: `undefined` ; `followed`: `any`[] = data; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `emptyCache`: () => `void` ; `follow`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType.md)) => `Promise`<`any`\> ; `followed`: `any`[] = data; `isFollowed`: (`user`: [`SCUserType`](../interfaces/types_user.SCUserType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

#### Defined in

[hooks/useSCFollowersManager.ts:35](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/hooks/useSCFollowersManager.ts#L35)
