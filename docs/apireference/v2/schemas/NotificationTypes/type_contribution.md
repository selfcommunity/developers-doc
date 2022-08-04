---
sidebar_label: Notification Type Contribution
sidebar_position: 1
title: Notification Type Contribution
---

```json
{
  "is_new": false,
  "sid": 16052906326300000000007190,
  "type": "contribution",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "discussion": {},
  "post": {},
  "status": {}
}
```

Example preview:

![Notification](/img/notification_types/contribution.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "contribution"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only|If the contribution type is discussion|
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only|If the contribution type is post|
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only|If the contribution type is status|

