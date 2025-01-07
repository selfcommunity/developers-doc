---
sidebar_label: Update Course Lesson
sidebar_position: 1
title: Update Course Lesson
---

This endpoint updates a specific lesson with id `{lesson_id}` for the course identified by `{course_id}` and under the
section identified by `{section_id}`.

:::info

This operation requires the course manager role.

:::

## HTTP Request

`PUT /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/`

### Parameters

| Name       | In   | Type                                                         | Required | Description                                                  |
|------------|------|--------------------------------------------------------------|----------|--------------------------------------------------------------|
| course_id  | path | string                                                       | true     | A unique integer value identifying the course of the lesson  |
| section_id | path | string                                                       | true     | A unique integer value identifying the section of the lesson |
| lesson_id  | path | string                                                       | true     | A unique integer value identifying the lesson                |
| body       | body | [Course Lesson](/docs/apireference/v2/schemas/course_lesson) | true     | The request body (course lesson params)                      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string",
    "type": "string",
    "text": "string"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
    "name": "string",
    "type": "string",
    "text": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/',
{
  method: 'PUT',
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
curl -X PUT /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                | Description          | Schema                                                       |
|--------|--------------------------------------------------------|----------------------|--------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Lesson](/docs/apireference/v2/schemas/course_lesson) |
