---
sidebar_label: useSCFetchFeedObject
sidebar_position: 1
title: useSCFetchFeedObject
---

:::info
This custom hooks is used to fetch a feed object.
:::

## API

`useSCFetchFeedObject(id, feedObject, feedObjectType) => {obj, setObj}`


### Arguments
1. `id ` (number): The feedobj Id.
2. `feedObject` ([SCFeedObjectType](../Types/feed/#scfeedobjecttype)): The feed obj.
3. `feedObjectType `([SCFeedObjectTypologyType](../Types/feed/#scfeedobjecttypologytype)):The feed object type (discussion, post, status).


### Returns

`{obj, setObj}`: Hook to manage Feed obj state and update.

### Examples

```jsx
import useSCFetchFeedObject from '@selfcommunity/core';

export default function FeedObject(props: FeedObjectProps): JSX.Element {

     const {obj, setObj} = useSCFetchFeedObject({id: feedObjectId, feedObject, feedObjectType});

     }
```

