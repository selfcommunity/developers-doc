---
sidebar_label: Delete a Course Comment
sidebar_position: 1
title: Delete a Course Comment
---

This endpoint deletes a specific comment with id `{comment_id}` for the course identified by `{course_id}`, under
the section identified by `{section_id}` and written in the lesson identified by `{lesson_id}`.

:::info

This operation requires the course manager role.

:::

## HTTP Request

`DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/`

### Parameters

| Name       | In   | Type   | Required | Description                                                   |
|------------|------|--------|----------|---------------------------------------------------------------|
| course_id  | path | string | true     | A unique integer value identifying the course of the comment  |
| section_id | path | string | true     | A unique integer value identifying the section of the comment |
| lesson_id  | path | string | true     | A unique integer value identifying the lesson of the comment  |
| comment_id | path | string | true     | A unique integer value identifying the comment                |

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
fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/',
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
curl -X DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
