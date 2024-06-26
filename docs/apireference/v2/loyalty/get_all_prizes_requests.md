---
sidebar_label: Get All Prizes Requests
sidebar_position: 1
title: Get All Prizes Requests
---

This endpoint retrieves all requests of loyalty prizes

:::info

This operation requires authentication to see own requests and admin or editor to see all requests.

:::


## HTTP Request

`GET /api/v2/loyalty/request/`

### Parameters

|Name|In|Type|Required| Description                                        |
|---|---|---|---|----------------------------------------------------|
|limit|query|integer|false| Number of results to return per page               |
|offset|query|integer|false| The initial index from which to return the results |
|search|query|string|false| A search term                                      |
|status|query|string|false| The request status                                 |
|user_id|query|string|false| The user id                                        |
|prize_id|query|string|false| The prize id                                       |
|ordering|query|string|false| Which field to use when ordering the results       |

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|[[LoyaltyPrizeUser](/docs/apireference/v2/schemas/loyalty_prize_user)]|false|none|List of results|

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
      "user": {User},
      "prize": {Prize},
      "prize_points": "integer",
      "pending_at": "string",
      "status": "integer",
      "status_description": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




