---
sidebar_label: Delete a Thread
sidebar_position: 6
title: Delete a Thread
---

This endpoint deletes a thread.


:::info

This operation requires authentication.
:::


## HTTP Request

`DELETE /api/v2/pm/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hide|query|integer|true|The id of the thread to hide|

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

fetch('/api/v2/pm/{id}/?hide={id}',
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
curl -X DELETE /api/v2/pm/{id}/?hide={id} \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|







