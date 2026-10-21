---
sidebar_label: Remove a Group Administrator
sidebar_position: 1
title: Remove a Group Administrator
---

This endpoint removes the user from the administrators of the group identified by \{id}. The user stays a member of the
group.

:::note

Only the creator of the group (and the administrators of the community) can remove the other administrators, so the
creator cannot be ousted. An administrator can always step down by removing themselves. The creator of the group cannot
be removed from the administrators.

:::

:::info

This operation requires authentication. The logged user must be the creator of the group, an administrator of the
community, or the administrator to remove.

:::

## HTTP Request

`DELETE /api/v2/group/{id}/admin/`

### Parameters

| Name | In    | Type    | Required | Description                                                              |
|------|-------|---------|----------|--------------------------------------------------------------------------|
| id   | path  | string  | true     | A unique integer value identifying this group                            |
| user | query | integer | true     | A unique integer value identifying the user to remove from administrators |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
fetch('/api/v2/group/{id}/admin/?user={user_id}',
{
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {access_token}'
  }
})
.then(function(res) {
    console.log(res.status);
});
```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X DELETE "/api/v2/group/{id}/admin/?user={user_id}" \\
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                          | Description                                                                                                                                  | Schema |
|--------|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)  | Response status code                                                                                                                         | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | `user` is missing or not valid, the user is the creator or is not an administrator, or the logged user cannot remove the administrators      | Error  |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)   | The user does not exist                                                                                                                      | Error  |
