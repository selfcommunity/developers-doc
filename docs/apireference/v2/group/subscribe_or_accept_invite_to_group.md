---
sidebar_label: Subscribe Or Accept Invite
sidebar_position: 1
title: Subscribe Or Accept Invite
---

This endpoint allows users to subscribe or to accept the invite to join a specific group.

:::note

By passing the optional param `users` a group manager or an administrator of the community is able to subscribe some
users to the group. The users are added directly, without any invitation, even if the group is private.

A group manager can add users directly only if the groups of the community work in `add` mode (the
`groups_membership_mode` dynamic preference of the `configurations` section; the default value is `invite`). The
administrators of the community can always add users directly, whatever the mode is.

By passing also the optional param `silent` (administrators only) the users are not notified.

:::

:::info

This operation requires authentication. It requires also that the user is an administrator of the community, or the
manager of the group if the groups work in `add` mode, if the `users` param is passed, and that the user is an
administrator of the community if the `silent` param is passed.

:::

## HTTP Request

`POST /api/v2/group/{id}/subscribe/`

### Parameters

| Name   | In   | Type          | Required | Description                                                                                                                                                                  |
|--------|------|---------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id     | path | string        | true     | A unique integer value identifying this group                                                                                                                                |
| users  | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to subscribe                                                                                                        |
| silent | body | boolean       | false    | If `true` the subscribed users are not notified. It requires `users` and it is allowed only to the administrators of the community. The default value is `false`             |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = JSON.stringify({
  users: [42, 43],
  silent: true
});
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/group/{id}/subscribe/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    console.log(res.status);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X POST /api/v2/group/{id}/subscribe/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  -d '{"users": [42, 43], "silent": true}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The users are not valid, `silent` is used without `users`, the user is neither the manager of the group nor an administrator, or the user is the group manager but the groups work by invitation (`invite` mode) | Error  |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)   | `silent` is used by a user who is not an administrator of the community                                                          | Error  |

:::note

Every change of the group membership triggers a [group event](/docs/webhooks/ls_group_events) for the webhooks, also when
`silent` is `true`.

:::
