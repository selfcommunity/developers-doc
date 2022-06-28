---
sidebar_label: Search Users
sidebar_position: 3
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
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|user|query|string|false|A search term. Search in fields: username, real_name. If this parameter is used username & real_name will be ignored.|
|username|query|string|false|Filter using field username.|
|real_name|query|string|false|Filter using field real_name.|
|gender|query|string|false|Filter using field gender type. Possible values: Male, Female, Unspecified.|
|location|query|string|false|Filter using field location.|
|age|query|string|false|Filter using age ranges. Possible values: -30, 30-45, 45+. The value 45+ must be encoded in the request url: 45%2B.|
|lat_lng|query|string|false|Filter using coordinates lat,lng.|
|user_position|query|boolean|false|Use the coordinates (position_lat_lng or location_lat_lng) of the authenticated user.|
|description|query|string|false|Filter using field description.|
|is_staff|query|boolean|false|Filter the users that belong to the staff.|
|tag|query|integer|false|Filter using tag ID.|
|category|query|integer|false|Filter using category ID.|
|ordering|query|string|false|Ordering fields (eg: `?ordering=username`). Minus char is used for descending ordering, eg. `-username`. Possible values: username, location, real_name, distance.|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

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
  "count": 123,
  "next": null,
  "previous": null,
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
      "date_of_birth": "2019-09-23",
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
      "followings_counter": 7,
      "followers_counter": 2,
      "posts_counter": 4,
      "discussions_counter": 3,
      "statuses_counter": 0,
      "polls_counter": 1
    }
  ]
}
```

</TabItem>
</Tabs>
````




