---
sidebar_label: Delete a Single Message
sidebar_position: 1
title: Delete a Single Message
---

This endpoint deletes a message.


:::info

This operation requires authentication. The logged user must be the message sender.

:::

:::info

If the message was sent less than 60 seconds before it is deleted and hidden from the thread (and the status is set to deleted); otherwise it is overwritten by the message "Message delete" and the status is set to hidden.

:::


## HTTP Request

`DELETE /api/v2/pm/{id}/`



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

fetch('/api/v2/pm/{id}/',
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
curl -X DELETE /api/v2/pm/{id}/ \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Response status code|None|







