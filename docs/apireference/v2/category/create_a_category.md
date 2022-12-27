---
sidebar_label: Create a Category
sidebar_position: 3
title: Create a Category
---

This endpoint creates a category

:::info

This operation requires authentication and admin role.

:::


## HTTP Request

`POST /api/v2/category/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Category](/docs/apireference/v2/schemas/category)|false|none|

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

fetch('/api/v2/category/',
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
curl -X POST /api/v2/category/ \
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
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Category](/docs/apireference/v2/schemas/category)|

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




