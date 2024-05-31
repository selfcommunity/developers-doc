---
sidebar_label: Get a Specific Invite Code
sidebar_position: 1
title: Get a Specific Invite Code
---

This endpoint retrieves a specific invite code by code.

:::info

This operation does not require authentication

:::

## HTTP Request

`GET /api/v2/invite_code/{code}/`

### Parameters

| Name | In   | Type   | Required | Description                     |
|------|------|--------|----------|---------------------------------|
| code | path | string | true     | The code identifying the invite |

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

fetch('/api/v2/invite_code/{code}/',
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
curl -X GET /api/v2/invite_code/{code}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                                  |
|--------|---------------------------------------------------------|-------------|---------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | [InviteCode](/docs/apireference/v2/schemas/invite_code) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "id": "integer",
    "invited_by_username": "string",
    "role": "string",
    "tags": [{Tags}],
    "name": "string",
    "email": "string",
    "code": "string",
    "generated_at": "string",
    "sent_at": "string",
    "used_at": "string",
    "invited_by": "integer",
    "user": {User}
}
```

</TabItem>
</Tabs>
````




