---
sidebar_label: Create a Preference
sidebar_position: 204
title: Create a Preference
---

This endpoint creates a user preference

:::info

This operation requires that the user authenticated is the same as `{id}` or that the user has the admin role.

:::

## HTTP Request

`POST /api/v2/user/{id}/preference/`

### Parameters

| Name | In   | Type                                                               | Required | Description                                                                                                                  |
|------|------|--------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------|
| id   | path | string                                                             | true     | A unique integer value identifying the current user id (can also be used 'me' to identify  the user currently authenticated) |
| body | body | [User Preferences](/docs/apireference/v2/schemas/user_preferences) | true     | The request body should be a json with two parameters: key and value                                                         |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "key": "string",
    "value": "json"
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
    "key": "string",
    "value": "json"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/user/1/preference/',
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
curl -X POST /api/v2/user/1/preference/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                                             |
|--------|--------------------------------------------------------------|----------------------|--------------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [User Preferences](/docs/apireference/v2/schemas/user_preferences) |

### Example responses

````mdx-code-block

<Tabs defaultValue="201" values={[{ label: '201', value: '201', }]}>
<TabItem value="201">

```json
{
    "id": "integer",
    "user_id": "integer",
    "key": "string",
    "value": "json",
    "created_at": "string",
    "last_updated_at": "string"
}
```

</TabItem>
</Tabs>
````




