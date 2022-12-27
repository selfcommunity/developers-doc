---
sidebar_label: Connection Request
sidebar_position: 1
title: Connection Request
---

```json
{
  "id": "integer",
  "from_user": {},
  "to_user": {},
  "created": "string",
  "rejected": "string",
  "viewed": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions| Description                              |
|---|---|---|---|------------------------------------------|
|id|integer|false|read-only| A unique integer value                   |
|from_user|[User](/docs/apireference/v2/schemas/user)|false|read-only| The user object who sent the request     |
|to_user|[User](/docs/apireference/v2/schemas/user)|false|read-only| The user object who received the request |
|created|string(date-time)|false|read-only| Datetime of request creation             |
|rejected|string(date-time)|false|read-only| Datetime of request rejection            |
|viewed|string(date-time)|false|read-only| Datetime of request view                 |
