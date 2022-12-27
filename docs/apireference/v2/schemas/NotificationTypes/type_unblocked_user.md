---
sidebar_label: Notification Type Unblocked User
sidebar_position: 1
title: Notification Type Unblocked User
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string"
}
```

Example preview:

![Notification](/img/notification_types/unblocked_user.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|If true, the notification has been read|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "unblocked_user"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
