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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|from_user|[User](/docs/apireference/v2/schemas/user)|false|read-only|none|
|to_user|[User](/docs/apireference/v2/schemas/user)|false|read-only|none|
|created|string(date-time)|false|read-only|none|
|rejected|string(date-time)|false|read-only|none|
|viewed|string(date-time)|false|read-only|none|
