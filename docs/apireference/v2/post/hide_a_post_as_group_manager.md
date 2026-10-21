---
sidebar_label: Hide a Post as Group Manager
sidebar_position: 1
title: Hide a Post as Group Manager
---

This endpoint hides the Post for all the members of the group it is addressed to. A hidden contribution cannot be seen (nor opened, commented or voted) by the other members of the group: only its author and the administrators of the group can still see it and interact with it, and the administrators can show it again. The user who requests a hidden contribution that he cannot see gets a `404`.

:::note

This is a light moderation: it does not flag the post, it does not change the reputation of the author and it does not
notify the author. Only the posts addressed to a group can be hidden this way.

:::

:::info

This operation requires authentication. The logged user must be an administrator of the group the post is addressed to, or a
moderator or an administrator of the community.

:::

## HTTP Request

`POST /api/v2/post/{id}/collapse/`

### Parameters

| Name | In   | Type   | Required | Description                                          |
|------|------|--------|----------|------------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this post |

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

fetch('/api/v2/post/{id}/collapse/',
{
  method: 'POST',
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
curl -X POST /api/v2/post/{id}/collapse/ \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                          | Description                                                              | Schema |
|--------|------------------------------------------------------------------|--------------------------------------------------------------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)  | Response status code                                                     | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The post is already hidden                                                                 | Error  |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)   | The user is not an administrator of the group the post is addressed to         | Error  |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)   | The post does not exist, or the user cannot see it                        | Error  |
