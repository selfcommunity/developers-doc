---
sidebar_label: Create a Comment
sidebar_position: 2
title: Create a Comment
---

This endpoint creates a comment.

:::info

One of `discussion` , `post` or `status` parameter is required in every request (first-level or nested comment creation).

The `parent` parameter is required only for nested comments.

The `in_reply_to` parameter is required only for create a reference in the nested comments (simulation of three levels of nesting).

:::

:::info

This operation requires authentication

:::


## HTTP Request

`POST /api/v2/comment/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» discussion|body|integer|true|Id of the [Discussion](../schemas/discussion)|
|» post|body|integer|true|Id of the [Post](../schemas/post)|
|» status|body|integer|true|Id of the [Status](../schemas/status)|
|» parent|body|integer¦null|false|Id of a [Comment](../schemas/comment), used for creating nested comments|
|» in_reply_to|body|integer¦null|false|Id of a [Comment](../schemas/comment), used for reply in nested comments|
|» text|body|string|true|text for the [Comment](../schemas/comment), html format, it can contain some mentions|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "discussion": 0,
  "parent": 0,
  "in_reply_to": 0,
  "text": "string"
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
const inputBody = '{
  "discussion": 0,
  "parent": 0,
  "in_reply_to": 0,
  "text": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization: 'Bearer {access_token}'
};

fetch('/api/v2/comment/',
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
curl -X POST /api/v2/comment/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --raw-data '{
    "discussion": 0,
    "parent": 0,
    "in_reply_to": 0,
    "text": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Comment](../schemas/comment)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
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
      "comments_count": 0,
      "vote_count": 0,
      "voted": false,
      "flag_count": 0,
      "comment_count": 0
    }
  ]
}
```

</TabItem>
</Tabs>
````




