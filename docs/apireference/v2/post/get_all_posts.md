---
sidebar_label: Get All Posts
sidebar_position: 1
title: Get All Posts
---

This endpoint retrieves all posts.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/post/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|ordering|query|string|false|Which field to use when ordering the results. For sorting desc use - in front of the field name. Default to -added_at. Available values are added_at, last_activity_at|

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

fetch('/api/v2/post/',
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
curl -X GET /api/v2/post/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|true|none|Total results count|
|» next|string¦null|false|none|Next page url|
|» previous|string¦null|false|none|Previous page url|
|» results|list([Post](/docs/apireference/v2/schemas/post))|true|none|List of results|


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
      "poll": {Poll}
    }
  ]
}
```

</TabItem>
</Tabs>
````




