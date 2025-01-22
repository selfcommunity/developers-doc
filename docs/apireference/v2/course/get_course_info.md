---
sidebar_label: Get Course Info
sidebar_position: 1
title: Get Course Info
---

This endpoint retrieves a specific course information.

:::info

The `view` param with values `edit` and `dashboard` needs manager permissions.

:::

:::info

If course `privacy` is:

- empty string (draft mode): only managers can see the course;
- `open`: anyone can see and join the course;
- `private`: only invited members can see the course; non-members will see the lock screen (only basic
  data: [Course Minimal](/docs/apireference/v2/schemas/course_minimal));
- `secret`: only invited members can see the course.

:::

:::info

This operation requires authentication if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/course/{id}/`

### Parameters

| Name | In    | Type    | Required | Description                                    |
|------|-------|---------|----------|------------------------------------------------|
| id   | path  | integer | true     | A unique integer value identifying this course |
| view | query | string  | false    | Recover the course data for a specific view    |

#### Enumerated Values

| Parameter | Value     | Description                                                                                                              |
|-----------|-----------|--------------------------------------------------------------------------------------------------------------------------|
| » view    | user      | Default value; recover the data of a course for a generic user (sections empty and lessons in draft mode will be hidden) |
| » view    | edit      | Like `user` but include any section and lesson; user must be a manager of the course                                     |
| » view    | dashboard | Recover useful data for the dashboard; user must be a manager of the course                                              |

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

fetch('/api/v2/course/{id}/',
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
curl -X GET /api/v2/course/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

### view = user

| Status | Meaning                                                 | Description          | Schema                                                                 |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course User Detail](/docs/apireference/v2/schemas/course_user_detail) |

### view = edit

| Status | Meaning                                                 | Description          | Schema                                                       |
|--------|---------------------------------------------------------|----------------------|--------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Detail](/docs/apireference/v2/schemas/course_detail) |

### view = dashboard

| Status | Meaning                                                 | Description          | Schema                                                             |
|--------|---------------------------------------------------------|----------------------|--------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Dashboard](/docs/apireference/v2/schemas/course_dashboard) |
