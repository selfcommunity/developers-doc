---
sidebar_label: Notification Type Mention
sidebar_position: 1
title: Notification Type Mention
---

```json
{
  "is_new": false,
  "sid": 16052906326300000000007190,
  "type": "mention",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "discussion": {...},
  "post": {...},
  "comment": {...},
  "status": {...}
}
```

Example preview:

![Notification](/img/notification_types/mention.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "mention"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only|if user is mentioned in a discussion|
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only|if the user is mentioned in a post|
|comment|[Comment](/docs/apireference/v2/schemas/comment)|false|read-only|if user is mentioned in a comment|
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only|if user is mentioned in a status|

