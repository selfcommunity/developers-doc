---
id: "hooks_useSCCategoriesManager"
title: "Module: hooks/useSCCategoriesManager"
sidebar_label: "hooks/useSCCategoriesManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useSCCategoriesManager

▸ **useSCCategoriesManager**(`user?`): { `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

Custom hook 'useSCCategoriesManager'
Use this hook to manage categories followed:
1. const scUserContext: SCUserContextType = useSCUser();
2. const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;
3. scCategoriesManager.isFollowed(category)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user?` | [`SCUserType`](../interfaces/types_user.SCUserType.md) |

#### Returns

{ `categories`: `any`[] = data; `emptyCache`: `undefined` ; `follow`: `undefined` ; `isFollowed`: `undefined` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: `undefined`  } \| { `categories`: `any`[] = data; `emptyCache`: () => `void` ; `follow`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `Promise`<`any`\> ; `isFollowed`: (`category`: [`SCCategoryType`](../interfaces/types_category.SCCategoryType.md)) => `boolean` ; `isLoading`: (`obj`: { `id`: `number`  }) => `boolean` ; `loading`: `number`[] ; `refresh`: () => `void`  }

#### Defined in

[hooks/useSCCategoriesManager.ts:17](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/hooks/useSCCategoriesManager.ts#L17)
