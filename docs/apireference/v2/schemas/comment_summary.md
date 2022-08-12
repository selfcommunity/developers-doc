---
sidebar_label: Comment Summary
sidebar_position: 1
title: Comment Summary
---

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
    "reputation": 111
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
  "reaction": {
    "id": 1,
    "label": "string",
    "image": "url",
    "sentiment": 10,
    "active": true
  },
  "flag_count": 0,
  "comment_count": 0,
  "reactions_count": [
    {
      "reaction": {
        "id": 1,
        "label": "string",
        "image": "url",
        "sentiment": 10,
        "active": true
      },
      "count": 1
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|discussion|integer¦null|false|none|Id of the [Discussion](/docs/apireference/v2/schemas/discussion)|
|post|integer¦null|false|none|Id of the [Post](/docs/apireference/v2/schemas/post)|
|status|integer¦null|false|none|Id of the [Status](/docs/apireference/v2/schemas/status)|
|author|[User](/docs/apireference/v2/schemas/user)|true|read-only|none|
|added_at|string(date-time)|false|read-only|none|
|html|string|false|read-only|none|
|summary|string|false|read-only|none|
|deleted|boolean|false|read-only|Is this comment deleted|
|collapsed|boolean|false|read-only|Is this comment collapsed|
|parent|integer¦null|false|none|Id of the parent [Comment](/docs/apireference/v2/schemas/comment)|
|in_reply_to|integer¦null|false|none|Id of the reply [Comment](/docs/apireference/v2/schemas/comment), it must have the same `parent` and `object`|
|vote_count|integer|false|read-only|none|
|voted|boolean|false|read-only|true if the logged user has already voted the comment|
|flag_count|integer|false|read-only|none|
|comment_count|integer|false|read-only|none|
