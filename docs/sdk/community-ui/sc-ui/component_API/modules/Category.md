---
id: "Category"
title: "Module: Category"
sidebar_label: "Category"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CategoryProps](../interfaces/Category.CategoryProps.md)

## Functions

### Category

▸ **Category**(`inProps`): `JSX.Element`

> API documentation for the Community-UI Category component. Learn about the available props and the CSS API.

#### Import
```jsx
import {Category} from '@selfcommunity/ui';
```
#### Component Name
The name `SCCategory` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCCategory-root|Styles applied to the root element.|
|categoryImage|.SCCategory-category-image|Styles applied to category image element.|
|title|.SCCategory-title|Styles applied to the title element.|
|actions|.SCCategory-actions|Styles applied to action section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `inProps` | [`CategoryProps`](../interfaces/Category.CategoryProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Category/Category.tsx:94](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Category/Category.tsx#L94)

___

### CategorySkeleton

▸ **CategorySkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[sdk/community-ui/packages/sc-ui/src/components/Category/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-ui/src/components/Category/Skeleton.tsx#L25)
