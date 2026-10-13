---
sidebar_label: Unsubscribe From Group Or Remove request
sidebar_position: 1
title: Unsubscribe From Group Or Remove request
---

This endpoint allows users to unsubscribe from the group identified by `{id}`. If the user is not subscribed to the
group but has requested to participate to a private group then remove the request to participate.

:::note

By passing the optional param `user` a group manager or an administrator of the community is able to remove the user
from the group. The group manager cannot be removed from the group.

By passing also the optional param `silent` (administrators only) the removed user is not notified.

:::

:::info

This operation requires authentication. It requires also that the user is the manager of the group or an administrator
of the community if the `user` param is passed, and that the user is an administrator of the community if the `silent`
param is passed.

:::

## HTTP Request

`DELETE /api/v2/group/{id}/subscribe/`

### Parameters

| Name   | In    | Type    | Required | Description                                                                                                                                                            |
|--------|-------|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id     | path  | integer | true     | A unique integer value identifying this group                                                                                                                          |
| user   | query | integer | false    | A unique integer value identifying the user to remove from the group                                                                                                   |
| silent | query | boolean | false    | If `true` the removed user is not notified. It requires `user` and it is allowed only to the administrators of the community. The default value is `false`            |

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
fetch('/api/v2/group/{id}/subscribe/?user={user_id}&silent=true',
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
curl -X DELETE "/api/v2/group/{id}/subscribe/?user={user_id}&silent=true" \
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The user is not valid, is neither subscribed nor has requested to join the group, is the group manager, `silent` is used without `user`, or the user is neither the manager of the group nor an administrator | Error  |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)   | `silent` is used by a user who is not an administrator of the community                                                                                                           | Error  |

:::note

Every change of the group membership triggers a [group event](/docs/webhooks/ls_group_events) for the webhooks, also when
`silent` is `true`.

:::
