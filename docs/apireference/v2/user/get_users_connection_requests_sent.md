---
sidebar_label: Get User's Connection Requests sent
sidebar_position: 27
title: Get User's Connection Requests sent
---

This endpoint retrieves a specific user's list of connection requests sent by user

:::info

This operation requires the community to be set to friendship mode.

:::

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/connection/requests_sent/`

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
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/connection/requests_sent/',
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
curl -X GET /api/v2/user/{id}/connection/requests_sent/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ConnectionRequest](#schemaconnectionrequest)|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|[[ConnectionRequest](#schemaconnectionrequest)]|false|none|none|

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
      "to_user": {
        "id": 0,
        "username": "string",
        "real_name": "string",
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
      },
      "created": "2019-08-24T14:15:22Z",
      "rejected": "2019-08-24T14:15:22Z",
      "viewed": "2019-08-24T14:15:22Z"
    }
  ]
}
```

</TabItem>
</Tabs>
````




