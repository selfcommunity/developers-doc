---
sidebar_label: Notification Type Incubator Approved
sidebar_position: 1
title: Notification Type Incubator Approved
---

```json
{
    "is_new": "boolean",
    "sid": "string",
    "type": "string",
    "active_at": "string",
    "incubator": {}
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|Notification not yet read|
|sid|string|true|read-only|Serialization id of the notification block|
|type|string|true|read-only|Type [mention](/docs/apireference/v2/mention)|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|incubator|[IncubatorCategory](/docs/apireference/v2/schemas/incubator_category)|true|read-only|Incubator approved|
