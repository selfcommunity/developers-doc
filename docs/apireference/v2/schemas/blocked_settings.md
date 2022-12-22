---
sidebar_label: Blocked Settings
sidebar_position: 1
title: Blocked Settings
---

```json
{
    "blocked_at": "string",
    "days_blocked": "integer",
    "expire_at": "string",
    "reputation_delta": "integer"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days_blocked|integer|true|read-only|N° days of block|
|reputation_delta|integer|true|read-only|Reputation stolen|
|blocked_at|string(date-time)|false|read-only|Start User Block datetime|
|expire_at|string(date-time)|false|read-only|End User Block datetime|
