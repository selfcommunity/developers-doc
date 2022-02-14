---
sidebar_label: Mark Read Broadcast Messages
sidebar_position: 8
title: Mark Read Broadcast Messages
---

This endpoint marks as viewed/read a broadcast message for a user.

:::info

This operation does not require authentication.

:::

## HTTP Request

`POST /api/v2/notification/banner/read/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|banner_ids|list([integer])|true|none|none|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "banner_ids": [
    0
  ]
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
  "banner_ids": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json'
};

fetch('/api/v2/notification/banner/read/',
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
curl -X POST /api/v2/notification/banner/read/ \
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
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "banner_ids": [
    0
  ]
}
```

</TabItem>
</Tabs>
````




