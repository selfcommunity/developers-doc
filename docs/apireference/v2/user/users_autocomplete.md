---
sidebar_label: Users Autocomplete
sidebar_position: 2
title: Users Autocomplete
---

This endpoint retrieves the list of all users that meet the search criteria. 
The user object returned will contain only the following attributes: id, username, real_name, ext_id and avatar.

This endpoint is recommended for implementing an autocomplete input field.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/user/autocomplete/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|search|query|string|false|A search term. Search in fields: username, real_name.|
|username|query|string|false|Filter using field username.|
|gender|query|string|false|Filter using field gender type.|
|real_name|query|string|false|Filter using field real_name.|
|location|query|string|false|Filter using field location.|
|description|query|string|false|Filter using field description.|
|ordering|query|string|false|Ordering fields (eg: `?ordering=username`). Minus char is used for descending ordering, eg. `-username`|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/autocomplete/',
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
curl -X GET /api/v2/user/autocomplete/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
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
|» results|list([User](/docs/apireference/v2/schemas/user))|false|none|List of results. Every items will contain only the following attributes: id, username, real_name, ext_id and avatar.|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "id": 0,
      "username": "string",
      "real_name": "string",
      "avatar": "string",
      "ext_id": 3
    }
  ]
}
```

</TabItem>
</Tabs>
````




