---
id: "hooks_useSCCategoriesManager"
title: "Module: hooks/useSCCategoriesManager"
sidebar_label: "hooks/useSCCategoriesManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCCategoriesManager

▸ **useSCCategoriesManager**(`user?`): { `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

:::info
This custom hook is used to manage the categories followed.
:::

:::tipHow to use it:
Follow these steps:
```jsx
1. const scUserContext: SCUserContextType = useSCUser();
2. const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;
3. scCategoriesManager.isFollowed(category)
```
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

{ `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

#### Defined in

[hooks/useSCCategoriesManager.ts:24](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/hooks/useSCCategoriesManager.ts#L24)
