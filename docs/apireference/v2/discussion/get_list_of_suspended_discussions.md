---
sidebar_label: Get List of Suspended Discussions
sidebar_position: 23
title: Get List of Suspended Discussions
---

This endpoint retrieves the list of discussions which notifications are suspended by me

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/discussion/suspended/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

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

fetch('/api/v2/discussion/suspended/',
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
curl -X GET /api/v2/discussion/suspended/ \
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
|» results|list([Discussion](/docs/apireference/v2/schemas/discussion))|true|none|List of discussions and a field added_at that represent the timestamp|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">


```json
{
  "count": 123,
  "next": "string",
  "previous": "string",
  "results": [
    {
    "added_at": "2021-12-03T16:42:20.808402+01:00",
    "thread": {    
      "id": 0,
      "type": "discussion",
      "categories": [
        {
          "id": 0,
          "tags": [],
          "followed": false,
          "order": 123,
          "name": "string",
          "name_synonyms": "string",
          "slug": "string",
          "slogan": "string",
          "html_info": "string",
          "seo_title": "string",
          "seo_description": "string",
          "auto_follow": "none",
          "active": true,
          "image_original": "string",
          "image_bigger": "string",
          "image_big": "string",
          "image_medium": "string",
          "image_small": "string",
          "emotional_image_original": "string",
          "emotional_image_position": 0,
          "lastmod_datetime": "2019-08-24T14:15:22Z",
          "stream_order_by": "recent",
          "followers_counter": 13
        }
      ],
      "medias": [
        {
          "id": 0,
          "added_at": "2019-08-24T14:15:22Z",
          "type": "url",
          "title": "string",
          "description": "string",
          "url": "https://example.com",
          "image": "string",
          "image_width": 0,
          "image_height": 0,
          "order": 0,
          "embed": {
            "id": 0,
            "embed_type": "string",
            "embed_id": "string",
            "url": "string",
            "metadata": {}
          }
        }
      ],
      "location": {
        "location": "string",
        "lat": 0,
        "lng": 0
      },
      "poll": {
        "id": 0,
        "title": "string",
        "multiple_choices": true,
        "added_at": "2019-08-24T14:15:22Z",
        "modified_at": "2019-08-24T14:15:22Z",
        "closed": true,
        "expiration_at": "2019-08-24T14:15:22Z",
        "hidden": false,
        "choices": [
          {
            "id": 0,
            "choice": "string",
            "order": 0,
            "added_at": "2019-08-24T14:15:22Z",
            "deleted": "string",
            "vote_count": 0,
            "voted": true
          }
        ]
      },
      "last_activity_at": "2019-08-24T14:15:22Z",
      "author": {
        "id": 0,
        "username": "string",
        "real_name": "string",
        "date_joined": "2019-08-24T14:15:22Z",
        "bio": "string",
        "location": "string",
        "location_lat_lng": "string",
        "position_lat_lng": "string",
        "date_of_birth": "string",
        "description": "string",
        "gender": "Male",
        "website": "https://example.com",
        "avatar": "string",
        "cover": "string",
        "ext_id": "string",
        "tags": [],
        "reputation": 111,
        "followings_counter": 1,
        "followers_counter": 1,
        "posts_counter": 2,
        "discussions_counter": 4,
        "statuses_counter": 1,
        "polls_counter": 6
      },
      "added_at": "2019-08-24T14:15:22Z",
      "html": "string",
      "summary": "string",
      "deleted": true,
      "collapsed": false,
      "comment_count": 0,
      "vote_count": "string",
      "voted": false,
      "followed": false,
      "suspended": true,
      "flag_count": 0,
      "share_count": 0,
      "addressing": [],
      "title": "string",
      "slug": "string",
      "view_count": 1,
      "follower_count": "string"
    }
   }
  ]
}
```

</TabItem>
</Tabs>
````




