---
sidebar_label: useSCFetchCategory
sidebar_position: 1
title: useSCFetchCategory
---

:::info
This custom hook is used to fetch a category object.
:::


## API 

`useSCFetchCategory(id, category) => {scCategory, setSCCategory}`


### Arguments

1. `id`(number): Cateogry Id.
2. `category` ([SCCategoryType](../Types/category)): Category obj.


### Returns

`{scCategory, setSCCategory}`: Hook to manage Category obj state and update.

### Examples

```jsx
import {useSCFetchCategory} from '@selfcommunity/core';

export default function Category(props: CategoryProps): JSX.Element {
      const {scCategory, setSCCategory} = useSCFetchCategory({id, category});
}
```