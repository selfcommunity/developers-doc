---
sidebar_label: Patch Course Comment
sidebar_position: 1
title: Patch Course Comment
---

This endpoint patches a specific comment with id `{comment_id}` for the course identified by `{course_id}`, under
the section identified by `{section_id}` and written in the lesson identified by `{lesson_id}`.

:::info

This operation requires the course manager role or that the comment was created by the current user.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

:::

## HTTP Request

`PATCH /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/`

### Parameters

| Name       | In   | Type                                                           | Required | Description                                                   |
|------------|------|----------------------------------------------------------------|----------|---------------------------------------------------------------|
| course_id  | path | string                                                         | true     | A unique integer value identifying the course of the comment  |
| section_id | path | string                                                         | true     | A unique integer value identifying the section of the comment |
| lesson_id  | path | string                                                         | true     | A unique integer value identifying the lesson of the comment  |
| comment_id | path | string                                                         | true     | A unique integer value identifying the comment                |
| body       | body | [Course Comment](/docs/apireference/v2/schemas/course_comment) | true     | The request body (course comment params)                      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
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
  "text": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/',
{
  method: 'PATCH',
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
curl -X PATCH /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/{comment_id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                         |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Comment](/docs/apireference/v2/schemas/course_comment) |
