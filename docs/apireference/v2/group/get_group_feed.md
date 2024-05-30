---
sidebar_label: Get Group Feed
sidebar_position: 1
title: Get Group Feed
---

This endpoint retrieves the group feed.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/group/{id}/feed/`

### Parameters

| Name     | In    | Type    | Required | Description                                                                                                               |
|----------|-------|---------|----------|---------------------------------------------------------------------------------------------------------------------------|
| id       | path  | string  | true     | A unique integer value identifying this group                                                                          |
| limit    | query | integer | false    | Number of results to return per page                                                                                      |
| offset   | query | integer | false    | The initial index from which to return the results                                                                        |


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

fetch('/api/v2/group/{id}/feed/',
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
curl -X GET /api/v2/group/{id}/feed/ \
  -H 'Accept: application/json'
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
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|[[Feed](/docs/apireference/v2/schemas/feed)]|false|none|List of results|



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
                "categories": [{Group}],
                "medias": [{Media}],
                "location": "string",
                "addressing": ["integer"],
                "tags": ["integer"],
                "poll": {Poll}
            },
            "seen_by_id": ["integer"],
            "has_boost": "boolean"
        },
  ]
}
```

</TabItem>
</Tabs>
````




