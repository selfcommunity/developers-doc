---
sidebar_label: Get All Webhook Endpoints
sidebar_position: 1
title: Get All Webhook Endpoints
---

This endpoint retrieves all webhook endpoints

:::info

This operation requires admin role.

:::

## HTTP Request

`GET /api/v2/webhook/endpoint/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|ordering|query|string|false|Which field to use when ordering the results. For sorting desc use - in front of the field name. Default to -created_at. Available values are created_at, is_active, updated_at|

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

fetch('/api/v2/webhook/endpoint/',
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
curl -X GET /api/v2/webhook/endpoint/ \
  -H 'Accept: application/json' \
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

|Name| Type                                                     |Required|Restrictions|Description|
|---|----------------------------------------------------------|---|---|---|
|» count| integer                                                  |false|none|Total results count|
|» next| string(uri)¦null                                         |false|none|Next page url|
|» previous| string(uri)¦null                                         |false|none|Previous page url|
|» results| list([Endpoint](/docs/apireference/v2/schemas/endpoint)) |false|none|List of results|

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
      "created_at": "string",
      "updated_at": "string",
      "is_active": "boolean",
      "target": "string",
      "description": "string",
      "events": [
        {
          "type": "string",
          "added_at": "string"
        }
      ],
      "ssl_cert_verification": "boolean"
    }
  ]
}
```

</TabItem>
</Tabs>
````




