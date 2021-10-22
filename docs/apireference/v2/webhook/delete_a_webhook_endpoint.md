---
sidebar_label: Delete a Webhook Endpoint
sidebar_position: 7
title: Delete a Webhook Endpoint
---

This endpoint deletes a Webhook Endpoint.

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`DELETE /api/v2/webhook/endpoint/{id}/`

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
  'Authorization: Bearer <access_token>'
};
fetch('/api/v2/webhook/endpoint/{id}/',
{
  method: 'DELETE',
  headers
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
curl -X DELETE /api/v2/webhook/endpoint/{id}/ \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|





