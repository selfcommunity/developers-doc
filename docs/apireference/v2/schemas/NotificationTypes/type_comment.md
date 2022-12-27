---
sidebar_label: Notification Type Comment
sidebar_position: 1
title: Notification Type Comment
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "comment": {}
}
```

Example previews:

![Notification](/img/notification_types/comment.png)

![Notification](/img/notification_types/nested_comment.png)

#### Properties

|Name| Type                                                                                     |Required|Restrictions|Description|
|---|------------------------------------------------------------------------------------------|---|---|---|
|is_new| boolean                                                                                  |true|read-only|If true, the notification has been read|
|sid| string                                                                                   |true|read-only|Serialization id of the notification|
|type| [string](/docs/apireference/v2/schemas/NotificationTypes/type_comment#enumerated-values) |true|read-only|Type "comment" or "nested_comment"|
|active_at| string(date-time)                                                                        |true|read-only|Time when the notification was generated|
|comment| [Comment](/docs/apireference/v2/schemas/comment)                                         |true|read-only|Comment of second level|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|comment|First level comment|
|type|nested_comment|Second level comment|
