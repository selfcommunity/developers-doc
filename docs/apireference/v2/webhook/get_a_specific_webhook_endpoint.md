---
sidebar_label: Get a specific Webhook Endpoint
sidebar_position: 4
title: Get a specific Webhook Endpoint
---

This endpoint retrieves a specific webhook endpoint using ID

:::info

This operation requires authentication and admin role.
:::

## HTTP Request

`GET /api/v2/webhook/endpoint/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this endpoint.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Endpoint](#schemaendpoint)|

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




