---
sidebar_label: Create a Comment
sidebar_position: 1
title: Create a Comment
---

This endpoint creates a comment.

:::info

One of `discussion` , `post` or `status` parameter is required in every request (first-level or nested comment creation).

The `parent` parameter is required only for nested comments.

The `in_reply_to` parameter is required only for create a reference in the nested comments (simulation of three levels of nesting).

:::

:::info

This operation requires authentication

:::


## HTTP Request

`POST /api/v2/comment/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» discussion|body|integer|true|Id of the [Discussion](/docs/apireference/v2/schemas/discussion)|
|» post|body|integer|true|Id of the [Post](/docs/apireference/v2/schemas/post)|
|» status|body|integer|true|Id of the [Status](/docs/apireference/v2/schemas/status)|
|» parent|body|integer¦null|false|Id of a [Comment](/docs/apireference/v2/schemas/comment), used for creating nested comments|
|» in_reply_to|body|integer¦null|false|Id of a [Comment](/docs/apireference/v2/schemas/comment), used for reply in nested comments|
|» text|body|string|true|text for the [Comment](/docs/apireference/v2/schemas/comment), html format, it can contain some mentions|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "discussion": "integer",
  "parent": "integer",
  "in_reply_to": "integer",
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
  "discussion": "integer",
  "parent": "integer",
  "in_reply_to": "integer",
  "text": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization: 'Bearer {access_token}'
};

fetch('/api/v2/comment/',
{
  method: 'POST',
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
curl -X POST /api/v2/comment/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --raw-data '{
    "discussion": "integer",
    "parent": "integer",
    "in_reply_to": "integer",
    "text": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Comment](/docs/apireference/v2/schemas/comment)|

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
    "latest_comments": [{CommentSummary}],
    "type": "string",
    "voted": "boolean",
    "reaction": {Reaction}
}
```

</TabItem>
</Tabs>
````




