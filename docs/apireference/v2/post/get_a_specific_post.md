---
sidebar_label: Get a specific Post
sidebar_position: 1
title: Get a specific Post
---

This endpoint retrieves a specific post using ID

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/post/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this post|

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

fetch('/api/v2/post/{id}/',
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
curl -X GET /api/v2/post/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Post](/docs/apireference/v2/schemas/post)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "type": "string",
  "last_activity_at": "string",
  "author": {User},
  "added_at": "string",
  "last_edited_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "comment_count": "integer",
  "view_count": "integer",
  "vote_count": "integer",
  "reactions_count": [{Reaction}],
  "voted": "boolean",
  "reaction": {Reaction},
  "follower_count": "integer",
  "followed": "boolean",
  "suspended": "boolean",
  "flag_count": "integer",
  "share_count": "integer",
  "slug": "string",
  "categories": [{Category}],
  "medias": [{Media}],
  "location": {Locality},
  "addressing": ["integer"],
  "tags": ["integer"],
  "poll": {Poll}
}
```

</TabItem>
</Tabs>
````




