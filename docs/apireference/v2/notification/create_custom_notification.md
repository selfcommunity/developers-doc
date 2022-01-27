---
sidebar_label: Create Custom notification
sidebar_position: 4
title: Create Custom notification
---

This endpoint generates a custom notification on behalf of a user (identified by the body param "user") and notifies it to all his connections/followers.
Es. "user" added an item to the wishlist

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/notification/notify/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|body|string|true|A string that identifies a type of notification|
|embed|body|object|false|[Embed](../schemas/embed)|
|title|body|string¦null|true|A title for the notification|
|description|body|string¦null|true|A description for the notification|
|user|body|integer|true|The user who issues the notification|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "type": "string",
  "embed": {
    "embed_type": "string",
    "embed_id": "string",
    "url": "https://example.com",
    "metadata": "{}"
  },
  "title": "string",
  "description": "string",
  "user": 0
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
  "type": "string",
  "embed": {
    "embed_type": "string",
    "embed_id": "string",
    "url": "https://example.com",
    "metadata": "{}"
  },
  "title": "string",
  "description": "string",
  "user": 3
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/notification/notify/',
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
curl -X POST /api/v2/notification/notify/ \
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




