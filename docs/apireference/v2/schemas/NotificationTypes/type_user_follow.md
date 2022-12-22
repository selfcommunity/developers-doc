---
sidebar_label: Notification Type User Follow
sidebar_position: 1
title: Notification Type User Follow
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "follower": {}
}
```

Example preview:

![Notification](/img/notification_types/user_follow.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "user_follow"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|follower|[User](/docs/apireference/v2/schemas/user)|true|read-only|Follower user|

