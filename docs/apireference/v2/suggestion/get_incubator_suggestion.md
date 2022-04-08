---
sidebar_label: Get Incubator Suggestion
sidebar_position: 1
title: Get Incubator Suggestion
---

This endpoint retrieves a list of suggested incubators.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/suggestion/incubator/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|

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

fetch('/api/v2/suggestion/incubator/',
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
curl -X GET /api/v2/suggestion/incubator/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» results|list of [Incubators](/docs/apireference/v2/schemas/incubator)|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "results": [
{
      "id": 0,
      "name": "string",
      "slug": "string",
      "slogan": "string",
      "status": 2,
      "approved_category": {
        "id": 0,
        "tags": [
          {
            "id": 0,
            "active": true,
            "type": "user",
            "name": "string",
            "description": "string",
            "color": "string",
            "visible": true,
            "visibility_boost": true,
            "deleted": true,
            "created_at": "2019-08-24T14:15:22Z"
          }
        ],
        "order": -2147483648,
        "name": "string",
        "name_synonyms": "string",
        "slug": "string",
        "slogan": "string",
        "html_info": "string",
        "seo_title": "string",
        "seo_description": "string",
        "auto_follow": "none",
        "active": true,
        "deleted": true,
        "image_original": "string",
        "image_bigger": "string",
        "image_big": "string",
        "image_medium": "string",
        "image_small": "string",
        "emotional_image_original": "string",
        "emotional_image_position": -2147483648,
        "lastmod_datetime": "2019-08-24T14:15:22Z",
        "stream_order_by": "recent"
      },
      "added_at": "2019-08-24T14:15:22Z",
      "user": {
        "id": 0,
        "username": "string",
        "real_name": "string",
        "avatar": "string",
        "ext_id": "string"
      },
      "subscribers_count": "string",
      "subscribers_threshold": "string",
      "subscribed": true,
}
  ]
}
```

</TabItem>
</Tabs>
````




