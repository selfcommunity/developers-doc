---
sidebar_label: Usage
sidebar_position: 2
title: Usage
---


Here is a quick example to get you started, **it's all you need**:


````mdx-code-block
import TabItem from '@theme/TabItem';

<TabItem value="jsx">

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {SCContextProvider} from '@selfcommunity/react-core';
import defaultTheme from '@selfcommunity/react-theme-default';
import {refreshTokenMethod} from "./helpers";
import {PeopleSuggestion} from '@selfcommunity/react-ui';

function App() {
  const conf = {
    portal: '<community-path>',
    locale: {default: 'en'},
    session: {
      type: 'OAuth',
      clientId: '<client-id>',
      authToken: '<auth-token>',
      handleRefreshToken: refreshTokenMethod,
      theme: defaultTheme,
    },
  };
  return (
    <SCContextProvider conf={conf}><PeopleSuggestion /></SCContextProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

</TabItem>
````


