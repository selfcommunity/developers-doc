---
sidebar_label: Notification Type Collapsed For
sidebar_position: 1
title: Notification Type Collapsed For
---

```json
{
  "is_new": true,
  "sid": 16053813898480000000224680,
  "type": "collapsed_for_<type>",
  "active_at": "2020-11-14T20:16:29.848490+01:00",
  "comment": {...}
}
```

Example preview:

![Notification](/img/notification_types/collapsed_for_aggressive.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if the notification has been read, otherwise false|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Types: "collapsed_for_advertising", "collapsed_for_aggressive", "collapsed_for_vulgar", "collapsed_for_poor", "collapsed_for_offtopic", "uncollapsed_for"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|comment|[Comment](../comment)|true|read-only|if a comment is collapsed|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|collapsed_for_advertising|Advertising content|
|type|collapsed_for_aggressive|Aggressive content|
|type|collapsed_for_vulgar|Vulgar content|
|type|collapsed_for_poor|Poor content|
|type|collapsed_for_offtopic|Offtopic content|
|type|uncollapsed_for|Restored from collapsed status|
