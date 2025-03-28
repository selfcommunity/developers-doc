---
sidebar_label: Search Courses
sidebar_position: 1
title: Search Courses
---

This endpoint performs courses search only for courses that has `privacy` different from `secret` or when `privacy` is
`secret` the user must be at least invited to the course.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/course/search/`

### Parameters

| Name       | In    | Type                | Required | Description                                                                                                                                                      |
|------------|-------|---------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit      | query | integer             | false    | Number of results to return per page                                                                                                                             |
| offset     | query | integer             | false    | The initial index from which to return the results                                                                                                               |
| search     | query | string              | false    | A search term (search inside name and description)                                                                                                               |
| categories | query | list(integer)       | false    | List of id of [Category](/docs/apireference/v2/schemas/category)                                                                                                 |
| statuses   | query | list(string)¦string | false    | Filter by [join_status](/docs/apireference/v2/schemas/course_minimal#enumerated-values).<br/>The default value: `[]` means that it will not filter by any status |
| ordering   | query | string              | false    | The ordering of the courses; use `-` for order desc.<br/>Default to `-id`                                                                                        |

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

fetch('/api/v2/course/search/',
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
curl -X GET /api/v2/course/search/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

### Response Schema

Status Code **200**

| Name       | Type                                                                 | Required | Restrictions | Description         |
|------------|----------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                              | false    | none         | Total results count |
| » next     | string(uri)¦null                                                     | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                     | false    | none         | Previous page url   |
| » results  | list([Course Minimal](/docs/apireference/v2/schemas/course_minimal)) | false    | none         | List of results     |
