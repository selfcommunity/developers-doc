---
sidebar_label: Notification Type Custom Notification
sidebar_position: 1
title: Notification Type Vote Up Custom Notification
---
```json
{
    "is_new": false,
    "sid": 16052592493610000000054990,
    "type": "custom_notification",
    "active_at": "2020-11-13T10:20:49.361022+01:00",
    "custom_notification": {...},
    "user": {...}
}
```

Example preview:

![Notification](/img/notification_types/custom_notification.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "custom_notification"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|custom_notification|[CustomNotification](#schemacustomnotification)|true|read-only|Custom notification|
|user|[User](#schemauser)|true|read-only|User generate the custom notification|
