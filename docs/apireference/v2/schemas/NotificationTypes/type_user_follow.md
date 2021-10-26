---
sidebar_label: Notification Type User Follow
sidebar_position: 1
title: Notification Type User Follow
---

```json
{
  "is_new": false,
  "sid": 16052906326300000000007190,
  "type": "user_follow",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "follower": {...}
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
|follower|[User](../user)|true|read-only|Follower user|

