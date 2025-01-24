---
sidebar_label: Get Course Lesson Comments
sidebar_position: 1
title: Get Course Lesson Comments
---

This endpoint retrieves paginated lesson comments for a specific lesson with id `{lesson_id}` for the course identified
by `{course_id}` and under the section identified by `{section_id}`.<br/>
If the `parent` id is passed then it returns all comments that have the given id as their parent (comments that are
children of the `parent`).<br/>
If the `parent` id is not passed then it returns all first level comments of the lesson (comments with null `parent`
id).

:::info

This operation requires the user joins the course and that the lesson has `comments_enabled` (also creator and
managers).<br/>
Users with role creator or manager can always get a lesson while the other users should follow the rules setup by the
managers.<br/>
**Rules**:

1. lesson should be `published`;
2. if the course `type` is `scheduled` the current datetime should be greater than or equal to `dripped_at`;
3. if the course `type` is `structured` the current datetime should be greater than or equal to the `joined_at` datetime
   plus `drip_delay` days;
4. if the course has `enforce_lessons_order` set to true then all the published lessons before the current one should be
   completed.

:::

:::note
If `comments_enabled` is false then it will return:

```json
{
  "count": 0,
  "next": null,
  "previous": null,
  "results": []
}
```

:::

## HTTP Request

`GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/`

### Parameters

| Name       | In    | Type    | Required | Description                                                                                                        |
|------------|-------|---------|----------|--------------------------------------------------------------------------------------------------------------------|
| course_id  | path  | string  | true     | A unique integer value identifying the course of the comments                                                      |
| section_id | path  | string  | true     | A unique integer value identifying the section of the comments                                                     |
| lesson_id  | path  | string  | true     | A unique integer value identifying the lesson of the comments                                                      |
| limit      | query | integer | false    | Number of results to return per page                                                                               |
| offset     | query | integer | false    | The initial index from which to return the results                                                                 |
| parent     | query | string  | false    | Id of the parent [Course Comment](/docs/apireference/v2/schemas/course_comment); used for retrieve nested comments |
| ordering   | query | string  | false    | The ordering of the comments; use `-` for order desc.<br/>Default to `created_at`                                  |

#### Enumerated Values

| Parameter  | Value      | Description                        |
|------------|------------|------------------------------------|
| » ordering | created_at | Order by comment creation datetime |

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

fetch('/api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/',
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
curl -X GET /api/v2/course/{course_id}/section/{section_id}/lesson/{lesson_id}/comment/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                               |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | list([Course Comment](/docs/apireference/v2/schemas/course_comment)) |
