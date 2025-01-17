---
sidebar_label: Create a Course Comment
sidebar_position: 1
title: Create a Course Comment
---

This endpoint creates a comment for a specific lesson with id `{lesson_id}` for the course identified by `{course_id}`
and under the section identified by `{section_id}`.<br/>
If `in_reply_to` is passed then also `parent` is mandatory and it must be the same `parent` as the `parent` present in
the comment identified by `in_reply_to`.

:::info

This operation requires the user joins the course and that the lesson has `comments_enabled` (also managers).<br/>
Users with role manager can always get a lesson while the other users should follow the rules setup by the
managers.<br/>
**Rules**:

1. lesson should be `published`;
2. if the course `type` is `scheduled` the current datetime should be greater than or equal to `dripped_at`;
3. if the course `type` is `structured` the current datetime should be greater than or equal to the `joined_at` datetime
   plus `drip_delay` days;
4. if the course has `enforce_lessons_order` set to true then all the published lessons before the current one should be
   completed.

:::

## HTTP Request

`POST /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/`

### Parameters

| Name       | In   | Type                                                           | Required | Description                                                   |
|------------|------|----------------------------------------------------------------|----------|---------------------------------------------------------------|
| course_id  | path | string                                                         | true     | A unique integer value identifying the course of the comment  |
| section_id | path | string                                                         | true     | A unique integer value identifying the section of the comment |
| lesson_id  | path | string                                                         | true     | A unique integer value identifying the lesson of the comment  |
| body       | body | [Course Comment](/docs/apireference/v2/schemas/course_comment) | true     | The request body (course comment params)                      |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "parent": "integer",
    "text": "string",
    "medias": []
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
    "parent": "integer",
    "text": "string",
    "medias": []
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/',
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
curl -X POST /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                                         |
|--------|--------------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [Course Comment](/docs/apireference/v2/schemas/course_comment) |
