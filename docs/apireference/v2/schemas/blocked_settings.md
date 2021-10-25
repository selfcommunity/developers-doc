---
sidebar_label: Blocked Settings
sidebar_position: 1
title: Blocked Settings
---

```json
{
    "blocked_at": "2020-11-14T18:11:48.915332+01:00",
    "days_blocked": 1,
    "expire_at": "2020-11-15T18:11:48.915332+01:00",
    "reputation_delta": 161
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days_blocked|integer|true|read-only|N° days of block|
|reputation_delta|integer|true|read-only|Reputation stolen|
|blocked_at|string(date-time)|false|read-only|Start User Block datetime|
|expire_at|string(date-time)|false|read-only|End User Block datetime|
