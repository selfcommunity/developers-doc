---
sidebar_label: Moderation User
sidebar_position: 1
title: Moderation User
---

```json
{
  "...User": {},
  "blocked_at": "string",
  "days_blocked": "integer",
  "expire_at": "string",
  "last_seen": "string",
  "flags_given": "integer",
  "flags_received": "integer",
  "last_score_variation": {
    "score": "integer",
    "comment": "string",
    "reputed_at": "string",
    "created_by": {}
  }  
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
| All [User](/docs/apireference/v2/schemas/user) fields|--|--|--|All [User](/docs/apireference/v2/schemas/user) fields|
|blocked_at|string(date-time)|true|none|Block start date|
|days_blocked|string|false|read-only|Number of days of block duration (if none and block date set, it means forever)|
|expire_at|string(date-time)|true|none|Date on which the auto unblock will take place|
|last_seen|string(date-time)|false|read-only|Date on which the user has been seen in the community|
|flags_given|integer|false|read-only|Number of flags given by the user|
|flags_received|integer|false|read-only|Number of flags received by the user (in his contents)|
|last_score_variation|object|false|none|Full description of the last score variation made by a moderator|
