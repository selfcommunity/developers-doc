---
sidebar_label: Get All Legal pages
sidebar_position: 1
title: Get All Legal pages
---

This endpoint retrieves all legal pages.


:::info

This operation does not require authentication.

:::


## HTTP Request

`GET /api/v2/legal_page/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|search|query|string|false|A search term.|
|valid_from|query|string|false|valid_from|
|valid_to|query|string|false|valid_to|
|ordering|query|string|false|Which field to use when ordering the results.|

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

fetch('/api/v2/legal_page/',
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
curl -X GET /api/v2/legal_page/ \
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
|» results|list([Legal Page](/docs/apireference/v2/schemas/legal_page))|false|none|List of results|

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
      "name_and_version": "string",
      "icon_class": "string",
      "label": "string",
      "external_url": "string",
      "html_summary": "string",
      "html_body": "string",
      "order": -2147483648,
      "valid_from": "2019-08-24",
      "valid_to": "2019-08-24",
      "created_at": "2019-08-24T14:15:22Z",
      "created_by": 0
    }
  ]
}
```

</TabItem>
</Tabs>
````




