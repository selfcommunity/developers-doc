---
sidebar_label: Notification Type Incubator Approved
sidebar_position: 1
title: Notification Type Incubator Approved
---

```json
{
    "is_new": false,
    "sid": 16052592493610000000054990,
    "type": "incubator_approved",
    "active_at": "2020-11-13T10:20:49.361022+01:00",
    "incubator": {...}
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|Notification not yet read|
|sid|string|true|read-only|Serialization id of the notification block|
|type|string|true|read-only|Type "mention"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|incubator|[IncubatorCategory](#schemaincubatorcategory)|true|read-only|Incubator approved|
