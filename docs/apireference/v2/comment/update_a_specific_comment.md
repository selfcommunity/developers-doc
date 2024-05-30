---
sidebar_label: Update a specific Comment
sidebar_position: 1
title: Update a specific Comment
---

This endpoint updates a specific comment.

:::info

This operation requires authentication. The logged user must be the comment creator

:::

## HTTP Request

`PUT /api/v2/comment/{id}/`

### Parameters

| Name   | In   | Type   | Required | Description                                                                                              |
|--------|------|--------|----------|----------------------------------------------------------------------------------------------------------|
| id     | path | string | true     | A unique integer value identifying this post                                                             |
| » text | body | string | true     | Text for the [Comment](/docs/apireference/v2/schemas/comment), html format, it can contain some mentions |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "text": "string"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "text": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/comment/{id}/',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X PUT /api/v2/comment/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "text": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                           |
|--------|---------------------------------------------------------|-------------|--------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | [Comment](/docs/apireference/v2/schemas/comment) |

### Example responses
````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "author": {User},
  "added_at": "string",
  "last_edited_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "parent": "integer",
  "in_reply_to": "integer",
  "comment_count": "integer",
  "vote_count": "integer",
  "reactions_count": [{Reaction}],
  "flag_count": "integer",
  "post": {
    "id": "integer",
    "slug": "string"
  },
  "latest_comments": [{Comment}],
  "type": "string",
  "voted": "boolean",
  "reaction": {Reaction}
}
```

</TabItem>
</Tabs>
````



