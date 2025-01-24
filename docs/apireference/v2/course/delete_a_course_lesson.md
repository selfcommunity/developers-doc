---
sidebar_label: Delete a Course Lesson
sidebar_position: 1
title: Delete a Course Lesson
---

This endpoint deletes a specific lesson with id `{lesson_id}` for the course identified by `{course_id}` and under the
section identified by `{section_id}`.

:::info

This operation requires the course creator or manager role.

:::

## HTTP Request

`DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/`

### Parameters

| Name       | In   | Type   | Required | Description                                                  |
|------------|------|--------|----------|--------------------------------------------------------------|
| course_id  | path | string | true     | A unique integer value identifying the course of the lesson  |
| section_id | path | string | true     | A unique integer value identifying the section of the lesson |
| lesson_id  | path | string | true     | A unique integer value identifying the lesson                |

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
fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/',
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
curl -X DELETE /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
