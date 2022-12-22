---
sidebar_label: Get a Specific Promo Code
sidebar_position: 1
title: Get a Specific Promo Code
---

This endpoint retrieves a specific promo code by id or code.

:::info

This operation does not require authentication

:::

## HTTP Request

`GET /api/v2/promo_code/{id/code}/`

### Parameters

| Name    | In   | Type   | Required | Description                                                    |
|---------|------|--------|----------|----------------------------------------------------------------|
| id/code | path | string | true     | A unique integer value or the code identifying this promo code |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/promo_code/{id/code}/',
{
  method: 'GET',
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
curl -X GET /api/v2/promo_code/{id/code}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                                |
|--------|---------------------------------------------------------|-------------|-------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [PromoCode](/docs/apireference/v2/schemas/promo_code) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "id": "integer",
    "code": "string",
    "name":  "string",
    "is_valid_now": "boolean",
    "valid_from": "string",
    "valid_to": "string"
}
```

</TabItem>
</Tabs>
````




