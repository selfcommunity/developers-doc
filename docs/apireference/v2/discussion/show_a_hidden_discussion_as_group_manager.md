---
sidebar_label: Show a Hidden Discussion as Group Manager
sidebar_position: 1
title: Show a Hidden Discussion as Group Manager
---

This endpoint shows again a Discussion previously hidden by the manager of the group.

:::note

This is a light moderation: it does not flag the discussion, it does not change the reputation of the author and it does not
notify the author. Only the discussions addressed to a group can be hidden this way.

:::

:::info

This operation requires authentication. The logged user must be the manager of the group the discussion is addressed to, or a
moderator or an administrator of the community.

:::

## HTTP Request

`DELETE /api/v2/discussion/{id}/collapse/`

### Parameters

| Name | In   | Type   | Required | Description                                          |
|------|------|--------|----------|------------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this discussion |

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

fetch('/api/v2/discussion/{id}/collapse/',
{
  method: 'DELETE',
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
curl -X DELETE /api/v2/discussion/{id}/collapse/ \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                          | Description                                                              | Schema |
|--------|------------------------------------------------------------------|--------------------------------------------------------------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)  | Response status code                                                     | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The discussion is not hidden                                                                 | Error  |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)   | The user is not the manager of the group the discussion is addressed to         | Error  |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)   | The discussion does not exist, or the user cannot see it                        | Error  |
