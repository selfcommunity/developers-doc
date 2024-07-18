---
sidebar_label: Get User's Preferences
sidebar_position: 202
title: Get User's Preferences
---

This endpoint retrieves all user's preferences.

:::info

This operation requires that the user authenticated is the same as `{id}` or that the user has the admin role to view all the preferences.

:::

## HTTP Request

`GET /api/v2/user/{id}/preference/`

### Parameters

| Name   | In    | Type   | Required | Description                                                                                                                 |
|--------|-------|--------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| id     | path  | string | true     | A unique integer value identifying the current user id (can also be used 'me' to identify the user currently authenticated) |
| search | query | string | false    | A string used to search a key parameter for user id; it's an exact match so the string must be a key                        |
| key    | query | string | false    | It works like the search parameter                                                                                          |

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

fetch('/api/v2/user/me/preference/?search=platform_tour',
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

| Status | Meaning                                                 | Description                | Schema                                                                   |
|--------|---------------------------------------------------------|----------------------------|--------------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | List of user's preferences | list([User Preferences](/docs/apireference/v2/schemas/user_preferences)) |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
    "results": [
        {
            "id": "integer",
            "user_id": "integer",
            "key": "string",
            "value": "json",
            "created_at": "string",
            "last_updated_at": "string"
        }
    ]
}

```

</TabItem>
</Tabs>
````




