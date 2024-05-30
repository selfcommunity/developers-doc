---
sidebar_label: Get User's Connections
sidebar_position: 1
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
|id|path|string|true|A unique integer value identifying this user|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|mutual|path|integer|false|Allowed values: 0-1. Param 0 returns the list of non mutual connections. Param 1 returns only the mutual list|

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

|Status|Meaning|Description| Schema |
|---|---|---|--------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| Inline |

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([User](/docs/apireference/v2/schemas/user))|false|none|List of results|

### Example responses

:::info
The results always return users sorted by: first mutuals and then non-mutuals.
:::

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
      "username": "string",
      "real_name": "string",
      "avatar": "string",
      "ext_id": "integer",
      "followings_counter": "integer",
      "followers_counter": "integer",
      "posts_counter": "integer",
      "discussions_counter": "integer",
      "polls_counter": "integer",
      "connection_status": "string",
      "categories_counter": "integer",
      "date_joined": "string",
      "bio": "string",
      "location": "string",
      "location_lat_lng": "string",
      "position_lat_lng": "string",
      "date_of_birth": "string",
      "description": "string",
      "gender": "string",
      "website": "string",
      "cover": "string",
      "tags": [{Tag}],
      "reputation": "integer",
      "community_badge": "boolean",
      "reg_approved": "boolean",
      "deleted" : "boolean",
      "company_name": "string",
      "company_role": "string"
    },
    {...}
  ]
}
```

</TabItem>
</Tabs>
````




