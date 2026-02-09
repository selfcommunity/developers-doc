---
sidebar_label: Search Users
sidebar_position: 1
title: Search Users
---

This endpoint performs users search

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/user/search/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|user|query|string|false|A search term. Search in fields: username, real_name. If this parameter is used username & real_name will be ignored|
|username|query|string|false|Filter using field username|
|real_name|query|string|false|Filter using field real_name|
|gender|query|string|false|Filter using field gender type. Possible values: Male, Female, Unspecified|
|location|query|string|false|Filter using field location|
|age|query|string|false|Filter using age ranges. Possible values: -30, 30-45, 45+. The value 45+ must be encoded in the request url: 45%2B|
|lat_lng|query|string|false|Filter using coordinates lat,lng|
|user_position|query|boolean|false|Use the coordinates (position_lat_lng or location_lat_lng) of the authenticated user|
|description|query|string|false|Filter using field description|
|is_staff|query|boolean|false|Filter the users that belong to the staff|
|tag|query|integer|false|Filter using tag ID|
|category|query|integer|false|Filter using category ID|
|ordering|query|string|false|Ordering fields (eg: `?ordering=username`). Minus char is used for descending ordering, eg. `-username`. Possible values: username, location, real_name, distance|

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

fetch('/api/v2/user/search/',
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
curl -X GET /api/v2/user/search/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([User](/docs/apireference/v2/schemas/user))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "integer",
      "username": "string",
      "real_name": "string",
      "avatar": "string",
      "ext_id": "string",
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




