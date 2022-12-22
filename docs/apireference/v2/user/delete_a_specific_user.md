---
sidebar_label: Delete a Specific User
sidebar_position: 8
title: Delete a Specific User
---

This endpoint deletes a specific user identified by {id}

:::info

Only the user identified by the {id} and the administrators can delete the user. 

:::

:::info

There are two ways of deleting a user: **soft** and **hard**.

Soft: the user is marked as deleted, it will not appear in the user lists, the user's posts will remain and it will not be possible to create a user with the same username and ext_id (status of the user will be set to deleted: 'd').

Hard: all user's content (profile, post, votes, etc...) will be removed (status of the user will be set to unregistered: 'u').

In particular:

* If the delete is soft and the user is already soft deleted you will get a 400 response (The user has already been soft deleted)
* If the delete is soft and the user is already hard deleted you will get a 404 response (User not found)
* If the delete is hard and the user is already soft deleted perform hard delete
* If the delete is hard and the user is already hard deleted you will get a 404 response (User not found)
:::

:::info

This operation requires authentication.

:::

## HTTP Request

`DELETE /api/v2/user/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this user|
|hard|query|bool|false|If the value is set to 1, perform hard delete else execute a soft delete|

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
fetch('/api/v2/user/{id}/',
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
curl -X DELETE /api/v2/user/{id}/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|





