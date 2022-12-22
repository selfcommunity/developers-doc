---
sidebar_label: Dispose Broadcast Messages
sidebar_position: 9
title: Dispose Broadcast Messages
---

This endpoint disposes a broadcast message for a user.

:::info

The broadcast message will disappear and will no longer appear in the broadcast messages list, see [List Broadcast Messages](list_broadcast_messages). 

:::

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/notification/banner/dispose/`

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
  "banner_ids": [integer]
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
  "banner_ids": [integer]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/notification/banner/dispose/',
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
curl -X POST /api/v2/notification/banner/dispose/ \
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





