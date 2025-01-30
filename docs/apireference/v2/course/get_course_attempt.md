---
sidebar_label: Get Course Quiz Attempt
sidebar_position: 1
title: Get Course Quiz Attempt
---

This endpoint retrieves a specific attempt with id `{attempt_id}` for the course identified by `{course_id}`, under
the section identified by `{section_id}` and written in the lesson identified by `{lesson_id}`.

The lesson must be of type `quiz`.

:::info
This operation requires the course creator or manager role or that the attempt is made by the user currently
authenticated.

:::

## HTTP Request

`GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/attempt/{attempt_id}/`

### Parameters

| Name       | In   | Type   | Required | Description                                                   |
|------------|------|--------|----------|---------------------------------------------------------------|
| course_id  | path | string | true     | A unique integer value identifying the course of the attempt  |
| section_id | path | string | true     | A unique integer value identifying the section of the attempt |
| lesson_id  | path | string | true     | A unique integer value identifying the lesson of the attempt  |
| attempt_id | path | string | true     | A unique integer value identifying the attempt                |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/attempt/{attempt_id}/',
{
  method: 'GET',
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
curl -X GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/attempt/{attempt_id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                              |
|--------|---------------------------------------------------------|----------------------|---------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Quiz Attempt](/docs/apireference/v2/schemas/course_attempt) |
