---
sidebar_label: Subscribe Or Accept Invite
sidebar_position: 1
title: Subscribe Or Accept Invite
---

This endpoint allows users to subscribe or to accept the invite to join a specific group.

:::note

By passing the optional param `users` a group manager is able to subscribe some users to the group.

:::

:::info

This operation requires authentication. It requires also that the user is the manager of the group if the `users`
param is passed.

:::

## HTTP Request

`POST /api/v2/group/{id}/subscribe/`

### Parameters

| Name  | In   | Type          | Required | Description                                                           |
|-------|------|---------------|----------|-----------------------------------------------------------------------|
| id    | path | string        | true     | A unique integer value identifying this group                         |
| users | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to subscribe |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = 'null';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/group/{id}/invite/',
{
  method: 'POST',
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
curl -X POST /api/v2/group/{id}/invite/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |




