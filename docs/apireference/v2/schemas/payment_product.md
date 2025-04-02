---
sidebar_label: PaymentProduct
sidebar_position: 1
title: PaymentProduct
---

```json

{
  "id": "integer",
  "name": "string",
  "description": "string",
  "payment_prices": [],
  "stripe_product_id": "string",
  "active": false,
  "edited_by": {},
  "edited_at": "date-time"
}


```

#### Properties

| Name              | Type                                                              | Required | Restrictions | Description                       |
|-------------------|-------------------------------------------------------------------|----------|--------------|-----------------------------------|
| id                | integer                                                           | false    | read-only    |                                   |                                                                         |
| name              | string                                                            | true     | none         |                                   |
| description       | string                                                            | false    | none         |                                   |
| payment_prices    | list([PaymentPrice](/docs/apireference/v2/schemas/payment_price)) | false    | read-only    | The list of the associated prices |
| stripe_product_id | string                                                            | false    | read-only    |                                   |
| active            | boolean                                                           | false    | none         | Default: false                    |
| edited_by         | [User Minimal](/docs/apireference/v2/schemas/user_minimal)        | false    | read-only    |                                   |
| edited_at         | string(date-time)                                                 | false    | read-only    |                                   |
