---
sidebar_label: Private Message
sidebar_position: 1
title: Private Message
---

```json

{
  "id": 0,
  "sender": "object",
  "message": "string",
  "created_at": "2021-11-19T17:12:31.320062+01:00",
  "status": "string",
  "file": "object"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying the private message|
|sender|[User](/docs/apireference/v2/schemas/user)|false|read-only|The sender/creator of the message|
|message|string|true|none|Text message|
|created_at|string(date-time)|false|read-only|Send date time|
|status|string|true|none|Message status: created, deleted or hidden message|
|file|[File](/docs/apireference/v2/schemas/file)|true|none|The private message file|