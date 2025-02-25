---
sidebar_label: Create a Course Quiz
sidebar_position: 1
title: Create a Course Quiz
---

This endpoint creates a quiz (a lesson of type quiz) for the course identified by `{course_id}` and under the section
identified by `{section_id}`.

:::info

This operation requires the course creator or manager role and you should specify the parameter `type`=`quiz`.

:::

## HTTP Request

`POST /api/v2/course/{course_id}/section/{section_id}/lesson/`

### Parameters

| Name       | In   | Type                                                         | Required | Description                                                  |
|------------|------|--------------------------------------------------------------|----------|--------------------------------------------------------------|
| course_id  | path | string                                                       | true     | A unique integer value identifying the course of the lesson  |
| section_id | path | string                                                       | true     | A unique integer value identifying the section of the lesson |
| body       | body | [Course Lesson](/docs/apireference/v2/schemas/course_lesson) | true     | The request body (course section params)                     |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string",
    "type": "quiz",
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
    "type": "quiz",
    "text": "string"

}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/',
{
  method: 'POST',
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
curl -X POST /api/v2/course/{course_id}/section/{section_id}/lesson/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                                       |
|--------|--------------------------------------------------------------|----------------------|--------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [Course Lesson](/docs/apireference/v2/schemas/course_lesson) |
