---
sidebar_label: Get Poll Suggestion
sidebar_position: 1
title: Get Poll Suggestion
---

This endpoint retrieves a list of contributes(discussions, posts, statuses) with a related poll.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/suggestion/poll/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/suggestion/poll/',
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
curl -X GET /api/v2/suggestion/poll/ \
  -H 'Accept: application/json'
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
|» results|list of contributes([Discussion](/docs/apireference/v2/schemas/discussion), [Post](/docs/apireference/v2/schemas/post), [Status](/docs/apireference/v2/schemas/status))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "results": [
{
        "id": "integer",
        "type": "string",
        "last_activity_at": "string",
        "last_edited_at": "string",
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
  ]
}
```

</TabItem>
</Tabs>
````




