---
sidebar_label: Unsubscribe From Group Or Remove request
sidebar_position: 1
title: Unsubscribe From Group Or Remove request
---

This endpoint allows users to unsubscribe from the group identified by `{id}`. If the user is not subscribed to the
group but has requested to participate to a private group then remove the request to participate.

:::note

By passing the optional param `user` an group manager is able to remove the user from the group.

:::

:::info

This operation requires only authentication without the `user` param. It requires also that the user is the manager of
the group if the `user` param is passed.

:::

## HTTP Request

`DELETE /api/v2/group/{id}/subscribe/`

### Parameters

| Name | In   | Type    | Required | Description                                                          |
|------|------|---------|----------|----------------------------------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this group                        |
| user | path | integer | false    | A unique integer value identifying the user to remove from the group |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};
fetch('/api/v2/group/{id}/subscribe/',
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
curl -X DELETE /api/v2/group/{id}/subscribe/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
