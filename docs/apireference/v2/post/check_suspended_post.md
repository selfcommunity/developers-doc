---
sidebar_label: Check if Suspended Post
sidebar_position: 1
title: Check if Suspended Post
---

This endpoint returns suspended = true if the notifications for the post (identified in path) is suspended by me

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/post/{id}/suspended/`

### Parameters

|Name|In|Type|Required| Description                                         |
|---|---|---|---|-----------------------------------------------------|
|id|path|string|true| A unique integer value identifying this post. |

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

fetch('/api/v2/post/{id}/suspended/`,
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
curl -X GET /api/v2/post/{id}/suspended/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|none|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "suspended": "boolean"
}
```

</TabItem>
</Tabs>
````




