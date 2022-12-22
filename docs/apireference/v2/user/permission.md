---
sidebar_label: Permission
sidebar_position: 15
title: Permission
---

This endpoint returns a list of permissions for the user identified by the authentication token.
Some of the permissions in the list depend on global community settings.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/me/permission/`

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/user/me/permission/',
{
  method: 'GET',
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
curl -X GET /api/v2/user/me/permission/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

### Response 
Schema|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[User Permission](/docs/apireference/v2/schemas/user_permission)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "upload_video": false,
    "create_contribute": "boolean",
    "create_poll": "boolean",
    "locate_post": false,
    "create_post": "boolean",
    "create_post_with_category": "boolean",
    "follow_user": "boolean",
    "request_connection": "boolean",
    "accept_connection": "boolean"
}
```

</TabItem>
</Tabs>
````




