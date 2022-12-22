---
sidebar_label: Get List of Votes for a Specific Comment
sidebar_position: 7
title: Get List of Votes for a Specific Comment
---

This endpoint retrieves all votes (with the relative reactions) for a specific comment.

:::info

This operation requires authentication only if `content_availability` community option is false

:::

## HTTP Request

`GET /api/v2/comment/{id}/vote/`

### Parameters

| Name   | In    | Type    | Required | Description                                         |
|--------|-------|---------|----------|-----------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying this comment.    |
| limit  | query | integer | false    | Number of results to return per page.               |
| offset | query | integer | false    | The initial index from which to return the results. |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/comment/{id}/vote/',
{
  method: 'GET',

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
curl -X GET /api/v2/comment/{id}/vote/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'

```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                     |
|--------|---------------------------------------------------------|-------------|--------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [Vote](/docs/apireference/v2/schemas/vote) |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
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
      "latest_comments": [],
      "type": "string",
      "voted": "boolean",
      "reaction": {Reaction}  
    }
  ]
}
```

</TabItem>
</Tabs>
````




