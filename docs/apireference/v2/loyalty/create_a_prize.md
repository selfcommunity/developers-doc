---
sidebar_label: Create a Prize
sidebar_position: 2
title: Create a Prize
---

This endpoint creates a prize

:::info

This operation requires authentication and admin or editor role.

:::


## HTTP Request

`POST /api/v2/loyalty/prize/`

### Parameters

|Name|In| Type                                                         |Required| Description                            |
|---|---|--------------------------------------------------------------|---|----------------------------------------|
|body|body| [Loyalty Prize](/docs/apireference/v2/schemas/loyalty_prize) |false| The request body(loyalty prize params) |

#### Enumerated Values

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "active": "boolean",
  "title": "string",
  "description": "string",
  "points": "integer",
  "link": "string(uri)",
  "image": "string"
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
  "active": "boolean",
  "title": "string",
  "description": "string",
  "points": "integer",
  "link": "string(uri)",
  "image": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/loyalty/prize/',
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
curl -X POST /api/v2/loyalty/prize/ \
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
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[LoyaltyPrize](/docs/apireference/v2/schemas/loyalty_prize)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "active": "boolean",
  "title": "string",
  "description": "string",
  "points": "integer",
  "link": "string(uri)",
  "image": "string",
  "created_at": "string",
  "lastmod_datetime": "string",
  "created_by": {User}
}
```

</TabItem>
</Tabs>
````




