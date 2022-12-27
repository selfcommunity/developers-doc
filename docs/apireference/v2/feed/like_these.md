---
sidebar_label: Like These feed objects
sidebar_position: 5
title: Like These feed objects
---

This endpoint retrieves a list of [Feed](/docs/apireference/v2/schemas/feed) objects similar to the id of passed objects

:::info

This operation requires authentication

:::


## HTTP Request

`POST /api/v2/feed/likethis/`


### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|object|body|list|true|List of [Feed](/docs/apireference/v2/schemas/feed)'s object id|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "object": ["integer"]
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
const inputBody = {
    "object": ["integer"]
};
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/feed/likethis/',
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
curl -X POST /api/v2/feed/likethis/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "object": ["integer"]
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([Feed](/docs/apireference/v2/schemas/feed))|false|none|List of results|

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
      "discussion": {
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
        "poll": {Poll},
        "title": "string"
      },
      "seen_by_id": ["integer"],
      "has_boost": "boolean"
    }
  ]
}
```

</TabItem>
</Tabs>
````




