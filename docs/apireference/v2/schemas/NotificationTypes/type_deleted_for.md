---
sidebar_label: Notification Type Deleted For
sidebar_position: 1
title: Notification Type Deleted For
---

```json
{
  "is_new": true,
  "sid": 16053813898480000000224680,
  "type": "deleted_for_<type>",
  "active_at": "2020-11-14T20:16:29.848490+01:00",
  "discussion": {},
  "post": {},
  "comment": {},
  "status": {}
}
```

Example preview:

![Notification](/img/notification_types/deleted_for_aggressive.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Types: "deleted_for_advertising", "deleted_for_aggressive", "deleted_for_vulgar", "deleted_for_poor", "deleted_for_offtopic", "undeleted_for"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only|if a discussion is deleted|
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only|if a post is deleted|
|comment|[Comment](/docs/apireference/v2/schemas/comment)|false|read-only|if a comment is deleted|
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only|if a status is deleted|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|deleted_for_advertising|Advertising content|
|type|deleted_for_aggressive|Aggressive content|
|type|deleted_for_vulgar|Vulgar content|
|type|deleted_for_poor|Poor content|
|type|deleted_for_offtopic|Offtopic content|
|type|undeleted_for|Undeleted content|
