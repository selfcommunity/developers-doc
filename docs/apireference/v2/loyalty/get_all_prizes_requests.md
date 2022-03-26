---
sidebar_label: Get All Prizes Requests
sidebar_position: 6
title: Get All Prizes Requests
---

This endpoint retrieves all requests of loyalty prizes

:::info

This operation requires authentication to see own requests and admin or editor to see all requests.

:::


## HTTP Request

`GET /api/v2/loyalty/request/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|search|query|string|false|A search term.|
|status|query|string|false|status|
|user_id|query|string|false|user_id|
|prize_id|query|string|false|prize_id|
|ordering|query|string|false|Which field to use when ordering the results.|

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|refused|
|status|2|sent|

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

fetch('/api/v2/loyalty/request/',
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
curl -X GET /api/v2/loyalty/request/ \
  -H 'Accept: application/json' \
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
|» results|[[LoyaltyPrizeUser](/docs/apireference/v2/schemas/loyalty_prize_user)]|false|none|none|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "id": 0,
      "user": {
        "id": 0,
        "username": "string",
        "real_name": "string",
        "email": "user@example.com",
        "description": "string",
        "avatar": "string"
      },
      "pending_at": "2019-08-24T14:15:22Z",
      "prize": {
        "id": 0,
        "active": true,
        "title": "string",
        "description": "string",
        "points": 0,
        "link": "https://example.com",
        "image": "string"
      },
      "prize_points": 0,
      "status": 0,
      "status_description": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




