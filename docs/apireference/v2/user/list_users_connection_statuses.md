---
sidebar_label: List User's Connections Statuses
sidebar_position: 1
title: List User's Connections Statuses
---

This endpoint lists the connection/follow statuses of the logged user starting from a users array

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/user/connection/statuses/`

### Parameters

| Name | In   | Type              | Required | Description                 |
|------|------|-------------------|----------|-----------------------------|
| body | body | Array of user ids | true     | The request body(users ids) |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "users": ["integer"]
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
  "users": ["integer"]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer <token>'
};

fetch('/api/v2/user/connection/statuses/',
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
curl -X POST /api/v2/user/connection/statuses/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <token>'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|Array of user ids and connection statuses|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "connection_statuses": {
        "1": "string",
        "7": "string",
        "9": "string"
    }
}
```

</TabItem>
</Tabs>
````




