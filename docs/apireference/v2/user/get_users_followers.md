---
sidebar_label: Get User's Followers
sidebar_position: 19
title: Get User's Followers
---

This endpoint retrieves the list of followers of a specific user identified by {id}

:::info

This operation requires authentication only if `content_availability` community option is false.
:::

## HTTP Request

`GET /api/v2/user/{id}/followers/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user.|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|mutual|path|integer|false|Allowed values: 0-1. Param 0 returns the list of non mutual followers. Param 1 returns only the mutual list.|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/followers/',
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
curl -X GET /api/v2/user/{id}/followers/ \
  -H 'Accept: application/json'

```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[User](/docs/apireference/v2/schemas/user)|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|list([User](/docs/apireference/v2/schemas/user))|false|none|none|

### Example responses

:::info
The results always return users sorted by: first mutuals and then non-mutuals.
:::


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
      "followings_counter": 1,
      "followers_counter": 0,
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




