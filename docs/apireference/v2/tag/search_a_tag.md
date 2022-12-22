---
sidebar_label: Search a Tag
sidebar_position: 3
title: Search a Tag
---

This endpoint performs search to Tags.

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`GET /api/v2/tag/search/`

### Parameters

| Name             | In    | Type    | Required | Description                                                                                                              |
|------------------|-------|---------|----------|--------------------------------------------------------------------------------------------------------------------------|
| limit            | query | integer | false    | Number of results to return per page.                                                                                    |
| offset           | query | integer | false    | The initial index from which to return the results.                                                                      |
| search           | query | string  | false    | A search term.                                                                                                           |
| active           | query | string  | false    | Is the tag active?                                                                                                       |
| deleted          | query | string  | false    | Is the tag deleted?                                                                                                      |
| visible          | query | string  | false    | Is this tag publicly visible?                                                                                            |
| visibility_boost | query | string  | false    | Has the tag the attribute visibility boost?                                                                              |
| ordering         | query | string  | false    | Ordering fields (eg: `?ordering=name,created_at`), default is `-created_at` (minus char is used for descending ordering) |

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

fetch('/api/v2/tag/search/',
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
curl -X GET /api/v2/tag/search/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
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
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([Tag](/docs/apireference/v2/schemas/tag))|false|none|List of results|

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
      "id": 0,
      "type": "string",      
      "name": "string",      
      "description": "string",
      "color": "string",
      "visible": "boolean",
      "visibility_boost": "boolean",
      "created_at": "2019-08-24T14:15:22Z",
      "active": "boolean",
      "deleted": false
    }
  ]
}
```

</TabItem>
</Tabs>
````




