---
sidebar_label: Create a Prize Request
sidebar_position: 7
title: Create a Prize Request
---

This endpoint creates a request for a loyalty prize

:::info

This operation requires authentication

:::


## HTTP Request

`POST /api/v2/loyalty/request/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prize|body|integer|true|A unique integer value identifying the requested prize.|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "prize": 0
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "prize": 0
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/loyalty/request/',
{
  method: 'POST',
  body: inputBody,
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
curl -X POST /api/v2/loyalty/request/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[LoyaltyPrizeUser](/docs/apireference/v2/schemas/loyalty_prize_user)|

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




