---
sidebar_label: Notification Type Kindly Notice
sidebar_position: 1
title: Notification Type Kindly Notice
---
```json
{
  "is_new": true,
  "sid": 16053813898480000000224680,
  "type": "kindly_notice_<type>",
  "active_at": "2020-11-14T20:16:29.848490+01:00",
  "discussion": {...},
  "post": {...},
  "comment": {...},
  "status": {...}
}
```

Example preview:

![Notification](/img/notification_types/kindly_notice_aggressive.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Types: "kindly_notice_advertising", "kindly_notice_aggressive", "kindly_notice_vulgar", "kindly_notice_poor", "kindly_notice_offtopic", "kindly_notice_flag"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|discussion|[Discussion](#schemadiscussion)|false|read-only|if the contribute is a discussion|
|post|[Post](#schemadpost)|false|read-only|if the contribute is a post|
|comment|[Comment](#schemacomment)|false|read-only|if the contribute is a comment|
|status|[Status](#schemastatus)|false|read-only|if the contribute is a status|


#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|kindly_notice_advertising|Advertising content|
|type|kindly_notice_aggressive|Aggressive content|
|type|kindly_notice_vulgar|Vulgar content|
|type|kindly_notice_poor|Poor content|
|type|kindly_notice_offtopic|Offtopic content|
|type|kindly_notice_flag|Notification for a bad flag|
