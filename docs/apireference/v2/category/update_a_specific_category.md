---
sidebar_label: Update a Specific Category
sidebar_position: 5
title: Update a Specific Category
---

This endpoint updates a specific category.

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`PUT /api/v2/category/{id}/`

### Parameters

|Name|In|Type|Required| Description                                      |
|---|---|---|---|--------------------------------------------------|
|id|path|string|true| A unique integer value identifying this category |
|body|body|[Category](/docs/apireference/v2/schemas/category)|false| The request body(category params)                |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "order": "integer",
  "name": "string",
  "name_synonyms": "string",
  "slug": "string",
  "slogan": "string",
  "html_info": "string",
  "seo_title": "string",
  "seo_description": "string",
  "auto_follow": "string",
  "active": "boolean",
  "deleted": "boolean",
  "image_original": "string",
  "emotional_image_original": "string",
  "emotional_image_position": "integer",
  "lastmod_datetime": "string",
  "stream_order_by": "string"
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
  "order": "integer",
  "name": "string",
  "name_synonyms": "string",
  "slug": "string",
  "slogan": "string",
  "html_info": "string",
  "seo_title": "string",
  "seo_description": "string",
  "auto_follow": "string",
  "active": "boolean",
  "deleted": "boolean",
  "image_original": "string",
  "emotional_image_original": "string",
  "emotional_image_position": "integer",
  "lastmod_datetime": "string",
  "stream_order_by": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/category/{id}/',
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
curl -X PUT /api/v2/category/{id}/ \
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Category](/docs/apireference/v2/schemas/category)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
      "id": "integer",
      "tags": [{Tag}],
      "followed": "boolean",
      "order": "integer",
      "name": "string",
      "name_synonyms": "string",
      "slug": "string",
      "slogan": "string",
      "html_info": "string",
      "seo_title": "string",
      "seo_description": "string",
      "auto_follow": "string",
      "active": "boolean",
      "image_original": "string",
      "image_bigger": "string",
      "image_big": "string",
      "image_medium": "string",
      "image_small": "string",
      "emotional_image_original": "string",
      "emotional_image_position": "integer",
      "lastmod_datetime": "string",
      "stream_order_by": "string",
      "followers_counter": "integer"
}
```

</TabItem>
</Tabs>
````




