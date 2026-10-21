---
sidebar_label: Add Group Administrators
sidebar_position: 1
title: Add Group Administrators
---

This endpoint elects some members of the group identified by \{id} as administrators of the group. The administrators
can manage the members, invite or add users, approve the requests to join, edit the group and moderate its
contributions; only the creator of the group can delete it and remove the other administrators.

:::note

Only the members of the group can become administrators. Electing a user who is already an administrator has no effect.

:::

:::info

This operation requires authentication. The logged user must be an administrator of the group (or an administrator of
the community).

:::

## HTTP Request

`POST /api/v2/group/{id}/admin/`

### Parameters

| Name  | In   | Type          | Required | Description                                                                 |
|-------|------|---------------|----------|-----------------------------------------------------------------------------|
| id    | path | string        | true     | A unique integer value identifying this group                               |
| users | body | list(integer) | true     | List of id of the [User](/docs/apireference/v2/schemas/user) to elect       |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
fetch('/api/v2/group/{id}/admin/',
{
  method: 'POST',
  body: JSON.stringify({users: [42, 43]}),
  headers: {
    'Content-Type': 'application/json',
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
curl -X POST /api/v2/group/{id}/admin/ \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer {access_token}' \\
  -d '{"users": [42, 43]}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                          | Description                                                                                      | Schema |
|--------|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)  | Response status code                                                                             | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | A user is not valid or is not a member of the group, or the logged user is not an administrator  | Error  |
