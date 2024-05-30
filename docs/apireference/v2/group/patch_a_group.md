---
sidebar_label: Patch Group
sidebar_position: 1
title: Patch Group
---

This endpoint patches a specific group.

:::info

This operation requires authentication and admin role.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

For example to change `visible` or `image_original` etc fields.

:::


## HTTP Request

`PATCH /api/v2/group/{id}/`

### Parameters

| Name | In   | Type                                               | Required | Description                                      |
|------|------|----------------------------------------------------|----------|--------------------------------------------------|
| id   | path | string                                             | true     | A unique integer value identifying this group |
| body | body | [Group](/docs/apireference/v2/schemas/group) | false    | The request body(group params)                |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "image_original": "string"
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
  "image_original": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/group/{id}/',
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
curl -X PATCH /api/v2/group/{id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Group](/docs/apireference/v2/schemas/group)|

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




