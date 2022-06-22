---
sidebar_label: Confirm User's Change Email
sidebar_position: 10
title: Confirm User's Change Email
---

This endpoint confirms email change

:::info

This operation does not require authentication.

:::

## HTTP Request

`POST /api/v2/user/{id}/confirm_email/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|--|---|---|
|id|path|string|true|A unique integer value identifying this user.|
|new_email|body|string(email)|true|New email to confirm|
|validation_code|body|string|false|Validation code obtained with [Change User's Email](change_users_email.md)|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "new_email": "user@example.com",
  "validation_code": "string"
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
  "new_email": "user@example.com",
  "confirm": false,
  "validation_code": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/confirm_email/',
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
curl -X POST /api/v2/user/{id}/confirm_email/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|





