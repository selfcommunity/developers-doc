---
sidebar_label: Get a Specific Preference
sidebar_position: 203
title: Get a Specific Preference
---

This endpoint retrieves a specific user's preference.

:::info

This operation requires that the user authenticated is the same as `{user_id}` or that the user has the admin role to
view all the preferences.

:::

## HTTP Request

`GET /api/v2/user/{user_id}/preference/{id}/`

### Parameters

| Name    | In   | Type    | Required | Description                                                                                                                 |
|---------|------|---------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| user_id | path | string  | true     | A unique integer value identifying the current user id (can also be used 'me' to identify the user currently authenticated) |
| id      | path | integer | true     | A unique integer value identifying the preference                                                                           |

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

fetch('/api/v2/user/me/preference/1/',
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
curl -X GET /api/v2/user/provider/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description       | Schema                                                             |
|--------|---------------------------------------------------------|-------------------|--------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | User's preference | [User Preferences](/docs/apireference/v2/schemas/user_preferences) |

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




