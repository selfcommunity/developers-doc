---
sidebar_label: Check if Following Discussion
sidebar_position: 23
title: Check if Following Discussion
---

This endpoint returns following = true if the discussion (identified in path) is followed by me

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/discussion/{id}/following/`

### Parameters

|Name|In|Type|Required| Description                                         |
|---|---|---|---|-----------------------------------------------------|
|id|path|string|true| A unique integer value identifying this discussion. |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/discussion/{id}/following/`,
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
curl -X GET /api/v2/discussion/{id}/following/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|none|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "following": "boolean"
}
```

</TabItem>
</Tabs>
````




