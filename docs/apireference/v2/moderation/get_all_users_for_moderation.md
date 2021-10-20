---
sidebar_label: Get All Users for Moderation
sidebar_position: 1
title: Get All Users for Moderation
---

This endpoint retrieves all users for moderation purpose

:::info

This operation requires moderation role.

:::


## HTTP Request

`GET /api/v2/moderation/user/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term.|
|status|query|string|false|Valid values are: a, b, d, u|
|days_blocked|query|string|false|"days" or "forever"|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|order_by|query|string|false|Default ordering is: -date_joined. Other valid fields are: expire_at, blocked_at|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|a|active|
|status|b|blocked|
|status|d|deleted|
|status|u|unregistered (hard deleted user)|

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

fetch('/api/v2/moderation/user/',
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
curl -X GET /api/v2/moderation/user/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
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
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|[[ModerationUser](#schemamoderationuser)]|false|none|none|

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
      "date_of_birth": "2019-08-24",
      "description": "string",
      "gender": "Male",
      "status": "a",
      "website": "https://example.com",
      "avatar": "string",
      "cover": "string",
      "ext_id": "string",
      "tags": [
        {
          "id": 0,
          "active": true,
          "type": "user",
          "name": "string",
          "description": "string",
          "color": "string",
          "visible": true,
          "deleted": true,
          "created_at": "2019-08-24T14:15:22Z"
        }
      ],
      "reputation": 25,
      "followings_counter": 3,
      "followers_counter": 3,
      "posts_counter": 2,
      "polls_counter": 1,                                                                       
      "blocked_at": "2019-08-24T14:15:22Z",
      "days_blocked": "string",
      "expire_at": "2019-08-24T14:15:22Z",
      "last_seen": "2021-06-10T17:31:33.014024+02:00",
      "flags_given": 0,
      "flags_received": 0,
      "last_score_variation": {
          "score": 10,
          "comment": "string",
          "reputed_at": "2021-07-06T12:06:57.168320+02:00",
          "created_by": {
              "id": 1,
              "username": "admin",
              "avatar": "url"
          }
      }      
    }
  ]
}
```

</TabItem>
</Tabs>
````




