---
sidebar_label: Make a Course Quiz Attempt
sidebar_position: 1
title: Make a Course Quiz Attempt
---

This endpoint allows a user attending the current course to make an attempt to pass the quiz (lesson of type `quiz`)
identified by `{lesson_id}` for the course identified by `{course_id}`, under the section identified by `{section_id}`.

The user must answer every question.

:::info
This operation requires the user joins the course; the user must also have access to the lesson.

Users with role creator or manager can always access a lesson while the other users should follow the rules setup by the
managers.

**Rules**:

1. lesson should be `published`;
2. if the course `type` is `scheduled` the current datetime should be greater than or equal to `dripped_at`;
3. if the course `type` is `structured` the current datetime should be greater than or equal to the `joined_at` datetime
   plus `drip_delay` days;
4. if the course has `enforce_lessons_order` set to true then all the published lessons before the current one should be
   completed.

:::

## HTTP Request

`POST /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/attempt/`

### Parameters

| Name       | In   | Type                                                                          | Required | Description                                                                          |
|------------|------|-------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------|
| course_id  | path | string                                                                        | true     | A unique integer value identifying the course of the question                        |
| section_id | path | string                                                                        | true     | A unique integer value identifying the section of the question                       |
| lesson_id  | path | string                                                                        | true     | A unique integer value identifying the lesson of the question                        |
| body       | body | [Course Quiz Make Attempt](/docs/apireference/v2/schemas/course_make_attempt) | true     | The request body (course quiz attempt params).<br/>Every question should be answered |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "responses": [
    {
      "question_id": "integer",
      "selected_options": []
    },
    {
      "question_id": "integer",
      "selected_options": []
    }
  ]
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
  "responses": [
    {
      "question_id": "integer",
      "selected_options": []
    },
    {
      "question_id": "integer",
      "selected_options": []
    }
  ]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/',
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
curl -X POST /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/question/{question_id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                              |
|--------|---------------------------------------------------------|----------------------|---------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Quiz Attempt](/docs/apireference/v2/schemas/course_attempt) |
