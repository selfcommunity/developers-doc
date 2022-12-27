---
sidebar_label: Change User's Email
sidebar_position: 9
title: Change User's Email
---

This endpoint changes the email of the authenticated user

:::info

This operation requires authentication.

:::

## HTTP Request

`PATCH /api/v2/user/{id}/change_email/`

### Parameters

|Name|In|Type|Required| Description                                                                                                                                                                      |
|---|---|---|---|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|id|path|string|true| A unique integer value identifying this user                                                                                                                                     |
|new_email|body|string(email)|true| The new email                                                                                                                                                                    |
|confirm|body|boolean|false| If confirm=1 (or true), the email is not changed directly but a validation code is generated to be used in the [confirm](confirm_users_change_email) call to validate the email. |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "new_email": "string",
  "confirm": "integer/boolean"
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
  "new_email": "string",
  "confirm": "integer/boolean"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/{id}/change_email/',
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
curl -X PATCH /api/v2/user/{id}/change_email/ \
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|If confirm=1, the response body contains the validation code|None|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|If confirm=0, there is no body response|None|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "validation_code": "string"
}
```

</TabItem>
</Tabs>
````




