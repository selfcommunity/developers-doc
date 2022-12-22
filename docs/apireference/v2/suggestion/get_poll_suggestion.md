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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

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
        "id": 48343,
        "type": "post",
        "last_activity_at": "2021-03-19T16:38:53.503858+01:00",
        "last_edited_at": null,
        "author": {
            "id": 135,
            "username": "string",
            "real_name": "string",
            "avatar": "string",
            "ext_id": "string",
            "followings_counter": 17,
            "followers_counter": 10,
            "posts_counter": 140,
            "discussions_counter": 1,
            "statuses_counter": 0,
            "polls_counter": 140,
            "date_joined": "2020-10-04T21:22:00+02:00",
            "bio": "string",
            "location": "string",
            "location_lat_lng": "string",
            "position_lat_lng": "string",
            "date_of_birth": "string",
            "description": "string",
            "gender": "Male",
            "website": "https://example.com",
            "cover": "string",
            "tags": [],
            "reputation": 111
        },
        "added_at": "2019-08-24T14:15:22Z",
        "html": "string",
        "summary": "string",
        "deleted": "boolean",
        "collapsed": false,
        "comment_count": 0,
        "vote_count": 0,
        "voted": false,
        "followed": false,
        "suspended": "boolean",
        "flag_count": 0,
        "share_count": 0,
        "slug": "string",
        "categories": [
            {
              "id": 1,
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
              "active": "boolean",
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
        "medias": [],
        "location": {
            "location": "string",
            "lat": 0,
            "lng": 0
        },
        "addressing": [integer],
        "poll": {
            "id": 47864,
            "title": "string",
            "multiple_choices": "boolean",
            "added_at": "2021-03-19T16:37:54.830145+01:00",
            "modified_at": "2021-03-19T16:37:54.830194+01:00",
            "closed": "boolean",
            "expiration_at": "2021-12-15T15:15:22+01:00",
            "hidden": false,
            "choices": [
                {
                    "id": 95722,
                    "choice": "string",
                    "order": 0,
                    "added_at": "2021-03-19T16:37:54.893941+01:00",
                    "deleted": false,
                    "vote_count": 0,
                    "voted": null
                },
                {
                    "id": 95723,
                    "choice": "string",
                    "order": 1,
                    "added_at": "2021-03-19T16:37:54.898287+01:00",
                    "deleted": false,
                    "vote_count": 0,
                    "voted": null
                }
            ]
        }
    }
  ]
}
```

</TabItem>
</Tabs>
````




