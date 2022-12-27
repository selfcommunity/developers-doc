---
sidebar_label: Get List of Suspended Posts
sidebar_position: 23
title: Get List of Suspended Posts
---

This endpoint retrieves the list of posts which notifications are suspended by me

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/post/suspended/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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

fetch('/api/v2/post/suspended/',
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
curl -X GET /api/v2/post/suspended/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|--------------------------------------------------------------------|
|» count|integer|true|none|Total results count|
|» next|string¦null|false|none|Next page url|
|» previous|string¦null|false|none|Previous page url|
|» results|list([Post](/docs/apireference/v2/schemas/post))|true|none|List of posts and a field added_at that represent the timestamp|

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
                  "addressing": ["integer"],
                  "poll": {Poll}
    },
    added_at: "string"
   }
  ]
}
```

</TabItem>
</Tabs>
````




