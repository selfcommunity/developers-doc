---
sidebar_label: Private Message Snippet
sidebar_position: 1
title: Private Message Snippet
---

```json

{
  "id": 0,
  "headline": "string",
  "sender": "object",
  "receiver": "object",
  "created_at": "2019-08-24T14:15:22Z",
  "last_message_at": "2019-08-24T14:15:22Z",
  "thread_status": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this thread|
|headline|string|false|none|The headline/snippet|
|sender|[User](/docs/apireference/v2/schemas/user)|false|none|The sender/creator of the thread|
|receiver|[User](/docs/apireference/v2/schemas/user)|false|none|The receiver of the thread|
|created_at|string(date-time)|false|none|datetime of creation|
|last_message_at|string(date-time)|false|none|datetime of last message|
|thread_status|string|false|none|seen or new|