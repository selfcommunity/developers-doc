---
sidebar_label: Get User Courses
sidebar_position: 1
title: Get User Courses
---

This endpoint return the list of courses the user
has [status](/docs/apireference/v2/schemas/course_with_member_count#enumerated-values) `joined` or `manager` (default).

If you want you can change the default `statuses` with an array of valid statuses or a single value.

eg: you can get all the courses created by the user `ID` with the following request:

```
/api/v2/user/ID/courses/?statuses=creator
```

:::info
Return only the courses that the current user can view.
:::

:::info
This operation does not require authentication.
:::

## HTTP Request

`GET /api/v2/user/{id}/courses/`

### Parameters

| Name     | In    | Type                | Required | Description                                                                                                                                                                |
|----------|-------|---------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id       | path  | integer             | true     | A unique integer value identifying this user                                                                                                                               |
| statuses | query | list(string)¦string | false    | Filter by [join_status](/docs/apireference/v2/schemas/course_with_member_count#enumerated-values) of the user identified by the `id`.<br/>Default: `["manager", "joined"]` |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/courses/',
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
curl -X GET /api/v2/user/{id}/courses/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                                 |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | list([Course](/docs/apireference/v2/schemas/course_with_member_count)) |
