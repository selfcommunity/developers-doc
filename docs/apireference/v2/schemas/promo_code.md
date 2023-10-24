---
sidebar_label: Promo Code
sidebar_position: 1
title: Promo Code
---

```json
{
  "id": "integer",
  "code": "string",
  "name": "string",
  "is_valid_now": "boolean",
  "valid_from": "string",
  "valid_to": "string"
}

```

#### Properties

| Name         | Type    | Required | Restrictions | Description                                        |
|--------------|---------|----------|--------------|----------------------------------------------------|
| id           | integer | false    | read-only    | A unique integer value identifying this promo code |
| code         | string  | false    | read-only    | A unique human readable code                       |
| name         | string  | false    | read-only    | A name for this promo code                         |
| is_valid_now | boolean | false    | read-only    | If true, the promo code is currently valid         |
| valid_from   | date    | false    | read-only    | The promo code is valid starting from this date    |
| valid_to     | date    | false    | read-only    | The promo code is valid till this date             |