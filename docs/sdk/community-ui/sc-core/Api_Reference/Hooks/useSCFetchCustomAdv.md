---
sidebar_label: useSCFetchCustomAdv
sidebar_position: 1
title: useSCFetchCustomAdv
---

:::info
This custom hooks is used to fetch a custom adv object.
:::

## API

`useSCFetchCustomAdv(position, categoryId) => {scCustomAdv, setSCCustomAdv}`
### Arguments

1. `position`([SCCustomAdvPosition](../Types/custom_adv/#sccustomadvposition)): Adv banners position.
2. `categoryId`(number): The Id of the category.
### Returns

`{scCustomAdv, setSCCustomAdv}`:

### Examples

```jsx
import {SCCustomAdvPosition, useSCFetchCustomAdv} from '@selfcommunity/core';

export default function CustomAdv(props: CustomAdvProps): JSX.Element {
      const {scCustomAdv} = useSCFetchCustomAdv({position, categoryId});
}
```