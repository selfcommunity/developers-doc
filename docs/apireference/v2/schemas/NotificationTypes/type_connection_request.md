---
sidebar_label: Notification Type Connection Request
sidebar_position: 1
title: Notification Type Connection Request
---

```json
{
  "is_new": false,
  "sid": 16052906326300000000007190,
  "type": "connection_request",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
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
