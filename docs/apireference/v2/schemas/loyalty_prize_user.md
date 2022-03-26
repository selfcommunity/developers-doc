---
sidebar_label: Loyalty Prize User
sidebar_position: 1
title: Loyalty Prize User
---

```json
{
  "id": 0,
  "user": {},
  "prize": {},
  "prize_points": 0,
  "pending_at": "2019-08-24T14:15:22Z",
  "status": 0,
  "status_description": "string"
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value|
|user|object|false|read-only|[User](/docs/apireference/v2/schemas/user)|
|prize|object|false|read-only|[LoyaltyPrize](/docs/apireference/v2/schemas/loyalty_prize)|
|prize_points|integer|false|read-only|Prize points when the request was created|
|pending_at|string(date-time)|false|read-only|Date since it was in pending status|
|status|integer|false|none|Integer value representing the status|
|status_description|string|false|read-only|The string representation of the status|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|refused|
|status|2|sent|
