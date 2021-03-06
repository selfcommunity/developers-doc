---
sidebar_label: Create a Webhook Endpoint
sidebar_position: 3
title: Create a Webhook Endpoint
---

This endpoint creates a Webhook Endpoint and connects it to the given [webhook events](#list-of-events).


:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/webhook/endpoint/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» is_active|body|boolean|false|none|
|» target|body|string(uri)|true|none|
|» description|body|string|false|none|
|» events|body|list|true|none|
|»» type|body|string|true|The [webhook event type](#list-of-events)|
|» ssl_cert_verification|body|boolean|false|True if the SSL certificates for HTTPS requests must be enabled|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "is_active": true,
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "comment.created"
    }
  ],
  "ssl_cert_verification": true
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
  "is_active": true,
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "comment.created"
    }
  ],
  "ssl_cert_verification": true
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
    "is_active": true,
    "target": "https://example.com",
    "description": "string",
    "events": [
      {
        "type": "comment.created"
      }
    ],
    "ssl_cert_verification": true
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Endpoint](/docs/apireference/v2/schemas/endpoint)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "is_active": true,
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "comment.created",
      "added_at": "2019-08-24T14:15:22Z"
    }
  ],
  "ssl_cert_verification": true
}
```

</TabItem>
</Tabs>
````




