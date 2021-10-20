---
sidebar_label: Add/Remove Score to a User
sidebar_position: 3
title: Add/Remove Score to a User
---

This endpoint adds/removes score to a user.

:::info

This operation requires admin or moderation role.

:::

## HTTP Request

`POST /api/v2/score/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|body|integer|true|A unique integer value identifying the user.|
|score|body|integer|true|Positive or negative integer value.|
|comment|body|string|false|A comment about this operation (only for internal usage).|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "comment": "string",
  "user": "integer",
  "score": "integer"
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
  "user": "integer",
  "score": "integer",
  "comment": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/score/',
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
curl -X POST /api/v2/score/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "comment": "Comment",
    "user": "1",
    "score": "20"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Score](#schemascore)|

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
    "avatar": "string",
    "reputation": 0
  },
  "score": "string",
  "reputation_type": 1,
  "reputation_type_description": "string",
  "comment": "string"
}
```

</TabItem>
</Tabs>
````




