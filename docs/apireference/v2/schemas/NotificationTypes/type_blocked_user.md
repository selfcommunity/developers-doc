---
sidebar_label: Notification Type Blocked User
sidebar_position: 1
title: Notification Type Blocked User
---

```json
{
  "is_new": true,
  "sid": 16053709616960000000063090,
  "type": "blocked_user",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "block_settings": {
    "blocked_at": "2020-11-14T18:11:48.915332+01:00",
    "days_blocked": 1,
    "expire_at": "2020-11-15T18:11:48.915332+01:00",
    "reputation_delta": 161
  }
}
```

Example preview:

![Notification](/img/notification_types/blocked_user.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "blocker_user"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|block_settings|[BlockedSettings](#schemablockedsettings)|true|read-only|Data of user block|
