---
sidebar_label: Patch a Specific Tag
sidebar_position: 1
title: Patch a Specific Tag
---

This endpoint patches a specific tag

:::info

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).
For example to change `active` or `visible` flags in an admin list/table interface.

:::

:::info

This operation requires admin role.

:::

## HTTP Request

`PATCH /api/v2/tag/{id}/`

### Parameters

|Name|In|Type|Required| Description                                |
|---|---|---|---|--------------------------------------------|
|id|path|string|true| A unique integer value identifying this tag |
|body|body|[Tag](/docs/apireference/v2/schemas/tag)|false| The request body(tag params)               |

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
  "visible": "boolean"
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
  "visible": "boolean"
  "visibility_boost": "boolean",
  "deleted": "boolean"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/tag/{id}/',
{
  method: 'PATCH',
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
curl -X PATCH /api/v2/tag/{id}/ \
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Tag](/docs/apireference/v2/schemas/tag)|

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




