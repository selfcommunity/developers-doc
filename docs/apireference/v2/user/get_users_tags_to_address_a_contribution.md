---
sidebar_label: Get User's Tags to Address a Contribution
sidebar_position: 40
title: Get User's Tags to Address a Contribution
---

This endpoint returns user's tags to address a contribution

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/tag/tags_to_address_a_contribution/`

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

fetch('/api/v2/user/tag/tags_to_address_a_contribution/',
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
curl -X GET /api/v2/user/tag/tags_to_address_a_contribution/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <token>'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Tag](/docs/apireference/v2/schemas/tag)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
    {
      "id": 0,
      "type": "user",
      "name": "string",
      "description": "string",
      "color": "string",
      "visible": "boolean"
    },
    {
      "id": 0,
      "type": "user",
      "name": "string",
      "description": "string",
      "color": "string",
      "visible": false
    }
]
```

</TabItem>
</Tabs>
````




