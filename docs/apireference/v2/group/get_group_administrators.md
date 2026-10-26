---
sidebar_label: Get Group Administrators
sidebar_position: 1
title: Get Group Administrators
---

This endpoint retrieves the list of the administrators of the group identified by \{id}: its creator and the users
elected by the other administrators.

:::info

This operation requires authentication, and being a member of the group if the group is private.

:::

:::note

Every user of the list has also `group_role`, the role of the user in the group: `creator` (who created the group),
`admin` (the group manager, or a user elected by the other administrators) or `member`.

:::

## HTTP Request

`GET /api/v2/group/{id}/admin/`

### Parameters

| Name   | In    | Type    | Required | Description                                        |
|--------|-------|---------|----------|----------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying this group      |
| limit  | query | integer | false    | Number of results to return per page               |
| offset | query | integer | false    | The initial index from which to return the results |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
fetch('/api/v2/group/{id}/admin/',
{
  method: 'GET',
  headers: {
    'Accept': 'application/json',
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
curl -X GET /api/v2/group/{id}/admin/ \\
  -H 'Accept: application/json' \\
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description                                                   | Schema                                                       |
|--------|-----------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)         | Paginated list of [User](/docs/apireference/v2/schemas/user)  | Inline                                                       |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | The group is private and the user is not a member             | Error                                                        |
