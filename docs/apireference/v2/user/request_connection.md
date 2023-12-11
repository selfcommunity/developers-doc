---
sidebar_label: Request Connection
sidebar_position: 29
title: Request Connection
---

This endpoint requests a connection to the user identified by \{id}

:::info

This operation requires the community to be set to friendship mode. 

:::

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/user/{id}/connection/request/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/connection/request/',
{
  method: 'POST',
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
curl -X POST /api/v2/user/{id}/connection/request/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

#### Connection Status values

| Parameter         | Value                       |
|-------------------|-----------------------------|
| connection_status | connected                   |
| connection_status | sent_connection_request     |
| connection_status | received_connection_request |
| connection_status | null                        | 

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "connection_status": "string"
}
```

</TabItem>
</Tabs>
````




