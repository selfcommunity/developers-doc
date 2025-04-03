---
sidebar_label: Create a PaymentProduct
sidebar_position: 1
title: Create a PaymentProduct
---

This endpoint creates a PaymentProduct.

:::info

This operation requires authentication.

:::

:::info

This operation requires admin role.

:::

## HTTP Request

`POST /api/v2/payments/payment_product/`

### Parameters

| Name | In   | Type                                                            | Required | Description                               |
|------|------|-----------------------------------------------------------------|----------|-------------------------------------------|
| body | body | [PaymentProduct](/docs/apireference/v2/schemas/payment_product) | true     | The request body (payment_product params) |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string",
    "description": "string",
    "active": "boolean"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
    "name": "string",
    "description": "string",
    "active": "boolean"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/payments/payment_product/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X POST /api/v2/payments/payment_product/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                                          |
|--------|--------------------------------------------------------------|----------------------|-----------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [PaymentProduct](/docs/apireference/v2/schemas/payment_product) |
