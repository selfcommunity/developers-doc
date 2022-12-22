---
sidebar_label: Notification Type Private Message
sidebar_position: 1
title: Notification Type Private Message
---

```json
{
    "is_new": "boolean",
    "sid": "string",
    "type": "string",
    "active_at": "string",
    "message": {
      "id": "integer",
      "sender_id": "integer",
      "message": "string",
      "created_at": "string",
      "status": "string",
      "file": "object"
    }
}
```

Example preview:

![Notification](/img/notification_types/private_message.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "private_message"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|message|[Message](/docs/apireference/v2/schemas/private_message)|true|read-only|Message received|
