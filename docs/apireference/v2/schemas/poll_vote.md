---
sidebar_label: Poll Vote
sidebar_position: 1
title: Poll Vote
---

```json
{
  "id": 0,
  "choice": "string",
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
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|choice|integer|false|read-only|Poll Choice unique id|
|user|[User](../schemas/user)|false|read-only|none|
