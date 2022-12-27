---
sidebar_label: Create a Tag
sidebar_position: 2
title: Create a Tag
---

This endpoint creates a tag

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/tag/`

### Parameters

|Name|In|Type|Required| Description                   |
|---|---|---|---|-------------------------------|
|body|body|[Tag](/docs/apireference/v2/schemas/tag)|false| The request body (tag params) |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "active": "boolean",
  "type": "string",
  "name": "string",
  "description": "string",
  "color": "string",
  "visible": "boolean",
  "visibility_boost": "boolean",
  "deleted": "boolean"
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
  "active": "boolean",
  "type": "string",
  "name": "string",
  "description": "string",
  "color": "string",
  "visible": "boolean",
  "visibility_boost": "boolean",
  "deleted": "boolean"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/tag/',
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
curl -X POST /api/v2/tag/ \
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
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Tag](/docs/apireference/v2/schemas/tag)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "type": "string",      
  "name": "string",      
  "description": "string",
  "color": "string",
  "visible": "boolean",
  "visibility_boost": "boolean",
  "created_at": "string",
  "active": "boolean",
  "deleted": "boolean"
}
```

</TabItem>
</Tabs>
````




