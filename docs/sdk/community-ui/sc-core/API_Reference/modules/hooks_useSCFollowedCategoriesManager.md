---
id: "hooks_useSCFollowedCategoriesManager"
title: "Module: hooks/useSCFollowedCategoriesManager"
sidebar_label: "hooks/useSCFollowedCategoriesManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCFollowedCategoriesManager

▸ **useSCFollowedCategoriesManager**(`user?`): { `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

:::info
This custom hook is used to manage the categories followed.
:::

:::tipHow to use it:
Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scFollowedCategoriesManager: SCFollowedCategoriesManagerType = scUserContext.manager.categories;
3. scFollowedCategoriesManager.isFollowed(category)
```
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType.md) |

#### Returns

{ `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

#### Defined in

[hooks/useSCFollowedCategoriesManager.ts:24](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/hooks/useSCFollowedCategoriesManager.ts#L24)
