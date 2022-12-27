---
sidebar_label: Notification Type Connection Accept
sidebar_position: 1
title: Notification Type Connection Accept
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "accept_user": {}
}
```

Example preview:

![Notification](/img/notification_types/accept_connection.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|If true, the notification has been read|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "connection_accept"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|accept_user|[User](/docs/apireference/v2/schemas/user)|true|read-only|User accepted the connection request|
