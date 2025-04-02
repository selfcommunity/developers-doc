---
sidebar_label: PaymentPrice
sidebar_position: 1
title: PaymentPrice
---

```json

{
  "id": "integer",
  "payment_product": {},
  "unit_amount": "integer",
  "currency": "string",
  "stripe_price_id": "string",
  "stripe_product_id": "string",
  "active": false,
  "edited_by": {},
  "edited_at": "date-time"
}


```

#### Properties

| Name              | Type                                                            | Required | Restrictions | Description    |
|-------------------|-----------------------------------------------------------------|----------|--------------|----------------|
| id                | integer                                                         | false    | read-only    |                |                                                                         |
| payment_product   | [PaymentProduct](/docs/apireference/v2/schemas/payment_product) | true     | none         |                |
| unit_amount       | integer                                                         | true     | none         |                |
| currency          | string                                                          | false    | none         | Default: EUR   |
| stripe_product_id | string                                                          | false    | read-only    |                |
| stripe_price_id   | string                                                          | false    | read-only    |                |
| active            | boolean                                                         | false    | none         | Default: false |
| edited_by         | [User Minimal](/docs/apireference/v2/schemas/user_minimal)      | false    | read-only    |                |
| edited_at         | string(date-time)                                               | false    | read-only    |                |
