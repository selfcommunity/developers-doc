---
sidebar_label: Notification Type Kindly Notice
sidebar_position: 1
title: Notification Type Kindly Notice
---
```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "discussion/post/status/comment": {}
}
```

Example preview:

![Notification](/img/notification_types/kindly_notice_aggressive.png)

#### Properties

|Name| Type                                                   |Required|Restrictions| Description                                                                                                                                                  |
|---|--------------------------------------------------------|---|---|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|is_new| boolean                                                |true|read-only| If true, the notification has been read                                                                                                                      |
|sid| string                                                 |true|read-only| Serialization id of the notification                                                                                                                         |
|type| [string](/docs/apireference/v2/schemas/NotificationTypes/type_kindly_notice#enumerated-values)                                             |true|read-only| Types: "kindly_notice_advertising", "kindly_notice_aggressive", "kindly_notice_vulgar", "kindly_notice_poor", "kindly_notice_offtopic", "kindly_notice_flag" |
|active_at| string(date-time)                                      |true|read-only| Time when the notification was generated                                                                                                                     |
|discussion| [Discussion](/docs/apireference/v2/schemas/discussion) |false|read-only| If the contribute is a discussion                                                                                                                            |
|post| [Post](/docs/apireference/v2/schemas/post)             |false|read-only| If the contribute is a post                                                                                                                                  |
|comment| [Comment](/docs/apireference/v2/schemas/comment)       |false|read-only| If the contribute is a comment                                                                                                                               |
|status| [Status](/docs/apireference/v2/schemas/status)         |false|read-only| If the contribute is a status                                                                                                                                |


#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|kindly_notice_advertising|Advertising content|
|type|kindly_notice_aggressive|Aggressive content|
|type|kindly_notice_vulgar|Vulgar content|
|type|kindly_notice_poor|Poor content|
|type|kindly_notice_offtopic|Offtopic content|
|type|kindly_notice_flag|Notification for a bad flag|
