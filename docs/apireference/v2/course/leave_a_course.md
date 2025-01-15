---
sidebar_label: Leave Course Or Remove Request
sidebar_position: 1
title: Leave Course Or Remove Request
---

This endpoint allows users to leave the course identified by `{id}`. If the user didn't joined the course but has
requested to join a course with private access then remove the request to join.

:::note

By passing the optional param `user` a course manager is able to remove the user from the course.

:::

:::info

This operation requires authentication. It requires also that the user is a manager of the course if the `user` param is
passed. The creator of the group cannot unjoin the group but the other managers can.

:::

## HTTP Request

`DELETE /api/v2/course/{id}/join/`

### Parameters

| Name | In   | Type    | Required | Description                                                           |
|------|------|---------|----------|-----------------------------------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this course                        |
| user | path | integer | false    | A unique integer value identifying the user to remove from the course |

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
fetch('/api/v2/course/{id}/subscribe/',
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
curl -X DELETE /api/v2/course/{id}/subscribe/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
