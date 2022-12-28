---
sidebar_label: Loyalty Prize User
sidebar_position: 1
title: Loyalty Prize User
---

```json
{
  "id": "integer",
  "user": {},
  "prize": {},
  "prize_points": "integer",
  "pending_at": "string",
  "status": "integer",
  "status_description": "string"
}
```

#### Properties

| Name               | Type                                                                          | Required | Restrictions | Description                               |
|--------------------|-------------------------------------------------------------------------------|----------|--------------|-------------------------------------------|
| id                 | integer                                                                       | false    | read-only    | A unique integer value                    |
| user               | [User](/docs/apireference/v2/schemas/user)                                    | false    | read-only    | The user object                           |
| prize              | [LoyaltyPrize](/docs/apireference/v2/schemas/loyalty_prize)                                                                         | false    | read-only    | The prize object                          |
| prize_points       | integer                                                                       | false    | read-only    | Prize points when the request was created |
| pending_at         | string(date-time)                                                             | false    | read-only    | Date since it was in pending status       |
| status             | [integer](/docs/apireference/v2/schemas/loyalty_prize_user#enumerated-values) | false    | none         | Integer value representing the status     |
| status_description | string                                                                        | false    | read-only    | The string representation of the status   |

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|refused|
|status|2|sent|
