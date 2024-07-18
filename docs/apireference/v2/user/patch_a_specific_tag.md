---
sidebar_label: Patch a Specific Preference
sidebar_position: 205
title: Patch a Specific Preference
---

This endpoint patches a specific user preference

:::info

This operation requires that the user authenticated is the same as `{user_id}` or that the user has the admin role.

:::

## HTTP Request

`PATCH /api/v2/user/{user_id}/preference/{id}/`

### Parameters

| Name    | In   | Type                                                               | Required | Description                                                                                                                 |
|---------|------|--------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| user_id | path | string                                                             | true     | A unique integer value identifying the current user id (can also be used 'me' to identify the user currently authenticated) |
| id      | path | integer                                                            | true     | A unique integer value identifying the preference                                                                           |
| body    | body | [User Preferences](/docs/apireference/v2/schemas/user_preferences) | true     | The request body should be a json with one of this parameters: key and/or value                                             |

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

fetch('/api/v2/user/1/preference/1/',
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
curl -X PATCH /api/v2/user/1/preference/1/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                             |
|--------|---------------------------------------------------------|----------------------|--------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [User Preferences](/docs/apireference/v2/schemas/user_preferences) |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

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




