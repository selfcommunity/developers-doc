---
sidebar_label: Get a specific Webhook Endpoint
sidebar_position: 1
title: Get a specific Webhook Endpoint
---

This endpoint retrieves a specific webhook endpoint using ID

:::info

This operation requires admin role.
:::

## HTTP Request

`GET /api/v2/webhook/endpoint/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this endpoint|

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

fetch('/api/v2/webhook/endpoint/{id}/',
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
curl -X GET /api/v2/webhook/endpoint/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Endpoint](/docs/apireference/v2/schemas/endpoint)|

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




