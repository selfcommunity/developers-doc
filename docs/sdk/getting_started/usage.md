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
import {SCContextProvider} from '@selfcommunity/core';
import {PeopleSuggestion} from '@selfcommunity/ui';

function App() {
  const conf = {
    portal: '<community-path>',
    session: {
      type: 'OAuth',
      token: '<community-token>',
      refreshToken: '<community-refresh-token>',
      refreshTokenEndpoint: '<community-refresh-endpoint>',
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


