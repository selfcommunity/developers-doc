---
sidebar_label: Get User Groups
sidebar_position: 1
title: Get User Groups
---

This endpoint return the list of groups the user is subscribed to.

:::info

This operation does not require authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/groups/`

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
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/groups/',
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
curl -X GET /api/v2/user/{id}/groups/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                       |
|---|---|---|----------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| [Group](/docs/apireference/v2/schemas/group) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
  {
  "id": "integer",
  "name": "string",
  "description": "string",
  "slug": "string",
  "color": "string",
  "privacy": {},
  "visible": "boolean",
  "active": "boolean",
  "subscription_status": {},
  "subscribed": "boolean",
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "emotional_image": "string",
  "emotional_image_position": "integer",
  "subscribers_counter": "integer"
  "created_at": "string",
  "created_by": {},
  "managed_by": {}
  },
  {...}
]
```

</TabItem>
</Tabs>
````




