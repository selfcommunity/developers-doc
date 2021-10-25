---
sidebar_label: Notification Type Unblocked User
sidebar_position: 1
title: Notification Type Unblocked User
---

```json
{
  "is_new": true,
  "sid": 16053709616960000000063090,
  "type": "unblocked_user",
  "active_at": "2020-11-14T17:52:20.967302+01:00"
}
```

Example preview:

![Notification](/img/notification_types/unblocked_user.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "unblocked_user"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
