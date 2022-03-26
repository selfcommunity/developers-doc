---
sidebar_label: Vote
sidebar_position: 1
title: Vote
---

```json
{
  "user": {
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
  },
  "voted_at": "2019-08-24T14:15:22Z"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](/docs/apireference/v2/schemas/user)|false|read-only|none|
|voted_at|string(date-time)|false|read-only|none|


