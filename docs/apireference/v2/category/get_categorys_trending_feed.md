---
sidebar_label: Get Category's Trending Feed
sidebar_position: 12
title: Get Category's Trending Feed
---

This endpoint retrieves the category trending feed.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/category/{id}/feed/trending/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this Category|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|

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

fetch('/api/v2/category/{id}/feed/trending/',
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
curl -X GET /api/v2/category/{id}/feed/trending/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|[[Discussion](/docs/apireference/v2/schemas/discussion)]|false|none|List of results|

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
            "type": "string",
            "post": {
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
                "location": "string",
                "addressing": [integer],
                "poll": {Poll}
            },
            "seen_by_id": [integer],
            "has_boost": "boolean"
        },
  ]
}
```

</TabItem>
</Tabs>
````




