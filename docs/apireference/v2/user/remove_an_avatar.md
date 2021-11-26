---
sidebar_label: Remove An Avatar from My Avatars
sidebar_position: 100
title: Remove An Avatar from My Avatars
---

This endpoint removes/deletes an Avatars from my Avatars

:::info

This operation requires authentication.

:::

## HTTP Request

`DELETE /api/v2/user/avatar/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avatar_id|body|string|true|A unique integer value identifying this avatar.|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
fetch('/api/v2/user/avatar/?avatar_id=123',
{
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }

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
curl -X DELETE /api/v2/user/avatar/?avatar_id=123
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|





