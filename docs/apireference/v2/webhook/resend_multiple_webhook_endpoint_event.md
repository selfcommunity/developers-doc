---
sidebar_label: Resend multiple Webhook Endpoint Event
sidebar_position: 12
title: Resend multiple Webhook Endpoint Event
---

This endpoint resends the events specified as parameters to the endpoint spacified by the id parameter.

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/webhook/endpoint/{id}/event/resend/bulk/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this endpoint.|
|event|body|[integer]|true|Array of ids of Events that the endpoint must resend.|
|password|body|string|false|Logged user password. It is used for security check.|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "event": [0, 1],
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
  "event": [0, 1],
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/webhook/endpoint/{id}/event/resend/bulk/',
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
curl -X POST /api/v2/webhook/endpoint/{id}/event/resend/bulk/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "event": [0, 1],
    "password": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|




