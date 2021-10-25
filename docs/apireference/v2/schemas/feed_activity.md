---
sidebar_label: Feed Activity
sidebar_position: 1
title: Feed Activity
---

```json
{
  "type": "string",
  "comment": {},
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
    "reputation":111
  },
  "active_at": "2019-08-24T14:15:22Z",
  "seen_by_id": [
    0
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|none|
|comment|[Comment](../schemas/comment)¦null|false|read-only|none|
|author|[User](../schemas/user)|false|read-only|none|
|active_at|string(date-time)|false|read-only|none|
|seen_by_id|list(integer)¦null|false|read-only|Id of [User](../schemas/user) that have seen this activity|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|comment|The activity involved is a comment|
|type|vote|The activity involved is a vote|
|type|pollvote|The activity involved is a poll vote|
|type|follow|The activity involved is a follow. This type can be returned if the [Feed](../schemas/feed) represent a [Discussion](../schemas/discussion)|