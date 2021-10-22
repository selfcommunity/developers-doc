---
sidebar_label: Get User's Connections
sidebar_position: 24
title: Get User's Connections
---

This endpoint retrieves the list of connections of a specific user identified by id

:::info

his operation requires the community to be set to friendship mode.
:::

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/user/{id}/connections/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user.|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json',
};

fetch('/api/v2/user/{id}/connections/',
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
curl -X GET /api/v2/user/{id}/connections/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[User](#schemauser)|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|list([User](#schemauser))|false|none|none|

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
      "username": "string",
      "real_name": "string",
      "email": "user@example.com",
      "email_isvalid": true,
      "date_joined": "2019-08-24T14:15:22Z",
      "bio": "string",
      "location": "string",
      "location_lat_lng": "string",
      "position_lat_lng": "string",
      "date_of_birth": "string",
      "description": "string",
      "gender": "Male",
      "status": "a",
      "website": "https://example.com",
      "avatar": "string",
      "cover": "string",
      "ext_id": 3,
      "tags": [],
      "reputation": 39,
      "connection_status": "string",
      "connection_requests_sent_counter": 0,
      "connection_requests_received_counter": 1,
      "connections_counter": 0,
      "posts_counter": 2,
      "discussions_counter": 4,
      "statuses_counter": 1,
      "polls_counter": 6
    }
  ]
}
```

</TabItem>
</Tabs>
````




