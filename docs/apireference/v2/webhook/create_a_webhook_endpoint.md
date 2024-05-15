---
sidebar_label: Create a Webhook Endpoint
sidebar_position: 3
title: Create a Webhook Endpoint
---

This endpoint creates a Webhook Endpoint and connects it to the given webhook events.


:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/webhook/endpoint/`

### Parameters

|Name|In| Type         |Required| Description                                                   |
|---|---|--------------|---|---------------------------------------------------------------|
|» is_active|body| boolean      |false| Endpoint active status                                        |
|» target|body| string(uri)  |true| Endpoint target                                               |
|» description|body| string       |false| Endpoint description                                          |
|» events|body| list[object] |true| Endpoint events objects                                       |
|»» type|body| string       |true| The webhook event type                        |
|» ssl_cert_verification|body| boolean      |false| If true, the SSL certificates for HTTPS requests must be enabled |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "is_active": "boolean",
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "string"
    }
  ],
  "ssl_cert_verification": "boolean"
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
  "is_active": "boolean",
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "string"
    }
  ],
  "ssl_cert_verification": "boolean"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/webhook/endpoint/',
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
curl -X POST /api/v2/webhook/endpoint/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "is_active": "boolean",
    "target": "https://example.com",
    "description": "string",
    "events": [
      {
        "type": "string"
      }
    ],
    "ssl_cert_verification": "boolean"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Endpoint](/docs/apireference/v2/schemas/endpoint)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "created_at": "string",
  "updated_at": "string",
  "is_active": "boolean",
  "target": "string",
  "description": "string",
  "events": [
    {
      "type": "string",
      "added_at": "string"
    }
  ],
  "ssl_cert_verification": "boolean"
}
```

</TabItem>
</Tabs>
````




