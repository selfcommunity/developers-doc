---
sidebar_label: Update Course Quiz Question
sidebar_position: 1
title: Update Course Quiz Question
---

This endpoint updates a specific question with id `{question_id}` for the course identified by `{course_id}`, under the
section identified by `{section_id}` and written in the lesson identified by `{lesson_id}`.

:::info

This operation requires the course creator or manager role.

:::

## HTTP Request

`PUT /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/`

### Parameters

| Name        | In   | Type                                                                  | Required | Description                                                    |
|-------------|------|-----------------------------------------------------------------------|----------|----------------------------------------------------------------|
| course_id   | path | string                                                                | true     | A unique integer value identifying the course of the question  |
| section_id  | path | string                                                                | true     | A unique integer value identifying the section of the question |
| lesson_id   | path | string                                                                | true     | A unique integer value identifying the lesson of the question  |
| question_id | path | string                                                                | true     | A unique integer value identifying the question                |
| body        | body | [Course Quiz Question](/docs/apireference/v2/schemas/course_question) | true     | The request body (course question params)                      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "type": "string",
    "text": "string",
    "answers": []
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
    "type": "string",
    "text": "string",
    "answers": []
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/',
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
curl -X PUT /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                                |
|--------|---------------------------------------------------------|----------------------|-----------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Quiz Question](/docs/apireference/v2/schemas/course_question) |
