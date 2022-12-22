---
sidebar_label: Search a Discussion
sidebar_position: 3
title: Search a Discussion
---

This endpoint performs search operation to discussions.

:::info

This operation requires authentication only if `content_availability` community option is false

:::

## HTTP Request

`GET /api/v2/discussion/search/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term|

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

fetch('/api/v2/discussion/search/',
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
curl -X GET /api/v2/discussion/search/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|true|none|Total results count|
|» next|string¦null|false|none|Next page url|
|» previous|string¦null|false|none|Previous page url|
|» results|list([SearchDiscussion](/docs/apireference/v2/schemas/search_discussion))|true|none|List of results|

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
        "location": "string",
        "addressing": [integer],
        "poll": {Poll},
        "title": "string"
        "matches": [
          {
            "object": {
                "id": "integer",
                "type": "string",
                "added_at": "string",
                "html": "string"
            },
            "author": {
                  "id": "integer",
                  "username": "string",
                  "real_name": "string",
                  "avatar": "string",
                  "ext_id": "integer",
                  "followings_counter": "integer",
                  "followers_counter": "integer",
                  "posts_counter": "integer",
                  "discussions_counter": "integer",
                  "polls_counter": "integer",
                  "connection_status": "string",
                  "categories_counter": "integer",
                  "date_joined": "string",
                  "bio": "string",
                  "location": "string",
                  "location_lat_lng": "string",
                  "position_lat_lng": "string",
                  "date_of_birth": "string",
                  "description": "string",
                  "gender": "string",
                  "website": "string",
                  "cover": "string",
                  "tags": [],
                  "reputation": "integer",
                  "community_badge": "boolean",
                  "reg_approved": "boolean",
                  "company_name": "string",
                  "company_role": "string"
            }
          }
        ]
      }
    ]
}
```

</TabItem>
</Tabs>
````




