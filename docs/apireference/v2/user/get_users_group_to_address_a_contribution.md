---
sidebar_label: Get User Groups to Address a Contribution
sidebar_position: 1
title: Get User Groups to Address a Contribution
---

This endpoint returns the user groups to address a contribution

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/group/groups_to_address_a_contribution/`

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer <token>'
};

fetch('/api/v2/user/group/groups_to_address_a_contribution/',
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
curl -X GET /api/v2/user/group/groups_to_address_a_contribution/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <token>'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                       |
|---|---|---|----------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| [Group](/docs/apireference/v2/schemas/group) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
    {
        "id": "integer",
        "name": "string",
        "description": "string",
        "slug": string,
        "privacy": string,
        "image_bigger": "string",
        "image_big": "string",
        "image_medium": "string",
        "image_small": "string",
        "subscribers_counter": "integer",
        "subscription_status": "string"
    },
    {...}
]
```

</TabItem>
</Tabs>
````




