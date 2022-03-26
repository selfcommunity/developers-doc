---
sidebar_label: Update a Specific Tag
sidebar_position: 5
title: Update a Specific Tag
---

This endpoint updates a specific tag

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`PUT /api/v2/tag/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user tag.|
|body|body|[Tag](/docs/apireference/v2/schemas/tag)|false|none|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "active": true,
  "type": "string",
  "name": "string",
  "description": "string",
  "color": "string",
  "visible": true,
  "visibility_boost": true,
  "deleted": false
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
  "active": true,
  "type": "string",
  "name": "string",
  "description": "string",
  "color": "string",
  "visible": true,
  "visibility_boost": true,
  "deleted": false
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/tag/{id}/',
{
  method: 'PUT',
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
curl -X PUT /api/v2/tag/{id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Tag](/docs/apireference/v2/schemas/tag)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "type": "string",      
  "name": "string",      
  "description": "string",
  "color": "string",
  "visible": true,
  "visibility_boost": true,
  "created_at": "2019-08-24T14:15:22Z",
  "active": true,
  "deleted": false
}
```

</TabItem>
</Tabs>
````




