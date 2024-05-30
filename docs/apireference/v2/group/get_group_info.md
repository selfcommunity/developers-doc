---
sidebar_label: Get Group Info
sidebar_position: 1
title: Get Group Info
---

This endpoint retrieves a specific group information.

:::info

This operation requires authentication.

:::


## HTTP Request

`GET /api/v2/group/{id}/`

### Parameters

| Name | In   | Type   | Required | Description                                      |
|------|------|--------|----------|--------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this group |

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

fetch('/api/v2/group/{id}/',
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
curl -X GET /api/v2/group/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                       |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Group](/docs/apireference/v2/schemas/group) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
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
}
```

</TabItem>
</Tabs>
````




