---
sidebar_label: Reveal a specific Webhook Endpoint signing secret
sidebar_position: 1
title: Reveal a specific Webhook Endpoint signing secret
---

This endpoint reveals the secret associated with this endpoint

:::info

This operation requires admin role.

:::

## HTTP Request

`POST /api/v2/webhook/endpoint/{id}/secret/reveal/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this endpoint|
|password|body|string|false|Logged user password. It is used for security check|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "password": "string"
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
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/webhook/endpoint/{id}/secret/reveal/',
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
curl -X POST /api/v2/webhook/endpoint/{id}/secret/reveal/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "password": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                                           |
|---|---|---|------------------------------------------------------------------|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code| [Endpoint Secret](/docs/apireference/v2/schemas/endpoint_secret) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "signing_secret": "string"
}
```

</TabItem>
</Tabs>
````




