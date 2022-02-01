---
sidebar_label: useSCFetchCommentObject
sidebar_position: 1
title: useSCFetchCommentObject
---

:::info
This custom hooks is used to fetch a comment.
:::

## API

`useSCFetchCommentObject(id, commentObject) => {obj, setObj}`

### Arguments

1. `id`(number): The Comment id.
2. `commentObject`([SCCommentType](../Types/comment)): Thre Comment obj.

### Returns

`{obj, setObj}`:

### Examples

```jsx
import useSCFetchCommentObject from './hooks/useSCFetchCommentObject';

export default function CommentObject(props: CommentObjectProps): JSX.Element {

    const {obj, setObj} = useSCFetchCommentObject({id: commentObjectId, commentObject});
}
```