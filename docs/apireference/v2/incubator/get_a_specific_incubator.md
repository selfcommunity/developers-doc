---
sidebar_label: Get a Specific Incubator
sidebar_position: 1
title: Get a Specific Incubator
---

This endpoint retrieves a specific incubator.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/incubator/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this incubator|

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

fetch('/api/v2/incubator/{id}/',
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
curl -X GET /api/v2/incubator/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Incubator](/docs/apireference/v2/schemas/incubator)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "name": "string",
  "slug": "string",
  "slogan": "string",
  "status": "integer",
  "approved_category": {Category},
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
```

</TabItem>
</Tabs>
````




