---
sidebar_label: Get Joined Courses
sidebar_position: 1
title: Get Joined Courses
---

This endpoint retrieves all joined courses by the user authenticated.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/course/`

### Parameters

| Name        | In    | Type    | Required | Description                                                                          |
|-------------|-------|---------|----------|--------------------------------------------------------------------------------------|
| join_status | query | string  | false    | Filter by join [join_status](/docs/apireference/v2/schemas/course#enumerated-values) |
| created_by  | query | integer | false    | Return only courses created by this user id                                          |
| limit       | query | integer | false    | Number of results to return per page                                                 |
| offset      | query | integer | false    | The initial index from which to return the results                                   |

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

fetch('/api/v2/course/',
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
curl -X GET /api/v2/course/ \
  -H 'Accept: application/json'
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

| Name       | Type                                                 | Required | Restrictions | Description         |
|------------|------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                              | false    | none         | Total results count |
| » next     | string(uri)¦null                                     | false    | none         | Next page url       |
| » previous | string(uri)¦null                                     | false    | none         | Previous page url   |
| » results  | list([Course](/docs/apireference/v2/schemas/course)) | false    | none         | List of results     |
