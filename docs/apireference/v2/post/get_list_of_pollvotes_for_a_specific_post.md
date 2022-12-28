---
sidebar_label: Get List of Poll Votes for a Specific Post
sidebar_position: 11
title: Get List of Poll Votes for a Specific Post
---

This endpoint retrieves all poll votes for a specific post.
The `choice` parameter is used to filter the votes by a given poll choice of the poll.
If the post has no poll associated the response status code is [404](https://tools.ietf.org/html/rfc7231#section-6.5.4).

:::info

This operation requires authentication only if `content_availability` community option is false

:::

## HTTP Request

`GET /api/v2/post/{id}/poll/vote/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this post|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|choice|query|integer|false|The `choice` id of the poll. If is specified the endpoint retrieves the votes of only that choice|

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

fetch('/api/v2/post/{id}/poll/vote/',
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
curl -X GET /api/v2/post/{id}/poll/vote/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````
## Responses


| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | Inline |

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|true|none|Total results count|
|» next|string¦null|false|none|Next page url|
|» previous|string¦null|false|none|Previous page url|
|» results|list([PollVote](/docs/apireference/v2/schemas/poll_vote))|true|none|List of results|


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
        "choice": "string",
        "user": {
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
              "company_name": "string",
              "company_role": "string"
        },
      }
  ]
}
```

</TabItem>
</Tabs>
````




