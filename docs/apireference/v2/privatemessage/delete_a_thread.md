---
sidebar_label: Delete a Thread
sidebar_position: 1
title: Delete a Thread
---

This endpoint deletes a thread.


:::info

This operation requires authentication.

:::

:::info

The thread is deleted only for the logged user.

:::

## HTTP Request

`DELETE /api/v2/pm/`

### Parameters

| Name   | In    | Type    | Required                                 | Description          |
|--------|-------|---------|------------------------------------------|----------------------|
| thread | query | integer | (one between thread or user is required) | The id of the thread |
| user   | query | integer | (one between thread or user is required) | The id of the user   |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/pm/?thread={id}',
{
  method: 'DELETE',
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
curl -X DELETE /api/v2/pm/?thread={id} \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Response status code|None|







