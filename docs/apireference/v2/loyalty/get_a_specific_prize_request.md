---
sidebar_label: Get a Specific Prize Request
sidebar_position: 8
title: Get a Specific Prize Request
---

This endpoint retrieves a specific request for a loyalty prize

:::info

This operation requires authentication to see own request and admin or editor to see all requests.

:::


## HTTP Request

`GET /api/v2/loyalty/request/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this request.|

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

fetch('/api/v2/loyalty/request/{id}/',
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
curl -X GET /api/v2/loyalty/request/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[LoyaltyPrizeUser](/docs/apireference/v2/schemas/loyalty_prize_user)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
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
```

</TabItem>
</Tabs>
````




