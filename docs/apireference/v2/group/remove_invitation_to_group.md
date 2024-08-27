---
sidebar_label: Remove Invitation To Group
sidebar_position: 1
title: Remove Invitation To Group
---

This endpoint allows the manager to remove one or more invitations to attend a group that were previously sent to some
users.

:::info

This operation requires authentication and that the user is the manager of the group.

:::

## HTTP Request

`DELETE /api/v2/group/{id}/invite/`

### Parameters

| Name  | In   | Type          | Required | Description                                                                   |
|-------|------|---------------|----------|-------------------------------------------------------------------------------|
| id    | path | integer       | true     | A unique integer value identifying this group                                 |
| users | body | list(integer) | true     | List of id of [User](/docs/apireference/v2/schemas/user) to remove invitation |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "users": ["integer"]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};
fetch('/api/v2/group/{id}/invite/',
{
  method: 'DELETE',
  body: inputBody,
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
curl -X DELETE /api/v2/group/{id}/invite/
  -H "Authorization: Bearer <token>"
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
