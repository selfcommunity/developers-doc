---
sidebar_label: Notification Type Private Message
sidebar_position: 1
title: Notification Type Private Message
---

```json
{
    "is_new": true,
    "sid": 16053713157510000000004370,
    "type": "private_message",
    "active_at": "2020-11-14T17:52:20.967302+01:00",
    "message": {
        "id": 4,
        "headline": "Hello, how are you?!😊",
        "sender": {}
        "html": "<div><p>Hello, how are you?!😊</p></div>",
        "sent_at": "2020-11-14T17:28:35.751794+01:00",
        "status": 0
    }
}
```

Example preview:

![Notification](/img/notification_types/private_message.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "private_message"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|message|[Message](#schemaprivatemessage)|true|read-only|Message received|
