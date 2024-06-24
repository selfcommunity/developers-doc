---
sidebar_label: Get User's Social Associations
sidebar_position: 201
title: Get User's Social Associations
---

This endpoint retrieves all user's social associations.

:::info

This operation requires that the user is the same or has the admin role to view all the associations.

:::

:::info

This operation does not require authentication to view only the associations with show_in_profile set to true.

:::

## HTTP Request

`GET /api/v2/user/provider/`

### Parameters

| Name    | In    | Type    | Required | Description                                  |
|---------|-------|---------|----------|----------------------------------------------|
| user_id | query | integer | false    | A unique integer value identifying this user |

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

fetch('/api/v2/user/provider/?user_id=11',
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

| Status | Meaning                                                 | Description                           | Schema                                                                               |
|--------|---------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | List of associated external providers | list([User External Provider](/docs/apireference/v2/schemas/user_external_provider)) |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
    {
        "user_id": "integer",
        "provider": "string",
        "ext_id": "integer",
        "metadata": {
            "ext_id": "integer",
            "username": "string",
            "email": "string"
        }
    },
    {
        "user_id": "integer",
        "provider": "string",
        "ext_id": "integer",
        "profile_url": "string(uri)",
        "show_in_profile": "boolean"
    },
    {...}
]

```

</TabItem>
</Tabs>
````




