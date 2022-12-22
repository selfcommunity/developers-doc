---
sidebar_label: Notification Type Connection Request
sidebar_position: 1
title: Notification Type Connection Request
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "request_user": {}
}
```

Example preview:

![Notification](/img/notification_types/request_connection.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "connection_request"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|request_user|[User](/docs/apireference/v2/schemas/user)|true|read-only|User request the connection|
