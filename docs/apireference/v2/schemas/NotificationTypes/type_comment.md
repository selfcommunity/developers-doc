---
sidebar_label: Notification Type Comment
sidebar_position: 1
title: Notification Type Comment
---

```json
{
  "is_new": false,
  "sid": 16052906326300000000007190,
  "type": "comment",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "comment": {}
}
```

Example previews:

![Notification](/img/notification_types/comment.png)

![Notification](/img/notification_types/nested_comment.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "comment" or "nested_comment"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|comment|[Comment](/docs/apireference/v2/schemas/comment)|true|read-only|Comment of second level|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|comment|First level comment|
|type|nested_comment|Second level comment|
