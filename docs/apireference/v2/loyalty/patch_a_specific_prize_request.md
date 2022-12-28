---
sidebar_label: Patch a Specific Prize Request
sidebar_position: 9
title: Patch a Specific Prize Request
---

This endpoint patches a specific request for a loyalty prize

:::info

You can use this endpoint to to change `status` in an admin list/table interface.

:::

:::info

This operation requires authentication and admin or editor role.

:::

## HTTP Request

`PATCH /api/v2/loyalty/request/{id}/`

### Parameters

|Name|In| Type                                                                   |Required| Description                                                |
|---|---|------------------------------------------------------------------------|---|------------------------------------------------------------|
|id|path| string                                                                 |true| A unique integer value identifying this loyalty prize user |
|body|body| [Loyalty Prize User](/docs/apireference/v2/schemas/loyalty_prize_user) |false| The request body(loyalty prize user params)                |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "status": "integer"
}
```

</TabItem>
</Tabs>
````

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|refused|
|status|2|sent|

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "status": "integer"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/loyalty/request/{id}/',
{
  method: 'PATCH',
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
curl -X PATCH /api/v2/loyalty/request/{id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --DATA '{body}'

```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                                                 |
|---|---|---|------------------------------------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| [Loyalty Prize User](/docs/apireference/v2/schemas/loyalty_prize_user) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "user": {User},
  "prize": {Prize},
  "prize_points": "integer",
  "pending_at": "string",
  "status": "integer",
  "status_description": "string"
}
```

</TabItem>
</Tabs>
````




