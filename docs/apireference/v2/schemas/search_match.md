---
sidebar_label: Search Match
sidebar_position: 1
title: Search Match
---

```json
{
    "object": {
      "id": 238,
      "type": "comment",
      "added_at": "2020-10-19T16:05:34.974676+00:00",
      "html": "string"
    },
    "author": {
      "id": 0,
      "username": "string",
      "real_name": "string",
      "email": "user@example.com",
      "email_isvalid": true,
      "date_joined": "2019-08-24T14:15:22Z",
      "bio": "string",
      "location": "string",
      "birthday": "string",
      "description": "string",
      "gender": "Male",
      "status": "a",
      "website": "https://example.com",
      "avatar": "string",
      "cover": "string"
    }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|false|none|General reference for [Discussion](/docs/apireference/v2/schemas/discussion), [Post](/docs/apireference/v2/schemas/post) or [Comment](/docs/apireference/v2/schemas/comment)|
|» id|integer|false|read-only|Object id|
|» type|string|false|read-only|Type of the object|
|» added_at|string(date-time)|false|read-only|none|
|» html|string|false|read-only|The content of the object in html format, it contains the match of the search wrapped into `<b>` tag|
|author|[User](/docs/apireference/v2/schemas/user)|false|read-only|none|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|discussion|Identify a [Discussion](/docs/apireference/v2/schemas/discussion) object|
|type|post|Identify a [Post](/docs/apireference/v2/schemas/post) object|
|type|comment|Identify a [Comment](/docs/apireference/v2/schemas/comment) object|
