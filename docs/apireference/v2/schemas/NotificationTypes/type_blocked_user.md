---
sidebar_label: Notification Type Blocked User
sidebar_position: 1
title: Notification Type Blocked User
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "block_settings": {
    "blocked_at": "string",
    "days_blocked": "integer",
    "expire_at": "string",
    "reputation_delta": "integer"
  }
}
```

Example preview:

![Notification](/img/notification_types/blocked_user.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|If true, the notification has been read|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "blocker_user"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|block_settings|[BlockedSettings](/docs/apireference/v2/schemas/blocked_settings)|true|read-only|Data of user block|
