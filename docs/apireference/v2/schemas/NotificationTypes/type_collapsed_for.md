---
sidebar_label: Notification Type Collapsed For
sidebar_position: 1
title: Notification Type Collapsed For
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

Example preview:

![Notification](/img/notification_types/collapsed_for_aggressive.png)

#### Properties

|Name| Type                                             |Required|Restrictions| Description                                                                                                                                               |
|---|--------------------------------------------------|---|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|is_new| boolean                                          |true|read-only| If true, the notification has been read                                                                                                   |
|sid| string                                           |true|read-only| Serialization id of the notification                                                                                                                      |
|type| [string](/docs/apireference/v2/schemas/NotificationTypes/type_collapsed_for#enumerated-values)                                      |true|read-only| Types: "collapsed_for_advertising", "collapsed_for_aggressive", "collapsed_for_vulgar", "collapsed_for_poor", "collapsed_for_offtopic", "uncollapsed_for" |
|active_at| string(date-time)                                |true|read-only| Time when the notification was generated                                                                                                                  |
|comment| [Comment](/docs/apireference/v2/schemas/comment) |true|read-only| If a comment is collapsed                                                                                                                                 |

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|collapsed_for_advertising|Advertising content|
|type|collapsed_for_aggressive|Aggressive content|
|type|collapsed_for_vulgar|Vulgar content|
|type|collapsed_for_poor|Poor content|
|type|collapsed_for_offtopic|Offtopic content|
|type|uncollapsed_for|Restored from collapsed status|
