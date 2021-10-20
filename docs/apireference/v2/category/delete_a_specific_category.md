---
sidebar_label: Delete a Specific Category
sidebar_position: 7
title: Delete a Specific Category
---

Delete a specific category identified by {id}. 

:::info

There are two ways of deleting a category: **soft** and **hard**.

**soft**: the category is marked as deleted and not active, so it will not be possible to create a new category with the same name/slug.

**hard**: the category is: marked as deleted, marked as not active and the name/slug is changed to make possibile to create a new category with the same name/slug.

In particular:

* If the delete request is soft and the category is already soft deleted you will get a 400 response.
* If the delete request is hard and the category is already soft deleted perform hard delete.
* If the delete request is hard and the category is already hard deleted you will get a 400 response.

:::

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`DELETE /api/v2/category/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this category.|
|hard|query|bool|false|If the value is set to 1, perform hard delete else execute a soft delete.|

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
fetch('/api/v2/category/{id}/',
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
curl -X DELETE /api/v2/category/{id}/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|





