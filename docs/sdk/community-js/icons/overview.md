---
sidebar_label: Overview
sidebar_position: 1
title: Overview
---

In our library, we use our custom icons, **community-icons** through MUI icon [component](https://mui.com/api/icon/) and [font](https://mui.com/components/icons/#icon-font-icons) icons.


### Setup 

There are two different ways to use the @selfcommunity **community-icons**:
* The first way is to [install](/docs/sdk/community-js/getting_started/installation#install-react-theme-default-package) the **@selfcommunity/react-theme-default** package and pass it down to your provider context through [configurations](/docs/sdk/community-js/react-theme-default/introduction#usage).
* Alternatively, if you only want to use the icons, you can import them into the stylesheet directly from **@selfcommunity/react-theme-default** package.

**1) Import**:
```js
import defaultTheme from '@selfcommunity/react-theme-default';

import React from 'react';
import {SCContextProvider} from '@selfcommunity/react-core';
import {MyComponent} from './MyComponent';

function App() {
    const conf = {
        portal: '',
        locale: {...},
        session: {...},
        theme: defaultTheme,
    };
    return (
        <SCContextProvider conf={conf}><MyComponent /></SCContextProvider>
    );
}
```
**or**

Include *community-icons* css file in your html:

```js
<link
    rel="stylesheet"
    href="path/to/community-icons.css"
/>
```
**2) Usage**:

- Inclusion through props in the icon component
 
```jsx
import Icon from '@mui/material/Icon';

<Icon baseClassName="community-icons">add_circle</Icon>
```
**or**

 - Inclusion through global style in the theme.
```jsx
const theme = createTheme({
  components: {
    MuiIcon: {
      defaultProps: {
        // Replace the `material-icons` default value.
        baseClassName: 'community-icons',
      },
    },
  },
});

```

### Styling icons 

To style icons follow the [material design guidelines](https://material.io/design/iconography/product-icons.html#design-principles).
