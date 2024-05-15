---
sidebar_label: Introduction
sidebar_position: 1
title: Introduction
---

:::info
React-theme-default package contains the @selfcommunity custom theme.<br />
It is based on Material-Ui [Theming](https://mui.com/material-ui/customization/theming/), which you can consult to find all the information you need to configure and customize the theme.
:::


### Usage
[Install](/docs/sdk/community-js/getting_started/installation#install-react-theme-default) the **@selfcommunity/react-theme-default** package and pass it down to your provider context through configuration.

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