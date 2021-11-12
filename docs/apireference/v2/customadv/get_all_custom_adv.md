---
sidebar_label: Get All Custom adv
sidebar_position: 1
title: Get All Custom adv
---

This endpoint retrieves all custom adv.

:::info

This operation requires authentication only if `content_availability` community option is false.

This operation requires `custom_adv_enabled` community option set to true.

If `custom_adv_only_for_anonymous_users_enabled` community option is set to true the results will be returned only for anonymous users.

:::


## HTTP Request

`GET /api/v2/custom_adv/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|position|query|string|false|Filter using field position.|
|category|query|string|false|Filter using field category.|
|active|query|string|false|Filter using field active (only if user is administrator or editor).|
|search|query|string|false|A search term.|

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

fetch('/api/v2/custom_adv/',
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
curl -X GET /api/v2/custom_adv/ \
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
|» results|list([Custom Adv](../schemas/custom_adv))|false|none|List of results|

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
      "position": "BELOW_TOPBAR",
      "title": "string",
      "link": "http://example.com",
      "image": "string",
      "embed_code": "string",
      "active": true,
      "created_at": "2019-08-24T14:15:22Z",
      "lastmod_datetime": "2019-08-24T14:15:22Z",
      "category": 0,
      "created_by": 0
    }
  ]
}
```

</TabItem>
</Tabs>
````




