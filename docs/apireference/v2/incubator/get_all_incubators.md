---
sidebar_label: Get All Incubators
sidebar_position: 1
title: Get All Incubators
---

This endpoint retrieves all incubators.


:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/incubator/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|search|query|string|false|A search term to be applied to the fields 'name' and 'slogan')|
|status|query|integer|false|Valid values are from 0 to 3|
|ordering|query|string|false|Which field to use when ordering the results|

#### Status valid Values

|Parameter|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|proposal|
|status|2|approved|
|status|3|ignored|

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

fetch('/api/v2/incubator/',
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
curl -X GET /api/v2/incubator/ \
  -H 'Accept: application/json'
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
|» results|list([Incubator](/docs/apireference/v2/schemas/incubator))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": string(uri),
  "previous": string(uri),
  "results": [
    {
      "id": "integer",
      "name": "string",
      "slug": "string",
      "slogan": "string",
      "status": "integer",
      "approved_category": {},
      "added_at": "string",
      "user": {
        "id": "integer",
        "username": "string",
        "real_name": "string",
        "avatar": "string",
        "ext_id": "integer"
      },
      "subscribers_count": "integer",
      "subscribers_threshold": "integer",
      "subscribed": "boolean"
    }
  ]
}
```

</TabItem>
</Tabs>
````
