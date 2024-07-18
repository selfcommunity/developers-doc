---
sidebar_label: Delete a Specific Preference
sidebar_position: 207
title: Delete a Specific Preference
---

This endpoint deletes a specific user preference

:::info

This operation requires that the user authenticated is the same as `{user_id}` or that the user has the admin role.

:::

## HTTP Request

`DELETE /api/v2/user/{user_id}/preference/{id}/`

### Parameters

| Name    | In   | Type    | Required | Description                                                                                                                 |
|---------|------|---------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| user_id | path | string  | true     | A unique integer value identifying the current user id (can also be used 'me' to identify the user currently authenticated) |
| id      | path | integer | true     | A unique integer value identifying the preference                                                                           |

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
fetch('/api/v2/user/1/preference/1/',
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
curl -X DELETE /api/v2/user/1/preference/1/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
