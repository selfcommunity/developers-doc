---
sidebar_label: Get Course Dashboard Users
sidebar_position: 1
title: Get Course Dashboard Users
---

This endpoint retrieves the list of all users that joined the course identified by `{id}`; it will also return some
useful stats that can be used to make a course dashboard.

:::info

This operation requires the course creator or manager role.

:::

## HTTP Request

`GET /api/v2/course/{id}/users/`

### Parameters

| Name     | In    | Type                | Required | Description                                                                                                       |
|----------|-------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------|
| id       | path  | string              | true     | A unique integer value identifying this course                                                                    |
| limit    | query | integer             | false    | Number of results to return per page                                                                              |
| offset   | query | integer             | false    | The initial index from which to return the results                                                                |
| search   | query | string              | false    | A search term (search inside username and real_name of the users)                                                 |
| statuses | query | list(string)¦string | false    | Filter by [join_status](/docs/apireference/v2/schemas/course#enumerated-values); default: `["manager", "joined"]` |
| ordering | query | string              | false    | The order of the users. Default to `-joined_at`                                                                   |

#### Enumerated Values

| Parameter  | Value          | Description                      |
|------------|----------------|----------------------------------|
| » ordering | joined_at      | Order by joined_at datetime      |
| » ordering | last_active_at | Order by last_active_at datetime |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/course/{id}/users/',
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
curl -X GET /api/v2/course/{id}/users/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
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

| Name       | Type                                                                               | Required | Restrictions | Description                                                         |
|------------|------------------------------------------------------------------------------------|----------|--------------|---------------------------------------------------------------------|
| » count    | integer                                                                            | false    | none         | Total results count                                                 |
| » next     | string(uri)¦null                                                                   | false    | none         | Next page url                                                       |
| » previous | string(uri)¦null                                                                   | false    | none         | Previous page url                                                   |
| » results  | list([Course User Dashboard](/docs/apireference/v2/schemas/course_user_dashboard)) | false    | none         | List of results. Every items will contain only the necessary fields |
