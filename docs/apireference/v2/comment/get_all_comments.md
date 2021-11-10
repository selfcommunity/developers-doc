---
sidebar_label: Get All Comments
sidebar_position: 1
title: Get All Comments
---

This endpoint retrieves all comments. 

:::info

If the `discussion` parameter is specified the endpoint retrieves all comments of a specific [Discussion](../schemas/discussion).

If the `post` parameter is specified the endpoint retrieves all comments of a specific [Post](../schemas/post).

If the `status` parameter is specified the endpoint retrieves all comments of a specific [Status](../schemas/status).

If the `user` parameter is specified the endpoint retrieves all comments of a specific [User](../schemas/user).

The `discussion`, `post`, `status` and `user` parameters cannot be used together and one of these parameters is mandatory.

If the `parent` parameter is specified (only with `discussion`, `post` or `status`) the endpoint retrieves all comments of a specific [Discussion](../schemas/discussion) , [Post](../schemas/post) or [Status](../schemas/status) that has the passed parent (nested comments).

:::

:::info

It is possible to perform multiple ordering by concatenating the params -connection and -added_at.

:::

:::info

This operation requires authentication only if `content_availability` community option is false

:::

## HTTP Request

`GET /api/v2/comment/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|discussion|query|string|true|Id of the [Discussion](../schemas/discussion), required if both post, status and user parameters are not set|
|post|query|string|true|Id of the [Post](../schemas/post), required if both discussion, status and user parameters are not set|
|status|query|string|true|Id of the [Status](../schemas/status), required if both discussion, post and user parameters are not set|
|user|query|string|true|Id of the [User](../schemas/user), required if both discussion, post and status parameters are not set|
|parent|query|string|false|Id of the parent [Comment](../schemas/comment), used for retrieve nested comments|
|ordering|query|string|false|The field for sorting use - for order desc. Default to `added_at`|

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|» ordering|added_at|Order by added_at comment field|
|» ordering|connection|Order giving pripority to user connections (friends or followers)|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: 'Bearer {access_token}'
};

fetch('/api/v2/comment/',
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
curl -X GET /api/v2/comment/ \
  -H 'Accept: application/json' \
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
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|[[Comment](../schemas/comment)]|false|none|none|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "id": 0,
      "discussion": 0,
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
        "tags": [
          {
            "id": 0,
            "active": true,
            "type": "user",
            "name": "string",
            "description": "string",
            "color": "string",
            "visible": true,
            "deleted": true,
            "created_at": "2019-08-24T14:15:22Z"
          }
        ],
      "reputation": 111,
      "followings_counter": 7,
      "followers_counter": 2,
      "posts_counter": 4,
      "discussions_counter": 3,
      "statuses_counter": 0,
      "polls_counter": 1
      },
      "added_at": "2019-08-24T14:15:22Z",
      "html": "string",
      "summary": "string",
      "deleted": true,
      "collapsed": true,
      "parent": 0,
      "in_reply_to": 0,
      "vote_count": 0,
      "voted": false,
      "flag_count": 0,
      "comment_count": 1,
      "latest_comments": [
        {
          "id": 1,
          "object": 1,
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
            "tags": [
              {
                "id": 0,
                "active": true,
                "type": "user",
                "name": "string",
                "description": "string",
                "color": "string",
                "visible": true,
                "deleted": true,
                "created_at": "2019-08-24T14:15:22Z"
              }
            ],
          "reputation": 111,
          },
          "added_at": "2019-08-24T14:15:22Z",
          "html": "string",
          "summary": "string",
          "deleted": true,
          "collapsed": true,
          "parent": 0,
          "in_reply_to": 0,
          "comments_count": 0,
          "vote_count": 0,
          "voted": false,
          "flag_count": 0,
          "comment_count": 0
        }
      ]
    }
  ]
}
```

</TabItem>
</Tabs>
````




