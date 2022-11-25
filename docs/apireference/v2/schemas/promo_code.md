---
sidebar_label: Promo Code
sidebar_position: 1
title: Promo Code
---

```json
{
    "id": 0,
    "code": "string",
    "name":  "string",
    "is_valid_now": true,
    "valid_from": "2022-06-01",
    "valid_to": "2023-07-20"
}

```

#### Properties

| Name         | Type    | Required | Restrictions | Description                                      |
|--------------|---------|----------|--------------|--------------------------------------------------|
| id           | integer | false    | read-only    | Unique integer value identifying this promo code |
| code         | string  | false    | read-only    | Unique human readable code                       |
| name         | string  | false    | read-only    | A name for this promo code                       |
| is_valid_now | boolean | false    | read-only    | Is the promo code valid now (in this date)?      |
| valid_from   | date    | false    | read-only    | The promo code is valid starting from this date  |
| valid_to     | date    | false    | read-only    | The promo code is valid till this date           |