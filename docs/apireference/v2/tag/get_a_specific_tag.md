---
sidebar_label: Get a Specific Tag
sidebar_position: 4
title: Get a Specific Tag
---

This endpoint retrieves a specific tag

:::info

This operation requires authentication only if `content_availability` community option is false.

This operation can be done by not administrators users and it will return only a public visible and active tag.

If this operation has been done by an administrator user it will show all tag details and not active, not visible or deleted tag also.

:::

## HTTP Request

`GET /api/v2/tag/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this tag|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/tag/{id}/',
{
  method: 'GET',
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
curl -X GET /api/v2/tag/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
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

<Tabs defaultValue="200 (administrator)" values={[{ label: '200 (administrator)', value: '200 (administrator)', }, { label: '200 (normal user)', value: '200 (normal user)', }]}>
<TabItem value="200 (administrator)">

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

<TabItem value="200 (normal user)">

```json
{
  "id": "integer",
  "type": "string",      
  "name": "string",      
  "description": "string",
  "color": "string"
}
```

</TabItem>
</Tabs>
````




