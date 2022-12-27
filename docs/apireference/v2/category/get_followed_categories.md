---
sidebar_label: Get Followed Categories
sidebar_position: 16
title: Get Followed Categories
---

This endpoint retrieves all followed categories by the user.

:::info

This operation requires authentication

:::

## HTTP Request

`GET /api/v2/category/followed/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|search|query|string|false|A search term|
|active|query|string|false|Filter using field active|
|deleted|query|string|false|Filter using field deleted|

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

fetch('/api/v2/category/followed/',
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
curl -X GET /api/v2/category/followed/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([Category](/docs/apireference/v2/schemas/category))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
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
  ]
}
```

</TabItem>
</Tabs>
````




