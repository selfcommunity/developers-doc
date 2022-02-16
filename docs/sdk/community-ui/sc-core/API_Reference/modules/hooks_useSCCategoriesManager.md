---
id: "hooks_useSCCategoriesManager"
title: "Module: hooks/useSCCategoriesManager"
sidebar_label: "hooks/useSCCategoriesManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`user?`): { `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

Custom hook 'useSCCategoriesManager'
Use this hook to manage categories followed:
1. const scUserContext: SCUserContextType = useSCUser();
2. const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;
3. scCategoriesManager.isFollowed(category)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType) |

#### Returns

{ `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

#### Defined in

[hooks/useSCCategoriesManager.ts:17](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/hooks/useSCCategoriesManager.ts#L17)
