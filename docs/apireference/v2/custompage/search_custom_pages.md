---
sidebar_label: Search Custom Pages
sidebar_position: 1
title: Search Custom Pages
---

This endpoint performs search of a Custom Page


:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/custom_page/search/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|search|query|string|false|A search term.|
|active|query|string|false|Filter using field active (only if user is administrator or editor).|
|visible_in_menu|query|string|false|Filter using field visible_in_menu.|


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

fetch('/api/v2/custom_page/search/',
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
curl -X GET /api/v2/custom_page/ \
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
|» results|list([Custom Page](/docs/apireference/v2/schemas/custom_page))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [ 
    {
      "id": 0,
      "slug": "string",
      "label": "string",
      "title": "string",
      "alternative_url": "string",
      "html_body": "string",
      "visible_in_menu": true,
      "order": -2147483648,
      "created_at": "2019-08-24T14:15:22Z",
      "lastmod_datetime": "2019-08-24T14:15:22Z",
      "active": true,
      "created_by": 0
    }    
  ]
}
```

</TabItem>
</Tabs>
````




